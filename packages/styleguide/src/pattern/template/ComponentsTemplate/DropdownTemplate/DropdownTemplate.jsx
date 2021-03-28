import { Fragment } from 'react'
import { defaultProps, propTypes } from './DropdownTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './DropdownTemplate.MainContent'

export function DropdownTemplate() {
  return (
    <Fragment>
      <Navigation />
      <FlashAlert />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </Fragment>
  )
}

DropdownTemplate.defaultProps = defaultProps

DropdownTemplate.propTypes = propTypes
