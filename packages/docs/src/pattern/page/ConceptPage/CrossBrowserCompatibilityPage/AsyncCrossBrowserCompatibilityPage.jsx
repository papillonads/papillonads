import React from 'react'
import { defaultProps, propTypes } from './CrossBrowserCompatibilityPage.prop'

const LazyCrossBrowserCompatibilityPage = React.lazy(() => import('./CrossBrowserCompatibilityPage'))

export function AsyncCrossBrowserCompatibilityPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyCrossBrowserCompatibilityPage />
    </React.Suspense>
  )
}

AsyncCrossBrowserCompatibilityPage.defaultProps = defaultProps

AsyncCrossBrowserCompatibilityPage.propTypes = propTypes
