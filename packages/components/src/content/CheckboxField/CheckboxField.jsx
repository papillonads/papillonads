import { propTypes, defaultProps } from './CheckboxField.prop'
import { ControlledInputField } from '../ControlledInputField'

export function CheckboxField({ ...otherProps }) {
  return <ControlledInputField {...otherProps} inputType="checkbox" />
}

CheckboxField.propTypes = propTypes

CheckboxField.defaultProps = defaultProps
