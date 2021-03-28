import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BoxOverlayPage.prop'

const LazyBoxOverlayPage = lazy(() => import('./BoxOverlayPage'))

export function AsyncBoxOverlayPage() {
  return (
    <Suspense fallback={null}>
      <LazyBoxOverlayPage />
    </Suspense>
  )
}

AsyncBoxOverlayPage.defaultProps = defaultProps

AsyncBoxOverlayPage.propTypes = propTypes
