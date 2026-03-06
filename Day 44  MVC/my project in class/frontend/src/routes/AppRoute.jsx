import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import DashBoard from '../components/DashBoard'

const AppRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
    </>
  )
}

export default AppRoute
