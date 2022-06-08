import React from 'react'

import styles from "./Todo.module.css"
const TodoItem = ({todo}) => {
    console.log(todo)
  return (
    <div className={styles.list}>
      <li >
          {todo.value}
      </li>
  
    </div>
  )
}

export default TodoItem