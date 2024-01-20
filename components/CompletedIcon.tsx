import { IconCheck02 } from '@/icons'
import { cn } from '@/utils'
import { forwardRef } from 'react'

const iconStyle = `w-6 h-6 cursor-pointer flex-none`

export const CompletedIcon = forwardRef<
  SVGAElement,
  React.HTMLProps<SVGElement>
>((props, ref) => (
  <IconCheck02
    className={cn(
      iconStyle,
      'bg-white rounded-full text-annotation-success border-2 border-solid border-annotation-success',
    )}
    {...props}
    ref={ref}
  />
))

CompletedIcon.displayName = 'CompletedIcon'
