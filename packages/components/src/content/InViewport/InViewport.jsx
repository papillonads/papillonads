import React, { useEffect } from 'react'
import cx from 'classnames'
import { isBrowser } from '@papillonads/library/browser'
import { throttle } from '@papillonads/library/event'
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
  let tGetDomPosition
  let nodeRef = React.createRef()
  let lastOverflowAt

  const tOnOverflowTop = onOverflowTop && throttle(onOverflowTop, 100)
  const tOnOverflowBottom = onOverflowBottom && throttle(onOverflowBottom, 100)
  const tOnOverflowRight = onOverflowRight && throttle(onOverflowRight, 100)
  const tOnOverflowLeft = onOverflowLeft && throttle(onOverflowLeft, 100)

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
    tGetDomPosition = throttle(getDomPosition, 600)
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
