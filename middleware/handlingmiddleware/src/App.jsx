// import { useState } from "react"
// import axios from 'axios'

// const App = () => {

//   const [saveData,setSaveData] = useState({name:"",email:"",password:""})


//   const handleChange = (e)=>{

//     setSaveData({...saveData,[e.target.name]:e.target.value})

//   }


//   const handleSubmit = async(e)=>{

//    try {

//      e.preventDefault()

//     const dataSave = await axios.post("http://localhost:5000/api/middlewareroute/create",saveData)

//     alert(dataSave.data.msg);
    
//    } catch (error) {

//      alert(error.response.data.msg);
    
//    }
    
    

//   }



//   return (
//    <>
//    <div>
//     Register
//    </div>
//    <form onSubmit={handleSubmit}>
//      <input type="text" name="name" placeholder="Enter the Name" onChange={handleChange}  />  
//     <input type="email" name="email" placeholder="Enter the Email" onChange={handleChange}  />
//     <input type="password" name="password" placeholder="Enter the Password" onChange={handleChange}  />
//     <input type="submit" value={"Register"} />
//    </form>
//    </>
//   )
// }

// export default App







import { useState } from "react"
import axios from 'axios'

const App = () => {

  const [saveData,setSaveData] = useState({email:"",password:""})


  const handleChange = (e)=>{

    setSaveData({...saveData,[e.target.name]:e.target.value})

  }


  const handleSubmit = async(e)=>{

   try {

     e.preventDefault()

    const dataSave = await axios.post("http://localhost:5000/api/middlewareroute/login",saveData)

    alert(dataSave.data.token);
    
   } catch (error) {

     alert(error.response.data.msg);
    
   }
    
    

  }



  return (
   <>
   <div>
    Login
   </div>
   <form onSubmit={handleSubmit}>
     
    <input type="email" name="email" placeholder="Enter the Email" onChange={handleChange}  />
    <input type="password" name="password" placeholder="Enter the Password" onChange={handleChange}  />
    <input type="submit" value={"Login"} />
   </form>
   </>
  )
}

export default App