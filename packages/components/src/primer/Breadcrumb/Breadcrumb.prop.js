import { arrayOf, shape, string, bool, func } from 'prop-types'

export const propTypes = {
  className: string,
  ariaAttr: shape({
    label: string,
    current: string,
  }).isRequired,
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
}
