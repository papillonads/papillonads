import React from 'react'
import { flashAlertDefaultProps, flashAlertPropTypes } from './FlashAlert.prop'

export function FlashAlert() {
  return (
    <div className="flash flash-full text-center flash-error">
      This style guide will be deprecated soon! Please visit <a href="https://primer.style/css">primer.style/css</a> for the most up-to-date
      documentation.
    </div>
  )
}

FlashAlert.defaultProps = flashAlertDefaultProps

FlashAlert.propTypes = flashAlertPropTypes
