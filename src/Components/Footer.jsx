import React from 'react'
import '../Styles/Footer.scss'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll'
import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
import Logo from '../Images/doclogo.webp'


function Footer() {

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='footer-content-wrapper'>
              <h2>Games</h2>
              <ul>
                <a href='https://www.activision.com' target='_blank' rel="noreferrer" >Warzone</a>
                <a href='https://playvalorant.com/en-us' target='_blank' rel="noreferrer" >Valorent</a>
                <a href='https://play.battlegrounds.pubg.com/' target='_blank' rel="noreferrer" >Pubg</a>
                <a href='https://www.epicgames.com/fortnite/en-US/home' target='_blank' rel="noreferrer" >Fortnite</a>
                <a href='https://en.bandainamcoent.eu/elden-ring/elden-ring' target='_blank' rel="noreferrer" >Eldern Ring</a>
              </ul>
            </div>
            <div className='footer-content-wrapper'>
              <h2>Contact</h2>
              <ul>
                <li>Old Dear Lane Street</li>
                <li>Poughkeepsie City</li>
                <li>New York 12601</li>
                <li>+845-851-3255</li>
                <li>champion9394@gmail.com</li>
              </ul>
            </div>
            <div className='footer-content-wrapper'>
              <h2>Menu</h2>
              <ul>
                <LinkS to='about' 
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >About</LinkS>
                <LinkS to='sponsor'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Sponsor</LinkS>
                <LinkS to='instructor'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Instructors</LinkS>
                <LinkR to='/signup' target='_blank'>SignUp</LinkR>
                <LinkR to='/signin' target='_blank'>SignIn</LinkR>
              </ul>
            </div>
            <div className='footer-sm-wrapper'>
              <h2>Social Media</h2>
              <div className='social-wrapper'>
                <a href='https://www.youtube.com/drdisrespect' className='social-link' target='_blank' rel="noreferrer">Youtube <MICON.YouTube className='youtube' /></a>
                <a href='https://www.twitter.com/drdisrespect' className='social-link' target='_blank' rel="noreferrer">Twitter <MICON.Twitter className='twitter' /></a>
                <a href='https://www.instragram.com/drdisrespect' className='social-link' target='_blank' rel="noreferrer">Instagram <MICON.Instagram className='instra'/></a>
                <a href='https://www.reddit.com/r/DrDisrespectLive' className='social-link' target='_blank' rel="noreferrer">Reddit <MICON.Reddit className='reddit' /></a>
              </div>
            </div>
        </div>
        <div className='footer-subscribed'>
          <MUI.Box className='footer-mail-box'><MUI.TextField label='Email' variant='outlined' size='small' className='footer-email' /></MUI.Box>
          <MUI.Button variant='contained' className='footer-sub-btn'>Subscribe</MUI.Button> 
        </div>
        <div className='footer-copyright' >
        <LinkR to='/' className='logo'>
                 <img src={Logo} className='cclogo' onClick={toggleHome} alt='cclogo'/>
               </LinkR>
           <span className='span'>
          Champion Club &copy; 2022 All Rights Reserved
          </span>
          <span className='footer-last-span'>a</span>
          </div>
    </div>
  )
}

export default Footer