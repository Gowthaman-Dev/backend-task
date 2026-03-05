import movieDataModules from "../modules/movieDataModule.js"

export const createData = async(req,res)=>{

    try {
        
    const add = await movieDataModules.create(req.body)

    if(add){
        res.status(201).json({msg:"successfully send "})
    }else{
        res.status(404).json({msg:"something error"})
    }
        
    } catch (error) {
        console.log(`something error`,error);

        res.status(404).json({msg:"Something Error",error})
        
    }
    
}



export const getData = async(req,res)=>{
    try {
        const getdata = await movieDataModules.find()

        const filter = getdata.filter((e)=>e.movieName === "Forever You")
        if(getdata){
            return  res.status(200).json({mydatas:filter})
        }
    }  catch (error) {
        console.log(`something error`,error);

        res.status(404).json({msg:"Something Error",error})
        
    } 
}

export const getbyid = async(req,res)=>{
    try {

        //  console.log(req);

        const {userid} = req.params

        const getbyid = await movieDataModules.findById(userid)
        if (getbyid) {
            res.status(200).json({getbyid:getbyid.MovieType})
        }
    } catch (error) {
      console.log(`something error`,error);

        res.status(404).json({msg:"Something Error",error})
        
    } 
}