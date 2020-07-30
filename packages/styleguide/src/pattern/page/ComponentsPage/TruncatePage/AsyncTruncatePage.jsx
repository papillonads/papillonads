import React from 'react'
import { defaultProps, propTypes } from './TruncatePage.prop'

const LazyTruncatePage = React.lazy(() => import('./TruncatePage'))

export function AsyncTruncatePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyTruncatePage />
    </React.Suspense>
  )
}

AsyncTruncatePage.defaultProps = defaultProps

AsyncTruncatePage.propTypes = propTypes
