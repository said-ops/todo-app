import React from 'react'

function TodoFooter() {
  return (
    <div className='todo-footer'>
        <div className='iteme-left'>5 items left</div>
        <div className='controls'>
            <div>All</div>
            <div>Active</div>
            <div>Complete</div>
        </div>
        <div className='clear'>Clear Copmleted</div>
    </div>
  )
}

export default TodoFooter