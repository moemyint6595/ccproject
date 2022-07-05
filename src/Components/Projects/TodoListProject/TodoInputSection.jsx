import React,{useState, useRef} from 'react'
import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
import './main.scss'
import { addTodo } from '../../../Redux/TodoSlice'
import { useDispatch } from 'react-redux'

function TodoInputSection() {

    const inputRef = useRef()

    const dispatch = useDispatch();

    const [value, setValue] = useState('')
    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            todovalue : value,
        }))
        setValue('')
        inputRef.current.focus();
    }

  return (
    <MUI.Box className='inputContainer' component='form' onSubmit={submitHandler}>
        <MUI.Box className='box'>
            <MUI.Box className='input-box'>
                <MUI.TextField 
                 className='input'
                 variant='outlined'
                 label='Add list'
                 size='small'
                 value={value}
                 onChange={onChangeHandler}
                 ref={inputRef}
                />
            </MUI.Box>
            <MUI.Box className='btn-box'>
                <MUI.Button 
                 variant='contained'
                 className='btn'
                 type='submit'
                 >
                     Add List
                </MUI.Button>
            </MUI.Box>
        </MUI.Box>
    </MUI.Box>
  )
}

export default TodoInputSection