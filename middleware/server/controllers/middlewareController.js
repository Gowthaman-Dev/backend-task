import middleWareModel from '../modles/middlewareModle.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const createData = async(req,res)=>{

  console.log('controller req', req.body);

  try {

    const {name,email,password} = req.body
    
    const checkEmail = await middleWareModel.findOne({email})
     
    if(checkEmail){

     return res.status(400).json({msg:"Already The EMail is there try new"})

    }
  
    const slatKey = 10
   const hashpassword =await bcrypt.hash(password,slatKey)

   const addData = await middleWareModel.create({
    name,email,password:hashpassword
   })

   res.status(200).json({msg:"Data Save Successfully Done"})


  } catch (error) {

    console.log('error',error);
    
    
  }
// middleWareModel


}


export const logindata = async(req,res)=>{

  try {

    const {email,password} = req.body

    const chechEmail = await middleWareModel.findOne({email})

    

    const gererateJWt = await jwt.sign({id:chechEmail._id,email:chechEmail.email},process.env.JWT_SECRET_KEY,{expiresIn:"1h"})
      
   console.log(gererateJWt);
   

    res.status(200).json({msg:"Success",token:gererateJWt})

      
  } catch (error) {

    console.log('Error',error);
    
    
  }


}