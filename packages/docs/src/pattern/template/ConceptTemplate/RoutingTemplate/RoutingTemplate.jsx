import React from 'react'
import { defaultProps, propTypes } from './RoutingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './RoutingTemplate.MainContent'

export function RoutingTemplate() {
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

RoutingTemplate.defaultProps = defaultProps

RoutingTemplate.propTypes = propTypes
