import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Beneficiary from 'App/Models/Beneficiary'
import { Status } from '../utils/helper'

export default class BeneficiariesController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Beneficiary.query()
      return response.json({ data: data })
    } catch (error) {
      return response.json(error)
    }
  }
  public async store({ request, response }: HttpContextContract) {
    let member_id: string = request.input('memberId')
    let activity_id: string = request.input('activityId')
    let status: string = request.input('status')

    try {
      await Beneficiary.create({ memberId: member_id, activityId: activity_id, status: status })
      return response.json({ message: 'Beneficiaire cree avec succes' })
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }
  public async update({ request, response, params }: HttpContextContract) {
    let status: string = request.input('status')
    try{
      const data = await Beneficiary.find(params.id)
      if (data) {
        data.status = status != undefined || status != "" ? status : data.status;
        await data.save();
        return response.json({ message: 'Operation effectuee avec succes!' })
      }
      throw 'Error'
    }catch(error){
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }

  public async destroy({response,params}: HttpContextContract) {
    try{
      await Beneficiary.query().where('id',params.id).delete();
      return response.json({message:"Operation effectuee avec succes"});
    }catch(error){
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
    }
  }
