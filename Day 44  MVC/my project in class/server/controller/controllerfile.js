import modlemothods from "../modle/modelmethod.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const confirst = async(req,res)=>{
    try {
        const {name,email,number,password} = req.body

        const checkemails = await modlemothods.findOne({email})

        if(checkemails){
            return res.status(404).json({msg:"Email already exist"})
        }

        const hashpass = await bcrypt.hash(password,10)

        const resdata = await modlemothods.create({
            name,email,number,password:hashpass
        })

        return res.status(200).json({msg:'successfully register',resdata})
        
        
    } catch (error) {
        console.log(`This is error`);

        return res.status(400).json({msg:"Error Coming"})
        
    }
}

export const logindata = async(req,res)=>{
    try {
        const {email,password} = req.body
        const checkemail = await modlemothods.findOne({email})
        if (!checkemail) {
            return res.status(404).json({msg:"Invaild Email"})
        }
        const checkpass = await bcrypt.compare(password,checkemail.password)
        if (!checkpass) {
            res.status(400).json({msg:"Invaild password"})
        }
        const generatetoken = await jwt.sign({id:checkemail._id,name:checkemail.name},process.env.SCRCET_KEY,{expiresIn:'1h'})
        res.status(200).json({msg:'Token Created Successfully',token:generatetoken})

    } catch (error) {
        
    }
}