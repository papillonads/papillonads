import { propTypes as controlledInputPropTypes } from '../ControlledInput/ControlledInput.prop'

export const propTypes = controlledInputPropTypes

export const defaultProps = {
  required: false,
  disabled: false,
  type: 'radio',
  willBlurOnEsc: true,
}
