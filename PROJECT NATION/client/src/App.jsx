import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav/>
      <Signup/>
      <Login/>
    </div>
  )
}

export default App