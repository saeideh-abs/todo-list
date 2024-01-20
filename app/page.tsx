'use client'
import { Divider } from '@/components'
import { TodoBox } from './_components/Todo/TodoBox'
import { TodoInputBox } from './_components/Todo/TodoInputBox'
import { useTodoStore } from '@/store/todo'
import { FilterButtons } from './_components/FilterButtons'

export default function Page() {
  const todos = useTodoStore(state => state.todos)

  return (
    <div className="flex flex-col gap-6 justify-center mx-auto px-5 py-10 w-full md:w-[500px]">
      <TodoInputBox />

      {!!todos.length && <Divider className="my-5" />}

      {!!todos.length && <FilterButtons />}

      {todos.map(todo => (
        <TodoBox key={todo.id} {...todo} />
      ))}
    </div>
  )
}
