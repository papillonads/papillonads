import { Fragment } from 'react'
import { defaultProps, propTypes } from './PageHeadersTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './PageHeadersTemplate.MainContent'

export function PageHeadersTemplate() {
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

PageHeadersTemplate.defaultProps = defaultProps

PageHeadersTemplate.propTypes = propTypes
