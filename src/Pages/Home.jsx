import React, {useState} from 'react'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import  {about, Sponsor}  from '../Components/InfoSection/Data'
import InfoSection from '../Components/InfoSection/InfoSection'

import Navbar from '../Components/Navbar'
import ServiceSection from '../Components/Services/ServiceSection'
import Sidebar from '../Components/Sidebar'


function Home() {

const [isOpen, setIsOpen ] = useState(true)

const toggleIsOpen = () => {
    setIsOpen(!isOpen)
}


  return (
    <>
        <Navbar smplified toggleIsOpen={toggleIsOpen}/>
        <Sidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
        <HeroSection/>
        <InfoSection {...about}/>
        <InfoSection {...Sponsor} />
        <ServiceSection/>
        <Footer/>
    </>
  )
}

export default Home