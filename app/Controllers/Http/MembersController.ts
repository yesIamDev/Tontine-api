import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Member from 'App/Models/Member'
import { Status } from '../utils/helper'
import CommonqueriesController from './CommonqueriesController'
import { str_validation } from '../utils/validator'

export default class MembersController {


  public async index({response}:HttpContextContract){
    try{
      const data = await Member.query().orderBy('created_at',"desc");
      return response.json({data:data});
    }catch(error){
      return response.safeStatus(Status.Badrequest).send({message:error});
    }
  }

  public async store({request,response}: HttpContextContract) {
    let name:string = request.input("name");
    let postname:string = request.input("postname");
    let phone:string = request.input("phone");

    try{
        str_validation(name,'name');
        str_validation(postname,'postname');

        if(await CommonqueriesController.findbyany({LucidModel:Member,column:"name",value:name})) throw "ce nom existe deja";
        await Member.create({name:name, postname:postname, phone: phone});
        return response.json({message:"creation membre avec succes"});

    }catch(error){
      return response.safeStatus(Status.Badrequest).send({message:error});
    }

  }

  public async update({request,response,params}: HttpContextContract) {
    let name:string = request.input("name");
    let postname:string = request.input("postname");
    let phone:string = request.input("phone");

    if(await CommonqueriesController.findbyany({LucidModel:Member,column:"name",value:name})) throw "ce nom existe deja";
    const data = await Member.find(params.id);

    try{

      if(data){
        data.name = name!=undefined || name!="" ? name : data.name;
        data.postname = postname!=undefined || name!="" ? postname : data.postname;
        data.phone = phone!=undefined || phone!="" ? phone : data.phone;
        await data?.save();
        return response.json({message:"update member successfully "});
      }
      
      throw "error occured";
    }
    catch(error){
      return   response.safeStatus(Status.Badrequest).send({message:error});
    }
  }

  public async destroy({response,params}: HttpContextContract) {
    try{
      await Member.query().where('id',params.id).delete();
      return response.json({message:"Deleted successfully"});
    }catch(error){
      return   response.safeStatus(Status.Badrequest).send({message:error});
    }
  }
}
