import {create} from 'zustand'

const useTodosStore = create((set)=>({

    todos:[],
    addTodos : text => set(state=>({
        todos:[
            ...state.todos,
            {
                id:Date.now(),
                text,
                completed:false
            }
        ],
    })),
}))

export default useTodosStore