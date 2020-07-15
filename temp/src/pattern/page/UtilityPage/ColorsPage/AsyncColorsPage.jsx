import React from 'react'
import { colorsPageDefaultProps, colorsPagePropTypes } from './ColorsPage.prop'

const LazyColorsPage = React.lazy(() => import('./ColorsPage'))

export function AsyncColorsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyColorsPage />
    </React.Suspense>
  )
}

AsyncColorsPage.defaultProps = colorsPageDefaultProps

AsyncColorsPage.propTypes = colorsPagePropTypes
