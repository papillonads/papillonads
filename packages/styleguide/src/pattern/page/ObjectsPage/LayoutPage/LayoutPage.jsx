import React from 'react'
import { ObjectsTemplate } from '../../../template/ObjectsTemplate'
import { defaultProps, propTypes } from './LayoutPage.prop'

export function LayoutPage() {
  return <ObjectsTemplate.Layout />
}

LayoutPage.defaultProps = defaultProps

LayoutPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default LayoutPage
