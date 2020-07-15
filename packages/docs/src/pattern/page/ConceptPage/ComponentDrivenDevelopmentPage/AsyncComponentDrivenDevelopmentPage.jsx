import React from 'react'
import { defaultProps, propTypes } from './ComponentDrivenDevelopmentPage.prop'

const LazyComponentDrivenDevelopmentPage = React.lazy(() => import('./ComponentDrivenDevelopmentPage'))

export function AsyncComponentDrivenDevelopmentPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyComponentDrivenDevelopmentPage />
    </React.Suspense>
  )
}

AsyncComponentDrivenDevelopmentPage.defaultProps = defaultProps

AsyncComponentDrivenDevelopmentPage.propTypes = propTypes
