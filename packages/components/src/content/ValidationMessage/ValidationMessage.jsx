import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './ValidationMessage.prop'
import styles from './ValidationMessage.scss'
import { Icon } from '../Icon'

export function ValidationMessage({ className, children, ...otherProps }) {
  const classNames = cx(styles.ValidationMessage, className)

  return (
    <div {...otherProps} className={classNames}>
      <Icon icon="ErrorCircle" className={styles.ValidationMessage__icon} color="negative" />
      <p className={styles.ValidationMessage__text}>{children}</p>
    </div>
  )
}

ValidationMessage.propTypes = propTypes

ValidationMessage.defaultProps = defaultProps
