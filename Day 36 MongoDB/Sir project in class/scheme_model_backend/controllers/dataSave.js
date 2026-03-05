import userModel from "../models/userModel.js";


export const addData = async(req,res)=>{

try {

console.log(req.body);

const { userName, userEmail, userAge } = req.body

const add = await userModel.create({userName, userEmail, userAge})

res.status(201).json({msg:"successfully added to the database"})

    
} catch (error) {

    console.log('error',error);
    res.status(500).json({msg:"Something error",error})
    
    
}


} 



export const getData = async(req,res)=>{


try {

     const getdata = await userModel.find()
      console.log(getdata);

     res.status(200).json({getdata})
    
} catch (error) {

    console.log('error',error);
    res.status(500).json({msg:"Something error",error})
    
    
}





}