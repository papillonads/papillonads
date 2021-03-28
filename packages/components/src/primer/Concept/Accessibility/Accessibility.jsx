import { propTypes, defaultProps } from './Accessibility.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <h3>📖. MDN</h3>
      <h4>
        <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">📃. Web technology for developers » Accessibility</a>
      </h4>
      <div>
        ﹘ Accessibility (often abbreviated to A11y—as in &quot;a&quot; then 11 characters then &quot;y&quot;) in Web development means
        enabling as many people as possible to use Web sites, even when those people&apos;s abilities are limited in some way.
      </div>
      <div>
        ﹘ For many people, technology makes things easier. For people with disabilities, technology makes things possible. Accessibility
        means developing content to be as accessible as possible no matter an individual&apos;s physical and cognitive abilities and no
        matter how they access the web.
      </div>
      <div>
        ﹘ The Web is fundamentally designed to work for all people, whatever their hardware, software, language, culture, location, or
        physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement,
        sight, and cognitive ability.
      </div>
      <h3>📖. Web Accessibility Initiative (WAI)</h3>
      <h4>
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">📃. Web Content Accessibility Guidelines (WCAG) Overview</a>
      </h4>
      <div>
        ﹘ Web Content Accessibility Guidelines (WCAG) is developed through the W3C process in cooperation with individuals and
        organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs
        of individuals, organizations, and governments internationally.
      </div>
      <h3>📖. World Wide Web Consortium (W3C)</h3>
      <h4>
        <a href="https://www.w3.org/standards/webdesign/accessibility">📃. W3C » Standards » Web Design and Applications » Accessibility</a>
      </h4>
      <div>
        ﹘ The Web is fundamentally designed to work for all people, whatever their hardware, software, language, location, or ability. When
        the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.
      </div>
      <div>
        ﹘ Thus the impact of disability is radically changed on the Web because the Web removes barriers to communication and interaction
        that many people face in the physical world. However, when web sites, applications, technologies, or tools are badly designed, they
        can create barriers that exclude people from using the Web.
      </div>
      <div>
        ﹘ Accessibility is essential for developers and organizations that want to create high quality websites and web tools, and not
        exclude people from using their products and services.
      </div>
      <div>
        ﹘ The mission of the Web Accessibility Initiative (WAI) is to lead the Web to its full potential to be accessible, enabling people
        with disabilities to participate equally on the Web.
      </div>
      <h3>📖. React.JS</h3>
      <h4>
        <a href="https://reactjs.org/docs/accessibility.html">📃. Accessibility</a>
      </h4>
      <div>
        ﹘ Web accessibility (also referred to as a11y) is the design and creation of websites that can be used by everyone. Accessibility
        support is necessary to allow assistive technology to interpret web pages.
      </div>
      <div>﹘ React fully supports building accessible websites, often by using standard HTML techniques.</div>
    </div>
  )
}

SpecificationsStandardsGuidelines.propTypes = propTypes
SpecificationsStandardsGuidelines.defaultProps = defaultProps

export function OpenSourceDependencyProjects({ className }) {
  return (
    <div className={className}>
      <h2>📗 Open Source Dependency Projects</h2>
      <h3>📖. Axe Core</h3>
      <h4>
        <a href="https://github.com/dequelabs/axe-core">📃. Accessibility engine for automated Web UI testing</a>
      </h4>
      <div>
        ﹘ Axe is an accessibility testing engine for websites and other HTML-based user interfaces. It&apos;s fast, secure, lightweight,
        and was built to seamlessly integrate with any existing test environment so you can automate accessibility testing alongside your
        regular functional testing.
      </div>
      <h4>
        <a href="https://www.deque.com/axe/">📃. Axe: Accessibility for Development Teams</a>
      </h4>
      <div>
        ﹘ Axe is the World’s most popular accessibility testing toolkit built on the World’s most popular accessibility rules library. Axe
        is ideal for development teams to test their Web or Android applications to help identify and resolve common accessibility issues.
        Built to scale with your needs, users have run axe for everything from ad-hoc single page tests to testing hundreds of thousands of
        pages while integrated into existing CI/CD processes. It’s simple to use, doesn’t require advanced accessibility knowledge and won’t
        waste your time with false positives.
      </div>
      <h3>📖. @axe-core/react</h3>
      <h4>
        <a href="https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react">
          📃. Accessibility auditing for React.js applications
        </a>
      </h4>
      <div>
        ﹘ Test your React application with the axe-core accessibility testing library. Results will show in the Chrome DevTools console.
      </div>
      <h3>📖. Storybook</h3>
      <h4>
        <a href="https://github.com/storybookjs/storybook/tree/next/addons/a11y">📃. @storybook/addon-a11y</a>
      </h4>
      <div>﹘ This storybook addon can be helpful to make your UI components more accessible.</div>
      <h3>📖. ESLint</h3>
      <h4>
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">📃. eslint-plugin-jsx-a11y</a>
      </h4>
      <div>﹘ Static AST checker for accessibility rules on JSX elements.</div>
      <div>
        ﹘ Ryan Florence built out this awesome runtime-analysis tool called react-a11y. It is super useful. However, since you&apos;re
        probably already using linting in your project, this plugin comes for free and closer to the actual development process. Pairing
        this plugin with an editor lint plugin, you can bake accessibility standards into your application in real-time.
      </div>
      <div>
        ﹘ Note: This project does not replace react-a11y, but can and should be used in conjunction with it. Static analysis tools cannot
        determine values of variables that are being placed in props before runtime, so linting will not fail if that value is undefined
        and/or does not pass the lint rule.
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
      <div>
        ﹘ <a href="https://github.com/papillonads/papillonads/blob/master/package.json">package.json</a> installs{' '}
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a> and{' '}
        <a href="https://github.com/storybookjs/storybook/tree/next/addons/a11y">@storybook/addon-a11y</a> as devDependencies
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/papillonads/blob/master/.eslintrc">.eslintrc</a> lets ESLint make use of{' '}
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a>
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/papillonads/blob/master/.storybook/main.js">.storybook/main.js</a> lets Storybook make use
        of <a href="https://github.com/storybookjs/storybook/tree/next/addons/a11y">@storybook/addon-a11y</a>
      </div>
      <div>
        ﹘<a href="https://github.com/papillonads/papillonads/blob/master/.storybook/preview.js">.storybook/preview.js</a> lets Storybook
        make use of <a href="https://github.com/storybookjs/storybook/blob/next/addons/a11y/src/index.ts#L98">withA11y</a> decorator
      </div>
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

export const Accessibility = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
