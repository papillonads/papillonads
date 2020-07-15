import React from 'react'
import { defaultProps, propTypes } from './AccesibilityPage.prop'

const LazyAccesibilityPage = React.lazy(() => import('./AccesibilityPage'))

export function AsyncAccesibilityPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyAccesibilityPage />
    </React.Suspense>
  )
}

AsyncAccesibilityPage.defaultProps = defaultProps

AsyncAccesibilityPage.propTypes = propTypes
