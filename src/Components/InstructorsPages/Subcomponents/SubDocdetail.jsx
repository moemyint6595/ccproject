import React from 'react'
import image from '../../../Images/drdisrespect.webp'
import * as MUI from '@mui/material'

const SubDocdetail = () => {
  return (
    <>
       <MUI.Box className='sub-doc-container'>
            <MUI.Box className='doc-bg'>
              <img src={image} alt='doc_image' className='img'/>
            </MUI.Box>
            <MUI.Box className='D-box'>
                <MUI.Typography className='D-text' variant='h5'>D</MUI.Typography>
            </MUI.Box>
       </MUI.Box>
    </>
  )
}

export default SubDocdetail