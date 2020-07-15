import React from 'react'
import { NotFoundTemplate } from '../../template/NotFoundTemplate'
import { notFoundPageDefaultProps, notFoundPagePropTypes } from './NotFoundPage.prop'

export function NotFoundPage({ location }) {
  return <NotFoundTemplate location={location} />
}

NotFoundPage.defaultProps = notFoundPageDefaultProps

NotFoundPage.propTypes = notFoundPagePropTypes

// Default export is required to use with React.lazy()
export default NotFoundPage
