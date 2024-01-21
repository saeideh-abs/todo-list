'use client'
import { Title } from '@/components'
import { TodoBox } from './_components/Todo/TodoBox'
import { TodoInputBox } from './_components/Todo/TodoInputBox'
import { useTodoStore } from '@/store/todo'
import { FilterButtons } from './_components/FilterButtons'
import { memo } from 'react'
import useStore from '@/store/useStore'

export default function Page() {
  const todos = useStore(useTodoStore, state => state.todos)

  // const todos = useTodoStore(state => state.todos)
  if (!todos) return <div>Loading...</div>

  // const { todos } = todoStore

  const MemoisedTodoInputBox = memo(TodoInputBox)
  const MemoisedTitle = memo(Title)
  const MemoisedFilterButtons = memo(FilterButtons)

  return (
    <div className="flex flex-col gap-6 justify-center px-5 xl:px-10 py-10 w-full">
      <MemoisedTodoInputBox />

      <MemoisedTitle title="Todos" />

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

// import useStore from '@/store/useStore'
// import { useBearStore } from '@/store/useBearStore'

// export default function Page() {
//   const bearStore = useStore(useBearStore, state => state)

//   if (!bearStore) return <div>loading...</div>

//   const { bears, addABear } = bearStore

//   return (
//     <div>
//       <p>number of bears {bears}</p>
//       <button
//         onClick={() => {
//           addABear?.()
//           console.log('click')
//         }}
//       >
//         add bear
//       </button>
//     </div>
//   )
// }
