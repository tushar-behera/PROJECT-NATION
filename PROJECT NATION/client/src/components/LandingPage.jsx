import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Devs from '../components/Devs'
import HeroSec from '../components/HeroSec'
import Cta from './Cta'
import Cta1 from './Cta1'
import Cta2 from './Cta2'


const LandingPage = () => {
  return (
    <div>
      <Nav/>
      <HeroSec/>
      <Cta/>
      <Cta1/>
      <Cta2/>
      <Devs/>
      <Footer/>
      
    </div>
  )
}

export default LandingPage;