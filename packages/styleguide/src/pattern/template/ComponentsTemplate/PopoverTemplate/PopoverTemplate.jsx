import { Fragment } from 'react'
import { defaultProps, propTypes } from './PopoverTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './PopoverTemplate.MainContent'

export function PopoverTemplate() {
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

PopoverTemplate.defaultProps = defaultProps

PopoverTemplate.propTypes = propTypes
