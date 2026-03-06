export const adddata = (req,res)=>{

    console.log(req.body);

    const {name,age} = req.body

  try{

    if(name==="React"){
      return res.status(200).json({msg:"Yes this is react"})
    }else{
      return res.status(200).json({msg:"No your not react"})
    }

  }catch(error){
    
    console.log('something error ,');
    
    res.status(404).json({msg:"this is error",error})

  }
    

} 


export const getdatabynumber = (req)=>{


    console.log(req.params);
    

}


export const getdataByQuery = (req)=>{

  console.log(req.query);
  

}

export const getdataByheaders = (req)=>{

  console.log(req.headers.jwttoken);
  

}