import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import { TodoList } from '../TodoList'

const NEW_TODO_TEXT = 'Ace This Test'

it('starts with no tasks', () => {
  const { getByTestId } = render(<TodoList />)
  const todoList = getByTestId('task-list')
  expect(todoList.children.length).toBe(0)
})

it('allows input', () => {
  const { getByTestId } = render(<TodoList />)
  const input = getByTestId('new-task')
  fireEvent.change(input, { target: { value: NEW_TODO_TEXT } })
  expect(input.value).toBe(NEW_TODO_TEXT)
})

it('does not add a todo item without text', () => {
  const { getByText, getByTestId } = render(<TodoList />)
  const todoList = getByTestId('task-list')
  fireEvent.click(getByText('add'))
  expect(todoList.children.length).toBe(0)
})

it('adds a new todo item', () => {
  const { getByText, getByTestId } = render(<TodoList />)
  const input = getByTestId('new-task')
  const todoList = getByTestId('task-list')
  fireEvent.change(input, { target: { value: NEW_TODO_TEXT } })
  fireEvent.click(getByText('add'))
  expect(todoList.children.length).toBe(1)
  const newItem = getByText(NEW_TODO_TEXT)
  expect(newItem.innerHTML).toBe(NEW_TODO_TEXT)
})

it('clears out the input text', () => {
  const { getByText, getByTestId } = render(<TodoList />)
  const input = getByTestId('new-task')
  const todoList = getByTestId('task-list')
  fireEvent.change(input, { target: { value: NEW_TODO_TEXT } })
  fireEvent.click(getByText('add'))
  expect(todoList.children.length).toBe(1)
  expect(input.value).toBe('')
})

it('deletes an item', () => {
  const { getByText, getByTestId } = render(<TodoList />)
  const input = getByTestId('new-task')
  const todoList = getByTestId('task-list')
  fireEvent.change(input, { target: { value: NEW_TODO_TEXT } })
  fireEvent.click(getByText('add'))
  expect(todoList.children.length).toBe(1)
  fireEvent.click(getByText(NEW_TODO_TEXT))
  expect(todoList.children.length).toBe(0)
})
