import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { breadcrumbPageDefaultProps, breadcrumbPagePropTypes } from './BreadcrumbPage.prop'

export function BreadcrumbPage() {
  return <ComponentsTemplate.Breadcrumb />
}

BreadcrumbPage.defaultProps = breadcrumbPageDefaultProps

BreadcrumbPage.propTypes = breadcrumbPagePropTypes

// Default export is required to use with React.lazy()
export default BreadcrumbPage
