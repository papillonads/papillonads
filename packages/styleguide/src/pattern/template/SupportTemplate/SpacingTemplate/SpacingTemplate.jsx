import React from 'react'
import { spacingTemplateDefaultProps, spacingTemplatePropTypes } from './SpacingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './SpacingTemplate.MainContent'

export function SpacingTemplate() {
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

SpacingTemplate.defaultProps = spacingTemplateDefaultProps

SpacingTemplate.propTypes = spacingTemplatePropTypes