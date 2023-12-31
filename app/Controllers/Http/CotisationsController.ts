import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cotisation from 'App/Models/Cotisation'
import { isNumeric } from '../utils/helper'
import { Status } from '../utils/helper'
import CommonqueriesController from './CommonqueriesController'

export default class CotisationsController {
  // get all cotisations

  public async index({ response }: HttpContextContract) {
    try {
      const data = await Cotisation.query()
      return response.json({ data: data })
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }

  // get cotisations by Activity_id

  public async getAllByActivity({ response, params }: HttpContextContract) {
    try {
      const data = await CommonqueriesController.findbyany({
        LucidModel: Cotisation,
        column: 'activity_id',
        value: params.activityId,
      })
      return response.send(data)
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }

  // get cotisations by Member_id

  public async getAllByMember({ response, params }: HttpContextContract) {
    try {
      const data = await CommonqueriesController.findbyany({
        LucidModel: Cotisation,
        column: 'member_id',
        value: params.memberId,
      })
      return response.send(data)
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    let amount: number = request.input('amount')
    let member_id: string = request.input('memberId')
    let activity_id: string = request.input('activityId')

    try {
      isNumeric(amount, 'amount')
      await Cotisation.create({
        amount: amount,
        memberId: member_id,
        activityId: activity_id,
      })
      return response.json({ message: 'Operation effectuee avec succes' })
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    let amount: number = request.input('amount')
    const data = await Cotisation.find(params.id)

    if (data) {
      try {
        data.amount = amount != 0 ? amount : data.amount
        await data.save()
        return response.json({ message: 'operattion effectuee avec succes' })
      } catch (error) {
        return response.safeStatus(Status.Badrequest).send({ message: error })
      }
    }
    throw 'Error'
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      await Cotisation.query().where('id', params.id).delete()
      response.json({ message: 'cotisation supprimee avec succes' })
    } catch (error) {
      return response.safeStatus(Status.Badrequest).send({ message: error })
    }
  }
}
