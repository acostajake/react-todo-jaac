import React, { useState } from 'react'
import { TodoItems } from './TodoItems'
import './TodoList.css'

export const TodoList = () => {
  // The schema for a todo item expects a key and a text field
  // You can see it being used in TodoItems.js
  // eg: { key: 'someUniqueKey', text: 'The Text of the Item' }

  // You can use whatever you'd like for state management
  // below is an example of using useState
  // https://reactjs.org/docs/hooks-state.html

  // const [text, setText] = useState('')
  // const [items, setItems] = useState([])

  const handleInput = e => {
    // handle onChange of the input field
  }

  const handleSubmit = e => {
    // handle onSubmit of the form
  }

  const deleteItem = key => {
    // handle deleting when a task is clicked
  }

  return (
    <div className="todos">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="enter task"
            onChange={handleInput}
            value={text}
            className="new-task"
            data-testid="new-task"
            autoFocus
          />
          <button type="submit">add</button>
        </form>
      </div>
      <TodoItems items={items} onDelete={deleteItem} />
    </div>
  )
}
