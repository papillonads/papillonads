import { FocusEventHandler, MouseEventHandler } from 'react'
import { string, bool, oneOf, node } from 'prop-types'
import { propTypes as iconPropTypes } from '../Icon/Icon.prop'

export const buttonType = {
  primary: 'primary',
  positive: 'positive',
  negative: 'negative',
  muted: 'muted',
  naked: 'naked',
}

export const type = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
}

export const buttonSize = {
  small: 'small',
  large: 'large',
}

export const propTypes = {
  className: string,
  icon: iconPropTypes.icon,
  indicateDropdown: bool,
  onClick: MouseEventHandler,
  isFullWidth: bool,
  onBlur: FocusEventHandler,
  loading: bool,
  disabled: bool,
  buttonType: oneOf(Object.keys(buttonType)),
  type: oneOf(Object.keys(type)),
  size: oneOf(Object.keys(buttonSize)),
  href: string,
  children: node,
  isActive: bool,
}

/* istanbul ignore next */
export const defaultProps = {
  className: null,
  icon: null,
  indicateDropdown: false,
  onClick: () => {},
  isFullWidth: false,
  onBlur: () => {},
  loading: false,
  disabled: false,
  buttonType: buttonType.primary,
  type: type.button,
  size: buttonSize.small,
  href: null,
  children: null,
  isActive: false,
}
