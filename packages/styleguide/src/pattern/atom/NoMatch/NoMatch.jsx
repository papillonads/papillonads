import React from 'react'
import { noMatchDefaultProps, noMatchPropTypes } from './NoMatch.prop'

export function NoMatch({ className, location }) {
  return (
    <div className={className}>
      <h3>No match for {location.pathname}</h3>
    </div>
  )
}

NoMatch.defaultProps = noMatchDefaultProps

NoMatch.propTypes = noMatchPropTypes
