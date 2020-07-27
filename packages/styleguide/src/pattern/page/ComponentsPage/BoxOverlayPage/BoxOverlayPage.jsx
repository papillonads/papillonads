import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { boxOverlayPageDefaultProps, boxOverlayPagePropTypes } from './BoxOverlayPage.prop'

export function BoxOverlayPage() {
  return <ComponentsTemplate.BoxOverlay />
}

BoxOverlayPage.defaultProps = boxOverlayPageDefaultProps

BoxOverlayPage.propTypes = boxOverlayPagePropTypes

// Default export is required to use with React.lazy()
export default BoxOverlayPage
