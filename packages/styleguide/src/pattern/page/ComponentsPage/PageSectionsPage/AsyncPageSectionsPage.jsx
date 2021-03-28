import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './PageSectionsPage.prop'

const LazyPageSectionsPage = lazy(() => import('./PageSectionsPage'))

export function AsyncPageSectionsPage() {
  return (
    <Suspense fallback={null}>
      <LazyPageSectionsPage />
    </Suspense>
  )
}

AsyncPageSectionsPage.defaultProps = defaultProps

AsyncPageSectionsPage.propTypes = propTypes
