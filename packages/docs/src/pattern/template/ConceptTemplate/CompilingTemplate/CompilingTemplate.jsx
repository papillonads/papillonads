import React from 'react'
import { defaultProps, propTypes } from './CompilingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './CompilingTemplate.MainContent'

export function CompilingTemplate() {
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

CompilingTemplate.defaultProps = defaultProps

CompilingTemplate.propTypes = propTypes
