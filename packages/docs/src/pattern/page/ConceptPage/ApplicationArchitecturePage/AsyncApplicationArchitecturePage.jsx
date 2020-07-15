import React from 'react'
import { defaultProps, propTypes } from './ApplicationArchitecturePage.prop'

const LazyApplicationArchitecturePage = React.lazy(() => import('./ApplicationArchitecturePage'))

export function AsyncApplicationArchitecturePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyApplicationArchitecturePage />
    </React.Suspense>
  )
}

AsyncApplicationArchitecturePage.defaultProps = defaultProps

AsyncApplicationArchitecturePage.propTypes = propTypes
