import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { boxedGroupsPageDefaultProps, boxedGroupsPagePropTypes } from './BoxedGroupsPage.prop'

export function BoxedGroupsPage() {
  return <ComponentsTemplate.BoxedGroups />
}

BoxedGroupsPage.defaultProps = boxedGroupsPageDefaultProps

BoxedGroupsPage.propTypes = boxedGroupsPagePropTypes

// Default export is required to use with React.lazy()
export default BoxedGroupsPage
