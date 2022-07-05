import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import '../Styles/Signin.scss'
import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
import Footer from '../Components/Footer'
import logo from '../Images/cclogo.jpg'
import Navbar from '../Components/Navbar'

function Signin() {

  const [visible, setVisible ] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }
  return (
    <>
      <Navbar smplified />
      <Link className='back-wrapper' to='/'>
        <div className='back-home-link'>
          <FaTimes/>
        </div>
      </Link>
      <MUI.Box className='signin-container'>
       <MUI.Box sx={{background : 'black'}} className='black-box'>
         <MUI.Box className='title-section'>
          <img src={logo} alt='logo' className='logo'/><p>CHAMPOIN CLUB</p>
          </MUI.Box>

          <MUI.Box className='signin-form-wrapper' component='form'>

          <MUI.Box className='box'>
            <MUI.TextField 
            variant='outlined'
            label='username'
            fullWidth
            className='input'
            size='small'
            InputProps={{
              endAdornment : <MUI.InputAdornment position='end' >
                 <MUI.IconButton>
                   <MICON.Person />
                 </MUI.IconButton>
              </MUI.InputAdornment>
            }}
            />
          </MUI.Box>

          <MUI.Box className='box'>
            <MUI.TextField 
            variant='outlined'
            label='password'
            fullWidth
            className='input'
            size='small'
            type={visible ? 'text' : 'password'}
            InputProps={{
              endAdornment : <MUI.InputAdornment position='end'>
                <MUI.IconButton onClick={toggleVisible}>
                  {
                    visible?<MICON.Visibility/>:<MICON.VisibilityOff/>
                  }
                </MUI.IconButton>

              </MUI.InputAdornment>
            }}
            />
          </MUI.Box>

          <MUI.Box className='signin-footer-box'>
             <MUI.Box className='create-accout-box'>
               <MUI.Typography className='ask' variant='body2'>Haven't create account?</MUI.Typography>
               <Link className='create-account' to='/signup'> 
                  Sign Up
               </Link>
             </MUI.Box>
             <MUI.Box className='login-box'>
              <MUI.Button variant='contained' className='login-btn'> SIGN IN</MUI.Button>
             </MUI.Box>
             <MUI.Box className='forgotpassword-box'>
              <Link className='forgotpassword' to='/forgotpassword'>
                Forgot password?
              </Link>
             </MUI.Box>
          </MUI.Box>

          </MUI.Box>
        </MUI.Box>
      </MUI.Box>
      <Footer/>
    </>
  )
}

export default Signin