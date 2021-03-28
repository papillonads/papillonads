import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BreakpointsPage.prop'

const LazyBreakpointsPage = lazy(() => import('./BreakpointsPage'))

export function AsyncBreakpointsPage() {
  return (
    <Suspense fallback={null}>
      <LazyBreakpointsPage />
    </Suspense>
  )
}

AsyncBreakpointsPage.defaultProps = defaultProps

AsyncBreakpointsPage.propTypes = propTypes
