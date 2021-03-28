import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BordersPage.prop'

const LazyBordersPage = lazy(() => import('./BordersPage'))

export function AsyncBordersPage() {
  return (
    <Suspense fallback={null}>
      <LazyBordersPage />
    </Suspense>
  )
}

AsyncBordersPage.defaultProps = defaultProps

AsyncBordersPage.propTypes = propTypes
