import React from 'react'
import { defaultProps, propTypes } from './AccessibilityPage.prop'

const LazyAccessibilityPage = React.lazy(() => import('./AccessibilityPage'))

export function AsyncAccessibilityPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyAccessibilityPage />
    </React.Suspense>
  )
}

AsyncAccessibilityPage.defaultProps = defaultProps

AsyncAccessibilityPage.propTypes = propTypes
