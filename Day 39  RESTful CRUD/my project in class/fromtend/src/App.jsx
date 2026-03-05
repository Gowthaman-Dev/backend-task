import { useEffect, useState } from "react"
import axios from 'axios'
import Showdatas from "./components/Showdatas"



const App = () => {
  const [showui,setShowui] = useState([])
  const [from, setFrom] = useState({
    job_name: "",
    company_name: "",
    location: "",
    job_type: ""
  })
  const handlechange = (e) => {
    setFrom({
      ...from, [e.target.name]: e.target.value
    })
  }

   useEffect(()=>{
    getdata()
  },[])


  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/api/jobportal/addeddata", from)
      console.log(res.data.addjobdata);
      getdata()
      setFrom({
        job_name: "",
        company_name: "",
        location: "",
        job_type: ""
      })
    } catch (error) {
      console.log(`Something error`, error);

    }
  }

 
  const getdata = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/jobportal/getdata')
      console.log(res.data);
      
      setShowui(res.data.getdatas)
    } catch (error) {
      console.log(`Something error`, error);
    }
  }
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form 
    onSubmit={handlesubmit}
    className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
  >
    <h2 className="text-2xl font-bold text-center text-gray-800">
      Post a Job
    </h2>

    <input
      type="text"
      value={from.job_name}
      onChange={handlechange}
      name="job_name"
      placeholder="Job Name"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
    />

    <input
      type="text"
      value={from.company_name}
      onChange={handlechange}
      name="company_name"
      placeholder="Company Name"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
    />

    <input
      type="text"
      value={from.location}
      onChange={handlechange}
      name="location"
      placeholder="Job Location"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
    />

    <select
      name="job_type"
      value={from.job_type}
      onChange={handlechange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
    >
      <option value="">Select Job Type</option>
      <option value="Full Time">Full Time</option>
      <option value="Part time">Part time</option>
      <option value="Internship">Internship</option>
      <option value="Remote">Remote</option>
    </select>

    <button
      type="submit"
      className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
    >
      Submit Job
    </button>
  </form>
</div>
      <Showdatas showui={showui}/>
    </>
  )
}

export default App