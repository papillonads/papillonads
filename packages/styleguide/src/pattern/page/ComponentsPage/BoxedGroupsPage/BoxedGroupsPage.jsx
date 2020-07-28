import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './BoxedGroupsPage.prop'

export function BoxedGroupsPage() {
  return <ComponentsTemplate.BoxedGroups />
}

BoxedGroupsPage.defaultProps = defaultProps

BoxedGroupsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BoxedGroupsPage
