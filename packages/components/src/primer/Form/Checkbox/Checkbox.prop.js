import { string, shape, oneOf, bool, func } from 'prop-types'

export const inputType = {
  checkbox: 'checkbox',
}

export const propTypes = {
  className: string,
  htmlFor: string,
  ariaAttr: shape({
    describedBy: string,
  }).isRequired,
  inputType: oneOf(Object.keys(inputType)),
  isChecked: bool,
  text: string,
  onChange: func.isRequired,
}

export const defaultProps = {
  className: null,
  htmlFor: 'checkbox',
  inputType: inputType.checkbox,
  isChecked: false,
  text: null,
}
