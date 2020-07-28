import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { flashBannerPageDefaultProps, flashBannerPagePropTypes } from './FlashBannerPage.prop'

export function FlashBannerPage() {
  return <ComponentsTemplate.FlashBanner />
}

FlashBannerPage.defaultProps = flashBannerPageDefaultProps

FlashBannerPage.propTypes = flashBannerPagePropTypes

// Default export is required to use with React.lazy()
export default FlashBannerPage
