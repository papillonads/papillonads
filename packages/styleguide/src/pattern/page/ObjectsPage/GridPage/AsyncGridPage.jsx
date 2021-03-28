import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './GridPage.prop'

const LazyGridPage = lazy(() => import('./GridPage'))

export function AsyncGridPage() {
  return (
    <Suspense fallback={null}>
      <LazyGridPage />
    </Suspense>
  )
}

AsyncGridPage.defaultProps = defaultProps

AsyncGridPage.propTypes = propTypes
