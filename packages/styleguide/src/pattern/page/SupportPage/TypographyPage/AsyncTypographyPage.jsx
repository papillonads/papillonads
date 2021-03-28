import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './TypographyPage.prop'

const LazyTypographyPage = lazy(() => import('./TypographyPage'))

export function AsyncTypographyPage() {
  return (
    <Suspense fallback={null}>
      <LazyTypographyPage />
    </Suspense>
  )
}

AsyncTypographyPage.defaultProps = defaultProps

AsyncTypographyPage.propTypes = propTypes
