export const createresponce =(req,res)=>{
    // console.log(req.body);

    const {name} = req.body

    if(name === "Gowtham"){
        res.status(200).send("Yes I am Gowtham")
    }else{
        // res.status(500).send("No Im Not gowtham")
        res.status(404).send("No Im Not gowtham")

    }

}


export const getDataJson =(req,res)=>{
    // console.log(req.params);
    
    const {userid} = req.params

    const datas = [{
        id:1,
        name:'jerlin',
        subject:"node"
    },{
        id:2,
        name:'monisha',
        subject:"love"
    }
]

    if(userid == 1){
        // console.log(datas);
        
        res.status(200).json({
            success:true,
            message:"ata Fetch",
            userdatas:datas
        })
    }else{
        res.status(404).json({
            msg:"No I am Not Sent the Datas"
        })
    }

}