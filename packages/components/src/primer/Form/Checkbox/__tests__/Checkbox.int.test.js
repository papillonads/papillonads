import { renderCustom, renderIsChecked, renderIsNotChecked } from './Checkbox.int.render'

describe('<Checkbox />', () => {
  const onChangeMockFn = jest.fn()

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must handle event when onChange()', () => {
      const mountCustomRender = global.renderMount(renderCustom(onChangeMockFn))
      mountCustomRender.find('input').simulate('change')
      expect(mountCustomRender.props().onChange).toBe(onChangeMockFn)
      expect(mountCustomRender.props().onChange).toHaveBeenCalledWith(expect.any(Object))
    })
  })

  describe('Render', () => {
    test('must match IsChecked()', () => {
      expect(global.renderToJSON(renderIsChecked())).toMatchSnapshot()
    })

    test('must match renderIsNotChecked()', () => {
      expect(global.renderToJSON(renderIsNotChecked())).toMatchSnapshot()
    })
  })
})
