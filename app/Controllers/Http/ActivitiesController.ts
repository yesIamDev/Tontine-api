import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Activity from 'App/Models/Activity'
import { Status,isNumeric } from '../utils/helper'
import CommonqueriesController from './CommonqueriesController'
import { str_validation } from '../utils/validator'

export default class ActivitiesController {

  public async index({response}: HttpContextContract) {
    try{
      const data = await Activity.query();
      return response.json({data:data});
    }catch(error){
      return   response.safeStatus(Status.Badrequest).send({message:error});
    }
  }

  public async store({ request, response }: HttpContextContract) {
    let designation = request.input('designation')
    let description = request.input('description')
    let start = request.input('start')
    let end = request.input('end')
    let cycle = request.input('cycle')
    let amount_to_give = request.input('amount_to_give')
    let status = request.input('status')
    let currency = request.input('currency')

    try {
      str_validation(designation, 'designation')
      str_validation(description, 'description')
      isNumeric(amount_to_give, 'amount_to_give')

      if (
        await CommonqueriesController.findbyany({
          LucidModel: Activity,
          column: 'designation',
          value: designation,
        })
      )
        throw "ce nom d'activite  existe deja"
      await Activity.create({
        designation: designation,
        description: description,
        start: start,
        end: end,
        cycle: cycle,
        amountToGive: amount_to_give,
        status: status,
        currency: currency
      })
      return response.json({message:"creation activite avec succes"});
    } catch (error) {
      return   response.safeStatus(Status.Badrequest).send({message:error});
    }
  }

  public async update({request,response,params}: HttpContextContract) {
    let designation = request.input('designation')
    let description = request.input('description')
    let start = request.input('start')
    let end = request.input('end')
    let cycle = request.input('cycle')
    let amount_to_give = request.input('amount_to_give')
    let status = request.input('status')
    let currency = request.input('currency')

    try{
      if (
        await CommonqueriesController.findbyany({
          LucidModel: Activity,
          column: 'designation',
          value: designation,
        })
      )throw "ce nom d'activite  existe deja"

      const data = await Activity.find(params.id);

      if(data){
        data.designation = designation!=undefined || designation!="" ? designation : data.designation;
        data.description = description!=undefined || description!="" ? description : data.description;
        data.start = start || data.start;
        data.end = end || data.end;
        data.cycle = cycle || data.cycle;
        data.amountToGive = amount_to_give!=undefined || amount_to_give!=0 ? amount_to_give : data.amountToGive;
        data.status = status;
        data.currency = currency;
        await data.save();
        return response.json({message: "Activite mise a jour avec succes!"});
      }

    }catch(error){
      return   response.safeStatus(Status.Badrequest).send({message:error});
    }

  }

  public async destroy({response,params}: HttpContextContract) {
    try{
      await Activity.query().where('id',params.id).delete();
      return response.json({message:"Acitive effacee avec succes"});
    }catch(error){
      return   response.safeStatus(Status.Badrequest).send({message:error});
    }
  }
}
