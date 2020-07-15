import { string, oneOf, bool, func } from 'prop-types'

export const inputType = {
  radio: 'radio',
}

export const propTypes = {
  className: string,
  htmlFor: string,
  inputType: oneOf(Object.keys(inputType)),
  name: string.isRequired,
  isChecked: bool,
  text: string,
  onChange: func.isRequired,
}

export const defaultProps = {
  className: null,
  htmlFor: 'checkbox',
  inputType: inputType.radio,
  isChecked: false,
  text: null,
}
