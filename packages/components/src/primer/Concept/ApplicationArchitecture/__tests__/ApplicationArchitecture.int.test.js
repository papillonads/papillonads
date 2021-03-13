import {
  specificationsStandardsGuidelines,
  openSourceDependencyProjects,
  designSystemCore,
  productMicrosites,
} from './ApplicationArchitecture.int.story'

describe('<ApplicationArchitecture />', () => {
  describe('Render', () => {
    test('must match specificationsStandardsGuidelines()', () => {
      expect(global.renderToJSON(specificationsStandardsGuidelines())).toMatchSnapshot()
    })

    test('must match openSourceDependencyProjects()', () => {
      expect(global.renderToJSON(openSourceDependencyProjects())).toMatchSnapshot()
    })

    test('must match designSystemCore()', () => {
      expect(global.renderToJSON(designSystemCore())).toMatchSnapshot()
    })

    test('must match productMicrosites()', () => {
      expect(global.renderToJSON(productMicrosites())).toMatchSnapshot()
    })
  })
})
