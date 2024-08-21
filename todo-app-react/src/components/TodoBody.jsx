import React from 'react'
import deleteIcon from '../assets/images/icon-cross.svg'
import useTodoStore from '../store/useTodosStore'

function TodoBody() {

    const todos = useTodoStore(state=>state.todos)
    const addTodo = useTodoStore(state=>state.addTodo)

    function hundelEnter(event) {
        if(event.key==='Enter'){
            addTodo(event.target.value)
            event.target.value = ''
        }
    }
  return (
    <div className='todo-body'>
        <div className='add-todo'>
            <input 
                type="text" 
                placeholder='Create a new todo...'
                onKeyDown={e=>hundelEnter(e)} 
            />
        </div>
        <div className='display-todos'>
            {
                todos.map(todo=>{
                     return (
                        <div className='item' key={todo.id}>
                            <input type="checkbox" name='complete'/>
                            <h2 className='todo-title'>{todo.text}</h2>
                            <div className='delete-todo'>
                                <img src={deleteIcon} alt="delete icon" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TodoBody