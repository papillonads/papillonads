import React from 'react'
import { breadcrumbPageDefaultProps, breadcrumbPagePropTypes } from './BreadcrumbPage.prop'

const LazyBreadcrumbPage = React.lazy(() => import('./BreadcrumbPage'))

export function AsyncBreadcrumbPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBreadcrumbPage />
    </React.Suspense>
  )
}

AsyncBreadcrumbPage.defaultProps = breadcrumbPageDefaultProps

AsyncBreadcrumbPage.propTypes = breadcrumbPagePropTypes
