import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
import styles from "./Todo.module.css"
const Todo = () => {
    const [indata,setindata]=useState("")
    const [latest,setlatest]=useState([])
    const handlechange=(e)=>{
        setindata(e.target.value)
    }
    const handledata=()=>{
        setlatest([...latest,{id:Date.now(),value:indata}])
        
        setindata("")
    }
    // console.log(latest)
  return (
    <div className={styles.main}>
        <div className={styles.inputbox}>
        <input type="text" placeholder='Write Something' value={indata}onChange={handlechange}></input>
        <label>
            <button disabled={!indata} onClick={handledata}>+</button>
        </label>
        </div>
        <TodoList todos={latest}/>
    </div>
  )
}

export default Todo