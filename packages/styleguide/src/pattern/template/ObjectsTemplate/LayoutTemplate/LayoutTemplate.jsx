import React from 'react'
import { layoutTemplateDefaultProps, layoutTemplatePropTypes } from './LayoutTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './LayoutTemplate.MainContent'

export function LayoutTemplate() {
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

LayoutTemplate.defaultProps = layoutTemplateDefaultProps

LayoutTemplate.propTypes = layoutTemplatePropTypes
