import { EventHandler } from 'react'
import { string, bool, oneOf } from 'prop-types'

export const propTypes = {
  className: string,
  id: string,
  required: bool,
  labelText: string.isRequired,
  checked: bool,
  onChange: EventHandler,
  name: string,
  onBlur: EventHandler,
  onFocus: EventHandler,
  value: string,
  disabled: bool,
  type: oneOf(['checkbox', 'radio']),
  willBlurOnEsc: bool,
}

/* istanbul ignore next */
export const defaultProps = {
  className: null,
  id: null,
  required: false,
  checked: false,
  onChange: () => {},
  name: null,
  onBlur: () => {},
  onFocus: () => {},
  value: null,
  disabled: false,
  type: 'checkbox',
  willBlurOnEsc: true,
}
