import React from 'react'
import { defaultProps, propTypes } from './MarginPage.prop'

const LazyMarginPage = React.lazy(() => import('./MarginPage'))

export function AsyncMarginPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarginPage />
    </React.Suspense>
  )
}

AsyncMarginPage.defaultProps = defaultProps

AsyncMarginPage.propTypes = propTypes
