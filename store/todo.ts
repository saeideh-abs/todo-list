import { Todo } from '@/types'
import { create } from 'zustand'

interface TodoStore {
  todos: Todo[]
  addTodo: (data: Todo) => void
  toggleTodo: (id: Todo['id']) => void
  deleteTodo: (id: Todo['id']) => void
  filterCompleted: () => void
  clearCompleted: () => void
}

export const useTodoStore = create<TodoStore>(set => ({
  todos: [],
  addTodo: data =>
    set(state => ({
      todos: [...state.todos, { ...data }],
    })),
  toggleTodo: id =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  deleteTodo: id =>
    set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
  filterCompleted: () =>
    set(state => ({ todos: state.todos.filter(todo => todo.completed) })),
  clearCompleted: () =>
    set(state => ({ todos: state.todos.filter(todo => !todo.completed) })),
}))
