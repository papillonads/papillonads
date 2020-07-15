import React from 'react'
import { defaultProps, propTypes } from './BootstrapPage.prop'

const LazyBootstrapPage = React.lazy(() => import('./BootstrapPage'))

export function AsyncBootstrapPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBootstrapPage />
    </React.Suspense>
  )
}

AsyncBootstrapPage.defaultProps = defaultProps

AsyncBootstrapPage.propTypes = propTypes
