import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Signup from './auth/Signup'
import Signin from './auth/Signin'
import Profile from './auth/Profile'

const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/user' element={<Profile/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoute