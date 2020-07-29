import React from 'react'
import { defaultProps, propTypes } from './LabelsPage.prop'

const LazyLabelsPage = React.lazy(() => import('./LabelsPage'))

export function AsyncLabelsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyLabelsPage />
    </React.Suspense>
  )
}

AsyncLabelsPage.defaultProps = defaultProps

AsyncLabelsPage.propTypes = propTypes
