import cx from 'classnames'
import { propTypes, defaultProps } from './IconButton.prop'
import styles from './IconButton.scss'
import { TabFocusTrap } from '../TabFocusTrap'
import { Icon } from '../Icon'

export function IconButton({ label, iconProps, href, disabled, onClick, buttonType, withDropdown, className, ...otherProps }) {
  const classNames = cx(styles.IconButton, className, {
    [styles['IconButton--disabled']]: disabled,
    [styles[`IconButton--${buttonType}`]]: buttonType,
  })

  const elementProps = {
    className: classNames,
    onClick: !disabled ? onClick : undefined,
    ...otherProps,
  }

  const content = (
    <TabFocusTrap className={styles.IconButton__inner}>
      <Icon {...iconProps} className={cx(styles.IconButton__icon, iconProps.className)} />
      <span className={styles.IconButton__label}>{label}</span>
      {withDropdown && <Icon icon="ChevronDown" color="secondary" className={styles.IconButton__dropdown} />}
    </TabFocusTrap>
  )

  if (href) {
    if (disabled) {
      return <a {...elementProps}>{content}</a>
    }
    return (
      <a {...elementProps} href={href}>
        content
      </a>
    )
  }

  return (
    <button {...elementProps} type="button" disabled={disabled}>
      {content}
    </button>
  )
}

IconButton.propTypes = propTypes

IconButton.defaultProps = defaultProps
