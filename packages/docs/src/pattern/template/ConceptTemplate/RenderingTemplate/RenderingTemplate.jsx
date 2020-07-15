import React from 'react'
import { defaultProps, propTypes } from './RenderingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './RenderingTemplate.MainContent'

export function RenderingTemplate() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </React.Fragment>
  )
}

RenderingTemplate.defaultProps = defaultProps

RenderingTemplate.propTypes = propTypes
