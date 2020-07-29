import React from 'react'
import { defaultProps, propTypes } from './BoxShadowPage.prop'

const LazyBoxShadowPage = React.lazy(() => import('./BoxShadowPage'))

export function AsyncBoxShadowPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBoxShadowPage />
    </React.Suspense>
  )
}

AsyncBoxShadowPage.defaultProps = defaultProps

AsyncBoxShadowPage.propTypes = propTypes
