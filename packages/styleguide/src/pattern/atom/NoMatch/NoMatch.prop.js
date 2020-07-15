import { string, object } from 'prop-types'

export const noMatchDefaultProps = {
  className: '',
}

export const noMatchPropTypes = {
  className: string,
  location: object.isRequired,
}
