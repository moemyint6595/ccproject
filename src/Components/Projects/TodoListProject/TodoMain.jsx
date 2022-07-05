import React,{useState} from 'react'
import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
import './main.scss'
import TodoInputSection from './TodoInputSection'
import TodoMapSection from './TodoMapSection'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import Model from './Model'

function TodoMain() {
    const length = useSelector((state)=>state.todos.filter((todo)=>todo.completed === false))

    const [toggleModel, settoggelModel ] = useState(false)

    const closeModel = () => {
        settoggelModel(!toggleModel)
    }

  return (
      <>
       <div className='back-wrapper'>
        <Link className='back-home-link' to='/'>
            <FaTimes/>
        </Link>
      </div>
    <MUI.Box className='main-container'>
        <MUI.Box className='title-box'>
            <MUI.Typography variant='h4' className='title'>
                My Todo List
            </MUI.Typography>
        </MUI.Box>
        <MUI.Box className='wrapper'>
            <MUI.Box className={`noti-wrapper ${length.length === 0 ? 'toggle' : ''}`}>
             <MUI.Box className='noti-bg'></MUI.Box>
                <MUI.Box className='noti-box'>
                    <MICON.NotificationsNoneOutlined className='noti'/>
                     <span>{length.length}</span>
                    </MUI.Box>
            </MUI.Box>
            <MUI.Box className='ui-box'>
                <TodoInputSection/>
                <TodoMapSection toggleModel={toggleModel} settoggleModel={settoggelModel} closeModel={closeModel}/>
            </MUI.Box>
        </MUI.Box>
    </MUI.Box>
    </>
  )
}

export default TodoMain

