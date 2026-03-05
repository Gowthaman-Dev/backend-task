import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Showdata from './components/showdata'

const App = () => {
  const [formdata,setFormData] = useState({
    district_name:"",
    departments_name:""
  })

  useEffect(()=>{
    datashow()
  },[])

  const [showui,setShowUi] = useState([])

  const handlechange = (e)=>{
    setFormData({
      ...formdata,[e.target.name]:e.target.value
    })
  }
  const hanldsubmit =async(e)=>{
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/api/movirdepartment/add",formdata)
      console.log(res.data);
      datashow()
    } catch (error) {
      console.log(`Something Error`,error);
    }
  }

  const datashow = async()=>{
    const showres  = await axios.get('http://localhost:5000/api/movirdepartment/get')
    setShowUi(showres.data.getdatas)
  }

  return (
    <>
   <form onSubmit={hanldsubmit}>
    <input type="text" name="district_name" onChange={handlechange} placeholder='enter distruict' />
    <input type="text" name='departments_name' onChange={handlechange} placeholder='enter name'/>
    <button type='submit'>SubMit</button>
   </form>
    <Showdata showui={showui}/>
   </>
  )
}

export default App