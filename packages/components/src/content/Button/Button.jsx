import React from 'react'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { propTypes, defaultProps } from './Button.prop'
import styles from './Button.scss'
import { Icon } from '../Icon'
import { TabFocusTrap } from '../TabFocusTrap'
import { Spinner } from '../Spinner'

export function Button({
  className,
  children,
  icon,
  buttonType,
  size,
  isFullWidth,
  onBlur,
  onClick,
  loading,
  disabled,
  indicateDropdown,
  href,
  type,
  isActive,
  ...otherProps
}) {
  const classNames = cx(styles.Button, className, styles[`Button--${buttonType}`], {
    [styles['Button--disabled']]: disabled,
    [styles[`Button--${size}`]]: size,
    [styles['Button--full-width']]: isFullWidth,
    [styles['Button--is-active']]: isActive,
  })

  const iconColor = buttonType === 'muted' || buttonType === 'naked' ? 'secondary' : 'white'

  const Element = href ? 'a' : 'button'

  return (
    <Element
      onBlur={(e) => {
        if (onBlur && !disabled) {
          onBlur(e)
        }
      }}
      onClick={(e) => {
        if (onClick && !disabled && !loading) {
          onClick(e)
        }
      }}
      className={classNames}
      disabled={disabled}
      href={!disabled ? href : null}
      type={type}
      {...otherProps}
    >
      <TabFocusTrap className={styles['Button__inner-wrapper']}>
        {icon && <Icon className={styles.Button__icon} size={size === 'small' ? 'tiny' : 'small'} icon={icon} color={iconColor} />}
        {children && <span className={styles.Button__label}>{children}</span>}
        {indicateDropdown && <Icon className={styles['Button__dropdown-icon']} icon="ArrowDown" color={iconColor} />}
        <CSSTransition
          in={loading}
          timeout={1000}
          classNames={{
            enter: styles['Button--spinner--enter'],
            enterActive: styles['Button--spinner-active'],
            exit: styles['Button--spinner--exit'],
            exitActive: styles['Button--spinner-exit-active'],
          }}
          mountOnEnter
          unmountOnExit
        >
          <Spinner
            className={styles.Button__spinner}
            size="small"
            color={buttonType === 'muted' || buttonType === 'naked' ? 'default' : 'white'}
          />
        </CSSTransition>
      </TabFocusTrap>
    </Element>
  )
}

Button.propTypes = propTypes

Button.defaultProps = defaultProps
