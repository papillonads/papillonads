import { Fragment } from 'react'
import { defaultProps, propTypes } from './SelectMenuTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './SelectMenuTemplate.MainContent'

export function SelectMenuTemplate() {
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

SelectMenuTemplate.defaultProps = defaultProps

SelectMenuTemplate.propTypes = propTypes
