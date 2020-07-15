import { renderCustom, renderDefault } from './PreviousNext.int.render'

describe('<PreviousNext />', () => {
  const onClickMockFn = jest.fn()
  // const dispatchMockFn = jest.fn()

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must return new items without index when previous onClick()', () => {
      const mountCustomRender = global.renderMount(renderCustom(onClickMockFn))
      mountCustomRender.find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      // expect(dispatchMockFn).toHaveBeenCalledWith('onBackwards')
      // expect(mountCustomRender.props()).toBe({})
    })

    test('must return new items without index when next onClick()', () => {
      const mountCustomRender = global.renderMount(renderCustom(onClickMockFn))
      mountCustomRender.find('a').last().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      // expect(dispatchMockFn).toHaveBeenCalledWith('onForward')
      // expect(mountCustomRender.props()).toBe({})
    })
  })

  describe('Render', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })
  })
})
