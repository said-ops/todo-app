import React, { useRef } from 'react'
import useTodoStore from '../store/useTodosStore'

function TodoFooter() {
  const all = useRef()
  const active = useRef()
  const completed = useRef()
  const refs = [all,active,completed]
  function addBlue (e){
    refs.forEach(ref=>{
      ref.current.classList.remove('blue-controls')
    })
    e.target.classList.add('blue-controls')
  }

  const setControl = useTodoStore(state=>state.setControl)
  return (
    <div className='todo-footer'>
        <div className='iteme-left'>5 items left</div>
        <div className='controls'>
            <div onClick={(e) => {
              setControl('all')
              addBlue(e)
                }} ref={all}>All
            </div>
            <div onClick={(e) => {
              setControl('active')
              addBlue(e)
              }} ref={active}>Active</div>
            <div onClick={(e) => {
              setControl('completed')
              addBlue(e)
              }} ref={completed}>Complete</div>
        </div>
        <div className='clear'>Clear Copmleted</div>
    </div>
  )
}

export default TodoFooter