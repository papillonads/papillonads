import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './PaginationPage.prop'

export function PaginationPage() {
  return <ComponentsTemplate.Pagination />
}

PaginationPage.defaultProps = defaultProps

PaginationPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default PaginationPage
