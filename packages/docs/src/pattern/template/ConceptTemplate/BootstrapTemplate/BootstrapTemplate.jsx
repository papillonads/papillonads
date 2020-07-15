import React from 'react'
import { defaultProps, propTypes } from './BootstrapTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BootstrapTemplate.MainContent'

export function BootstrapTemplate() {
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

BootstrapTemplate.defaultProps = defaultProps

BootstrapTemplate.propTypes = propTypes
