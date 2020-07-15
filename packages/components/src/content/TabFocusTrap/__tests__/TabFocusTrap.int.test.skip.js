import { renderDefault } from './TabFocusTrap.int.render'

describe('<TabFocusTrap />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })
  })
})
