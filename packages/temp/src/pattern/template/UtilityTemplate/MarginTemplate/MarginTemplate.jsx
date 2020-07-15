import React from 'react'
import { marginTemplateDefaultProps, marginTemplatePropTypes } from './MarginTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarginTemplate.MainContent'

export function MarginTemplate() {
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

MarginTemplate.defaultProps = marginTemplateDefaultProps

MarginTemplate.propTypes = marginTemplatePropTypes
