import { string, bool } from 'prop-types'

export const propTypes = {
  className: string,
  heading: string.isrequired,
  isSpacious: bool,
}

export const defaultProps = {
  className: null,
  isSpacious: false,
}
