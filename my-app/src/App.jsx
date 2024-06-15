import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route, Link } from 'react-router-dom'
import {Home} from './components/Home'
import { Login } from './components/Login'
import { Check } from './components/Check'
import { Quize } from './components/Quize'
function App() {

  useEffect(()=>{
    
  },[])

  return (
    <>
    <div>
      <Link to="/">Home</Link><br/>
      <Link to="/login">Login</Link><br/>
      <Link to="/quize">Quize</Link>
    </div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/quize" element={<Check><Quize/></Check>}/>
     </Routes>
    </>
  )
}

export default App
