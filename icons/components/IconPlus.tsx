import React, { forwardRef } from 'react'
import Icon from '../assets/Plus.svg'

export default forwardRef<SVGElement, React.HTMLProps<SVGElement>>(
  function MyIcon(props, ref) {
    return <Icon ref={ref} {...props} />
  },
)
