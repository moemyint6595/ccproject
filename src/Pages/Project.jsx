import React from 'react'
import '../Styles/Project.scss'
import * as MUI from '@mui/material'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

function Project() {
  return (
    <>
    <div className='back-wrapper'>
        <Link className='back-home-link' to='/'>
            <FaTimes/>
        </Link>
      </div>
    <div className='container'>
        <Link to='/todolist' className='todolist-link'>
            <MUI.Button variant='contained' className='todolist-btn' size='large'>
                TODOLIST PROJECT
            </MUI.Button>
        </Link>
    </div>
    </>
  )
}

export default Project