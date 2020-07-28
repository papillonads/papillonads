import React from 'react'
import { buttonsTemplateDefaultProps, buttonsTemplatePropTypes } from './ButtonsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ButtonsTemplate.MainContent'

export function ButtonsTemplate() {
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

ButtonsTemplate.defaultProps = buttonsTemplateDefaultProps

ButtonsTemplate.propTypes = buttonsTemplatePropTypes
