import { string, arrayOf, shape, number, oneOf, func } from 'prop-types'

export const flexGridSelection = {
  checkbox: 'checkbox',
  radio: 'radio',
}

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
  selection: oneOf(Object.keys(flexGridSelection)),
  sort: shape({
    index: number,
    value: string,
    order: string,
  }).isRequired,
  onChange: func,
  onClick: func,
  onDoubleClick: func,
}

export const defaultProps = {
  className: null,
  idIndex: -1,
  isSelectedIndex: -1,
  selection: flexGridSelection.checkbox,
  onChange: () => {},
  onClick: () => {},
  onDoubleClick: () => {},
}
