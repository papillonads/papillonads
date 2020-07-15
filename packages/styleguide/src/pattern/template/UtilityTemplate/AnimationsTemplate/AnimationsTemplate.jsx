import React from 'react'
import { animationsTemplateDefaultProps, animationsTemplatePropTypes } from './AnimationsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './AnimationsTemplate.MainContent'

export function AnimationsTemplate() {
  return (
    <React.Fragment>
      <Navigation />
      <FlashAlert />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </React.Fragment>
  )
}

AnimationsTemplate.defaultProps = animationsTemplateDefaultProps

AnimationsTemplate.propTypes = animationsTemplatePropTypes
