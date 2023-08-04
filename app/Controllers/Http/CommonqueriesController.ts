export default class CommonqueriesController {

   
    static async findbyany(config:{LucidModel:any,column:string,value:any}){
        return await config.LucidModel.findBy(config.column,config.value);  
   }


}
