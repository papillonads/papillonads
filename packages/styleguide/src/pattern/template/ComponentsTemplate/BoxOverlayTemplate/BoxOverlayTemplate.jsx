import React from 'react'
import { boxOverlayTemplateDefaultProps, boxOverlayTemplatePropTypes } from './BoxOverlayTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BoxOverlayTemplate.MainContent'

export function BoxOverlayTemplate() {
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

BoxOverlayTemplate.defaultProps = boxOverlayTemplateDefaultProps

BoxOverlayTemplate.propTypes = boxOverlayTemplatePropTypes
