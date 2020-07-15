import React from 'react'
import { supportTemplateDefaultProps, supportTemplatePropTypes } from './SupportTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './SupportTemplate.MainContent'

export function SupportTemplate() {
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

SupportTemplate.defaultProps = supportTemplateDefaultProps

SupportTemplate.propTypes = supportTemplatePropTypes
