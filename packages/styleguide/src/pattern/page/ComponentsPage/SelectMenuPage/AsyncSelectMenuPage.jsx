import React from 'react'
import { defaultProps, propTypes } from './SelectMenuPage.prop'

const LazySelectMenuPage = React.lazy(() => import('./SelectMenuPage'))

export function AsyncSelectMenuPage() {
  return (
    <React.Suspense fallback={null}>
      <LazySelectMenuPage />
    </React.Suspense>
  )
}

AsyncSelectMenuPage.defaultProps = defaultProps

AsyncSelectMenuPage.propTypes = propTypes
