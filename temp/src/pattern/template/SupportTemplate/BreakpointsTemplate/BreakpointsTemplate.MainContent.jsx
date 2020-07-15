/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

export function MainContent() {
  return (
    <main className="flex-row flex-lg-column main-content mt-4 mt-lg-6 pb-6 mx-auto px-3" id="js-pjax-container" data-pjax-container="">
      <div className="clearfix">
        <nav aria-label="Breadcrumb" data-pjax="">
          <ol>
            <li className="breadcrumb-item text-small">
              <a href="/primer/">Primer</a>
            </li>

            <li className="breadcrumb-item text-small">
              <a href="/primer/support/">Support</a>
            </li>

            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/support/breakpoints/" aria-current="page" className="text-gray">
                Breakpoints
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Breakpoints</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-support"
              className="d-inline-block link-gray-dark no-underline tooltipped tooltipped-nw mt-2 mr-2"
              aria-label="Provide feedback"
            >
              <svg
                height="16"
                aria-label="issue"
                className="octicon octicon-comment"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                role="img"
              >
                <path
                  fillRule="evenodd"
                  d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/primer/primer/blob/master/modules/primer-support/lib/mixins/layout.scss"
              className="d-inline-block link-gray-dark no-underline tooltipped tooltipped-nw mt-2"
              aria-label="View source"
            >
              <svg
                height="16"
                aria-label="issue"
                className="octicon octicon-file-code"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                role="img"
              >
                <path
                  fillRule="evenodd"
                  d="M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z"
                />
              </svg>
            </a>
          </div>
          <div className="d-inline-block Box mr-3">
            <a
              href="/primer/whats_new/status-key/#stable"
              aria-label="Safe to use; provide feedback in issue"
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1 border-right"
            >
              <span className="text-green mr-1" aria-label="Stable">
                <svg
                  height="18"
                  className="octicon octicon-primitive-dot v-align-text-top"
                  viewBox="0 0 8 16"
                  version="1.1"
                  width="9"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                </svg>
              </span>
              Stable
            </a>

            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-support">
              4.7.0
            </a>
          </div>

          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>

        <div className="markdown-body">
          <ul id="markdown-toc">
            <li>
              <a href="#breakpoint-variables" id="markdown-toc-breakpoint-variables">
                Breakpoint variables
              </a>
            </li>
            <li>
              <a href="#media-query-mixins" id="markdown-toc-media-query-mixins">
                Media query mixins
              </a>
            </li>
            <li>
              <a href="#responsive-variants" id="markdown-toc-responsive-variants">
                Responsive variants
              </a>
              <ul>
                <li>
                  <a href="#caution" id="markdown-toc-caution">
                    Caution!
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Our breakpoints are based on screen widths where our content starts to break. Since most of GitHub is currently a fixed-width
            with we use pixel widths to make it easy for us to match page widths for responsive and non-responsive pages.{' '}
            <strong>Our breakpoints may change as we move more of the product into responsive layouts.</strong>
          </p>
          <p>
            We use abbreviations for each breakpoint to keep the class names concise. This abbreviated syntax is used consistently across
            responsive styles. Responsive styles allow you to change the styles properties at each breakpoint. For example, when using
            column widths for grid layouts, you can change specify that the width is 12 columns wide at the small breakpoint, and 6 columns
            wide from the large breakpoint: <code>&lt;div class=&quot;col-sm-12 col-lg-6&quot;&gt;...&lt;/div&gt;</code>
          </p>
          <table>
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Syntax</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td>sm</td>
                <td>min-width: 544px</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>md</td>
                <td>min-width: 768px</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>lg</td>
                <td>min-width: 1012px</td>
              </tr>
              <tr>
                <td>Extra-large</td>
                <td>xl</td>
                <td>min-width: 1280px</td>
              </tr>
            </tbody>
          </table>
          <p>
            <small>
              <strong>Note:</strong> The <code>lg</code> breakpoint matches our current page width of <code>980px</code> including left and
              right padding of <code>16px</code> (<code>$spacer-3</code>). This is so that content doesn&apos;t touch the edges of the
              window when resized.
            </small>
          </p>
          <p>
            Responsive styles are available for <a href="../../utilities/margin/#responsive-margins">margin</a>,{' '}
            <a href="../../utilities/padding#responsive-padding">padding</a>, <a href="../../utilities/layout">layout</a>,{' '}
            <a href="../../utilities/flexbox#responsive-flex-utilities">flexbox</a>, and the{' '}
            <a href="../../objects/grid#responsive-grids">grid</a> system.
          </p>
          <a name="//apple_ref/cpp/Style/Breakpoint%20variables" className="dashAnchor" />
          <h2>
            <a id="breakpoint-variables" className="anchor" href="#breakpoint-variables" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Breakpoint variables
          </h2>
          <p>The above values are defined as variables, and then put into a Sass map that generates the media query mixin.</p>
          <pre className="highlight-scss highlight">
            <code>
              <span className="c1">// breakpoints</span>
              <span className="nv">$width-xs</span>
              <span className="p">:</span> <span className="m">0</span>
              <span className="p">;</span>
              <span className="nv">$width-sm</span>
              <span className="p">:</span> <span className="m">544px</span>
              <span className="p">;</span>
              <span className="nv">$width-md</span>
              <span className="p">:</span> <span className="m">768px</span>
              <span className="p">;</span>
              <span className="nv">$width-lg</span>
              <span className="p">:</span> <span className="m">1012px</span>
              <span className="p">;</span>
              <span className="nv">$width-xl</span>
              <span className="p">:</span> <span className="m">1280px</span>
              <span className="p">;</span>
              <span className="nv">$breakpoints</span>
              <span className="p">:</span> <span className="p">(</span>
              <span className="o">//</span> <span className="n">Small</span> <span className="n">screen</span> <span className="o">/</span>{' '}
              <span className="n">phone</span>
              <span className="n">sm</span>
              <span className="o">:</span> <span className="nv">$width-sm</span>
              <span className="o">,</span>
              <span className="o">//</span> <span className="n">Medium</span> <span className="n">screen</span> <span className="o">/</span>{' '}
              <span className="n">tablet</span>
              <span className="n">md</span>
              <span className="o">:</span> <span className="nv">$width-md</span>
              <span className="o">,</span>
              <span className="o">//</span> <span className="n">Large</span> <span className="n">screen</span> <span className="o">/</span>{' '}
              <span className="nf">desktop</span> <span className="p">(</span>
              <span className="m">980</span> <span className="o">+</span> <span className="p">(</span>
              <span className="m">12</span> <span className="o">*</span> <span className="m">2</span>
              <span className="p">))</span> <span className="o">&lt;=</span> <span className="n">container</span>{' '}
              <span className="o">+</span> <span className="n">gutters</span>
              <span className="n">lg</span>
              <span className="o">:</span> <span className="nv">$width-lg</span>
              <span className="o">,</span>
              <span className="o">//</span> <span className="n">Extra</span> <span className="nb">large</span>{' '}
              <span className="n">screen</span> <span className="o">/</span> <span className="n">wide</span>{' '}
              <span className="n">desktop</span>
              <span className="n">xl</span>
              <span className="o">:</span> <span className="nv">$width-xl</span>
              <span className="p">)</span> <span className="o">!</span>
              <span className="nb">default</span>
              <span className="p">;</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Media%20query%20mixins" className="dashAnchor" />
          <h2>
            <a id="media-query-mixins" className="anchor" href="#media-query-mixins" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Media query mixins
          </h2>
          <p>
            Use media query mixins when you want to change CSS properties at a particular breakpoint. The media query mixin works by passing
            in a breakpoint value, such as <code>breakpoint(md)</code>.
          </p>
          <p>
            Media queries are scoped from each breakpoint and upwards. In the example below, the font size is <code>28px</code> until the
            viewport size meets the <code>lg</code> breakpoint, from there upwards—including through the <code>xl</code> breakpoint—the font
            size will be <code>32px</code>.
          </p>
          <pre>
            <code>
              .styles {'{'}
              font-size: 28px; @include breakpoint(md) {'{'} font-size: 32px; {'}'}
              {'}'}
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Responsive%20variants" className="dashAnchor" />
          <h2>
            <a id="responsive-variants" className="anchor" href="#responsive-variants" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Responsive variants
          </h2>
          <p>
            The <code>$responsive-variants</code> variable is a mapping of breakpoints to classname variants, and should be used like so:
          </p>
          <pre className="highlight-scss highlight">
            <code>
              <span className="k">@each</span> <span className="nv">$breakpoint</span>
              <span className="o">,</span> <span className="nv">$variant</span> <span className="n">in</span>{' '}
              <span className="nv">$responsive-variants</span> <span className="p">{'{'}</span>
              <span className="k">@include</span> <span className="nd">breakpoint</span>
              <span className="p">(</span>
              <span className="nv">$breakpoint</span>
              <span className="p">)</span> <span className="p">{'{'}</span>
              <span className="c1">// Note: the first iteration gets `$variant == &quot;&quot;`</span> <span className="nc">.overflow</span>
              <span className="si">#{'{'}</span>
              <span className="nv">$variant</span>
              <span className="si">{'}'}</span>
              <span className="nc">-auto</span> <span className="p">{'{'}</span> <span className="nl">overflow</span>
              <span className="p">:</span> <span className="nb">auto</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="p">{'}'}</span>
              <span className="p">{'}'}</span>
            </code>
          </pre>
          <p>The resulting CSS would be:</p>
          <pre className="highlight-css highlight">
            <code>
              <span className="nc">.overflow-auto</span> <span className="p">{'{'}</span> <span className="nl">overflow</span>
              <span className="p">:</span> <span className="nb">auto</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="k">@media</span> <span className="p">(</span>
              <span className="n">min-width</span>
              <span className="p">:</span> <span className="m">544px</span>
              <span className="p">)</span> <span className="p">{'{'}</span> <span className="nc">.overflow-sm-auto</span>{' '}
              <span className="p">{'{'}</span> <span className="nl">overflow</span>
              <span className="p">:</span> <span className="nb">auto</span>
              <span className="p">;</span> <span className="p">{'}'}</span> <span className="p">{'}'}</span>
              <span className="k">@media</span> <span className="p">(</span>
              <span className="n">min-width</span>
              <span className="p">:</span> <span className="m">768px</span>
              <span className="p">)</span> <span className="p">{'{'}</span> <span className="nc">.overflow-md-auto</span>{' '}
              <span className="p">{'{'}</span> <span className="nl">overflow</span>
              <span className="p">:</span> <span className="nb">auto</span>
              <span className="p">;</span> <span className="p">{'}'}</span> <span className="p">{'}'}</span>
              <span className="k">@media</span> <span className="p">(</span>
              <span className="n">min-width</span>
              <span className="p">:</span> <span className="m">1012px</span>
              <span className="p">)</span> <span className="p">{'{'}</span> <span className="nc">.overflow-lg-auto</span>{' '}
              <span className="p">{'{'}</span> <span className="nl">overflow</span>
              <span className="p">:</span> <span className="nb">auto</span>
              <span className="p">;</span> <span className="p">{'}'}</span> <span className="p">{'}'}</span>
              <span className="k">@media</span> <span className="p">(</span>
              <span className="n">min-width</span>
              <span className="p">:</span> <span className="m">1280px</span>
              <span className="p">)</span> <span className="p">{'{'}</span> <span className="nc">.overflow-xl-auto</span>{' '}
              <span className="p">{'{'}</span> <span className="nl">overflow</span>
              <span className="p">:</span> <span className="nb">auto</span>
              <span className="p">;</span> <span className="p">{'}'}</span> <span className="p">{'}'}</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Caution!" className="dashAnchor" />
          <h4>
            <a id="caution" className="anchor" href="#caution" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Caution!
          </h4>
          <ol>
            <li>
              Don&apos;t precede the{' '}
              <code>
                #{'{'}$variation{'}'}
              </code>{' '}
              interpolation with a hyphen because the first value of <code>$variant</code> will be an empty string.
            </li>
            <li>
              For consistency, please put the <code>@include breakpoint($breakpoint)</code> call directly inside the{' '}
              <code>$responsive-variants</code> loop. This will help keep file sizes small by batching selectors in shared{' '}
              <code>@media</code> queries.
            </li>
          </ol>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/packages/primer/">
            <svg
              height="14"
              className="octicon octicon-chevron-left v-align-text-bottom"
              viewBox="0 0 8 16"
              version="1.1"
              width="7"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z" />
            </svg>
            Primer
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/support/marketing-variables/">
            Marketing variables
            <svg
              height="14"
              className="octicon octicon-chevron-right v-align-text-bottom"
              viewBox="0 0 8 16"
              version="1.1"
              width="7"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
/* eslint-enable jsx-a11y/anchor-has-content */
/* eslint-enable jsx-a11y/anchor-is-valid */
/* eslint-enable react/jsx-no-comment-textnodes */
