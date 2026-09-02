import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
// import Blog from './pages/Blog'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'
// import Notfound from './pages/Notfound'
import MySkills from './Pages/MySkills'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      {/* <Route path='/skills' element={<Skills />} /> */}
      <Route path='/skills' element={<MySkills />} />
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='/blog' element={<Blog />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Notfound />} /> */}
    </Routes>
  )
}

export default App
