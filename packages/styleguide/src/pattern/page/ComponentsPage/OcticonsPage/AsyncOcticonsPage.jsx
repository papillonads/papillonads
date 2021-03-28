import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './OcticonsPage.prop'

const LazyOcticonsPage = lazy(() => import('./OcticonsPage'))

export function AsyncOcticonsPage() {
  return (
    <Suspense fallback={null}>
      <LazyOcticonsPage />
    </Suspense>
  )
}

AsyncOcticonsPage.defaultProps = defaultProps

AsyncOcticonsPage.propTypes = propTypes
