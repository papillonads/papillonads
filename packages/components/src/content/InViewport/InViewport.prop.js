import { string, number, func, node } from 'prop-types'

export const propTypes = {
  className: string,
  offset: number,
  onOverflowTop: func,
  onOverflowRight: func,
  onOverflowBottom: func,
  onOverflowLeft: func,
  children: node,
}

/* istanbul ignore next */
export const defaultProps = {
  className: null,
  offset: 0,
  onOverflowTop: () => {},
  onOverflowRight: () => {},
  onOverflowBottom: () => {},
  onOverflowLeft: () => {},
  children: null,
}
