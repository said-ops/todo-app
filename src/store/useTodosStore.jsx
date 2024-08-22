import { create } from "zustand";

const initialTodos = [
  {
    text: "Complete Javascript course online",
    id: 1,
    completed: false,
  },
  {
    text: "Jog arround the park 3x",
    completed: false,
    id: 2,
  },
  {
    text: "10 minutes meditation",
    completed: false,
    id: 3,
  },
  {
    text: "Read for 1 hour",
    completed: false,
    id: 4,
  },
  {
    text: "Pick up Groceries",
    completed: false,
    id: 5,
  },
  {
    text: "Complete Todo App on Frontend Mentor",
    completed: true,
    id: 6,
  },
];

const useTodoStore = create((set,get) => ({
  //controls
  control: "all",
  setControl: (control) => set({ control }),
  //todos
  todos: initialTodos,
  //add new todo
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    })),
  //delete exesting todo
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id != id),
    })),
  //setting todos completed/pending
  toggleComplete: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      }),
    })),
  //clear completed
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.completed === false),
    })),
    theme: 'dark',
    setTheme : (theme)=>set({theme}),
    //save todos to local storage
    saveTodos : () =>{
      const todos = get().todos
      localStorage.setItem('savedTodos',JSON.stringify(todos))
    },
    //load todos from local storage
    loadTodos : () =>{
      const savedTodos = localStorage.getItem('savedTodos')
      if(savedTodos){
        set({todos:JSON.parse(savedTodos)})
      }
    },
    //save theme 
    saveTheme : () => {
      const theme = get().theme
      localStorage.setItem('savedTheme',theme)
    },
    //load theme
    loadTheme : () =>{
      const theme = localStorage.getItem('savedTheme')
      if(theme){
        set({theme :theme})
      }
    }
}));

export default useTodoStore;
