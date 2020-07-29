import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './PageHeadersPage.prop'

export function PageHeadersPage() {
  return <ComponentsTemplate.PageHeaders />
}

PageHeadersPage.defaultProps = defaultProps

PageHeadersPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default PageHeadersPage
