import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import HomePage from './Pages/HomePage'

function App() {
 

  return (
    <>
      <div className='page_container'>

        <BrowserRouter>
       <Routes>

      <Route  exact path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<HomePage/>}/>
      
   

       </Routes>


      </BrowserRouter>

      </div>
        </>
  )
}

export default App
