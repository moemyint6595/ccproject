import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import  * as MUI from '@mui/material'
import './Styledetails.scss'
import SubDocdetail from './Subcomponents/SubDocdetail'

const Docdetail = () => {
  return (
    <>
      <Navbar smplified />

        <MUI.Box className='doc-container'>
         <MUI.Box className='doc-wrapper'>
            <SubDocdetail />
         </MUI.Box>
        </MUI.Box>


      <MUI.Box className='main-footer-box'>
        <Footer/>
      </MUI.Box>
    </>
  )
}

export default Docdetail

