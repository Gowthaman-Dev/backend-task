import modulehasd from "../module/hashmodule.js"
import bcrypt from "bcrypt"

export const handpass = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const checkemail = await modulehasd.findOne({ email })
        if (checkemail) {
            return res.status(409).json({ msg: "Email already exists" })
        }
        const saltround = 10
        const addpass = await bcrypt.hash(password, saltround)

        const addhas = await modulehasd.create({ name, email, password: addpass })
        res.status(201).json({ msg: 'success', addhas })
    } catch (error) {
        res.status(400).json({ msg: "Something error", error })
    }

}