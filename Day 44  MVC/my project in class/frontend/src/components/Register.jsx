import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [ui,setUi]  = useState("")
  const [form,setForm]= useState({
    name:"",email:"",number:"",password:""
  })
  const handlechnage = (e) =>{
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }

  const handlesumbit = async(e)=>{
    e.preventDefault()
    try {
      const fetchdata = await axios.post("http://localhost:5000/api/backedndhandle/register",form)
      setUi(fetchdata.data.msg)
      navigate('/login')

    } catch (error) {
      setUi(error.response.data.msg)
    }
  }
  return (
    <>
    <form onSubmit={handlesumbit}>
      <input type="text" name='name' value={form.name}  placeholder='Enter the Name' onChange={handlechnage}/>
      <input type="text" name='email' value={form.email} placeholder='Enter the Email' onChange={handlechnage}/>
      <input type="text" name='number' value={form.number} placeholder='Enter the Number' onChange={handlechnage} />
      <input type="text" name='password' value={form.password} placeholder='Enter the Password' onChange={handlechnage}/>
      <input type="submit" value="Register" />
    </form>
    {ui}
    </>
  )
}

export default Register
