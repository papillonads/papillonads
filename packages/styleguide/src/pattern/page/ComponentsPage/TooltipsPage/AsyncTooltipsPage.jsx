import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './TooltipsPage.prop'

const LazyTooltipsPage = lazy(() => import('./TooltipsPage'))

export function AsyncTooltipsPage() {
  return (
    <Suspense fallback={null}>
      <LazyTooltipsPage />
    </Suspense>
  )
}

AsyncTooltipsPage.defaultProps = defaultProps

AsyncTooltipsPage.propTypes = propTypes
