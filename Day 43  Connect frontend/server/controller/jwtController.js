import modlejwt from "../modle/modlejwt.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const conRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const checkemail = await modlejwt.findOne({ email })
        if (checkemail) {
            res.status(404).json({ msg: "This Email is already exist" })
        }

        const salutkey = 10
        const hashpass = await bcrypt.hash(password, salutkey)

        const datares = await modlejwt.create({ name, email, password: hashpass })

    } catch (error) {
        res.status(404).json({ msg: "Somthing error", error })
    }

}

export const addlogin = async (req, res) => {
    try {
        console.log('hhhhhh');
        
        const { email, password } = req.body
        const checkemail = await modlejwt.findOne({ email })
        if (!checkemail) {
            return res.status(404).json({ msg: "Invaild Email" })
        }

        const passcheck = await bcrypt.compare(password, checkemail.password)
        if (!passcheck) {
            return res.status(404).json({ msg: "Invaild password" })
        }

        const generatetoken = await jwt.sign({ id: checkemail._id, email: checkemail.email }, process.env.SCRT_KEY, { expiresIn: "1h" })
        res.status(200).json({ msg: "sucess da mapla", token: generatetoken })

    } catch (error) {
        res.status(404).json({ msg: "Somthing error", error })

    }
}