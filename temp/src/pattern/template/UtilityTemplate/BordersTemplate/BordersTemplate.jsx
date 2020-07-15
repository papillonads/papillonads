import React from 'react'
import { bordersTemplateDefaultProps, bordersTemplatePropTypes } from './BordersTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BordersTemplate.MainContent'

export function BordersTemplate() {
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

BordersTemplate.defaultProps = bordersTemplateDefaultProps

BordersTemplate.propTypes = bordersTemplatePropTypes
