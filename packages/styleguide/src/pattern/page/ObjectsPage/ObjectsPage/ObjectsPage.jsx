import React from 'react'
import { ObjectsTemplate } from '../../../template/ObjectsTemplate'
import { defaultProps, propTypes } from './ObjectsPage.prop'

export function ObjectsPage() {
  return <ObjectsTemplate.Objects />
}

ObjectsPage.defaultProps = defaultProps

ObjectsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ObjectsPage
