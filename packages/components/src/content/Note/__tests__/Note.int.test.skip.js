import { renderDefault, renderAllNotes } from './Note.int.render'

describe('<Note />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderAllNotes()', () => {
      expect(global.renderToJSON(renderAllNotes())).toMatchSnapshot()
    })
  })
})
