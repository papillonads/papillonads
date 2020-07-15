import { string, node, bool } from 'prop-types'

export const propTypes = {
  className: string,
  children: node.isRequired,
  row: bool,
}

export const defaultProps = {
  className: null,
  row: false,
}
