import React from 'react'
import { defaultProps, propTypes } from './NotFoundPage.prop'

const LazyNotFoundPage = React.lazy(() => import('./NotFoundPage'))

export function AsyncNotFoundPage({ location }) {
  return (
    <React.Suspense fallback={null}>
      <LazyNotFoundPage location={location} />
    </React.Suspense>
  )
}

AsyncNotFoundPage.defaultProps = defaultProps

AsyncNotFoundPage.propTypes = propTypes
