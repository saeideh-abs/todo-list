import { cn } from '@/utils'
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'solid' | 'outlined'
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren & ButtonProps
>(function (
  {
    variant = 'solid',
    color = 'primary',
    size = 'md',
    className,
    children,
    ...props
  },
  ref,
) {
  const defaultStyle = cn(
    `rounded-md outline-none border-none w-fit cursor-pointer`,
    variant === 'outlined' && 'border bg-transparent',
  )

  const disableStyle = `disabled:opacity-50 disabled:cursor-not-allowed`

  const sizeStyle = {
    sm: `px-6 py-2 text-sm font-medium`,
    md: 'px-8 py-3 text-base font-semibold',
    lg: 'px-10 py-4 text-lg font-semibold',
  }

  const style = {
    text: {
      primary: `text-primary-500 hover:text-primary-600`,
      secondary: `text-secondary-500 hover:text-secondary-600`,
    },
    solid: {
      primary: `bg-primary-500 text-primary-contrast hover:enabled:bg-primary-600 active:enabled:bg-primary-700`,
      secondary: `bg-secondary-500 text-secondary-contrast hover:enabled:bg-secondary-600 active:enabled:bg-secondary-700`,
    },
    outlined: {
      primary: `border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600
        hover:enabled:bg-primary-50/50 active:enabled:bg-primary-50`,
      secondary: `border-secondary-500 text-secondary-500 hover:border-secondary-600 hover:text-secondary-600
        hover:enabled:bg-secondary-50/50 active:enabled:bg-secondary-50`,
    },
  }

  return (
    <button
      ref={ref}
      className={cn(
        defaultStyle,
        sizeStyle[size],
        style[variant][color],
        disableStyle,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
