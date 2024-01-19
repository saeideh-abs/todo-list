import React, { forwardRef } from 'react'
import Icon from '../assets/flip-backward.svg'

export default forwardRef<SVGElement, React.HTMLProps<SVGElement>>(
  function IconFlipBackward(props, ref) {
    return <Icon ref={ref} {...props} />
  },
)
