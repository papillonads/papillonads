import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './FormLabel.prop'
import styles from './FormLabel.scss'

export function FormLabel({ className, children, htmlFor, requiredText, required, ...otherProps }) {
  const classNames = cx(styles.FormLabel, className)

  return (
    <label className={classNames} htmlFor={htmlFor} {...otherProps}>
      {children}
      {required && !!requiredText.length && <span className={styles['FormLabel__required-text']}>({requiredText})</span>}
    </label>
  )
}

FormLabel.propTypes = propTypes

FormLabel.defaultProps = defaultProps
