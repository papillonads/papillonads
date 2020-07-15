import { string, oneOf, number } from 'prop-types'

export const spinnerSize = {
  default: 'default',
  small: 'small',
  large: 'large',
}

export const spinnerColor = {
  default: 'default',
  white: 'white',
}

export const propTypes = {
  className: string,
  size: oneOf(Object.keys(spinnerSize)),
  customSize: number,
  color: oneOf(Object.keys(spinnerColor)),
}

export const defaultProps = {
  className: null,
  size: spinnerSize.default,
  customSize: null,
  color: spinnerColor.default,
}
