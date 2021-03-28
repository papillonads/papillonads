import cx from 'classnames'
import { propTypes, defaultProps } from './Spinner.prop'
import styles from './Spinner.scss'

export function Spinner({ className, size, customSize, color, ...otherProps }) {
  const classNames = cx(styles.Spinner, className, {
    [styles[`Spinner--${size}`]]: size,
    [styles[`Spinner--${color}`]]: color,
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={classNames}
      style={customSize ? { height: `${customSize}vh`, width: `${customSize}vw` } : {}}
      {...otherProps}
    >
      <title>Loading…</title>
      <path d="M2,10a8,8,0,0,1,8-8V0a10,10,0,0,0,0,20V18A8,8,0,0,1,2,10Z" />
      <path d="M10,0V2a8,8,0,0,1,0,16v2A10,10,0,0,0,10,0Z" style={{ opacity: 0.4 }} />
    </svg>
  )
}

Spinner.propTypes = propTypes

Spinner.defaultProps = defaultProps
