import React from 'react'
import { defaultProps, propTypes } from './RuntimePage.prop'

const LazyRuntimePage = React.lazy(() => import('./RuntimePage'))

export function AsyncRuntimePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyRuntimePage />
    </React.Suspense>
  )
}

AsyncRuntimePage.defaultProps = defaultProps

AsyncRuntimePage.propTypes = propTypes
