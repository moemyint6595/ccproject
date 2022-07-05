import '../../Styles/ServiceSection.scss'
import cardphoto1 from '../../Images/doc2.jpg'
import cardphoto2 from '../../Images/xqc.jpg'
import cardphoto3 from '../../Images/shroud.jpg'
import { Link } from 'react-router-dom';


import * as MUI from '@mui/material';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import React, {useState} from 'react'


function ServiceSection() {

    const [hover, setHover] = useState(true)
    const [hover1, setHover1 ] = useState(true)
    const [hover2, setHover2] = useState(true)
    const [hover3, setHover3] = useState(true)
    const [hover4, setHover4] = useState(true)
    const [hover5, setHover5] = useState(true)

    const toggleHover = () => {
        setHover(!hover)
    }
    const toggleHover1 = ()=> {
        setHover1(!hover1)
    }
    const toggleHover2 = () => {
        setHover2(!hover2)
    }
    const toggleHover3 = () => {
        setHover3(!hover3)
    }
    const toggleHover4 = () => {
        setHover4(!hover4)
    }
    const toggleHover5 = () => {
        setHover5(!hover5)
    }

  return (
      <div className='service-container' id='instructor'>
         <h1 className='service-h1'>
             Our Instructors
         </h1>
         <div className='service-cards-wrapper'>
             <MUI.Box width={300} className='box'>
                <MUI.Card className='card'>
                    <MUI.CardMedia
                    component='img'
                    alt='service'
                    height='220'
                    image={cardphoto1}
                    />
                    <MUI.CardContent className='card-content'>
                        <MUI.Typography variant='h5' component='div' mb={1}>
                            Dr.DisRespect
                        </MUI.Typography>
                        <MUI.Typography variant='body2'>
                            2 Time Back to Back gonna be your mentor through out this whole classes and dominate VSM with him
                        </MUI.Typography>
                    </MUI.CardContent>
                    <MUI.CardActions>
                        <MUI.Button variant='contained' className='card-button' size='medium'
                         onMouseEnter={toggleHover}
                         onMouseLeave={toggleHover}
                        >
                          <Link className='instructor-link' to='/docdetail' > JOIN </Link> { hover ? <MdKeyboardArrowRight/> : <MdArrowForward/> }
                        </MUI.Button>
                        <MUI.Button variant='contained' className='card-button'  size='medium'
                        onMouseEnter={toggleHover1}
                        onMouseLeave={toggleHover1}
                        >
                           Read More  { hover1 ? <MdKeyboardArrowRight/> : <MdArrowForward/> }
                        </MUI.Button>
                    </MUI.CardActions>
                </MUI.Card>
             </MUI.Box >
             <MUI.Box width={300} className='box'>
                <MUI.Card className='card'>
                    <MUI.CardMedia
                    component='img'
                    alt='service'
                    height='220'
                    image={cardphoto2}
                    />
                    <MUI.CardContent className='card-content'>
                        <MUI.Typography variant='h5' component='div' mb={1}>
                           XQCOW
                        </MUI.Typography>
                        <MUI.Typography variant='body2'>
                            Big Juicer Goblin gaming war lord gamba god XQCow gonna be your instructor for malding lessons BatChest
                        </MUI.Typography>
                    </MUI.CardContent>
                    <MUI.CardActions>
                        <MUI.Button variant='contained' className='card-button' size='md'
                         onMouseEnter={toggleHover2}
                         onMouseLeave={toggleHover2}
                        >
                           Join { hover2 ? <MdKeyboardArrowRight/> : <MdArrowForward/> }
                        </MUI.Button>
                        <MUI.Button variant='contained' className='card-button'  size='md'
                        onMouseEnter={toggleHover3}
                        onMouseLeave={toggleHover3}
                        >
                           Read More  { hover3 ? <MdKeyboardArrowRight/> : <MdArrowForward/> }
                        </MUI.Button>
                    </MUI.CardActions>
                </MUI.Card>
             </MUI.Box>
             <MUI.Box width={300} className='box'>
                <MUI.Card className='card'>
                    <MUI.CardMedia
                    component='img'
                    alt='service'
                    height='220'
                    image={cardphoto3}
                    />
                    <MUI.CardContent className='card-content'>
                        <MUI.Typography variant='h5' component='div' mb={1}>
                           SHROUD
                        </MUI.Typography>
                        <MUI.Typography variant='body2'>
                           Insane FPS god aka snipe god Shroud gonna be your mentor for increasing your shitty ass skill to next level
                        </MUI.Typography>
                    </MUI.CardContent>
                    <MUI.CardActions>
                        <MUI.Button variant='contained' className='card-button' size='md'
                         onMouseEnter={toggleHover4}
                         onMouseLeave={toggleHover4}
                        >
                           Join { hover4 ? <MdKeyboardArrowRight/> : <MdArrowForward/> }
                        </MUI.Button>
                        <MUI.Button variant='contained' className='card-button'  size='md'
                        onMouseEnter={toggleHover5}
                        onMouseLeave={toggleHover5}
                        >
                           Read More  { hover5 ? <MdKeyboardArrowRight/> : <MdArrowForward/> }
                        </MUI.Button>
                    </MUI.CardActions>
                </MUI.Card>
             </MUI.Box>
         </div>
      </div>
  )
}

export default ServiceSection