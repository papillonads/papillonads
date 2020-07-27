import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { avatarsPageDefaultProps, avatarsPagePropTypes } from './AvatarsPage.prop'

export function AvatarsPage() {
  return <ComponentsTemplate.Avatars />
}

AvatarsPage.defaultProps = avatarsPageDefaultProps

AvatarsPage.propTypes = avatarsPagePropTypes

// Default export is required to use with React.lazy()
export default AvatarsPage
