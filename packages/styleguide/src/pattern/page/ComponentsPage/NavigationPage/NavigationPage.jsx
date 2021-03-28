import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './NavigationPage.prop'

export function NavigationPage() {
  return <ComponentsTemplate.Navigation />
}

NavigationPage.defaultProps = defaultProps

NavigationPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default NavigationPage
