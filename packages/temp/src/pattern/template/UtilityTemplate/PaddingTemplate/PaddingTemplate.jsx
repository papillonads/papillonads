import React from 'react'
import { paddingTemplateDefaultProps, paddingTemplatePropTypes } from './PaddingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './PaddingTemplate.MainContent'

export function PaddingTemplate() {
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

PaddingTemplate.defaultProps = paddingTemplateDefaultProps

PaddingTemplate.propTypes = paddingTemplatePropTypes
