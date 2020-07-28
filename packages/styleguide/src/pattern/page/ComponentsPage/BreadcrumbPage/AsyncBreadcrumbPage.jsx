import React from 'react'
import { defaultProps, propTypes } from './BreadcrumbPage.prop'

const LazyBreadcrumbPage = React.lazy(() => import('./BreadcrumbPage'))

export function AsyncBreadcrumbPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBreadcrumbPage />
    </React.Suspense>
  )
}

AsyncBreadcrumbPage.defaultProps = defaultProps

AsyncBreadcrumbPage.propTypes = propTypes
