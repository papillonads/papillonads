import React from 'react'
import { typographyTemplateDefaultProps, typographyTemplatePropTypes } from './TypographyTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './TypographyTemplate.MainContent'

export function TypographyTemplate() {
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

TypographyTemplate.defaultProps = typographyTemplateDefaultProps

TypographyTemplate.propTypes = typographyTemplatePropTypes
