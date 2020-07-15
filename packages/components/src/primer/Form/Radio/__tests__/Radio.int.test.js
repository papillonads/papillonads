import { renderCustom, renderDefault } from './Radio.int.render'

describe('<Radio />', () => {
  const onChangeMockFn = jest.fn()

  describe('Event', () => {
    test('must handle event when onChange()', () => {
      const mountCustomRender = global.renderMount(renderCustom(onChangeMockFn))
      mountCustomRender.find('input').simulate('change')
      expect(mountCustomRender.props().onChange).toBe(onChangeMockFn)
      expect(mountCustomRender.props().onChange).toHaveBeenCalledWith(expect.any(Object))
    })
  })

  describe('Render', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })
  })
})
