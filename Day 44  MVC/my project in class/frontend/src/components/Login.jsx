import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [login,setLogin] = useState({
        email:"",password:""
    })
    const handlechange =(e)=>{
        const {name,value} = e.target
        setLogin({
            ...login,[name]:value
        })
    }
    const handlesubmit = async(e)=>{
        e.preventDefalut()
        try {
            const fetchdata = await axios.post("")
        } catch (error) {
            
        }
    }
  return (
    <>
    <form onSubmit={handlesubmit}>
        <input type="text" name='email' onChange={handlechange} placeholder='Enter the Email' />
        <input type="password" name='password' onChange={handlechange} placeholder='Enter the Password'/>
        <input type="submit" value="Login"/>
    </form>
    </>
  )
}

export default Login
