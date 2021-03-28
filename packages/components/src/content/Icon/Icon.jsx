import cx from 'classnames'
import { propTypes, defaultProps } from './Icon.prop'
import { iconComponents } from './Icon.part'
import styles from './Icon.scss'

export function Icon({ className, icon, size, color, ...otherProps }) {
  const classNames = cx(
    styles.Icon,
    {
      [styles[`Icon--${size}`]]: size,
      [styles[`Icon--${color}`]]: color,
      [styles['Icon--trimmed']]: icon.toLowerCase().includes('trimmed'),
    },
    className,
  )

  const Element = iconComponents[icon]

  return <Element className={classNames} {...otherProps} />
}

Icon.propTypes = propTypes

Icon.defaultProps = defaultProps
