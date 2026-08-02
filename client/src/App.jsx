import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Notfound from './pages/Notfound'
import Achievements from './pages/Achievements'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/achievements' element={<Achievements />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  )
}

export default App
