import React from 'react'
import { propTypes, defaultProps } from './ContinuousIntegration.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <h3>📖. Service</h3>
      <h4>📃. Travis CI</h4>
      <h5>
        📄. <a href="https://docs.travis-ci.com/">Travis CI Documentation</a>
      </h5>
      <div>﹘ Use the tutorials, samples, how-to, and reference documentation to learn Travis CI</div>
      <h3>📖. Branching Model</h3>
      <h4>📃. Git Flow</h4>
      <h5>
        📄. <a href="https://blog.axosoft.com/gitflow/">Axasoft Documentation</a>
      </h5>
      <div>
        ﹘ Gitflow utilizes the core feature of Git, which is the power of branches. In this model, a repository has two main branches:
      </div>
      <div>
        ﹘ <strong>Master</strong> This is a highly stable branch that is always production-ready and contains the last release version of
        source code in production.
      </div>
      <div>
        ﹘ <strong>Develop</strong> Derived from the master branch, the development branch serves as a branch for integrating different
        features planned for an upcoming release. This branch may or may not be as stable as the master branch. It is where developers
        collaborate and merge feature branches.
      </div>
      <h5>
        📄. <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">Atlassian Documentation</a>
      </h5>
      <div>
        ﹘ Gitflow Workflow is a Git workflow design that was first published and made popular by Vincent Driessen at nvie. The Gitflow
        Workflow defines a strict branching model designed around the project release. This provides a robust framework for managing larger
        projects.
      </div>
      <div>
        ﹘ Gitflow is ideally suited for projects that have a scheduled release cycle. This workflow doesn’t add any new concepts or
        commands beyond what’s required for the Feature Branch Workflow. Instead, it assigns very specific roles to different branches and
        defines how and when they should interact. In addition to feature branches, it uses individual branches for preparing, maintaining,
        and recording releases. Of course, you also get to leverage all the benefits of the Feature Branch Workflow: pull requests, isolated
        experiments, and more efficient collaboration.
      </div>
      <h5>
        📄. <a href="https://nvie.com/posts/a-successful-git-branching-model/">A successful Git branching model</a>
      </h5>
      <div>
        ﹘ This model was conceived in 2010, now more than 10 years ago, and not very long after Git itself came into being. In those 10
        years, git-flow (the branching model laid out in this article) has become hugely popular in many a software team to the point where
        people have started treating it like a standard of sorts — but unfortunately also as a dogma or panacea.
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
      <h3>📖. Redux</h3>
      <h4>
        <a href="https://redux.js.org/">📃. Predictable State Container for JS Apps</a>
      </h4>
      <div>
        ﹘ Redux is a predictable state container for JavaScript apps. (Not to be confused with a WordPress framework – Redux Framework.)
      </div>
      <div>
        ﹘ It helps you write applications that behave consistently, run in different environments (client, server, and native), and are
        easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling
        debugger.
      </div>
      <div>
        ﹘ You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large
        ecosystem of addons available.
      </div>
      <h4>
        <a href="https://github.com/reduxjs/react-redux">📃. Official React bindings for Redux</a>
      </h4>
      <div>
        ﹘ React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch
        actions to the store to update data.
      </div>
      <div>﹘ React Redux provides &apos;Provider&apos;, which makes the Redux store available to the rest of your app:</div>
      <div>﹘ React Redux provides a connect function for you to connect your component to the store.</div>
      <h4>
        <a href="https://github.com/reduxjs/redux-thunk">📃. Thunk middleware for Redux</a>
      </h4>
      <div>
        ﹘With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the
        store&apos;s abilities, and let you write async logic that interacts with the store.
      </div>
      <div>
        ﹘ Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access
        to the store, and simple async logic like AJAX requests.
      </div>
      <div>
        ﹘ Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to
        delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods
        dispatch and getState as parameters.
      </div>
      <div>﹘ An action creator that returns a function to perform asynchronous dispatch</div>
      <div>﹘ A thunk is a function that wraps an expression to delay its evaluation.</div>
      <div>
        ﹘ Any return value from the inner function will be available as the return value of dispatch itself. This is convenient for
        orchestrating an asynchronous control flow with thunk action creators dispatching each other and returning Promises to wait for each
        other’s completion.
      </div>
      <div>﹘ Since 2.1.0, Redux Thunk supports injecting a custom argument using the withExtraArgument function.</div>
      <h4>
        <a href="https://github.com/LogRocket/redux-logger">📃. Logger for Redux</a>
      </h4>
      <div>﹘You can create your own logger with following custom options:</div>
      <div>
        ﹘<strong>predicate:</strong> If specified this function will be called before each action is processed with this middleware.
      </div>
      <div>
        ﹘<strong>collapsed:</strong> Takes a Boolean or optionally a Function that receives `getState` function for accessing current store
        state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
      </div>
      <div>
        ﹘<strong>duration = false: Boolean:</strong> Print the duration of each action?
      </div>
      <div>
        ﹘<strong>timestamp = true: Boolean:</strong> Print the timestamp with each action?
      </div>
      <div>
        ﹘<strong>level = &apos;log&apos;:</strong> &apos;log&apos; | &apos;console&apos; | &apos;warn&apos; | &apos;error&apos; |
        &apos;info&apos;: console&apos;s level
      </div>
      <div>
        ﹘<strong>colors: ColorsObject:</strong>{' '}
        <a href="https://github.com/LogRocket/redux-logger/blob/master/src/defaults.js#L12-L18">Colors</a> for title, prev state, action and
        next state
      </div>
      <div>
        ﹘<strong>titleFormatter:</strong> Format the title used when logging actions.
      </div>
      <div>
        ﹘<strong>stateTransformer:</strong> Transform state before print. Eg. convert Immutable object to plain JSON.
      </div>
      <div>
        ﹘<strong>actionTransformer:</strong> Transform action before print. Eg. convert Immutable object to plain JSON.
      </div>
      <div>
        ﹘<strong>errorTransformer:</strong> Transform error before print. Eg. convert Immutable object to plain JSON.
      </div>
      <div>
        ﹘<strong>logger = console: LoggerObject:</strong> Implementation of the `console` API.
      </div>
      <div>
        ﹘<strong>logErrors = true: Boolean:</strong> should the logger catch, log, and re-throw errors?
      </div>
      <div>
        ﹘<strong>diff = false: Boolean:</strong> (alpha) Show diff between states?
      </div>
      <div>
        ﹘<strong>diffPredicate:</strong> (alpha) Filter function for showing states diff, similar to `predicate`
      </div>
      <h4>
        <a href="https://github.com/dmitry-zaets/redux-mock-store">
          📃. A mock store for testing Redux async action creators and middleware
        </a>
      </h4>
      <div>
        ﹘A mock store for testing Redux async action creators and middleware. The mock store will create an array of dispatched actions
        which serve as an action log for tests.
      </div>
      <div>
        ﹘Please note that this library is designed to test the action-related logic, not the reducer-related one. In other words, it does
        not update the Redux store. If you want a complex test combining actions and reducers together, take a look at other libraries
        (e.g., redux-actions-assertions). Refer to issue #71 for more details.
      </div>
      <div>
        ﹘<strong>Synchronous actions:</strong> The simplest usecase is for synchronous actions. In this example, we will test if the
        addTodo action returns the right payload. redux-mock-store saves all the dispatched actions inside the store instance. You can get
        all the actions by calling store.getActions(). Finally, you can use any assertion library to test the payload.
      </div>
      <div>
        ﹘<strong>Asynchronous actions</strong> A common usecase for an asynchronous action is a HTTP request to a server. In order to test
        those types of actions, you will need to call store.getActions() at the end of the request.
      </div>
    </div>
  )
}

OpenSourceDependencyProjects.propTypes = propTypes
OpenSourceDependencyProjects.defaultProps = defaultProps

export function DesignSystemCore({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
      <h3>📖. Design System Core</h3>
      <h4>📃. Setup file(s)</h4>
      <div>﹘ Coming soon.</div>
      <h4>📃. Knowledge base</h4>
      <div>﹘ Coming soon.</div>
    </div>
  )
}

DesignSystemCore.propTypes = propTypes
DesignSystemCore.defaultProps = defaultProps

export function ProductMicrosites({ className }) {
  return (
    <div className={className}>
      <h2>📗 Papillon Ads Implementation</h2>
      <h3>📖. Product Microsites</h3>
      <h4>📃. Setup file(s)</h4>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/package.json">package.json</a>
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/packages/core/src/store/client.js">store/client.js</a>
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/marketplace/blob/master/packages/core/src/store/base.js">store/base.js</a>
      </div>
      <h4>📃. Knowledge base</h4>
      <div>﹘ Coming soon.</div>
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const ContinuousIntegration = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
