import { Link } from 'react-router-dom'
import { primer } from '@papillonads/components'
import { docsPagePath } from '../../../route/path'
import { defaultProps, propTypes } from './NotFoundTemplate.prop'

const {
  Alert: { Alert, alertVariant },
} = primer

export function NotFoundTemplate() {
  return (
    <Alert className={alert} variant={alertVariant.error}>
      {`No match for route. Return to `}
      <Link to={docsPagePath}>Docs page</Link>
    </Alert>
  )
}

NotFoundTemplate.defaultProps = defaultProps

NotFoundTemplate.propTypes = propTypes
