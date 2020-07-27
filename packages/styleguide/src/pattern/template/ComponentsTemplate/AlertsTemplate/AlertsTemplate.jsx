import React from 'react'
import { alertsTemplateDefaultProps, alertsTemplatePropTypes } from './AlertsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './AlertsTemplate.MainContent'

export function AlertsTemplate() {
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

AlertsTemplate.defaultProps = alertsTemplateDefaultProps

AlertsTemplate.propTypes = alertsTemplatePropTypes
