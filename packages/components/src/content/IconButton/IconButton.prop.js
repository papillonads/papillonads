import { string, oneOf, bool } from 'prop-types'
import { propTypes as iconPropTypes } from '../Icon/Icon.prop'

export const buttonType = {
  primary: 'primary',
  positive: 'positive',
  negative: 'negative',
  secondary: 'secondary',
  muted: 'muted',
  white: 'white',
}

export const propTypes = {
  className: string,
  label: string.isRequired,
  href: string,
  iconProps: iconPropTypes.isRequired,
  disabled: bool,
  buttonType: oneOf(Object.keys(buttonType)),
  withDropdown: bool,
}

export const defaultProps = {
  className: null,
  href: null,
  disabled: false,
  buttonType: buttonType.primary,
  withDropdown: false,
}
