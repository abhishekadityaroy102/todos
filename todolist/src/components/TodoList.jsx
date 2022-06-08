import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
   
  return (
    <div>
        <ul>
        {
            todos.map((el)=>
                (<TodoItem todo={el}/>)
)
        }
        </ul>
    </div>
  )
}

export default TodoList