import React, { useEffect } from 'react'
import cx from 'classnames'
import { browser, event } from '@papillonads/library'
import { propTypes, defaultProps } from './InViewport.prop'
import styles from './InViewport.scss'

export function InViewport({
  className,
  offset,
  children,
  onOverflowBottom,
  onOverflowLeft,
  onOverflowRight,
  onOverflowTop,
  ...otherProps
}) {
  const { isBrowser } = browser
  const { throttle } = event

  let tGetDomPosition
  let nodeRef = React.createRef()
  let lastOverflowAt

  const tOnOverflowTop = onOverflowTop && throttle(100, onOverflowTop)
  const tOnOverflowBottom = onOverflowBottom && throttle(100, onOverflowBottom)
  const tOnOverflowRight = onOverflowRight && throttle(100, onOverflowRight)
  const tOnOverflowLeft = onOverflowLeft && throttle(100, onOverflowLeft)

  function handleOverflow(boundingClientRect, windowWidth, windowHeight) {
    const { top, left, bottom, right } = boundingClientRect

    const topThreshold = 0 - offset
    const leftThreshold = 0 - offset
    const rightThreshold = windowWidth + offset
    const bottomThreshold = windowHeight + offset

    if (top + right + bottom + left !== 0) {
      if (top < topThreshold && lastOverflowAt !== 'bottom') {
        lastOverflowAt = 'top'
        tOnOverflowTop && tOnOverflowTop() // eslint-disable-line
      } else if (left < leftThreshold && lastOverflowAt !== 'right') {
        lastOverflowAt = 'left'
        tOnOverflowLeft && tOnOverflowLeft() // eslint-disable-line
      } else if (bottom > bottomThreshold && lastOverflowAt !== 'top') {
        lastOverflowAt = 'bottom'
        tOnOverflowBottom && tOnOverflowBottom() // eslint-disable-line
      } else if (right > rightThreshold && lastOverflowAt !== 'left') {
        lastOverflowAt = 'right'
        tOnOverflowRight && tOnOverflowRight() // eslint-disable-line
      }
    }
  }

  function getDomPosition() {
    if (isBrowser && nodeRef) {
      const html = document.documentElement
      const boundingClientRect = nodeRef.getBoundingClientRect()
      const windowWidth = window.innerWidth || html.clientWidth
      const windowHeight = window.innerHeight || html.clientHeight
      handleOverflow(boundingClientRect, windowWidth, windowHeight)
    }
  }

  function bindEventListeners() {
    tGetDomPosition = throttle(600, getDomPosition)
    if (isBrowser) {
      window.addEventListener('scroll', tGetDomPosition, true)
      window.addEventListener('resize', tGetDomPosition)
    }
  }

  useEffect(() => {
    getDomPosition()
    bindEventListeners()

    return () => {
      if (isBrowser && tGetDomPosition) {
        window.removeEventListener('scroll', tGetDomPosition, true)
        window.removeEventListener('resize', tGetDomPosition)
      }
    }
  })

  const classNames = cx(styles.InViewport, className)

  return (
    <div
      ref={(ref) => {
        nodeRef = ref
      }}
      className={classNames}
      {...otherProps}
    >
      {children}
    </div>
  )
}

InViewport.propTypes = propTypes

InViewport.defaultProps = defaultProps
