import React, { useEffect, useState } from 'react'

const App = () => {

  const [category, setCategory] = useState({
    catname: "",
    catstatus: ""
  })

  const [savedata, setSavedata] = useState([])
  const [showdata, setShowdata] = useState([])

  // Handle input change
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value })
  }

  // Add data
  const handleClick = (e) => {
    e.preventDefault()

    if (!category.catname || !category.catstatus) {
      alert("Please fill all fields")
      return
    }

    const getdata = localStorage.getItem("categorydata")
    const changedata = getdata ? JSON.parse(getdata) : []

    const storedata = {
      id: Date.now(), // unique id (better than length+1)
      catname: category.catname,
      catstatus: category.catstatus
    }

    changedata.push(storedata)

    localStorage.setItem("categorydata", JSON.stringify(changedata))

    setSavedata(changedata)
    setCategory({ catname: "", catstatus: "" })

    alert("Data saved")
  }

  // Show data
  useEffect(() => {
    const getshowdata = localStorage.getItem("categorydata")

    if (getshowdata) {
      setShowdata(JSON.parse(getshowdata))
    } else {
      setShowdata([])
    }

  }, [savedata])

  // Delete data
  const handleDelete = (id) => {

    const data = localStorage.getItem("categorydata")
    const parsed = JSON.parse(data) || []

    const filtered = parsed.filter((e) => e.id !== id)

    localStorage.setItem("categorydata", JSON.stringify(filtered))

    setSavedata(filtered)
    setShowdata(filtered)

    alert("Deleted successfully")
  }

  return (
    <>
      <form className='flex gap-2'>
        <input
          onChange={handleChange}
          value={category.catname}
          name='catname'
          type="text"
          placeholder='Enter category'
          className='bg-black text-white p-2 mt-2 rounded'
        />

        <select
          onChange={handleChange}
          value={category.catstatus}
          name='catstatus'
          className='bg-black text-white p-2 mt-2 rounded'
        >
          <option disabled value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          onClick={handleClick}
          className='bg-black text-white p-2 rounded mt-2 w-20'
        >
          Add
        </button>
      </form>

      <table className='border-2 w-100 h-60 mt-3'>
        <thead>
          <tr>
            <th className='border-2'>ID</th>
            <th className='border-2'>Category</th>
            <th className='border-2'>Status</th>
            <th className='border-2'>Action</th>
          </tr>
        </thead>

        <tbody>
          {showdata.length > 0 ? (
            showdata.map((e) => (
              <tr key={e.id}>
                <td className='border-2'>{e.id}</td>
                <td className='border-2'>{e.catname}</td>
                <td className='border-2'>{e.catstatus}</td>
                <td className='border-2'>
                  <button
                    onClick={() => handleDelete(e.id)}
                    className='bg-red-700 text-white w-15 p-1 rounded'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className='text-center'>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
