import React from 'react'
import { defaultProps, propTypes } from './BreakpointsPage.prop'

const LazyBreakpointsPage = React.lazy(() => import('./BreakpointsPage'))

export function AsyncBreakpointsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBreakpointsPage />
    </React.Suspense>
  )
}

AsyncBreakpointsPage.defaultProps = defaultProps

AsyncBreakpointsPage.propTypes = propTypes
