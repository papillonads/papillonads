import React from 'react'
import { typographyPageDefaultProps, typographyPagePropTypes } from './TypographyPage.prop'

const LazyTypographyPage = React.lazy(() => import('./TypographyPage'))

export function AsyncTypographyPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyTypographyPage />
    </React.Suspense>
  )
}

AsyncTypographyPage.defaultProps = typographyPageDefaultProps

AsyncTypographyPage.propTypes = typographyPagePropTypes
