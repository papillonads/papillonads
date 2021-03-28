import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { primer } from '@papillonads/components'
import { homePagePath } from '../../../route/path'
import { defaultProps, propTypes } from './NotFoundTemplate.prop'

const {
  Alert: { Alert, alertVariant },
} = primer

export function NotFoundTemplate({ location }) {
  return (
    <Fragment>
      <Alert className={alert} variant={alertVariant.error}>
        {`No match for '${location.pathname}'. Return to `}
        <Link to={homePagePath}>home page.</Link>
      </Alert>
    </Fragment>
  )
}

NotFoundTemplate.defaultProps = defaultProps

NotFoundTemplate.propTypes = propTypes
