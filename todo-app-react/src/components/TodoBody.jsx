import React from 'react'
import deleteIcon from '../assets/images/icon-cross.svg'

function TodoBody() {
  return (
    <div className='todo-body'>
        <div className='add-todo'>
            <input type="text" placeholder='Create a new todo' />
        </div>
        <div className='display-todos'>
            <div className='item'>
                <input type="checkbox" name='complete'/>
                <h2 className='todo-title'>Complete online javascript course</h2>
                <div className='delete-todo'>
                    <img src={deleteIcon} alt="delete icon" />
                </div>
            </div>
            <div className='item'>
                <input type="checkbox" name='complete'/>
                <h2 className='todo-title'>Complete online javascript course</h2>
                <div className='delete-todo'>
                    <img src={deleteIcon} alt="delete icon" />
                </div>
            </div>
            <div className='item'>
                <input type="checkbox" name='complete'/>
                <h2 className='todo-title'>Complete online javascript course</h2>
                <div className='delete-todo'>
                    <img src={deleteIcon} alt="delete icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoBody