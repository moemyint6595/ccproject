import React,{useState} from 'react'
import '../Styles/Signup.scss'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { FaTimes } from 'react-icons/fa'
import logo from '../Images/cclogo.jpg'
import Navbar from '../Components/Navbar'


import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Signup() {

  const [ visible, setVisible ] = useState(true)
  const [ revisible, setRevisible ] = useState(true)

  const toggleVisible = () => {
    setVisible(!visible)
  }
const toggleRevisible = () => {
  setRevisible(!revisible)
}
  const theme = createTheme({
    palette: {
      primary: {
        light: '#000000',
        main: '#000000',
        dark: '#000000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffffff',
        main: '#ffffff',
        dark: '#ffffff',
        contrastText: '#000',
      },
    },
  });

  return (
    <>
    <Navbar smplified={false} />
    <ThemeProvider theme={theme}>
    <div className='back-wrapper'>
        <Link className='back-home-link' to='/'>
            <FaTimes/>
        </Link>
      </div>
      <MUI.Box  className='signup-container'>
        
       <MUI.Box sx={{background : 'black'}} className='black-box'>
         <MUI.Box className='title-section'>
          <img src={logo} alt='logo' className='logo'/><p>CHAMPOIN CLUB</p>
         </MUI.Box>
         <MUI.Box className='signup-form-wrapper' component='form'>

          <MUI.Box className='box'>
           <MUI.TextField 
             variant='outlined'
             fullWidth
             className='email-input'
             label='Email'
             size='small'
             color='primary'
             required
             />
            </MUI.Box>

         <MUI.Box className='box'>
              <MUI.TextField 
                variant='outlined'
                fullWidth
                className='user-input'
                label='username'
                size='small'
                color='primary'
                required
               />
            </MUI.Box>

          <MUI.Box className='box'>
              <MUI.TextField 
                variant='outlined'
                fullWidth
                className='password-input'
                label='Password'
                size='small'
                color='primary'
                required
                type={visible ? 'password' : 'text'}
                InputProps={{endAdornment : <MUI.InputAdornment position='end'>
                  <MUI.IconButton
                  onClick={toggleVisible}
                  >
                    { visible ? <MICON.Visibility/> : <MICON.VisibilityOff/>}
                  </MUI.IconButton>
                </MUI.InputAdornment>}}
               />
            </MUI.Box>

          <MUI.Box className='box'>
              <MUI.TextField 
                variant='outlined'
                fullWidth
                className='repassword-input'
                label='Re-enter password *optional'
                size='small'
                color='primary'
                type={revisible ? 'password' : 'text'}
                InputProps={{endAdornment : <MUI.InputAdornment position='end'>
                  <MUI.IconButton
                  onClick={toggleRevisible}
                  >
                    { revisible ? <MICON.Visibility/> : <MICON.VisibilityOff/>}
                  </MUI.IconButton>
                </MUI.InputAdornment>}}
               />
            </MUI.Box>
           <MUI.Button className='signup-btn' variant='contained' size='large' >
              Sign up
            </MUI.Button>
          </MUI.Box>
         </MUI.Box>
      </MUI.Box>
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Signup