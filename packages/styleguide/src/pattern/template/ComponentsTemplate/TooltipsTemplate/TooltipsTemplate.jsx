import { Fragment } from 'react'
import { defaultProps, propTypes } from './TooltipsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './TooltipsTemplate.MainContent'

export function TooltipsTemplate() {
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

TooltipsTemplate.defaultProps = defaultProps

TooltipsTemplate.propTypes = propTypes
