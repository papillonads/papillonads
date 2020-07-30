import React from 'react'
import { defaultProps, propTypes } from './TooltipsPage.prop'

const LazyTooltipsPage = React.lazy(() => import('./TooltipsPage'))

export function AsyncTooltipsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyTooltipsPage />
    </React.Suspense>
  )
}

AsyncTooltipsPage.defaultProps = defaultProps

AsyncTooltipsPage.propTypes = propTypes
