import {
  renderSpecificationsStandardsGuidelines,
  renderOpenSourceDependencyProjects,
  renderDesignSystemCore,
  renderProductMicrosites,
} from './Runtime.int.render'

describe('<Runtime />', () => {
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
