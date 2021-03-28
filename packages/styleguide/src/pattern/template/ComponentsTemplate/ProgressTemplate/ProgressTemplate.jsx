import { Fragment } from 'react'
import { defaultProps, propTypes } from './ProgressTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ProgressTemplate.MainContent'

export function ProgressTemplate() {
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

ProgressTemplate.defaultProps = defaultProps

ProgressTemplate.propTypes = propTypes
