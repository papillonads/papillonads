import { renderDefault, renderWithAdditionalClassName, renderAllIllustrations } from './Illustration.int.render'

describe('<Illustration />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithAdditionalClassName()', () => {
      expect(global.renderToJSON(renderWithAdditionalClassName())).toMatchSnapshot()
    })

    test('must match renderAllIllustrations()', () => {
      expect(global.renderToJSON(renderAllIllustrations())).toMatchSnapshot()
    })
  })
})
