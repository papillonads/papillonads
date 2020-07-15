import { string, func } from 'prop-types'

export const propTypes = {
  className: string,
  copyValue: string,
  onCopy: func,
}

/* istanbul ignore next */
export const defaultProps = {
  className: null,
  copyValue: null,
  onCopy: () => {},
}
