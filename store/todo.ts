import { LocalStorageMiddleware } from '@/localStorageMiddleware'
import { Todo } from '@/types'
import { create } from 'zustand'

interface TodoStore {
  todos: Todo[]
  hasFilter: 'completed' | 'active' | null
  addTodo: (data: Todo) => void
  toggleTodo: (id: Todo['id']) => void
  deleteTodo: (id: Todo['id']) => void
  filterCompleted: () => void
  filterActives: () => void
  clearCompleted: () => void
  resetFilters: () => void
}

const localStorageMiddleware = new LocalStorageMiddleware('todos')

export const useTodoStore = create<TodoStore>(set => {
  return {
    todos: localStorageMiddleware.get(),
    hasFilter: null,
    addTodo: data => {
      set(() => {
        const newTodos = [{ ...data }, ...localStorageMiddleware.get()]
        localStorageMiddleware.set(newTodos)

        return {
          todos: newTodos,
          hasFilter: null,
        }
      })
    },
    toggleTodo: id => {
      set(state => {
        const updatedTodos = localStorageMiddleware
          .get()
          .map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          )
        localStorageMiddleware.set(updatedTodos)

        const filteredTodos = state.hasFilter
          ? state.todos.filter(todo => todo.id !== id)
          : updatedTodos

        return { todos: filteredTodos }
      })
    },
    deleteTodo: id => {
      set(state => {
        const updatedTodos = localStorageMiddleware
          .get()
          .filter(todo => todo.id !== id)
        localStorageMiddleware.set(updatedTodos)

        const filteredTodos = state.hasFilter
          ? state.todos.filter(todo => todo.id !== id)
          : updatedTodos

        return { todos: filteredTodos }
      })
    },
    filterCompleted: () =>
      set(() => ({
        todos: localStorageMiddleware.get().filter(todo => todo.completed),
        hasFilter: 'completed',
      })),
    filterActives: () =>
      set(() => ({
        todos: localStorageMiddleware.get().filter(todo => !todo.completed),
        hasFilter: 'active',
      })),
    clearCompleted: () =>
      set(() => {
        const updatedTodos = localStorageMiddleware
          .get()
          .filter(todo => !todo.completed)
        localStorageMiddleware.set(updatedTodos)

        return { todos: updatedTodos, hasFilter: null }
      }),
    resetFilters: () =>
      set(() => ({ todos: localStorageMiddleware.get(), hasFilter: null })),
  }
})
