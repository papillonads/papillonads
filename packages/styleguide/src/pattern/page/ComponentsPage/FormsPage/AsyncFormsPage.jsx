import React from 'react'
import { defaultProps, propTypes } from './FormsPage.prop'

const LazyFormsPage = React.lazy(() => import('./FormsPage'))

export function AsyncFormsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyFormsPage />
    </React.Suspense>
  )
}

AsyncFormsPage.defaultProps = defaultProps

AsyncFormsPage.propTypes = propTypes
