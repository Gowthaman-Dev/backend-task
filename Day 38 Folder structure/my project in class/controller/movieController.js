import moviemodlue from "../modle/movieModle.js"

export const added = async (req, res) => {
    try {
        const adddata = await moviemodlue.create(req.body)
        res.status(201).json({ msg: `successfully`, adddata })
    } catch (error) {
        console.log(`Something Error`, error);
    }
}


export const getdata = async (req, res) => {
    try {
        const getdatas = await moviemodlue.find()
        res.status(201).json({ msg: `getdatassuccessfully`, getdatas })
    } catch (error) {
        console.log(`error in getdata`);
    }
}


export const getdatabyid = async (req, res) => {
    try {
        const getid = await moviemodlue.findById(req.params.userid)
        res.status(201).json({ finddataid: getid })
    } catch (error) {
        console.log(`error in getdata`, error);

    }

}

export const getdataandupdate = async (req, res) => {
    try {
        const update = await moviemodlue.findByIdAndUpdate(req.params.userid, req.body)
        res.status(201).json({ msg: "successfully updated", update })
    } catch (error) {
        console.log(`error in getdata`, error);

    }

}

export const getiddelete = async (req, res) => {
    try {
        const deletedata = await moviemodlue.findByIdAndDelete(req.params.userid)
        res.status(200).json({ msg: `successfully deleted`, deletedata })
    } catch (error) {
        console.log(`error in delete`, error);
    }
}