import React from 'react'
import { ObjectsTemplate } from '../../../template/ObjectsTemplate'
import { layoutPageDefaultProps, layoutPagePropTypes } from './LayoutPage.prop'

export function LayoutPage() {
  return <ObjectsTemplate.Layout />
}

LayoutPage.defaultProps = layoutPageDefaultProps

LayoutPage.propTypes = layoutPagePropTypes

// Default export is required to use with React.lazy()
export default LayoutPage
