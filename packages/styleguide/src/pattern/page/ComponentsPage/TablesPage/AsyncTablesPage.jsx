import React from 'react'
import { defaultProps, propTypes } from './TablesPage.prop'

const LazyTablesPage = React.lazy(() => import('./TablesPage'))

export function AsyncTablesPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyTablesPage />
    </React.Suspense>
  )
}

AsyncTablesPage.defaultProps = defaultProps

AsyncTablesPage.propTypes = propTypes
