import { useState } from "react"
import axios from "axios"
import imgs from "../public/logo.png"

const App = () => {
  const [ui,setui] = useState("")
  const [form,setForm] = useState({
   email:"",password:""
  })
  const handlechange = (e)=>{
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }
  const handlesubmit = async(e)=>{
    e.preventDefault()
    try {
      const ress = await axios.post("http://localhost:5000/api/jwttokenmethod/login",form)
      setui(ress.data.msg)
      
    } catch (error) {
      console.log('register thappu',error);
      setui(error.response.data.msg)
      
    }
  }

  
  return (
    <>

    <form onSubmit={handlesubmit}>
     
      <input type="email" name="email" onChange={handlechange} placeholder="Enter the email"/>
      <input type="password" name="password" onChange={handlechange} placeholder="Enter the password"/>
      <input type="submit" value="Register"/>
    </form>
    {ui}
    
    </>
  )
}

export default App