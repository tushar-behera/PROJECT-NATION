import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


const App = () => {
  return (
    <div>
    <Router>
        
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />

        </Routes>
      </Router>
      
    </div>
  )
}

export default App;