import React from 'react'
import { propTypes, defaultProps } from './CSSArchitecture.prop'

export function SpecificationsStandardsGuidelines({ className }) {
  return (
    <div className={className}>
      <h2>📗 Specifications/Standards/Guidelines</h2>
      <br />
      <br />
      <h3>📖. ITCSS (Inverted Triangle CSS) Organization</h3>
      <br />
      <h4>
        📃. <a href="https://www.youtube.com/watch?v=1OKZOV-iLj4">Harry Roberts - Managing CSS Projects with ITCSS</a>
      </h4>
      <div>
        ﹘ Managing CSS at scale is hard; and a lot harder than it should be. ITCSS is a simple, effective, and as-yet unpublished
        methodology to help manage, maintain, and scale CSS projects of all sizes. In this talk we’ll take a sneak peek at what ITCSS is and
        how it works to tame and control UI code as it grows.
      </div>
      <h4>
        📃. <a href="https://csswizardry.com/2018/11/itcss-and-skillshare/">ITCSS × Skillshare</a>
      </h4>
      <div>﹘ITCSS video course</div>
      <h4>
        📃.
        <a href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/">
          ITCSS: Scalable and Maintainable CSS Architecture
        </a>
      </h4>
      <div>﹘How do I make my CSS scalable and maintainable? It’s a concern for every front-end developer. ITCSS has an answer.</div>
      <h4>
        📃. <a href="https://itcss.io/">ITCSS from CSS Wizardry</a>
      </h4>
      <div>﹘A sane, scalable, managed CSS architecture from CSS Wizardry</div>
      <br />
      <br />
      <h3>📖. CSS Modules Scoping</h3>
      <br />
      <h4>
        📃. <a href="https://css-tricks.com/css-modules-part-1-need/">What are CSS Modules and why do we need them?</a>
      </h4>
      <div>
        ﹘I’ve been intrigued by CSS Modules lately. If you haven’t heard of them, this post is for you. We’ll be looking at the project and
        it’s goals and aims. If you’re intrigued, stay tuned, as the next post will be about how to get started using the idea. If you’re
        looking to implement or level up your usage, part 3 will be about using them in a React environment.
      </div>
      <h4>
        📃. <a href="https://css-tricks.com/css-modules-part-2-getting-started/">Getting Started with CSS Modules</a>
      </h4>
      <div>
        ﹘There isn’t one single approach with CSS Modules to making the JavaScript templates, the CSS files, or the build steps to make
        them work. In this post, which is part of a series on CSS Modules, we’ll look at one approach. The goal of this post is to get a CSS
        Modules project up and running.
      </div>
      <h4>
        📃. <a href="https://css-tricks.com/css-modules-part-3-react/">CSS Modules and React</a>
      </h4>
      <div>
        ﹘In this final post of our series on CSS Modules, I’ll be taking a look at how to make a static React site with the thanks of
        Webpack. This static site will have two templates: a homepage and an about page with a couple of React components to explain how it
        works in practice.
      </div>
      <br />
      <br />
      <h3>📖. Desktop First Responsive Strategy</h3>
      <br />
      <h4>
        📃. <a href="https://bradfrost.com/blog/post/responsive-strategy/">Responsive strategy</a>
      </h4>
      <div>
        ﹘Right now around 11 or 12% of the top 100,000 sites are responsive, and no doubt that number is slated to rise over the next few
        years.
      </div>
      <h4>
        📃. <a href="https://designmodo.com/desktop-first-design-responsive/">Desktop-First Design Tips for Responsive Websites</a>
      </h4>
      <div>
        ﹘Most web designers know about mobile-first design and how it has dramatically affected responsive design. But there is another
        technique that may be less popular but can solve problems in a clearer fashion.
      </div>
      <div>
        ﹘With a desktop-first approach you can build all the features you want and create them to the highest specs. Then as you test on
        smaller devices you’ll focus on keeping the interface light while supporting as many “high-end” features as possible.
      </div>
      <div>
        ﹘This workflow is quite different but starting from the desktop can be better for web designers who create feature-rich designs.
      </div>
      <br />
      <br />
      <h3>📖. Sass preprocessor scripting language</h3>
      <br />
      <h4>
        📃. <a href="https://www.w3schools.com/sass/">Sass Tutorial</a>
      </h4>
      <div>﹘Sass is a CSS pre-processor.</div>
      <div>﹘Sass reduces repetition of CSS and therefore saves time.</div>
      <h4>
        📃. <a href="https://sass-lang.com/">CSS with superpowers</a>
      </h4>
      <div>﹘Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</div>
      <h4>
        📃. <a href="https://css-tricks.com/sass-style-guide/">Sass Style Guide</a>
      </h4>
      <div>
        ﹘With more people than ever writing in Sass, it bears some consideration how we format it. CSS style guides are common, so perhaps
        we can extend those to cover choices unique to Sass.
      </div>
      <div>
        ﹘Here are some ideas that I’ve been gravitating toward. Perhaps they are useful to you or help you formulate ideas of your own. If
        you’re looking for more examples, Sass Guidelines is another good place to look.
      </div>
      <h4>
        📃. <a href="https://css-tricks.com/sass-techniques-from-the-trenches/">Sass Techniques from the Trenches</a>
      </h4>
      <div>
        ﹘Having been in the web development industry for more than 14 years, I’ve seen and written my fair share of good and bad CSS. When
        I began at Ramsey Solutions five years ago, I was introduced to Sass. It blew my mind how useful it was! I dove right in and wanted
        to learn everything I could about it. Over the past five years, I’ve utilized a number of different Sass techniques and patterns and
        fell in love with some that, to steal Apple’s phrase, just work.
      </div>
      <h4>
        📃. <a href="https://css-tricks.com/introducing-sass-modules/">Introducing Sass Modules</a>
      </h4>
      <div>
        ﹘Sass just launched a major new feature you might recognize from other languages: a module system. This is a big step forward for
        @import. one of the most-used Sass-features.
      </div>
      <br />
      <br />
      <h3>📖. Layout</h3>
      <br />
      <h4>
        📃. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS Flexible Box Layout</a>
      </h4>
      <div>
        ﹘CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of
        items in one dimension. In the flex layout model, the children of a flex container can be laid out in any direction, and can “flex”
        their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical
        alignment of the children can be easily manipulated.
      </div>
      <h4>
        📃. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a>
      </h4>
      <div>
        ﹘CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer,
        between parts of a control built from HTML primitives
      </div>
      <div>
        ﹘Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible
        or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they
        actually overlap and layer, similar to CSS positioned elements.
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
      <br />
      <br />
      <h3>📖. Sass Loader</h3>
      <br />
      <div>
        ﹘<a href="https://github.com/webpack-contrib/sass-loader">Sass Loader in Webpack Contrib</a> Compiles Sass to CSS
      </div>
      <div>
        ﹘<a href="https://webpack.js.org/loaders/sass-loader/"> Sass Loader in Webpack Docs</a> Loads a Sass/SCSS file and compiles it to
        CSS.
      </div>
      <br />
      <br />
      <h3>📖. Node Sass</h3>
      <br />
      <div>
        ﹘<a href="https://github.com/sass/node-sass">Node.js bindings to libsass</a> Node-sass is a library that provides binding for
        Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
      </div>
      <div>﹘It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.</div>
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

export const CSSArchitecture = {
  SpecificationsStandardsGuidelines,
  OpenSourceDependencyProjects,
  Implementation: {
    DesignSystemCore,
    ProductMicrosites,
  },
}
