import React, { useEffect } from 'react'
import sunIcon from '../assets/images/icon-sun.svg'
import moonIcon from '../assets/images/icon-moon.svg'
import lightBg from '../assets/images/bg-desktop-light.jpg'
import darkBg from '../assets/images/bg-desktop-dark.jpg'
import useTodoStore from '../store/useTodosStore'


function TodoHeader() {

 const setTheme = useTodoStore(state=>state.setTheme)
 const theme =useTodoStore(state=>state.theme)
 const saveTheme =useTodoStore(state=>state.saveTheme)
 const loadTheme =useTodoStore(state=>state.loadTheme)

 useEffect(()=>{
  loadTheme()
 },[loadTheme])
 useEffect(()=>{
  if(theme==='dark')
    {
     document.body.style.background=`url(${darkBg})`
     document.body.style.backgroundRepeat='no-repeat'
     document.body.style.backgroundColor='#181824'
    }
   if(theme==='light')
   {
     document.body.style.backgroundColor='white'
     document.body.style.background=`url(${lightBg})`
     document.body.style.backgroundRepeat='no-repeat'
   }
 },[theme])
  return (
   <div className='todo-header'>
    <h1>TODO</h1>
    <img src={theme==='dark' ? sunIcon : moonIcon} alt="toggle theme"
         onClick={()=>{
          if(theme==='light')
           {
            setTheme('dark')
            document.body.style.background=`url(${darkBg})`
            document.body.style.backgroundRepeat='no-repeat'
            document.body.style.backgroundColor='#181824'
            saveTheme()
           }
          if(theme==='dark')
          {
            setTheme('light')
            document.body.style.backgroundColor='white'
            document.body.style.background=`url(${lightBg})`
            document.body.style.backgroundRepeat='no-repeat'
            saveTheme()
          }
          }}  />
   </div>
  )
}

export default TodoHeader