import { string, bool, func } from 'prop-types'
import { propTypes as iconPropTypes } from '../Icon/Icon.prop'

export const propTypes = {
  className: string,
  label: string.isRequired,
  icon: iconPropTypes.icon.isRequired,
  tooltip: string,
  iconButtonProps: iconPropTypes,
  isActive: bool,
  disabled: bool,
  onClick: func,
  withDropdown: bool,
}

/* istanbul ignore next */
export const defaultProps = {
  className: null,
  tooltip: null,
  iconButtonProps: null,
  isActive: false,
  disabled: false,
  onClick: () => {},
  withDropdown: bool,
}
