import React from 'react'
import { propTypes, defaultProps } from './Checkbox.prop'
import { ControlledInput } from '../ControlledInput'

export function Checkbox(props) {
  return <ControlledInput {...props} />
}

Checkbox.propTypes = propTypes

Checkbox.defaultProps = defaultProps
