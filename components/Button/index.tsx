import { cn } from '@/utils'
import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react'
import { defaultStyle, disableStyle, sizeStyle, style } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'solid' | 'outlined'
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
}

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren & ButtonProps
>(function (
  {
    variant = 'solid',
    color = 'primary',
    size = 'md',
    iconLeft,
    iconRight,
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        defaultStyle(variant),
        sizeStyle[size],
        style[variant][color],
        disableStyle,
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-1">
        {iconLeft}
        {children}
        {iconRight}
      </div>
    </button>
  )
})

Button.displayName = 'Button'
