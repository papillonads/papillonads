import React from 'react'
import { defaultProps, propTypes } from './TableObjectPage.prop'

const LazyTableObjectPage = React.lazy(() => import('./TableObjectPage'))

export function AsyncTableObjectPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyTableObjectPage />
    </React.Suspense>
  )
}

AsyncTableObjectPage.defaultProps = defaultProps

AsyncTableObjectPage.propTypes = propTypes
