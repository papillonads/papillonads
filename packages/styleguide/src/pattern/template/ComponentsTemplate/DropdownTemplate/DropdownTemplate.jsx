import React from 'react'
import { dropdownTemplateDefaultProps, dropdownTemplatePropTypes } from './DropdownTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './DropdownTemplate.MainContent'

export function DropdownTemplate() {
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

DropdownTemplate.defaultProps = dropdownTemplateDefaultProps

DropdownTemplate.propTypes = dropdownTemplatePropTypes
