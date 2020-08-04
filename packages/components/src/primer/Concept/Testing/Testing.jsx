import React from 'react'
import { propTypes, defaultProps } from './Testing.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <br />
      <br />
      <h3>📖. Unit Testing</h3>
      <br />
      <h4>📃. Jest</h4>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/getting-started">Getting Started</a>
      </div>
      <h4>📃. Knowledge base</h4>
      <h5>📄. Jest API</h5>
      <h6>📝. async/await</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/tutorial-async#async-await">async/await</a> must be used with test blocks covering asyncronous
        functions conforming to the following pattern
        <pre>
          <code>
            {`
  test('must ...', async () => {
    ...
    await expect(someFunction).someExpectMethod()
  })
          `}
          </code>
        </pre>
      </div>
      <h6>📝. describe</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/api#describename-fn">describe()</a> must be used to group related tests conforming to the
        following pattern
        <pre>
          <code>
            {`
  describe('file name of module under test', () => {
    beforeEach(() => {
      jest.resetModules()
      ...
    })
    afterEach(() => {
      jest.clearAllMocks()
      ...
    }
    describe('name of function as the unit under test', () => {
      test('must do something', () => {
      })
      test('must do something else', () => {
      })
    })
  })
          `}
          </code>
        </pre>
      </div>
      <h6>📝. mock</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options">jest.mock()</a> must be used to mock
        dependency modules
        <pre>
          <code>
            {`
  jest.mock('some dependency module name or relative path with module name', () => ({
    someExposedFunction: () => ({}),
    someOtherExposedFunction: jest.fn(),
  }))
          `}
          </code>
        </pre>
      </div>
      <h6>📝. require</h6>
      <div>
        ﹘ <a href="https://nodejs.org/api/modules.html#modules_require_id">require()</a> must be used to mock dependency modules
        <pre>
          <code>
            {`
  const someModuleMockObject = require('some-module')
  const someOtherModuleMockObject = require('../../../relative-path-to/some-module')
          `}
          </code>
        </pre>
      </div>
      <h6>📝. spyOn</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname">jest.spyOn()</a>must be used to mock functions exposed
        by mocked dependency modules conforming to the following pattern
        <pre>
          <code>
            {`
  jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject')
          `}
          </code>
        </pre>
      </div>
      <h6>📝. mockImplementation</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn">jest.mockImplementation()</a> must be used to
        mock the implementations of mocked functions exposed by mocked dependency modules conforming to the following pattern
        <pre>
          <code>
            {`
  jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockImplementation(jest.fn())
  jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockImplementation(jest.fn() => { replace with desired implementation})
          `}
          </code>
        </pre>
      </div>
      <h6>📝. mockReturnValue</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/mock-function-api#mockfnmockreturnvaluevalue">jest.mockReturnValue()</a> must be used to mock
        return values of mocked functions exposed by mocked dependency modules conforming to the following pattern
        <pre>
          <code>
            {`
  jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockReturnValue(someValue)
          `}
          </code>
        </pre>
      </div>
      <h6>📝. expect</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/expect">expect()</a> must be used to assert expected values against received values using
        matchers conforming to the following pattern
        <pre>
          <code>
            {`
  expect(someMockFunction).toHaveBeenCalled()
  expect(someMockFunction).not.toHaveBeenCalled()
  ...
  expect(someMockFunction).toHaveBeenCalledTimes(someNumber)
  expect(someMockFunction).not.toHaveBeenCalled()
  ...
  expect(someMockFunction).toHaveBeenCalledWith({ someObjectProperty: 'some-value', someOtherObjectProperty; expect.any(Boolean)})
  ...
  expect(someObject).toMatchObject(someOtherObject)
  expect(someObject).not.toMatchObject(someOtherObject)
  ...
  expect(someObject).toBe(someOtherObject)
  expect(someObject).not.toBe(someOtherObject)
  ...
  expect(someValue).toEqual(someOtherValue)
  expect(someValue).not.toEqual(someOtherValue)
  ...
  expect(someObject).toBeUndefined()
  expect(someObject).not.toBeUndefined()
  ...
  expect(somevAlue).toBeTruthy()
  expect(somevAlue).toBeFalsy()
          `}
          </code>
        </pre>
      </div>
      <br />
      <br />
      <h3>📖. Integration Testing</h3>
      <br />
      <h4>📃. Jest</h4>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/getting-started">Getting Started</a>
      </div>
      <h4>📃. Storybook</h4>
      <div>
        ﹘ <a href="https://storybook.js.org/docs/basics/introduction/">Introduction</a> Storybook is a user interface development
        environment and playground for UI components. The tool enables developers to create components independently and showcase components
        interactively in an isolated development environment.
      </div>
      <h4>📃. Knowledge base</h4>
      <h5>📄. Jest API</h5>
      <h6>📝. Snapshot Testing with Jest</h6>
      <div>
        ﹘ <a href="https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest">Snapshot Testing with Jest</a> Snapshots must be
        implemented conforming to the following pattern
        <pre>
          <code>
            {`
  describe('<SomeComponent />', () => {
    describe('Render', () => {
      test('must match composition', () => {
        expect(global.renderToJSON(<SomeComponent />)).toMatchSnapshot()
      })
    })
  })
          `}
          </code>
        </pre>
      </div>
      <h5>📄. Storybook API</h5>
      <h6>📝. Writing Stories with Storybook</h6>
      <div>
        ﹘ <a href="https://storybook.js.org/docs/basics/writing-stories/#docs-content">Writing Stories with Storybook</a> Stories must be
        implemented conforming to the following pattern
        <pre>
          <code>
            {`
  storiesOf('SomeApplication/SomeAtomicDesignPattern/SomeComponent', module).add(someRenderInfo.text, () => someRender, someRenderInfo.parameters)
          `}
          </code>
        </pre>
      </div>
      <br />
      <br />
      <h3>📖. End to end Testing</h3>
      <br />
      <h4>📃. Puppeteer</h4>
      <div>
        ﹘ <a href="https://developers.google.com/web/tools/puppeteer/get-started">Quick start</a>
      </div>
    </div>
  )
}

SpecificationsStandardsGuidelines.propTypes = propTypes
SpecificationsStandardsGuidelines.defaultProps = defaultProps

export function OpenSourceDependencyProjects({ className }) {
  return (
    <div className={className}>
      <h2>📗 Open Source Dependency Projects</h2>
    </div>
  )
}

OpenSourceDependencyProjects.propTypes = propTypes
OpenSourceDependencyProjects.defaultProps = defaultProps

export function DesignSystemCore({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
    </div>
  )
}

DesignSystemCore.propTypes = propTypes
DesignSystemCore.defaultProps = defaultProps

export function ProductMicrosites({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const Testing = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
