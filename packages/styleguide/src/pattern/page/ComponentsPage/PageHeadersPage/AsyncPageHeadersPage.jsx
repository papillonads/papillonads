import React from 'react'
import { defaultProps, propTypes } from './PageHeadersPage.prop'

const LazyPageHeadersPage = React.lazy(() => import('./PageHeadersPage'))

export function AsyncPageHeadersPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyPageHeadersPage />
    </React.Suspense>
  )
}

AsyncPageHeadersPage.defaultProps = defaultProps

AsyncPageHeadersPage.propTypes = propTypes
