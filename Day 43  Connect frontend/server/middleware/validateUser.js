export const validateregister = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(404).json({ msg: "Pleae Fill the All File" })
        }

        if (password.length <= 1) {
            return res.status(400).json({ msg: "Enter Must 8 Character Password" })
        }
      
         next()
    } catch (error) {

        console.log(error);
        

         return res.status(400).json({msg:"Something Error",error})

    }

}

export const  validationlogin = async(req,res,next)=>{
    try {
        console.log('hjjnj');
        
        const {email,password} = req.body
        if (!email || !password) {
            return res.status(404).json({msg:"Fill All File"})
        }
        if(password.length<=1){
             return res.status(404).json({msg:"Must enter 8 min"})
        }
        next()
    } catch (error) {
       return res.status(404).json({msg:"Something error"})
    }
}