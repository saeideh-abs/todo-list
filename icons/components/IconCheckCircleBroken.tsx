import React, { forwardRef } from 'react'
import Icon from '../assets/check-circle-broken.svg'

export default forwardRef<SVGElement, React.HTMLProps<SVGElement>>(
  function IconCheckCircleBroken(props, ref) {
    return <Icon ref={ref} {...props} />
  },
)
