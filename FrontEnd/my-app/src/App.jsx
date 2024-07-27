import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Navigate,Route,Router, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import HomePage from './Pages/HomePage'
import EditPage from './Pages/EditPage'
import AddPage from './Pages/AddPage'

function App() {
 
  const token =localStorage.getItem("x-auth-token");
  console.log(token,"from th app page");

  return (
    <>
      <div className='page_container'>

        <BrowserRouter>
       <Routes>

      <Route  exact path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={token?<HomePage/>:<Navigate to="/"/>}/>
      <Route path='/add' element={token?<AddPage/>:<Navigate to="/"/>}/>
      <Route path='/edit/:id' element={token? <EditPage/>:<Navigate to="/"/>}/>
      
   

       </Routes>


      </BrowserRouter>

      </div>
        </>
  )
}

export default App
