import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './FlashBannerPage.prop'

export function FlashBannerPage() {
  return <ComponentsTemplate.FlashBanner />
}

FlashBannerPage.defaultProps = defaultProps

FlashBannerPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default FlashBannerPage
