import { renderNormal, renderLarge, renderSmall } from './Progress.int.render'

describe('<Progress />', () => {
  describe('Render', () => {
    test('must match renderNormal()', () => {
      expect(global.renderToJSON(renderNormal())).toMatchSnapshot()
    })

    test('must match renderLarge()', () => {
      expect(global.renderToJSON(renderLarge())).toMatchSnapshot()
    })

    test('must match renderSmall()', () => {
      expect(global.renderToJSON(renderSmall())).toMatchSnapshot()
    })
  })
})
