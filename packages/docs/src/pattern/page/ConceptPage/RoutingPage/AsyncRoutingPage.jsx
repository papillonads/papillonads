import React from 'react'
import { defaultProps, propTypes } from './RoutingPage.prop'

const LazyRoutingPage = React.lazy(() => import('./RoutingPage'))

export function AsyncRoutingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyRoutingPage />
    </React.Suspense>
  )
}

AsyncRoutingPage.defaultProps = defaultProps

AsyncRoutingPage.propTypes = propTypes
