import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Links from './Pages/Links'
import Navbar from './components/Navbar'
import Contact from './Pages/Contact'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/links" element={<Links/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </Router>
  )
}

export default App