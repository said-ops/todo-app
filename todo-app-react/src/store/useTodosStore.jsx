import {create} from 'zustand'

const initialTodos = [
    {
        text:'Complete javascript course online',
        id:1,
        completed:false
    },
    {
        text:'Complete javascript course online',
        completed:false,
        id:2,
    },
    {
        text:'Complete javascript course online',
        completed:false,
        id:3,
    },
    {
        text:'Complete javascript course online',
        completed:false,
        id:4,
    },
    {
        text:'Complete javascript course online',
        completed:false,
        id:5,
    },
    {
        text:'Complete javascript course online',
        completed:false,
        id:6,
    },
]

const useTodoStore = create (set=>({

    todos:initialTodos,
    addTodo : text => set(state => ({
        todos : [
            ...state.todos,
        {
            id : Date.now(),
            text,
            completed : false
        }
        ]
    })),
    deleteTodo: id=>set(state=>({
        todos:state.todos.filter((todo)=>todo.id != id)
        
    })),
}))

export default useTodoStore