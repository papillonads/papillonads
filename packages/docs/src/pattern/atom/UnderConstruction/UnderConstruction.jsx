import React from 'react'
import { defaultProps, propTypes } from './UnderConstruction.prop'

export function UnderConstruction({ className }) {
  return (
    <div className={className}>
      Under construction{' '}
      <span role="img" aria-label="emoji">
        🙂
      </span>
    </div>
  )
}

UnderConstruction.defaultProps = defaultProps

UnderConstruction.propTypes = propTypes
