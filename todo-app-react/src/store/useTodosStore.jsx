import {create} from 'zustand'

const useTodoStore = create (set=>({

    todos:[],
    addTodo : text => set(state => ({
        todos : [
            ...state.todos,
        {
            id : Date.now(),
            text,
            completed : false
        }
        ]
    }))
}))

export default useTodoStore