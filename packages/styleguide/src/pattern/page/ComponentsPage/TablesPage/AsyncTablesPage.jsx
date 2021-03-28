import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './TablesPage.prop'

const LazyTablesPage = lazy(() => import('./TablesPage'))

export function AsyncTablesPage() {
  return (
    <Suspense fallback={null}>
      <LazyTablesPage />
    </Suspense>
  )
}

AsyncTablesPage.defaultProps = defaultProps

AsyncTablesPage.propTypes = propTypes
