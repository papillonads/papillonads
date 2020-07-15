import React from 'react'
import { utilityPageDefaultProps, utilityPagePropTypes } from './UtilityPage.prop'

const LazyUtilityPage = React.lazy(() => import('./UtilityPage'))

export function AsyncUtilityPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyUtilityPage />
    </React.Suspense>
  )
}

AsyncUtilityPage.defaultProps = utilityPageDefaultProps

AsyncUtilityPage.propTypes = utilityPagePropTypes
