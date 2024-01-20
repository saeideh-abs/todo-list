import React, { forwardRef } from 'react'
import Icon from '../assets/check-02.svg'

export default forwardRef<SVGElement, React.HTMLProps<SVGElement>>(
  function IconCheck02(props, ref) {
    return <Icon ref={ref} {...props} />
  },
)
