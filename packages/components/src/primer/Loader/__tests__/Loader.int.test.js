import { renderHeading, renderText, renderLabel, renderButton } from './Loader.int.render'

describe('<Loader />', () => {
  describe('Render', () => {
    test('must match renderHeading()', () => {
      expect(global.renderToJSON(renderHeading())).toMatchSnapshot()
    })

    test('must match renderText()', () => {
      expect(global.renderToJSON(renderText())).toMatchSnapshot()
    })

    test('must match renderLabel()', () => {
      expect(global.renderToJSON(renderLabel())).toMatchSnapshot()
    })

    test('must match renderButton()', () => {
      expect(global.renderToJSON(renderButton())).toMatchSnapshot()
    })
  })
})
