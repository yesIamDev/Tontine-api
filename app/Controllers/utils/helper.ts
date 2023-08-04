enum Status{
    Success=200,
    Nofound=404,
    Emptyval=409,
    Badrequest=400
}

const isNumeric=(value:any,key:string)=>{
    const regex=/^[0-9]+(\.[0-9]{1,2})?$/;
    if(!regex.test(value)){
       throw `not valid amount${key}`;
    } 
}


export {Status,isNumeric};