import { memo } from 'react'

export const Header = memo(() => {
  return (
    <div
      className={`w-full h-header bg-primary-500 text-white fixed flex items-center justify-center
      shadow-2xl shadow-primary-100/50 text-2xl font-semibold`}
    >
      Todo List App
    </div>
  )
})

Header.displayName = 'Header'
