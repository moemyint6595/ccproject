import React,{useEffect} from 'react'
import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
import './main.scss'
import { toggleCompleted, deleteTodo, editTodo } from '../../../Redux/TodoSlice'
import { useDispatch, useSelector  } from 'react-redux'
import { resetModel } from '../../../Redux/ModelSlice'
import Model from './Model'

function TodoUISection({todovalue, id, completed, toggleModel, settoggleModel, edited}) {

    const dispatch = useDispatch()

    const checkHandler = () => {
        dispatch(toggleCompleted({
            id : id,
            completed : !completed
        }))
    }

    const deleteHandler = () => {
        dispatch(deleteTodo({
            id : id
        }))
    }

    const editHandler = () => {
        dispatch(resetModel())
        closeModel();
        dispatch(editTodo({
            id : id,
            edited : !edited
        }))
    }

    const closeModel = () =>{
        settoggleModel(!toggleModel)
    }


  return (
      <>
    <MUI.Box className='ui-container'>
        <MUI.Box className='ui-com-box'>
            <MUI.Box className={`ui-text ${completed ? 'checked' : ''}`}>
                <span>{todovalue}</span>
            </MUI.Box>
            <MUI.IconButton onClick={checkHandler}>
             <MICON.Check className='check-icon'/>
            </MUI.IconButton>
            <MUI.IconButton onClick={editHandler}>
                <MICON.Edit className='ui-edit' />
            </MUI.IconButton>
            <MUI.IconButton onClick={deleteHandler}>
                <MICON.Delete className='ui-delete'/>
            </MUI.IconButton>
        </MUI.Box>
      </MUI.Box>
      <MUI.Box className='model-box'>
       {
        edited && toggleModel && <Model closeModel={closeModel} id={id} edited={edited}/>
       }
      </MUI.Box>
    </>
  )
}

export default TodoUISection