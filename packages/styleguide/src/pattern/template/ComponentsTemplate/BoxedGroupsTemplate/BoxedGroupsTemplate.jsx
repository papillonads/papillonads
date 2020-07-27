import React from 'react'
import { boxedGroupsTemplateDefaultProps, boxedGroupsTemplatePropTypes } from './BoxedGroupsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BoxedGroupsTemplate.MainContent'

export function BoxedGroupsTemplate() {
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

BoxedGroupsTemplate.defaultProps = boxedGroupsTemplateDefaultProps

BoxedGroupsTemplate.propTypes = boxedGroupsTemplatePropTypes