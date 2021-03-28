import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './NavigationPage.prop'

const LazyNavigationPage = lazy(() => import('./NavigationPage'))

export function AsyncNavigationPage() {
  return (
    <Suspense fallback={null}>
      <LazyNavigationPage />
    </Suspense>
  )
}

AsyncNavigationPage.defaultProps = defaultProps

AsyncNavigationPage.propTypes = propTypes
