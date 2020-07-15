import { string, arrayOf, shape, bool, func } from 'prop-types'

export const propTypes = {
  className: string,
  summary: string.isRequired,
  ariaAttr: shape({
    haspopup: bool,
    current: string,
  }),
  items: arrayOf(
    shape({
      href: string,
      text: string,
      isSelected: bool,
    }),
  ).isRequired,
  onClick: func.isRequired,
}

export const defaultProps = {
  className: null,
  ariaAttr: {
    haspopup: false,
    current: 'page',
  },
}
