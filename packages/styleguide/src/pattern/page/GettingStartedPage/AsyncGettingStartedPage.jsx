import React from 'react'
import { defaultProps, propTypes } from './GettingStartedPage.prop'

const LazyGettingStartedPage = React.lazy(() => import('./GettingStartedPage'))

export function AsyncGettingStartedPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyGettingStartedPage />
    </React.Suspense>
  )
}

AsyncGettingStartedPage.defaultProps = defaultProps

AsyncGettingStartedPage.propTypes = propTypes
