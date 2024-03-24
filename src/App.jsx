import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Register from './components/Register2'
import About from  './components/About'
import HomeHero from "./components/Home/HomeHero"
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Ambassador from './components/Ambassador'
import ComingSoon from './components/ComingSoon'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<ComingSoon />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/" element={<HomeHero />} />  */}
        
      </Routes>
    </Router>
  )
}

export default App