import React, { useEffect, useRef, useState } from "react";
import deleteIcon from "../assets/images/icon-cross.svg";
import useTodoStore from "../store/useTodosStore";

function TodoBody() {
  //useState to set the input value
  const [inputValue, setInputValue] = useState("");
  //todos store
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleComplete = useTodoStore((state) => state.toggleComplete);
  const control = useTodoStore((state) => state.control);
  const theme = useTodoStore(state=>state.theme)
  const saveTodos = useTodoStore(state=>state.saveTodos)
  const loadTodos = useTodoStore(state=>state.loadTodos)

  useEffect(()=>{
    loadTodos();
  },[loadTodos])
  //hundle Enter key
  function hundelEnter(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      addTodo(event.target.value);
      setInputValue("");
      saveTodos();
    }
  }
  
  
  //filter todos
  const filteredTodos = todos.filter((todo) => {
    if (control === "completed") return todo.completed;
    if (control === "active") return !todo.completed;
    return true;
  });

  return (
    <div className="todo-body">
      <div className="add-todo">
        <input
          className={theme ==='dark' ? 'dark-input' : ''}
          type="text"
          placeholder="Create a new todo..."
          onKeyDown={(e) => hundelEnter(e)}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </div>
      <div className={
        `display-todos ${theme==='dark' ? 'dark-todo-body':''}`
      }>
        {
          //display todos
          filteredTodos.map((todo) => {
            return (
              <div className={
                `item ${theme==='dark' ? 'dark-item':''}`
              } key={todo.id}>
                <input
                  type="checkbox"
                  name="complete"
                  checked={todo.completed}
                  onChange={() => {
                    toggleComplete(todo.id);
                    saveTodos()
                  }}
                />
                <h2
                  className={`todo-title ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  {todo.text}
                </h2>
                <div
                  className="delete-todo"
                  onClick={() => {
                    deleteTodo(todo.id)
                    saveTodos()
                  }
                    
                  }
                >
                  <img src={deleteIcon} alt="delete icon" />
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default TodoBody;
