import {
  renderRadioWithSelection,
  renderRadioWithoutSelection,
  renderCheckboxWithSelection,
  renderCheckboxWithoutSelection,
} from './FlexGrid.int.render'

describe('<FlexGrid />', () => {
  describe('Render', () => {
    test('must match renderRadioWithSelection()', () => {
      expect(global.renderToJSON(renderRadioWithSelection())).toMatchSnapshot()
    })

    test('must match renderRadioWithoutSelection()', () => {
      expect(global.renderToJSON(renderRadioWithoutSelection())).toMatchSnapshot()
    })

    test('must match renderCheckboxWithSelection()', () => {
      expect(global.renderToJSON(renderCheckboxWithSelection())).toMatchSnapshot()
    })

    test('must match renderCheckboxWithoutSelection()', () => {
      expect(global.renderToJSON(renderCheckboxWithoutSelection())).toMatchSnapshot()
    })
  })
})
