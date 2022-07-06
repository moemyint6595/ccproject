import React from 'react'
import image from '../../../Images/drdisrespect.webp'
import * as MUI from '@mui/material'
import "../Styledetails.scss"

const SubDocdetail = () => {
  return (
    <>
       <MUI.Box className='sub-doc-container'>
            <MUI.Box className='doc-bg'>
              <img src={image} alt='doc_image' className='img'/>
            </MUI.Box>
            <MUI.Box className='D-box'>
                <MUI.Typography className='D-text' variant='h5'>D</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>R</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>.D</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>I</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>S</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>R</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>E</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>S</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>P</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>E</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>C</MUI.Typography>
                <MUI.Typography className='D-text' variant='h5'>T</MUI.Typography>
            </MUI.Box>
       </MUI.Box>
    </>
  )
}

export default SubDocdetail