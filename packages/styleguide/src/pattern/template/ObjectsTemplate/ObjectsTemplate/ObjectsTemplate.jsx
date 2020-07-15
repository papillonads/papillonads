import React from 'react'
import { objectsTemplateDefaultProps, objectsTemplatePropTypes } from './ObjectsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ObjectsTemplate.MainContent'

export function ObjectsTemplate() {
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

ObjectsTemplate.defaultProps = objectsTemplateDefaultProps

ObjectsTemplate.propTypes = objectsTemplatePropTypes