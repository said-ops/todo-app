import React from 'react'
import deleteIcon from '../assets/images/icon-cross.svg'
import useTodosStore from '../store/useTodosStore'

function TodoBody() {

    const todos = useTodosStore(state=>state.todos)
    const addTodos = useTodosStore(state=>state.addTodos)

function handleEnter (event){
    if(event.key==='Enter'){
        addTodos(event.target.value)
    }
}
  return (
    <div className='todo-body'>
        <div className='add-todo'>
            <input 
                type="text" 
                placeholder='Create a new todo'
                onKeyDown={e=> {
                    if(e.key==='Enter'){
                        addTodos(e.target.value);
                    }
                }
                    
                }
                
                 />
        </div>
        <div className='display-todos'>
            {todos.map(todo=>{
                return <div className='item' key={todo.id}>
                            <input type="checkbox" name='complete'/>
                            <h2 className='todo-title'>{todo.text}</h2>
                            <div className='delete-todo'>
                                <img src={deleteIcon} alt="delete icon" />
                            </div>
                        </div>
            })}
        </div>
    </div>
  )
}

export default TodoBody