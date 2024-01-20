'use client'
import { Title } from '@/components'
import { TodoBox } from './_components/Todo/TodoBox'
import { TodoInputBox } from './_components/Todo/TodoInputBox'
import { useTodoStore } from '@/store/todo'
import { FilterButtons } from './_components/FilterButtons'
import { memo } from 'react'

export default function Page() {
  const todos = useTodoStore(state => state.todos)

  const MemoisedTodoInputBox = memo(TodoInputBox)
  const MemoisedTitle = memo(Title)
  const MemoisedFilterButtons = memo(FilterButtons)

  return (
    <div className="flex flex-col gap-6 justify-center px-5 xl:px-10 py-10 w-full">
      <MemoisedTodoInputBox />

      <MemoisedTitle title="Todo" />

      <MemoisedFilterButtons />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
        {todos.map(todo => (
          <TodoBox key={todo.id} {...todo} />
        ))}
      </div>

      {!todos.length && (
        <div className="text-gray-400 font-medium text-center">
          There is No data
        </div>
      )}
    </div>
  )
}
