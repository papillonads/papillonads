import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './TablesPage.prop'

export function TablesPage() {
  return <ComponentsTemplate.Tables />
}

TablesPage.defaultProps = defaultProps

TablesPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default TablesPage
