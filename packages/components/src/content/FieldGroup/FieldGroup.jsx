import cx from 'classnames'
import { propTypes, defaultProps } from './FieldGroup.prop'
import styles from './FieldGroup.scss'

export function FieldGroup({ className, children, row, ...otherProps }) {
  const classNames = cx(styles.FieldGroup, styles.className, {
    [styles['FieldGroup--row']]: row,
  })

  return (
    <div {...otherProps} className={classNames}>
      {React.Children.map(children, (child) => (
        <div className={styles.FieldGroup__item}>{child}</div>
      ))}
    </div>
  )
}

FieldGroup.propTypes = propTypes

FieldGroup.defaultProps = defaultProps
