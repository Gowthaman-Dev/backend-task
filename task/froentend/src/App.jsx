
import axios from 'axios'
import { useEffect, useState } from 'react';
const App = () => {

  const departmentSchema =  {
  district_name : "",
  departments_name : "",
  subcatagory: "",
  members_count : "",
  department_code:"",

  
  }

  const [data,setData] = useState(departmentSchema)

  const [msg,setMsg] = useState([]) 

  const [deletedata,setdeletedata] = useState("")

  useEffect(()=>{

     setData({...data,  district_name : "Chennai",
  departments_name : "Education",
  subcatagory: "Schools",
  members_count : 2000,
  department_code:900,})

  },[])

  const handleClick = async()=>{
    

   

    try {

      const fetchdata = await axios.get("http://localhost:5000/api/department/get");

       console.log(fetchdata);

       setMsg(fetchdata.data.msg)
       
      
    } catch (error) {

           console.log('something error',error);
      
    }



  }


  const handledelete = async(userid)=>{

    const res = await axios.delete(`http://localhost:5000/api/department/deleteData/${userid}`)

    console.log(res);
    //setdeletedata(res.data.msg)
alert(res.data.msg)
    

  }
  
  return (
    <>
    <h1 style={{textAlign:"center",padding:"10px"}}>Form Handling using API through backend</h1>
   
 <div style={{padding:"10px",textAlign:"center"}}>
<button onClick={handleClick} style={{textAlign:"center"}}>Click to check api</button>
 </div>





 <div>
  {

    msg.map((e)=>(

     <div key={e._id}>
    <h1>{e.district_name}</h1>
    <p>{e.departments_name}</p>
    <h1>{e.subcatagory}</h1>
    <button>Edit</button>
    <button onClick={()=>handledelete(e._id)}>Delete</button>
  </div>

    ))
    
  }


 </div>
   <h1>{deletedata}</h1>

    </>
  )
}

export default App