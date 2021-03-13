import React from 'react'
import { primer } from '@papillonads/components'
import { Link } from 'react-router-dom'
import { homePagePath } from '../../../route/path'
import { defaultProps, propTypes } from './NotFoundTemplate.prop'

const {
  Alert: { Alert, alertVariant },
} = primer

export function NotFoundTemplate({ location }) {
  return (
    <React.Fragment>
      <Alert className={alert} variant={alertVariant.error}>
        {`No match for '${location.pathname}'. Return to `}
        <Link to={homePagePath}>home page.</Link>
      </Alert>
    </React.Fragment>
  )
}

NotFoundTemplate.defaultProps = defaultProps

NotFoundTemplate.propTypes = propTypes
