import { Fragment } from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './EditorToolbarButton.prop'
import styles from './EditorToolbarButton.scss'
import { IconButton } from '../IconButton'

export function EditorToolbarButton({ className, label, icon, iconButtonProps, isActive, disabled, onClick, withDropdown, ...otherProps }) {
  const classNames = cx(styles.EditorToolbarButton, className, {
    [styles['EditorToolbarButton--is-active']]: isActive,
  })

  return (
    <Fragment>
      <IconButton
        {...{ iconProps: { icon } }}
        buttonType="secondary"
        label={label}
        className={classNames}
        onClick={!disabled ? onClick : () => {}}
        disabled={disabled}
        withDropdown={withDropdown}
        {...iconButtonProps}
        {...otherProps}
      />
    </Fragment>
  )
}

EditorToolbarButton.propTypes = propTypes

EditorToolbarButton.defaultProps = defaultProps
