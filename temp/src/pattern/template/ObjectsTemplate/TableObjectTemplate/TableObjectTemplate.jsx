import React from 'react'
import { tableObjectTemplateDefaultProps, tableObjectTemplatePropTypes } from './TableObjectTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './TableObjectTemplate.MainContent'

export function TableObjectTemplate() {
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

TableObjectTemplate.defaultProps = tableObjectTemplateDefaultProps

TableObjectTemplate.propTypes = tableObjectTemplatePropTypes
