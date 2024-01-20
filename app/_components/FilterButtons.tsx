import { Button } from '@/components'
import { useTodoStore } from '@/store/todo'
import { useShallow } from 'zustand/react/shallow'

export const FilterButtons = () => {
  const [filterCompleted, clearCompleted] = useTodoStore(
    useShallow(state => [state.filterCompleted, state.clearCompleted]),
  )

  return (
    <div className="flex gap-4 justify-center">
      <Button variant="outlined" color="primary" onClick={filterCompleted}>
        Filter Completeds
      </Button>

      <Button variant="outlined" color="primary" onClick={clearCompleted}>
        Clear Completeds
      </Button>
    </div>
  )
}
