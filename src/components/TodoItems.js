import React from 'react'

export const TodoItems = ({ items, onDelete }) => {
  return (
    <ul className="task-list" data-testid="task-list">
      {items.map(item => (
        <li onClick={() => onDelete(item)} key={items.indexOf(item)}>
          {item.text}
        </li>
      ))}
    </ul>
  )
}
