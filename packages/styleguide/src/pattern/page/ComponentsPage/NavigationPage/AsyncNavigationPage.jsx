import React from 'react'
import { defaultProps, propTypes } from './NavigationPage.prop'

const LazyNavigationPage = React.lazy(() => import('./NavigationPage'))

export function AsyncNavigationPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyNavigationPage />
    </React.Suspense>
  )
}

AsyncNavigationPage.defaultProps = defaultProps

AsyncNavigationPage.propTypes = propTypes
