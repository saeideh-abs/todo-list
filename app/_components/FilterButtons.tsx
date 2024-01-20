import { Button, ButtonProps } from '@/components'
import { useTodoStore } from '@/store/todo'
import { cn } from '@/utils'
import { useShallow } from 'zustand/react/shallow'

export const FilterButtons = () => {
  const [
    hasFilter,
    filterCompleted,
    filterActives,
    clearCompleted,
    resetFilters,
  ] = useTodoStore(
    useShallow(state => [
      state.hasFilter,
      state.filterCompleted,
      state.filterActives,
      state.clearCompleted,
      state.resetFilters,
    ]),
  )

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <ResponsiveButton
        variant={hasFilter === 'completed' ? 'solid' : 'outlined'}
        color="primary"
        onClick={filterCompleted}
      >
        Filter Completeds
      </ResponsiveButton>

      <ResponsiveButton
        variant={hasFilter === 'active' ? 'solid' : 'outlined'}
        color="primary"
        onClick={filterActives}
      >
        Filter Actives
      </ResponsiveButton>

      <ResponsiveButton
        variant="outlined"
        color="primary"
        onClick={clearCompleted}
      >
        Clear Completeds
      </ResponsiveButton>

      <ResponsiveButton
        variant="outlined"
        color="primary"
        onClick={resetFilters}
      >
        Reset Filters
      </ResponsiveButton>
    </div>
  )
}

const ResponsiveButton = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button className={cn('w-full sm:w-fit', className)} {...props}>
      {children}
    </Button>
  )
}
