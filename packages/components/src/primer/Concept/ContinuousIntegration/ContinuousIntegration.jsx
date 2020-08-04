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
      <h3>📖. Travis CI</h3>
      <h4>
        <a href="https://github.com/travis-ci">📃. Continuous Integration and Deployment</a>
      </h4>
      <div>
        ﹘ <a href="https://docs.travis-ci.com/">Documentation</a> for Travis CI
      </div>
      <div>
        ﹘ <a href="https://docs.travis-ci.com/user/enterprise/">Installation resources</a> for Travis CI Enterprise
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
      <div>﹘ Coming soon.</div>
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
