import React from 'react'
import '../Styles/Sidebar.scss'
import { FaTimes } from 'react-icons/fa'
import {Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

function Sidebar({isOpen, toggleIsOpen}) {

  return (
    <aside className={`sidebar-container sidebar-${isOpen ? 'close' : 'open' }`} onClick={toggleIsOpen}>

      <div className='icon-container' onClick={toggleIsOpen}>
        <FaTimes className='icon' />
      </div>

      <div className='sidebar-wrapper'>
        <ul className='sidebar-menu'>
          <LinkS to='about' className='sidebar-link' onClick={toggleIsOpen}>
           <p> About</p>
          </LinkS>
          <LinkS to='sponsor' className='sidebar-link' onClick={toggleIsOpen}>
            <p>Sponsor</p>
          </LinkS>
          <LinkS to='instructor' className='sidebar-link' onClick={toggleIsOpen}>
           <p> Instructors</p>
          </LinkS>
          <LinkR to='/signup' className='sidebar-link' onClick={toggleIsOpen}>
           <p> Sign Up</p>
          </LinkR>
        </ul>
        <div className='sidebar-signin-wrap' >
          <LinkR to='/signin' className='sidebar-signin-btn' onClick={toggleIsOpen}>
            Sign In
          </LinkR>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar