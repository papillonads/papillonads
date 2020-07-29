import React from 'react'
import { defaultProps, propTypes } from './DocsTemplate.prop'
import { Navigation } from '../../molecule/Navigation'
import { FlashAlert } from '../../molecule/FlashAlert'
import { SideBar } from '../../molecule/SideBar'
import { MainContent } from './DocsTemplate.MainContent'

export function DocsTemplate() {
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

DocsTemplate.defaultProps = defaultProps

DocsTemplate.propTypes = propTypes
