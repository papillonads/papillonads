import { ChangeEventHandler } from 'react'
import { string, bool, object, oneOf, node } from 'prop-types'

export const propTypes = {
  className: string,
  id: string.isRequired,
  labelText: string.isRequired,
  labelIsLight: bool,
  required: bool,
  helpText: string,
  formLabelProps: object,
  disabled: bool,
  helpTextProps: object,
  validationMessage: string,
  value: string,
  name: string,
  checked: bool,
  inputProps: object,
  inputType: oneOf(['checkbox', 'radio']),
  onChange: ChangeEventHandler,
  children: node,
}

/* istanbul ignore next */
export const defaultProps = {
  className: string,
  labelIsLight: false,
  required: false,
  helpText: null,
  formLabelProps: {},
  disabled: false,
  helpTextProps: {},
  validationMessage: null,
  value: null,
  name: null,
  checked: false,
  inputProps: {},
  inputType: 'checkbox',
  onChange: () => {},
  children: null,
}
