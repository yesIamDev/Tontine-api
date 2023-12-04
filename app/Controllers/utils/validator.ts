const str_validation=(value:any,key:string)=>{
    const verif=String(value).trim().length;
    if(value==undefined || verif==0){
        throw `${key} empty`;
    }
}


const lengthpassword=(value:string)=>{
    const val:number=value.trim().length;
     if( val <=5  ||  val >10){
        throw "password should have at least 6 characters,max 10";
     }
}

export {str_validation, lengthpassword}