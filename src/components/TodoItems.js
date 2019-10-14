import React from 'react'

export const TodoItems = ({ items, onDelete }) => {
  return (
    <ul className="task-list" data-testid="task-list">
      {items.map(item => (
        <li onClick={() => onDelete(item.key)} key={item.key}>
          {item.text}
        </li>
      ))}
    </ul>
  )
}
