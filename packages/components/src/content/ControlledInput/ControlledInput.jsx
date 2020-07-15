import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './ControlledInput.prop'
import styles from './ControlledInput.scss'

export function ControlledInput({
  className,
  id,
  required,
  disabled,
  onFocus,
  onBlur,
  name,
  onChange,
  checked,
  value,
  type,
  labelText,
  willBlurOnEsc,
  ...otherProps
}) {
  function handleKeyDown(e) {
    const ESC = 27

    if (e.keyCode === ESC && willBlurOnEsc) {
      e.currentTarget.blur()
    }
  }

  const classNames = cx(styles.ControlledInput, className, {
    [styles['ControlledInput--disabled']]: disabled,
  })

  return (
    <input
      className={classNames}
      value={value}
      name={name}
      checked={checked}
      type={type}
      onChange={(e) => {
        if (onChange) {
          onChange(e)
        }
      }}
      onBlur={(e) => {
        if (onBlur) {
          onBlur(e)
        }
      }}
      onFocus={(e) => {
        if (onFocus) {
          onFocus(e)
        }
      }}
      aria-label={labelText}
      id={id}
      required={required}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      {...otherProps}
    />
  )
}

ControlledInput.propTypes = propTypes

ControlledInput.defaultProps = defaultProps
