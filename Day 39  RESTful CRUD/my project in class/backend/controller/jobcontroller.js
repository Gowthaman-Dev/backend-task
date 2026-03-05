import modulejob from "../module/jobmodule.js";

export const addjob = async (req, res) => {
    try {
        const addjobdata = await modulejob.create(req.body)
        res.status(201).json({ msg: 'successfully send', addjobdata })
    } catch (error) {
        console.log(`Error Something`, error);

    }
}

export const getjobdata = async (req, res) => {
    try {
        const getdatas = await modulejob.find()
        res.status(200).json({msg:"Get data Done",getdatas})
    } catch (error) {
        console.log(`Error Something`, error);

    }
}
