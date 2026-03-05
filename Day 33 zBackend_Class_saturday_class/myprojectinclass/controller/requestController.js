export const adddata = (req)=>{
    console.log(req.body);   
      
}

export const  getdatabynumber = (req)=>{
    console.log(req.params);
    
}

export const getdataByquery = (req)=>{
    console.log(req.query);
    
}

export const getdataByheader = (req)=>{
    console.log(req.headers.jwttoken);
    
}