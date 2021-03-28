import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ProgressPage.prop'

const LazyProgressPage = lazy(() => import('./ProgressPage'))

export function AsyncProgressPage() {
  return (
    <Suspense fallback={null}>
      <LazyProgressPage />
    </Suspense>
  )
}

AsyncProgressPage.defaultProps = defaultProps

AsyncProgressPage.propTypes = propTypes
