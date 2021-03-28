import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './LabelsPage.prop'

const LazyLabelsPage = lazy(() => import('./LabelsPage'))

export function AsyncLabelsPage() {
  return (
    <Suspense fallback={null}>
      <LazyLabelsPage />
    </Suspense>
  )
}

AsyncLabelsPage.defaultProps = defaultProps

AsyncLabelsPage.propTypes = propTypes
