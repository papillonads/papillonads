import { Fragment } from 'react'
import { defaultProps, propTypes } from './DetailsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './DetailsTemplate.MainContent'

export function DetailsTemplate() {
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

DetailsTemplate.defaultProps = defaultProps

DetailsTemplate.propTypes = propTypes
