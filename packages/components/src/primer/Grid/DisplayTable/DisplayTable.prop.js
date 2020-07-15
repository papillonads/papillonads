import { string, arrayOf, shape, number } from 'prop-types'

export const propTypes = {
  className: string,
  items: arrayOf(
    shape({
      names: arrayOf(string),
      values: arrayOf(string),
    }),
  ).isRequired,
  idIndex: number,
  isSelectedIndex: number,
}

export const defaultProps = {
  className: null,
  idIndex: -1,
  isSelectedIndex: -1,
}
