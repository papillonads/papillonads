import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './SpacingPage.prop'

const LazySpacingPage = lazy(() => import('./SpacingPage'))

export function AsyncSpacingPage() {
  return (
    <Suspense fallback={null}>
      <LazySpacingPage />
    </Suspense>
  )
}

AsyncSpacingPage.defaultProps = defaultProps

AsyncSpacingPage.propTypes = propTypes
