import React from 'react'
import { gridTemplateDefaultProps, gridTemplatePropTypes } from './GridTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './GridTemplate.MainContent'

export function GridTemplate() {
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

GridTemplate.defaultProps = gridTemplateDefaultProps

GridTemplate.propTypes = gridTemplatePropTypes
