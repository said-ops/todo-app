import { create } from "zustand";

const initialTodos = [
  {
    text: "Complete javascript course online",
    id: 1,
    completed: true,
  },
  {
    text: "Complete javascript course online",
    completed: true,
    id: 2,
  },
  {
    text: "Complete javascript course online",
    completed: false,
    id: 3,
  },
  {
    text: "Complete javascript course online",
    completed: false,
    id: 4,
  },
  {
    text: "Complete javascript course online",
    completed: false,
    id: 5,
  },
  {
    text: "Complete javascript course online",
    completed: false,
    id: 6,
  },
];

const useTodoStore = create((set) => ({
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
    theme: 'light',
    setTheme : (theme)=>set({theme})
}));

export default useTodoStore;
