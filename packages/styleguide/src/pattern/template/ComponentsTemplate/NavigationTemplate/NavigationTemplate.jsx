import { Fragment } from 'react'
import { defaultProps, propTypes } from './NavigationTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './NavigationTemplate.MainContent'

export function NavigationTemplate() {
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

NavigationTemplate.defaultProps = defaultProps

NavigationTemplate.propTypes = propTypes
