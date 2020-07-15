import { propTypes as controlledInputPropTypes, defaultProps as controlledInputDefaultProps } from '../ControlledInput/ControlledInput.prop'

export const propTypes = controlledInputPropTypes

export const defaultProps = {
  required: controlledInputDefaultProps.required,
  disabled: controlledInputDefaultProps.disabled,
  type: controlledInputDefaultProps.type,
  willBlurOnEsc: controlledInputDefaultProps.willBlurOnEsc,
}
