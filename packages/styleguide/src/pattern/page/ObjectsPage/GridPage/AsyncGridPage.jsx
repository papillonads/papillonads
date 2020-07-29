import React from 'react'
import { defaultProps, propTypes } from './GridPage.prop'

const LazyGridPage = React.lazy(() => import('./GridPage'))

export function AsyncGridPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyGridPage />
    </React.Suspense>
  )
}

AsyncGridPage.defaultProps = defaultProps

AsyncGridPage.propTypes = propTypes
