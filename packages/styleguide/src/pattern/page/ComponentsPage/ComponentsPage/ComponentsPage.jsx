import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { componentsPageDefaultProps, componentsPagePropTypes } from './ComponentsPage.prop'

export function ComponentsPage() {
  return <ComponentsTemplate.Components />
}

ComponentsPage.defaultProps = componentsPageDefaultProps

ComponentsPage.propTypes = componentsPagePropTypes

// Default export is required to use with React.lazy()
export default ComponentsPage
