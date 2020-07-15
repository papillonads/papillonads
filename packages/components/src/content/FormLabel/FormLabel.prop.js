import { string, node, bool } from 'prop-types'

export const propTypes = {
  className: string,
  htmlFor: string.isRequired,
  children: node.isRequired,
  requiredText: string,
  required: bool,
}

export const defaultProps = {
  className: null,
  requiredText: 'required',
  required: false,
}
