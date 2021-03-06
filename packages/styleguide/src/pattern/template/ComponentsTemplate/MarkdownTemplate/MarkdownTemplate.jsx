import { Fragment } from 'react'
import { defaultProps, propTypes } from './MarkdownTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarkdownTemplate.MainContent'

export function MarkdownTemplate() {
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

MarkdownTemplate.defaultProps = defaultProps

MarkdownTemplate.propTypes = propTypes
