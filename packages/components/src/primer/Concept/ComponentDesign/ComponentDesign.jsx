import React from 'react'
import { propTypes, defaultProps } from './ComponentDesign.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <h3>📖. React.JS</h3>
      <h4>
        <a href="https://reactjs.org/docs/hooks-state.html#hooks-and-function-components">📃. Hooks and Function Components</a>
      </h4>
      <div>
        ﹘ <strong>What is a Hook?</strong> A Hook is a special function that lets you “hook into” React features. For example, useState is
        a Hook that lets you add React state to function components. We’ll learn other Hooks later.
      </div>
      <div>
        ﹘<strong>When would I use a Hook?</strong> If you write a function component and realize you need to add some state to it,
        previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that
        right now!
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
      <h3>📖. React.JS</h3>
      <h4>
        <a href="https://reactjs.org/">📃. A JavaScript library for building user interfaces</a>
      </h4>
      <div>
        ﹘ <strong>Declarative</strong>React makes it painless to create interactive UIs. Design simple views for each state in your
        application, and React will efficiently update and render just the right components when your data changes. Declarative views make
        your code more predictable and easier to debug.
      </div>
      <div>
        ﹘<strong>Component-Based</strong>Build encapsulated components that manage their own state, then compose them to make complex UIs.
        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state
        out of the DOM.
      </div>
      <h4>
        <a href="https://github.com/facebook/react/">
          📃. A declarative, efficient, and flexible JavaScript library for building user interfaces
        </a>
      </h4>
      <div>
        ﹘<a href="https://reactjs.org/docs/getting-started.html">Getting Started</a> This page is an overview of the React documentation
        and related resources.
      </div>
      <div>
        ﹘<a href="https://reactjs.org/tutorial/tutorial.html">Tutorial: Intro to React</a> This tutorial doesn’t assume any existing React
        knowledge.
      </div>
      <div>
        ﹘<a href="https://reactjs.org/blog/">Blog</a>
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
      <h4>📃. Component Partitions</h4>
      <h5>📄. Implementation folder ../</h5>
      <h6>📝. File(s)</h6>
      <div>
        ﹘<strong>index.js:</strong> All named exports
      </div>
      <div>
        ﹘<strong>.jsx: </strong>Main UI implementation
      </div>
      <div>
        ﹘<strong>.part.jsx:</strong> Specific JSX parts implementation if any
      </div>
      <div>
        ﹘<strong>.scss: </strong>Sass styling implementation if applicable
      </div>
      <div>
        ﹘<strong>.part.scss:</strong> Sass styling parts implementation if any
      </div>
      <div>
        ﹘<strong>.prop.js:</strong> Default props and prop types
      </div>
      <h5>📄. Test folder ../__tests__</h5>
      <h6>📝. File(s)</h6>
      <div>
        ﹘<strong>.int.render.js:</strong> Exposes various flavors of the component to snapshots and stories for integration testing
        purposes
      </div>
      <div>
        ﹘<strong>.int.test.js:</strong> Implements Jest snapshots for flavors of the component exposed by .int.render.js
      </div>
      <div>
        ﹘<strong>.int.story.js:</strong> Implements Storybook stories for flavors of the component exposed by .int.render.js
      </div>
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const ComponentDesign = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
