import React from 'react'
import { colorsTemplateDefaultProps, colorsTemplatePropTypes } from './ColorsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ColorsTemplate.MainContent'

export function ColorsTemplate() {
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

ColorsTemplate.defaultProps = colorsTemplateDefaultProps

ColorsTemplate.propTypes = colorsTemplatePropTypes
