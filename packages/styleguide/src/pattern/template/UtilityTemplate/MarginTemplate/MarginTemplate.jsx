import { Fragment } from 'react'
import { defaultProps, propTypes } from './MarginTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarginTemplate.MainContent'

export function MarginTemplate() {
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

MarginTemplate.defaultProps = defaultProps

MarginTemplate.propTypes = propTypes
