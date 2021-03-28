import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './TruncatePage.prop'

const LazyTruncatePage = lazy(() => import('./TruncatePage'))

export function AsyncTruncatePage() {
  return (
    <Suspense fallback={null}>
      <LazyTruncatePage />
    </Suspense>
  )
}

AsyncTruncatePage.defaultProps = defaultProps

AsyncTruncatePage.propTypes = propTypes
