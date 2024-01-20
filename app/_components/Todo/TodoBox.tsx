import { CompletedIcon } from '@/components'
import { Todo } from '@/types'
import { TodoBoxBody } from './TodoBoxBody'

export type TodoBoxProps = Todo

export const TodoBox = ({ id, title, content, completed }: TodoBoxProps) => {
  return (
    <div className="w-full flex flex-col">
      <TodoBoxHeader title={title} completed={completed} />
      <TodoBoxBody id={id} content={content} completed={completed} />
    </div>
  )
}

const TodoBoxHeader = ({
  title,
  completed,
}: {
  title: Todo['title']
  completed: Todo['completed']
}) => {
  return (
    <div
      className={`flex gap-4 justify-between break-all whitespace-pre-wrap 
      bg-secondary-500 text-secondary-contrast px-4 py-3 text-lg font-semibold rounded-t-lg`}
    >
      {title}

      {completed && <CompletedIcon />}
    </div>
  )
}
