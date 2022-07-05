import React,{useState} from 'react'
import '../../Styles/InfoSection.scss'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { Button } from '@mui/material'

import { Link } from 'react-router-dom'

import {
InfoContainer,
InfoRow,
Column1,
TextWrapper,
TopLine,
Heading,
Subtitle,
InfoWrapper,
Column2,
ImgWrap,
Img,
}
from './InfoElements'

function InfoSection({topLine,
  lightBg,
  lightText,
  headLine,
  descriptions,
  buttonLabel,
  alt,
  imgStart,
  img,
  darkText,
  bgRad,
  id,
  btnBgColor,
  routerPath
}) {
  const [hover, setHover ] = useState(false)

    const toggleHover = () => {
        setHover(!hover)
    }
  return (
    
    <>
    <InfoContainer lightBg={lightBg} bgRad={bgRad} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                 <TextWrapper className='text-wrapper'>
                     <TopLine>{topLine}</TopLine>
                     <Heading lightText={lightText}>{headLine}</Heading>
                     <Subtitle darkText={darkText}>
                       {descriptions}
                       </Subtitle>
                       <Link to={routerPath} className='info-btn-link'>
                     <div className='infobtn-wrapper'>
                         <Button 
                           variant='contained' 
                           className={`${btnBgColor ? 'info-btn-hover-white' : 'info-btn-hover-black'}`}
                           size='large' 
                           onMouseEnter={toggleHover}
                           onMouseLeave={toggleHover}
                           >
                            {buttonLabel} { hover ?  <MdArrowForward/> : <MdKeyboardArrowRight/> }
                          </Button>
                       </div>
                       </Link>
                 </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                     <Img src={img} alt={alt}/>
                  </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection