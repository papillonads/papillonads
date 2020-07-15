import React from 'react'
import { defaultProps, propTypes } from './LocalDevelopmentPage.prop'

const LazyLocalDevelopmentPage = React.lazy(() => import('./LocalDevelopmentPage'))

export function AsyncLocalDevelopmentPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyLocalDevelopmentPage />
    </React.Suspense>
  )
}

AsyncLocalDevelopmentPage.defaultProps = defaultProps

AsyncLocalDevelopmentPage.propTypes = propTypes
