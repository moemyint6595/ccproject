import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Purchase.scss'
import { FaTimes } from 'react-icons/fa'
import * as MUI from '@mui/material'
import Footer from '../Components/Footer'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle';
import Navbar from '../Components/Navbar'

//Gfuel photos
import Gfyellow from '../Images/GFyellow.webp'
import Gfblue from '../Images/Gfblue.webp'
import Gforange from '../Images/Gforange.webp'

function Purchase() {


  useEffect(()=>{

    const swiper = new Swiper('.swiper', {
    
      direction: 'horizontal',
      loop: true,
      
      speed : 500,
      

      pagination: {
        el: '.swiper-pagination',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    console.log(swiper)
  },[])

  return (
    <>
    <Navbar smplified />
     <div className='back-wrapper'>
        <Link className='back-home-link' to='/'>
            <FaTimes/>
        </Link>
      </div>
      <MUI.Box className='purchase-container'>
        <MUI.Box className='swiper'>
          <MUI.Box className='swiper-wrapper'>
           <MUI.Box className='swiper-slide'>
             <MUI.Box className='swiper-item item1'>
               <img src={Gfyellow} className='gf-photo' alt='gamefuel'/>
               <MUI.Button 
               variant='contained' 
               className='shop-btn col1' 
               size='large'
               ><a href='https://gamefuel.com/'>SHOP</a>
               </MUI.Button>
             </MUI.Box>
             <MUI.Box className='swiper-item item2'>
               <img src={Gfblue} className='gf-photo' alt='gamefuel'/>
               <MUI.Button 
               variant='contained' 
               className='shop-btn col2' 
               size='large'
               ><a href='https://gamefuel.com/'>SHOP</a>
               </MUI.Button>
             </MUI.Box>
             <MUI.Box className='swiper-item item3'>
             <img src={Gforange} className='gf-photo' alt='gamefuel'/>
               <MUI.Button 
               variant='contained' 
               className='shop-btn col3' 
               size='large'
               ><a href='https://gamefuel.com/'>SHOP</a>
               </MUI.Button>
             </MUI.Box>
           </MUI.Box>
           <MUI.Box className='swiper-slide'>
             <MUI.Box className='swiper-item item4'>
             <img src={Gfblue} className='gf-photo' alt='gamefuel'/>
               <MUI.Button 
               variant='contained' 
               className='shop-btn col2' 
               size='large'
               ><a href='https://gamefuel.com/'>SHOP</a>
               </MUI.Button>
             </MUI.Box>
             <MUI.Box className='swiper-item item5'>
             <img src={Gfblue} className='gf-photo' alt='gamefuel'/>
               <MUI.Button 
               variant='contained' 
               className='shop-btn col1' 
               size='large'
               ><a href='https://gamefuel.com/'>SHOP</a>
               </MUI.Button>
             </MUI.Box>
             <MUI.Box className='swiper-item item6'>
             <img src={Gfblue} className='gf-photo' alt='gamefuel'/>
               <MUI.Button 
               variant='contained' 
               className='shop-btn col2' 
               size='large'
               ><a href='https://gamefuel.com/'>SHOP</a>
               </MUI.Button>
             </MUI.Box>
           </MUI.Box>
           <MUI.Box className='swiper-slide'>
             <MUI.Box className='swiper-item item7'>
             <img src={Gfblue} className='gf-photo' alt='gamefuel'/>
               <MUI.Button 
               variant='contained' 
               className='shop-btn col1' 
               size='large'
               ><a href='https://gamefuel.com/'>SHOP</a>
               </MUI.Button>
             </MUI.Box>
             <MUI.Box className='swiper-item item8'>
             <img src={Gfblue} className='gf-photo' alt='gamefuel'/>
               <MUI.Button 
               variant='contained' 
               className='shop-btn col2' 
               size='large'
               ><a href='https://gamefuel.com/'>SHOP</a>
               </MUI.Button>
             </MUI.Box>
             <MUI.Box className='swiper-item item9'>
             <img src={Gfblue} className='gf-photo' alt='gamefuel'/>
               <MUI.Button 
               variant='contained' 
               className='shop-btn col1' 
               size='large'
               ><a href='https://gamefuel.com/'>SHOP</a>
               </MUI.Button></MUI.Box> 
           </MUI.Box>
          </MUI.Box>
          <MUI.Box className='swiper-button-prev'></MUI.Box>
          <MUI.Box className='swiper-button-next'></MUI.Box>
        </MUI.Box>
      </MUI.Box>
      <Footer/>   
    </>
  )
}

export default Purchase