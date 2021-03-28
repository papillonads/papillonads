import cx from 'classnames'
import { propTypes, defaultProps } from './Note.prop'
import styles from './Note.scss'
import { Icon } from '../Icon'
import { iconName } from '../Icon/Icon.prop'

export function Note({ className, noteType, title, children, ...otherProps }) {
  const Icons = {
    primary: iconName.InfoCircle,
    positive: iconName.CheckCircle,
    negative: iconName.Warning,
    warning: iconName.Warning,
  }

  const icon = Icons[noteType]
  if (!icon) {
    throw new Error(`Intent ${noteType} is not supported in Note component.`)
  }

  return (
    <div
      className={cx(styles.Note, className, {
        [styles['Note--primary']]: noteType === 'primary',
        [styles['Note--positive']]: noteType === 'positive',
        [styles['Note--negative']]: noteType === 'negative',
        [styles['Note--warning']]: noteType === 'warning',
      })}
      {...otherProps}
    >
      <div className={styles.Note__icon}>
        <Icon icon={icon} color={noteType} />
      </div>
      <div className={styles.Note__info}>
        {title && <div className={styles.Note__title}>{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  )
}

Note.propTypes = propTypes

Note.defaultProps = defaultProps
