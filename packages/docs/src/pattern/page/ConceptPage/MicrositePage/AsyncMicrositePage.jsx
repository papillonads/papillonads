import React from 'react'
import { defaultProps, propTypes } from './MicrositePage.prop'

const LazyMicrositePage = React.lazy(() => import('./MicrositePage'))

export function AsyncMicrositePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMicrositePage />
    </React.Suspense>
  )
}

AsyncMicrositePage.defaultProps = defaultProps

AsyncMicrositePage.propTypes = propTypes
