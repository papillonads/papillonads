import React from 'react'
import { Link } from 'react-router-dom'
import { homePagePath } from '../../../route/path'
import { NoMatch } from '../../atom/NoMatch'
import { defaultProps, propTypes } from './NotFoundTemplate.prop'

export function NotFoundTemplate({ location }) {
  return (
    <div>
      <NoMatch location={location} />
      Back to <Link to={homePagePath}>Home Page</Link>
    </div>
  )
}

NotFoundTemplate.defaultProps = defaultProps

NotFoundTemplate.propTypes = propTypes
