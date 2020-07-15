import { renderDefault, renderAllIcons } from './Icon.int.render'

describe('<Icon />', () => {
  describe('Render', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderAllIcons()', () => {
      expect(global.renderToJSON(renderAllIcons())).toMatchSnapshot()
    })
  })
})
