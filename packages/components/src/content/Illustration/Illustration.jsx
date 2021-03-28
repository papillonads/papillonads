import cx from 'classnames'
import { propTypes, defaultProps } from './Illustration.prop'
import { illustrationComponents } from './Illustration.part'
import styles from './Illustration.scss'

export function Illustration({ className, illustration, ...otherProps }) {
  const classNames = cx(styles.Illustration, className)

  const Element = illustrationComponents[illustration]

  return <Element {...otherProps} className={classNames} />
}

Illustration.propTypes = propTypes

Illustration.defaultProps = defaultProps
