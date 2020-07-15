import { renderDefault, renderWithInlineText } from './Spinner.int.render'

describe('<Spinner />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithInlineText()', () => {
      expect(global.renderToJSON(renderWithInlineText())).toMatchSnapshot()
    })
  })
})
