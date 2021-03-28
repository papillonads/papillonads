import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './PageSectionsPage.prop'

export function PageSectionsPage() {
  return <ComponentsTemplate.PageSections />
}

PageSectionsPage.defaultProps = defaultProps

PageSectionsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default PageSectionsPage
