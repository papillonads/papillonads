import { string, shape, oneOf, func, bool } from 'prop-types'

export const inputType = {
  text: 'text',
  password: 'password',
}

export const propTypes = {
  className: string,
  placeholder: string,
  ariaAttr: shape({
    label: string,
  }),
  inputType: oneOf(Object.keys(inputType)),
  initialValue: string,
  onChange: func.isRequired,
  onKeyUp: func.isRequired,
  onFocus: func,
  onBlur: func,
  readOnly: bool,
}

export const defaultProps = {
  className: null,
  placeholder: null,
  ariaAttr: {
    input: '',
  },
  inputType: inputType.text,
  initialValue: null,
  onFocus: () => {},
  onBlur: () => {},
  readOnly: false,
}
