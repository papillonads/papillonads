import React from 'react'
import cx from 'classnames'
import paddingStyles from '@papillonads/css/build/primer/utilities/padding.scss'
import { propTypes, defaultProps, toastVariant } from './Toast.prop'
import styles from './Toast.scss'
import { Icon, iconName, iconSize } from '../Icon'

export function Toast({ className, variant, text, isDismissable, onClick }) {
  return (
    <div className={cx(className, paddingStyles['p-1'])}>
      <div
        className={cx(styles.Toast, {
          [styles['Toast--success']]: variant === toastVariant.success,
          [styles['Toast--warning']]: variant === toastVariant.warning,
          [styles['Toast--error']]: variant === toastVariant.error,
        })}
      >
        <span className={styles['Toast-icon']}>
          {variant === toastVariant.info && <Icon icon={iconName.Info} />}
          {variant === toastVariant.success && <Icon icon={iconName.Check} />}
          {variant === toastVariant.warning && <Icon icon={iconName.Alert} />}
          {variant === toastVariant.error && <Icon icon={iconName.Stop} />}
        </span>
        <span className={styles['Toast-content']}>{text}</span>
        {isDismissable && (
          <button type="button" className={styles['Toast-dismissButton']} onClick={onClick}>
            <Icon icon={iconName.X} size={iconSize.small} />
          </button>
        )}
      </div>
    </div>
  )
}

Toast.propTypes = propTypes

Toast.defaultProps = defaultProps
