import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { animationsPageDefaultProps, animationsPagePropTypes } from './AnimationsPage.prop'

export function AnimationsPage() {
  return <UtilityTemplate.Animations />
}

AnimationsPage.defaultProps = animationsPageDefaultProps

AnimationsPage.propTypes = animationsPagePropTypes

// Default export is required to use with React.lazy()
export default AnimationsPage
