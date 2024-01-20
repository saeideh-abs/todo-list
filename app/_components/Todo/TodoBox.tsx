import { IconDelete } from '@/icons'
import IconCheck02 from '@/icons/components/IconCheck02'
import IconFlipBackward from '@/icons/components/IconFlipBackward'
import { useTodoStore } from '@/store/todo'
import { Todo } from '@/types'
import { cn } from '@/utils'

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

const iconStyle = `w-6 h-6 cursor-pointer flex-none`

const TodoBoxBody = ({ id, content, completed }: Omit<Todo, 'title'>) => {
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)

  return (
    <div className="flex flex-col gap-6 shadow-lg px-4 py-4 rounded-b-lg border border-saGray-300">
      {content && <p className="break-all whitespace-pre-wrap">{content}</p>}

      <div className="flex gap-4 justify-end items-center">
        {completed ? (
          <IconFlipBackward
            className={cn(iconStyle, 'text-gray-500')}
            onClick={() => toggleTodo(id)}
          />
        ) : (
          <CompletedIcon onClick={() => toggleTodo(id)} />
        )}
        <IconDelete
          className={cn(iconStyle, 'text-annotation-error')}
          onClick={() => deleteTodo(id)}
        />
      </div>
    </div>
  )
}

const CompletedIcon = (props: React.HTMLProps<SVGElement>) => (
  <IconCheck02
    className={cn(
      iconStyle,
      'bg-white rounded-full text-annotation-success border-2 border-solid border-annotation-success',
    )}
    {...props}
    ref={null}
  />
)
