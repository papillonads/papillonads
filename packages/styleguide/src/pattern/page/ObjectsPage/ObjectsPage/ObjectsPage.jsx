import React from 'react'
import { ObjectsTemplate } from '../../../template/ObjectsTemplate'
import { objectsPageDefaultProps, objectsPagePropTypes } from './ObjectsPage.prop'

export function ObjectsPage() {
  return <ObjectsTemplate.Objects />
}

ObjectsPage.defaultProps = objectsPageDefaultProps

ObjectsPage.propTypes = objectsPagePropTypes

// Default export is required to use with React.lazy()
export default ObjectsPage
