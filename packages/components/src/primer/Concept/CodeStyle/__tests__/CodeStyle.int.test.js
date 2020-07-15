import {
  renderSpecificationsStandardsGuidelines,
  renderOpenSourceDependencyProjects,
  renderDesignSystemCore,
  renderProductMicrosites,
} from './CodeStyle.int.render'

describe('<CodeStyle />', () => {
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
