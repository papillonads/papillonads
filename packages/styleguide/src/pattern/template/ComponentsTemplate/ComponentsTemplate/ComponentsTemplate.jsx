import React from 'react'
import { componentsTemplateDefaultProps, componentsTemplatePropTypes } from './ComponentsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ComponentsTemplate.MainContent'

export function ComponentsTemplate() {
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

ComponentsTemplate.defaultProps = componentsTemplateDefaultProps

ComponentsTemplate.propTypes = componentsTemplatePropTypes
