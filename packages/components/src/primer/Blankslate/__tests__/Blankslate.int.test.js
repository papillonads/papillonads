import { renderDefault, renderNarrow, renderCapped, renderSpacious, renderLarge, renderCleanBackground } from './Blankslate.int.render'

describe('<Blankslate />', () => {
  describe('Render', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderNarrow()', () => {
      expect(global.renderToJSON(renderNarrow())).toMatchSnapshot()
    })

    test('must match renderCapped()', () => {
      expect(global.renderToJSON(renderCapped())).toMatchSnapshot()
    })

    test('must match renderSpacious()', () => {
      expect(global.renderToJSON(renderSpacious())).toMatchSnapshot()
    })

    test('must match renderLarge()', () => {
      expect(global.renderToJSON(renderLarge())).toMatchSnapshot()
    })

    test('must match renderCleanBackground()', () => {
      expect(global.renderToJSON(renderCleanBackground())).toMatchSnapshot()
    })
  })
})
