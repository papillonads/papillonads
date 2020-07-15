import { string, arrayOf, shape, bool, node, func } from 'prop-types'

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
      link: func,
      isSelected: bool,
    }),
  ).isRequired,
  actions: arrayOf(node),
  onClick: func.isRequired,
  children: node,
}

export const defaultProps = {
  className: null,
  actions: null,
  children: null,
}
