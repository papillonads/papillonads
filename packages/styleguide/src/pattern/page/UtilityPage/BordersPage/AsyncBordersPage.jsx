import React from 'react'
import { bordersPageDefaultProps, bordersPagePropTypes } from './BordersPage.prop'

const LazyBordersPage = React.lazy(() => import('./BordersPage'))

export function AsyncBordersPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBordersPage />
    </React.Suspense>
  )
}

AsyncBordersPage.defaultProps = bordersPageDefaultProps

AsyncBordersPage.propTypes = bordersPagePropTypes
