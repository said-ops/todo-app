import React, { useRef } from "react";
import useTodoStore from "../store/useTodosStore";

function TodoFooter() {
  //refs
  const all = useRef();
  const active = useRef();
  const completed = useRef();
  // const clear = useRef();
  const refs = [all, active, completed];
  //toggle class blue
  function addBlue(e) {
    refs.forEach((ref) => {
      ref.current.classList.remove("blue-controls");
    });
    e.target.classList.add("blue-controls");
  }
  //set control
  const setControl = useTodoStore((state) => state.setControl);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);
  const todos = useTodoStore(state=> state.todos)
  const theme = useTodoStore(state=>state.theme)
  //active elemnts count
function count(){
  let i =0
  todos.forEach(todo=>{
    if(!todo.completed)
      i++
  })
  return i
}

  return (
    <div className={
      `todo-footer ${theme==='dark' ? 'dark-todo-footer':''}`
    }>
      <div className="iteme-left">{count()} items left</div>
      <div className="controls">
        <div
          className="blue-controls"
          onClick={(e) => {
            setControl("all");
            addBlue(e);
          }}
          ref={all}
        >
          All
        </div>
        <div
          onClick={(e) => {
            setControl("active");
            addBlue(e);
          }}
          ref={active}
        >
          Active
        </div>
        <div
          onClick={(e) => {
            setControl("completed");
            addBlue(e);
          }}
          ref={completed}
        >
          Complete
        </div>
      </div>
      <div
        className="clear"
        onClick={(e) => {
          if (confirm("do you want to clear completed todos?"))
            clearCompleted();
            // addBlue(e)
        }}
        // ref={clear}
      >
        Clear Copmleted
      </div>
    </div>
  );
}

export default TodoFooter;
