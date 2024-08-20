import React from 'react'
import themeIcon from '../assets/images/icon-sun.svg'

function TodoHeader() {
  return (
   <div className='todo-header'>
    <h1>TODO</h1>
    <img src={themeIcon} alt="toggle theme" />
   </div>
  )
}

export default TodoHeader