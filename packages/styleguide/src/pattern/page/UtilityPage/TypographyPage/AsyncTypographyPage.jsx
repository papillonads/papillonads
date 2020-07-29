import React from 'react'
import { defaultProps, propTypes } from './TypographyPage.prop'

const LazyTypographyPage = React.lazy(() => import('./TypographyPage'))

export function AsyncTypographyPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyTypographyPage />
    </React.Suspense>
  )
}

AsyncTypographyPage.defaultProps = defaultProps

AsyncTypographyPage.propTypes = propTypes
