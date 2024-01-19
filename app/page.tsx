import { Divider, TodoInputBox } from '@/components'
import { TodoBox } from '@/components/Todo/TodoBox'

export default function Page() {
  return (
    <div className="flex flex-col gap-6 justify-center mx-auto px-5 py-10 w-full md:w-[500px]">
      <TodoInputBox />

      <Divider />

      <TodoBox title="My todo" content="what should i do now?" />
      <TodoBox title="My todo" content="what should i do now?" />
      <TodoBox title="My todo" content="what should i do now?" />
    </div>
  )
}
