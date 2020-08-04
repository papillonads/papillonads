import React from 'react'
import { propTypes, defaultProps } from './CrossBrowserCompatibility.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <h3>📖. ES6 / ES2015</h3>

      <h4>📃. From var to const/let</h4>
      <h5>📄. Reference</h5>
      <h6>📝. MDN</h6>
      <div>
        ﹘ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a> Constants are
        block-scoped, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and
        it can't be redeclared.
      </div>
      <div>
        ﹘ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a> The let statement declares a
        block scope local variable, optionally initializing it to a value.
      </div>
      <h5>📄. Compatibility</h5>
      <h6>📝. Browser Support</h6>
      <div>﹘ const > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓</div>
      <div>﹘ let > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer 🌦</div>
      <h6>📝. Transpiled / Polyfilled</h6>
      <div>﹘ Transpiled ✓, Safe to use ✅</div>

      <h4>📃. From objects to maps</h4>
      <h5>📄. Reference</h5>
      <h6>📝. MDN</h6>
      <div>
        ﹘ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Array.prototype.map()</a>{' '}
        The map() method creates a new array populated with the results of calling a provided function on every element in the calling
        array.
      </div>
      <h5>📄. Compatibility</h5>
      <h6>📝. Browser Support</h6>
      <div>﹘ Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓</div>
      <h6>📝. Transpiled / Polyfilled</h6>
      <div>﹘ Polyfilled if not native ✓ Safe to use ✅</div>
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
      <h3>📖. Design System Core</h3>
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
    </div>
  )
}

ProductMicrosites.propTypes = propTypes
ProductMicrosites.defaultProps = defaultProps

export const CrossBrowserCompatibility = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
