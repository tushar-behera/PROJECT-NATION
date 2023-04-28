import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Devs from '../components/Devs'
import HeroSec from '../components/HeroSec'
import Cta from './Cta'


const LandingPage = () => {
  return (
    <div>
      <Nav/>
      <HeroSec/>
      <Cta/>
      <Devs/>
      <Footer/>
      
    </div>
  )
}

export default LandingPage;