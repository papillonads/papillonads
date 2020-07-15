import React from 'react'
import { gridPageDefaultProps, gridPagePropTypes } from './GridPage.prop'

const LazyGridPage = React.lazy(() => import('./GridPage'))

export function AsyncGridPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyGridPage />
    </React.Suspense>
  )
}

AsyncGridPage.defaultProps = gridPageDefaultProps

AsyncGridPage.propTypes = gridPagePropTypes
