'use client'
import { Divider, TodoInputBox } from '@/components'
import { TodoBox } from '@/components/Todo/TodoBox'
import { useTodoStore } from '@/store/todo'

export default function Page() {
  const todos = useTodoStore(state => state.todos)

  return (
    <div className="flex flex-col gap-6 justify-center mx-auto px-5 py-10 w-full md:w-[500px]">
      <TodoInputBox />

      {!!todos.length && <Divider className="my-5" />}

      {todos.map(todo => (
        <TodoBox key={todo.id} title={todo.title} content={todo.content} />
      ))}
    </div>
  )
}
