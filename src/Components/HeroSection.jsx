import React, {useState} from 'react'
import Video from '../Videos/herovideo.mp4';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { Button } from '@mui/material';

import '../Styles/HeroSection.scss'

function HeroSection() {

    const [hover, setHover ] = useState(false)

    const toggleHover = () => {
        setHover(!hover)
    }
  return (
    <div className='herosection-div'>
    <div className='hero-container'>
      <div className='hero-bg'>
          <video className='hero-bg-video' autoPlay muted loop src={Video} type='video/mp4'/>
      </div>
      <div className='hero-content-container'>
          <h1 className='hero-h1'>
              JOIN THE <span>CHAPION CLUB!</span>
          </h1>
          <p className='hero-paragrap'>
              There only violent, speed, and momentum!
              Join the chapion club if u got the gut!
          </p>
          <Link to='/signin' className='btn-link'>
          <div className='hero-getstart-wrapper'>
          <Button 
          variant='contained' 
          className='hero-btn' 
          size='large' 
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          >
              Get Start { hover ? <MdArrowForward/> : <MdKeyboardArrowRight/> }
              </Button>
      </div></Link>
      </div>
    </div>
    </div>
  )
}

export default HeroSection