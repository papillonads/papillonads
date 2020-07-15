import { string, object } from 'prop-types'

export const defaultProps = {
  className: '',
}

export const propTypes = {
  className: string,
  location: object.isRequired,
}
