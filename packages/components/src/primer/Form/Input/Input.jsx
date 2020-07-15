import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './Input.prop'
import styles from './Input.scss'
import formStyles from '../Form.scss'

export function Input({ className, placeholder, ariaAttr, inputType, value, onChange, onKeyUp, onFocus, onBlur, readOnly }) {
  return (
    <input
      className={cx(className, formStyles['form-control'], {
        [styles.readOnly]: readOnly === true,
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
    />
  )
}

Input.propTypes = propTypes

Input.defaultProps = defaultProps
