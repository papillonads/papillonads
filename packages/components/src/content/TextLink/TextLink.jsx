import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './TextLink.prop'
import styles from './TextLink.scss'
import { Icon } from '../Icon'
import { TabFocusTrap } from '../TabFocusTrap'

export function TextLink({ children, href, linkType, onClick, disabled, className, icon, text, iconPosition, ...otherProps }) {
  function renderIcon() {
    if (!icon) return undefined

    return (
      <div className={iconPosition === 'right' ? styles['TextLink__icon-wrapper--right'] : styles['TextLink__icon-wrapper']}>
        <Icon icon={icon} color={linkType} className={styles.TextLink__icon} />
      </div>
    )
  }

  const classNames = cx(styles.TextLink, className, {
    [styles[`TextLink--${linkType}`]]: linkType,
    [styles['TextLink--disabled']]: disabled,
  })

  const content = (
    <TabFocusTrap>
      {icon && iconPosition === 'left' && renderIcon()}
      {text || children}
      {icon && iconPosition === 'right' && renderIcon()}
    </TabFocusTrap>
  )

  if (href) {
    return (
      <a
        className={classNames}
        onClick={
          disabled
            ? (e) => {
                e.preventDefault()
              }
            : onClick
        }
        href={href}
        {...otherProps}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classNames} onClick={!disabled ? onClick : () => {}} disabled={disabled} {...otherProps}>
      {content}
    </button>
  )
}

TextLink.propTypes = propTypes

TextLink.defaultProps = defaultProps
