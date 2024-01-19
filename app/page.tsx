'use client'
import { Button, Divider, TodoInputBox } from '@/components'
import { TodoBox } from '@/components/Todo/TodoBox'
import { useTodoStore } from '@/store/todo'
import { todo } from 'node:test'

export default function Page() {
  const todos = useTodoStore(state => state.todos)

  return (
    <div className="flex flex-col gap-6 justify-center mx-auto px-5 py-10 w-full md:w-[500px]">
      <TodoInputBox />

      {!!todos.length && <Divider className="my-5" />}

      {!!todos.length && (
        <div className="flex gap-4">
          <Button variant="outlined" color="primary">
            Filter Completeds
          </Button>

          <Button variant="outlined" color="primary">
            Clear Completeds
          </Button>
        </div>
      )}

      {todos.map(todo => (
        <TodoBox key={todo.id} {...todo} />
      ))}
    </div>
  )
}
