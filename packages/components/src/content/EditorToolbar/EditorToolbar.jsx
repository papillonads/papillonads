import cx from 'classnames'
import { propTypes, defaultProps } from './EditorToolbar.prop'
import styles from './EditorToolbar.scss'

export function EditorToolbar({ className, children, ...otherProps }) {
  const classNames = cx(styles.EditorToolbar, className)

  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  )
}

EditorToolbar.propTypes = propTypes

EditorToolbar.defaultProps = defaultProps
