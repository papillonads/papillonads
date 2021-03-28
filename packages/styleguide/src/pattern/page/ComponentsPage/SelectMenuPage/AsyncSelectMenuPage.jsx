import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './SelectMenuPage.prop'

const LazySelectMenuPage = lazy(() => import('./SelectMenuPage'))

export function AsyncSelectMenuPage() {
  return (
    <Suspense fallback={null}>
      <LazySelectMenuPage />
    </Suspense>
  )
}

AsyncSelectMenuPage.defaultProps = defaultProps

AsyncSelectMenuPage.propTypes = propTypes
