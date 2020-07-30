import React from 'react'
import { defaultProps, propTypes } from './ProgressPage.prop'

const LazyProgressPage = React.lazy(() => import('./ProgressPage'))

export function AsyncProgressPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyProgressPage />
    </React.Suspense>
  )
}

AsyncProgressPage.defaultProps = defaultProps

AsyncProgressPage.propTypes = propTypes
