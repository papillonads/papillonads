import React from 'react'
import { boxOverlayPageDefaultProps, boxOverlayPagePropTypes } from './BoxOverlayPage.prop'

const LazyBoxOverlayPage = React.lazy(() => import('./BoxOverlayPage'))

export function AsyncBoxOverlayPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBoxOverlayPage />
    </React.Suspense>
  )
}

AsyncBoxOverlayPage.defaultProps = boxOverlayPageDefaultProps

AsyncBoxOverlayPage.propTypes = boxOverlayPagePropTypes
