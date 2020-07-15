import React from 'react'
import { breakpointsPageDefaultProps, breakpointsPagePropTypes } from './BreakpointsPage.prop'

const LazyBreakpointsPage = React.lazy(() => import('./BreakpointsPage'))

export function AsyncBreakpointsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBreakpointsPage />
    </React.Suspense>
  )
}

AsyncBreakpointsPage.defaultProps = breakpointsPageDefaultProps

AsyncBreakpointsPage.propTypes = breakpointsPagePropTypes
