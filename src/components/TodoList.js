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

  const [text, setText] = useState('')
  const [items, setItems] = useState([])

  function handleInput(e) {
    const { name, value } = e.target;
    setText({ [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (text.text.length) {
      setItems([ ...items, text ])
      setText({ text: '' })
    }
  }

  const deleteItem = item => {
    const oneLessTask = items.filter(todo => items.indexOf(todo) !== items.indexOf(item))
    setItems([ ...oneLessTask ])
  }

  return (
    <div className="todos">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            name="text"
            placeholder="enter task"
            onChange={e => handleInput(e)}
            value={text.text || ''}
            className="new-task"
            data-testid="new-task"
            autoFocus
          />
          <button disabled={!text} type="submit">add</button>
        </form>
      </div>
      <TodoItems items={items} onDelete={deleteItem} />
    </div>
  )
}
