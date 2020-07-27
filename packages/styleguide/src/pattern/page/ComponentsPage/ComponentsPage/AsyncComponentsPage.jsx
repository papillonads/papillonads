import React from 'react'
import { componentsPageDefaultProps, componentsPagePropTypes } from './ComponentsPage.prop'

const LazyComponentsPage = React.lazy(() => import('./ComponentsPage'))

export function AsyncComponentsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyComponentsPage />
    </React.Suspense>
  )
}

AsyncComponentsPage.defaultProps = componentsPageDefaultProps

AsyncComponentsPage.propTypes = componentsPagePropTypes
