import React from 'react'
import { defaultProps, propTypes } from './ConceptPage.prop'

const LazyConceptPage = React.lazy(() => import('./ConceptPage'))

export function AsyncConceptPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyConceptPage />
    </React.Suspense>
  )
}

AsyncConceptPage.defaultProps = defaultProps

AsyncConceptPage.propTypes = propTypes
