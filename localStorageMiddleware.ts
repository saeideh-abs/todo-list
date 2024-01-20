import { Todo } from './types'

export class LocalStorageMiddleware {
  private storageKey: string

  constructor(storageKey: string) {
    this.storageKey = storageKey
  }

  get(): Todo[] {
    const storedData = localStorage.getItem(this.storageKey)
    return storedData ? JSON.parse(storedData) : []
  }

  set(todos: Todo[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todos))
  }
}
