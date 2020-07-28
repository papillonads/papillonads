import React from 'react'
import { defaultProps, propTypes } from './BoxOverlayPage.prop'

const LazyBoxOverlayPage = React.lazy(() => import('./BoxOverlayPage'))

export function AsyncBoxOverlayPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBoxOverlayPage />
    </React.Suspense>
  )
}

AsyncBoxOverlayPage.defaultProps = defaultProps

AsyncBoxOverlayPage.propTypes = propTypes
