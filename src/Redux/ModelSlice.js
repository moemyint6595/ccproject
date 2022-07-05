import { createSlice } from '@reduxjs/toolkit'

const modelSlice = createSlice({
    name : 'model',
    initialState : [
    ],
    reducers : {
        addmodelValue : (state, action) =>{
            const newValue  = {

                id : Math.floor((Math.random() * 10000 ) + 1 ),
                modelvalue : action.payload.modelvalue,
                
            }
            state.push(newValue);
        },
        resetModel : (state, action) => {

             state.splice(0, state.length)
        }
    }
})

export const { addmodelValue, resetModel} = modelSlice.actions
export default modelSlice.reducer 