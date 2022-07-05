import React from 'react'
import TodoUISection from './TodoUISection'
import { useSelector } from 'react-redux'

function TodoMapSection({toggleModel, settoggleModel, closeModel}) {

    const todos = useSelector((state) => state.todos)

  return (
    <>
        {
            todos?.map((todo) =>
              <div key={todo.id}>
                  <TodoUISection 
                    todovalue={todo.todovalue}
                    id={todo.id}
                    completed={todo.completed}
                    toggleModel={toggleModel}
                    settoggleModel={settoggleModel}
                    edited={todo.edited}
                  />
             </div>
            )
        }
    </>
  )
}

export default TodoMapSection