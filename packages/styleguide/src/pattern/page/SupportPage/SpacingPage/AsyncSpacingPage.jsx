import React from 'react'
import { defaultProps, propTypes } from './SpacingPage.prop'

const LazySpacingPage = React.lazy(() => import('./SpacingPage'))

export function AsyncSpacingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazySpacingPage />
    </React.Suspense>
  )
}

AsyncSpacingPage.defaultProps = defaultProps

AsyncSpacingPage.propTypes = propTypes
