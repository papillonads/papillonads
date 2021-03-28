import cx from 'classnames'
import { propTypes, defaultProps } from './ControlledInputField.prop'
import styles from './ControlledInputField.scss'
import { FormLabel } from '../FormLabel'
import { HelpText } from '../HelpText'
import { ValidationMessage } from '../ValidationMessage'
import { ControlledInput } from '../ControlledInput'

export function ControlledInputField({
  className,
  id,
  labelIsLight,
  required,
  helpText,
  disabled,
  labelText,
  helpTextProps,
  formLabelProps,
  checked,
  value,
  validationMessage,
  onChange,
  children,
  inputType,
  inputProps,
  name,
  ...otherProps
}) {
  const classNames = cx(styles.ControlledInputField, className, {
    [styles['ControlledInputField--disabled']]: disabled,
  })

  return (
    <div className={classNames} {...otherProps}>
      <ControlledInput
        id={id}
        labelText={labelText}
        type={inputType}
        name={name}
        required={required}
        checked={checked}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={styles.ControlledInputField__input}
        {...inputProps}
      />
      <div className={styles['Checkbox__label-wrapper']}>
        <FormLabel
          className={cx(styles.ControlledInputField__label, {
            [styles['ControlledInputField__label--light']]: labelIsLight,
          })}
          required={required}
          htmlFor={id}
          {...formLabelProps}
        >
          {labelText}
        </FormLabel>
        {helpText && (
          <HelpText className={styles['ControlledInputField__help-text']} {...helpTextProps}>
            {helpText}
          </HelpText>
        )}
        {validationMessage && (
          <ValidationMessage className={styles['ControlledInputField__validation-message']}>{validationMessage}</ValidationMessage>
        )}
      </div>
    </div>
  )
}

ControlledInputField.propTypes = propTypes

ControlledInputField.defaultProps = defaultProps
