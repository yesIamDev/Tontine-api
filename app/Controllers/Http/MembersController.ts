import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Member from 'App/Models/Member'
import { Status } from '../utils/helper'
import CommonqueriesController from './CommonqueriesController'
import { str_validation } from '../utils/validator'

export default class MembersController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Member.query().orderBy('created_at', 'desc')
      return response.json({ data: data })
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }

  public async getAllByActivity({ response, params }: HttpContextContract) {
    try {
      const members = await Member.query().where('activity_id',params.activityId);
      if(members){
        return response.send({
          data:members
        })
      }else{
        return response.json({
          "message":"Aucun membre trouve pour cette activite"
        })
      }
      
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    let name: string = request.input('name')
    let postname: string = request.input('postname')
    let phone: string = request.input('phone')
    let status: string = request.input('status')
    let activity_id: string = request.input('activity_id')

    try {
      str_validation(name, 'name')
      str_validation(postname, 'postname')

      if (
        await CommonqueriesController.findbyany({ LucidModel: Member, column: 'name', value: name })
      )
        throw 'ce nom existe deja'
      await Member.create({
        name: name,
        postname: postname,
        phone: phone,
        status: status,
        activity_id: activity_id,
      })
      return response.json({ message: 'creation membre avec succes' })
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }

  public async updateMemberStatus({ request, response, params }: HttpContextContract) {
    let status: string = request.input('status')

    await Member.query().where('id', params.id).update({
      status: status,
    })

    const newMember = await Member.findBy('id', params.id)

    if (newMember) {
      return response.json({ message: 'update member status successfully ', data: newMember })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      await Member.query().where('id', params.id).delete()
      return response.json({ message: 'Deleted successfully' })
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }
}
