import { Todo } from './types'

export class LocalStorageMiddleware {
  private storageKey: string

  constructor(storageKey: string) {
    this.storageKey = storageKey
  }

  get(): Todo[] {
    if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem(this.storageKey)
      return storedData ? JSON.parse(storedData) : []
    } else {
      // Handle the case when localStorage is not available during SSR/SSG
      return []
    }
  }

  set(todos: Todo[]): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(todos))
    } else {
      // Handle the case when localStorage is not available (e.g., during SSR/SSG)
      console.error('localStorage is not available. Data cannot be saved.')
    }
  }
}
