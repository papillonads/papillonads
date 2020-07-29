import React from 'react'
import { defaultProps, propTypes } from './UtilityPage.prop'

const LazyUtilityPage = React.lazy(() => import('./UtilityPage'))

export function AsyncUtilityPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyUtilityPage />
    </React.Suspense>
  )
}

AsyncUtilityPage.defaultProps = defaultProps

AsyncUtilityPage.propTypes = propTypes
