import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './FormsPage.prop'

const LazyFormsPage = lazy(() => import('./FormsPage'))

export function AsyncFormsPage() {
  return (
    <Suspense fallback={null}>
      <LazyFormsPage />
    </Suspense>
  )
}

AsyncFormsPage.defaultProps = defaultProps

AsyncFormsPage.propTypes = propTypes
