import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './SubheadPage.prop'

const LazySubheadPage = lazy(() => import('./SubheadPage'))

export function AsyncSubheadPage() {
  return (
    <Suspense fallback={null}>
      <LazySubheadPage />
    </Suspense>
  )
}

AsyncSubheadPage.defaultProps = defaultProps

AsyncSubheadPage.propTypes = propTypes
