import { CompletedIcon } from '@/components'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip'
import { IconDelete, IconFlipBackward } from '@/icons'
import { useTodoStore } from '@/store/todo'
import { Todo } from '@/types'
import { cn } from '@/utils'

const iconStyle = `w-6 h-6 cursor-pointer flex-none`

export const TodoBoxBody = ({
  id,
  content,
  completed,
}: Omit<Todo, 'title'>) => {
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)

  return (
    <div className="flex flex-col gap-6 shadow-lg px-4 py-4 rounded-b-lg border border-saGray-300">
      {content && <p className="break-all whitespace-pre-wrap">{content}</p>}

      <div className="flex gap-4 justify-end items-center">
        {completed ? (
          // set as active icon
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <IconFlipBackward
                  className={cn(iconStyle, 'text-gray-500')}
                  onClick={() => toggleTodo(id)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Set as active</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          // set as completed icon
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="w-6 h-6">
                  <CompletedIcon onClick={() => toggleTodo(id)} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Set as completed</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {/* delete icon */}
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <IconDelete
                className={cn(iconStyle, 'text-annotation-error')}
                onClick={() => deleteTodo(id)}
              />
            </TooltipTrigger>
            <TooltipContent>Delete todo</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
