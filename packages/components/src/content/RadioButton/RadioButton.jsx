import React from 'react'
import { propTypes, defaultProps } from './RadioButton.prop'
import { ControlledInput } from '../ControlledInput'

export function RadioButton(props) {
  return <ControlledInput {...props} />
}

RadioButton.propTypes = propTypes

RadioButton.defaultProps = defaultProps
