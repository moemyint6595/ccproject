import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name : 'todos',
    initialState : [

    ],
    reducers : {
        addTodo : (state, action ) => {
           const newTodo = {
                id : Math.floor((Math.random() * 10000 ) + 1 ),
                todovalue : action.payload.todovalue,
                completed : false,
                edited : false
            }
            state.push(newTodo);
        },
        toggleCompleted : (state, action ) => {
            const index = state.findIndex((todo) =>
             todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo : (state, action) => {
           return state.filter((todo)=>todo.id !== action.payload.id)
        },
        editTodo : (state, action) => {
            const index = state.findIndex((todo) =>
             todo.id === action.payload.id
            );
            state[index].todovalue = action.payload.todovalue
            state[index].edited = action.payload.edited
        }
    }
})
export const { addTodo, toggleCompleted, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;