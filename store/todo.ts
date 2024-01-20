import { LocalStorageMiddleware } from '@/localStorageMiddleware'
import { Todo } from '@/types'
import { create } from 'zustand'

interface TodoStore {
  todos: Todo[]
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
  // const initialTodos = localStorageMiddleware.get()

  return {
    todos: localStorageMiddleware.get(),
    addTodo: data => {
      set(state => {
        const newTodos = [{ ...data }, ...localStorageMiddleware.get()]
        localStorageMiddleware.set(newTodos)
        return {
          todos: newTodos,
        }
      })
    },
    toggleTodo: id => {
      set(state => {
        const updatedTodos = state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        )
        localStorageMiddleware.set(updatedTodos)
        return { todos: updatedTodos }
      })
    },
    deleteTodo: id => {
      set(state => {
        const updatedTodos = state.todos.filter(todo => todo.id !== id)

        localStorageMiddleware.set(updatedTodos)
        return { todos: updatedTodos }
      })
    },
    filterCompleted: () =>
      set(state => ({
        todos: localStorageMiddleware.get().filter(todo => todo.completed),
      })),
    filterActives: () =>
      set(state => ({
        todos: localStorageMiddleware.get().filter(todo => !todo.completed),
      })),
    clearCompleted: () =>
      set(state => {
        const updatedTodos = localStorageMiddleware
          .get()
          .filter(todo => !todo.completed)

        localStorageMiddleware.set(updatedTodos)
        return { todos: updatedTodos }
      }),
    resetFilters: () => set(() => ({ todos: localStorageMiddleware.get() })),
  }
})
