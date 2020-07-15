import React from 'react'
import { propTypes, defaultProps } from './RadioButtonField.prop'
import { ControlledInputField } from '../ControlledInputField'

export function RadioButtonField({ ...otherProps }) {
  return <ControlledInputField {...otherProps} inputType="radio" />
}

RadioButtonField.propTypes = propTypes

RadioButtonField.defaultProps = defaultProps
