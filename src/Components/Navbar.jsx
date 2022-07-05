import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import '../Styles/Navbar.scss'
import Logo from '../Images/cclogo.jpg'

import { FaBars } from 'react-icons/fa'

function Navbar({toggleIsOpen, smplified }) {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
     
  return (
       <nav className='nav'>
           <div className='navbar-container'>
               <LinkR to='/' className='logo'>
                 <img src={Logo} className='cclogo' onClick={toggleHome} alt='champion club logo'/> CHAMPION CLUB
               </LinkR>
               <div className='open-menu' onClick={toggleIsOpen} >
                  <FaBars/>
               </div>
               <ul className='nav-menu'>
                   <li className='nav-item'>
                       <LinkS to='Projects' className='nav-link'
                       smooth={true}
                       duration={500}
                       spy={true}
                       exact='true' 
                       offset={-80}
                       >
                           <LinkR className='project' to='/' >
                             Projects
                         </LinkR>
                       </LinkS>
                   </li>
                   <li className='nav-item'>
                       <LinkS to='sponsor' className='nav-link'
                       smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}
                       >
                         <LinkR className='sponsor' to='/' >
                            Sponsor
                         </LinkR>
                       </LinkS>
                   </li>
                   <li className='nav-item'>
                       <LinkS to='instructor' className='nav-link'
                       smooth={true}
                       duration={500}
                       spy={true}
                       exact='true'
                       offset={-80}
                       >
                           <LinkR className='instructor' to='/'>
                             Instructors
                         </LinkR>
                       </LinkS>
                   </li>
                    {
                        smplified &&  <li className='nav-item'>
                        <LinkR to='/signup' className='nav-link' exact>
                            Sign Up
                        </LinkR>
                    </li>
                    }
               </ul>
               <div className='signin'>
               <div className='signin-shadow-top'></div>
                   <LinkR to='/signin' className='signin-btn' exact>
                       Sign In
                   </LinkR>
                   <div className='signin-shadow-bot'></div>
               </div>
           </div>
       </nav>
  )
}

export default Navbar