import React from 'react'
import { colorSystemTemplateDefaultProps, colorSystemTemplatePropTypes } from './ColorSystemTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ColorSystemTemplate.MainContent'

export function ColorSystemTemplate() {
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

ColorSystemTemplate.defaultProps = colorSystemTemplateDefaultProps

ColorSystemTemplate.propTypes = colorSystemTemplatePropTypes