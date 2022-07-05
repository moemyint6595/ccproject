import React,{useState} from 'react'
import * as MUI from '@mui/material'
import './main.scss'
// import { FaTimes } from 'react-icons/fa'
import {useDispatch, useSelector } from 'react-redux'
import { addmodelValue } from '../../../Redux/ModelSlice'
import { editTodo } from '../../../Redux/TodoSlice'


function Model({closeModel, id, edited}) {

    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(true);

    const Mvalue = useSelector((state) => state.model.map(val => val.modelvalue))

    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addmodelValue({
            modelvalue : value
        }))
        setToggle(!toggle)
        setToggle1(!toggle1)
    }

    const doneHandler = () => {
        dispatch(editTodo({
            id : id,
            todovalue : Mvalue,
            edited : !edited
        }))
        closeModel();
    }

  return (
         <MUI.Box className='model-container'>
            <MUI.Box className='model-blur-bg'>a</MUI.Box>
            <MUI.Box className='model-wrapper' component='form' onSubmit={submitHandler}> 
                <MUI.Box className='model-input-box'>
                    <MUI.TextField 
                     className='model-input'
                     fullWidth
                     size='small'
                     value={value}
                     onChange={onChangeHandler}
                    />
                </MUI.Box>
                  <MUI.Box className='model-btn-box'>
                    {
                        toggle1 &&   <MUI.Button
                        className='model-btn'
                        variant='contained'
                        type='submit'
                        >
                            Update
                        </MUI.Button>
                    }
                    {
                        toggle && <MUI.Button variant='contained' className='dont-btn' onClick={doneHandler}>
                        DONE
                        </MUI.Button>
                    }
                </MUI.Box>
                {/* <MUI.IconButton className='model-closebtn-box' onClick={closeModel}>
                    <FaTimes className='model-closebtn'/>
                </MUI.IconButton> */}
            </MUI.Box>
        </MUI.Box>
  )
}

export default Model