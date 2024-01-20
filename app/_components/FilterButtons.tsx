import { Button } from '@/components'
import { useTodoStore } from '@/store/todo'
import { useShallow } from 'zustand/react/shallow'

export const FilterButtons = () => {
  const [filterCompleted, filterActives, clearCompleted, resetFilters] =
    useTodoStore(
      useShallow(state => [
        state.filterCompleted,
        state.filterActives,
        state.clearCompleted,
        state.resetFilters,
      ]),
    )

  return (
    <div className="flex gap-4 justify-center">
      <Button variant="outlined" color="primary" onClick={filterCompleted}>
        Filter Completeds
      </Button>

      <Button variant="outlined" color="primary" onClick={filterActives}>
        Filter Actives
      </Button>

      <Button variant="outlined" color="primary" onClick={clearCompleted}>
        Clear Completeds
      </Button>

      <Button variant="outlined" color="primary" onClick={resetFilters}>
        Reset Filters
      </Button>
    </div>
  )
}
