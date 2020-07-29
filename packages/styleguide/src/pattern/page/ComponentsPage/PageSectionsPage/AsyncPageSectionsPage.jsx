import React from 'react'
import { defaultProps, propTypes } from './PageSectionsPage.prop'

const LazyPageSectionsPage = React.lazy(() => import('./PageSectionsPage'))

export function AsyncPageSectionsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyPageSectionsPage />
    </React.Suspense>
  )
}

AsyncPageSectionsPage.defaultProps = defaultProps

AsyncPageSectionsPage.propTypes = propTypes
