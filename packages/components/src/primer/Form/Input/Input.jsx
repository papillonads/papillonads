import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps, inputState } from './Input.prop'
import styles from './Input.scss'
import formStyles from '../Form.scss'

export function Input({
  dataTest,
  className,
  placeholder,
  ariaAttr,
  inputType,
  value,
  onChange,
  onKeyUp,
  onFocus,
  onBlur,
  autoFocus,
  state,
}) {
  return (
    <input
      data-test={dataTest}
      className={cx(className, formStyles['form-control'], {
        [styles['input-inactive']]: state === inputState.inactive,
      })}
      value={value}
      onChange={(event) => {
        onChange(event)
      }}
      onKeyUp={(event) => {
        onKeyUp(event)
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      type={inputType}
      placeholder={placeholder}
      aria-label={ariaAttr.label}
      autoFocus={autoFocus} // eslint-disable-line
    />
  )
}

Input.propTypes = propTypes

Input.defaultProps = defaultProps
