import { renderDefault, renderIsSpacious } from './Subhead.int.render'

describe('<Subhead />', () => {
  describe('Render', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderIsSpacious()', () => {
      expect(global.renderToJSON(renderIsSpacious())).toMatchSnapshot()
    })
  })
})
