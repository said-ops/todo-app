import React from 'react'
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody'
import TodoFooter from './TodoFooter'

function Todo() {
  return (
    <div className='todo-container'>
        <TodoHeader />
        <TodoBody />
        <TodoFooter />
    </div>
  )
}

export default Todo