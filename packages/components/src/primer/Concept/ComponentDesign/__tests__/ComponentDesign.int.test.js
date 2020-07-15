import {
  renderSpecificationsStandardsGuidelines,
  renderOpenSourceDependencyProjects,
  renderDesignSystemCore,
  renderProductMicrosites,
} from './ComponentDesign.int.render'

describe('<ComponentDesign />', () => {
  describe('Render', () => {
    test('must match renderSpecificationsStandardsGuidelines()', () => {
      expect(global.renderToJSON(renderSpecificationsStandardsGuidelines())).toMatchSnapshot()
    })
    test('must match renderOpenSourceDependencyProjects()', () => {
      expect(global.renderToJSON(renderOpenSourceDependencyProjects())).toMatchSnapshot()
    })
    test('must match renderDesignSystemCore()', () => {
      expect(global.renderToJSON(renderDesignSystemCore())).toMatchSnapshot()
    })
    test('must match renderProductMicrosites()', () => {
      expect(global.renderToJSON(renderProductMicrosites())).toMatchSnapshot()
    })
  })
})
