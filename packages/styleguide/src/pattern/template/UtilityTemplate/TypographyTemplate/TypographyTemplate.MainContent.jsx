/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
              <a href="/primer/utilities/">Utilities</a>
            </li>
            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/utilities/typography/" aria-current="page" className="text-gray">
                Typography
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Typography</h2>
        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-utilities"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-utilities/"
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
            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-utilities">
              4.14.1
            </a>
          </div>
          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>
        <div className="markdown-body">
          <p>
            Type utilities are designed to work in combination with line-height utilities so as to result in more sensible numbers wherever
            possible. These also exist as <a href="/primer/support/typography/#typography-variables">variables</a> that you can use in
            components or custom CSS.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#heading-utilities" id="markdown-toc-heading-utilities">
                Heading utilities
              </a>
            </li>
            <li>
              <a href="#type-scale-utilities" id="markdown-toc-type-scale-utilities">
                Type scale utilities
              </a>
            </li>
            <li>
              <a href="#line-height-styles" id="markdown-toc-line-height-styles">
                Line height styles
              </a>
            </li>
            <li>
              <a href="#typographic-styles" id="markdown-toc-typographic-styles">
                Typographic styles
              </a>
            </li>
            <li>
              <a href="#text-alignment" id="markdown-toc-text-alignment">
                Text alignment
              </a>
            </li>
            <li>
              <a href="#responsive-text-alignment" id="markdown-toc-responsive-text-alignment">
                Responsive text alignment
              </a>
            </li>
            <li>
              <a href="#list-styles" id="markdown-toc-list-styles">
                List styles
              </a>
            </li>
            <li>
              <a href="#text-shadows" id="markdown-toc-text-shadows">
                Text Shadows
              </a>
            </li>
          </ul>
          <p>
            Font sizes are smaller on mobile and scale up at the <code>md</code> <a href="/primer/support/breakpoints">breakpoint</a> to be
            larger on desktop.
          </p>
          <table>
            <thead>
              <tr>
                <th>Scale</th>
                <th>Font size: mobile</th>
                <th>Font size: desktop</th>
                <th>1.25 line height</th>
                <th>1.5 line height</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00</td>
                <td>40px</td>
                <td>48px</td>
                <td>60</td>
                <td>72</td>
              </tr>
              <tr>
                <td>0</td>
                <td>32px</td>
                <td>40px</td>
                <td>50</td>
                <td>60</td>
              </tr>
              <tr>
                <td>1</td>
                <td>26px</td>
                <td>32px</td>
                <td>40</td>
                <td>48</td>
              </tr>
              <tr>
                <td>2</td>
                <td>22px</td>
                <td>24px</td>
                <td>30</td>
                <td>36</td>
              </tr>
              <tr>
                <td>3</td>
                <td>18px</td>
                <td>20px</td>
                <td>25</td>
                <td>30</td>
              </tr>
              <tr>
                <td>4</td>
                <td>16px</td>
                <td>16px</td>
                <td>20</td>
                <td>24</td>
              </tr>
              <tr>
                <td>5</td>
                <td>14px</td>
                <td>14px</td>
                <td>17.5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>6</td>
                <td>12px</td>
                <td>12px</td>
                <td>15</td>
                <td>18</td>
              </tr>
            </tbody>
          </table>
          <a name="//apple_ref/cpp/Style/Heading%20utilities" className="dashAnchor" />
          <h2>
            <a id="heading-utilities" className="anchor" href="#heading-utilities" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Heading utilities
          </h2>
          <p>
            Use <code>.h1</code> – <code>.h6</code> to change an elements font size and weight to match our heading styles.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p className="h1">Pizza 1</p>
          <p className="h2">Pizza 2</p>
          <p className="h3">Pizza 3</p>
          <p className="h4">Pizza 4</p>
          <p className="h5">Pizza 5</p>
          <p className="h6">Pizza 6</p>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;h1&quot;</span>
                <span className="nt">&gt;</span>Pizza 1<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;h2&quot;</span>
                <span className="nt">&gt;</span>Pizza 2<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;h3&quot;</span>
                <span className="nt">&gt;</span>Pizza 3<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;h4&quot;</span>
                <span className="nt">&gt;</span>Pizza 4<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;h5&quot;</span>
                <span className="nt">&gt;</span>Pizza 5<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;h6&quot;</span>
                <span className="nt">&gt;</span>Pizza 6<span className="nt">&lt;/p&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <p>
            These are particularly useful for changing the visual appearance while keeping the markup semantically correct. Be sure you keep
            the hierarchy appropriate for the page.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <a name="//apple_ref/cpp/Style/Looks%20like%20a%20heading%201,%20semantically%20a%20heading%202" className="dashAnchor" />
          <h2 className="h1">Looks like a heading 1, semantically a heading 2</h2>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;h2</span> <span className="na">className=</span>
                <span className="s">&quot;h1&quot;</span>
                <span className="nt">&gt;</span>Looks like a heading 1, semantically a heading 2<span className="nt">&lt;/h2&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Type%20scale%20utilities" className="dashAnchor" />
          <h2>
            <a id="type-scale-utilities" className="anchor" href="#type-scale-utilities" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Type scale utilities
          </h2>
          <p>
            Use <code>.f1</code> – <code>.f6</code> to change an elements font size while keeping inline with our type scale.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p className="f1">Focaccia</p>
          <p className="f2">Focaccia</p>
          <p className="f3">Focaccia</p>
          <p className="f4">Focaccia</p>
          <p className="f5">Focaccia</p>
          <p className="f6">Focaccia</p>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;f1&quot;</span>
                <span className="nt">&gt;</span>Focaccia<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;f2&quot;</span>
                <span className="nt">&gt;</span>Focaccia<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;f3&quot;</span>
                <span className="nt">&gt;</span>Focaccia<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;f4&quot;</span>
                <span className="nt">&gt;</span>Focaccia<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;f5&quot;</span>
                <span className="nt">&gt;</span>Focaccia<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;f6&quot;</span>
                <span className="nt">&gt;</span>Focaccia<span className="nt">&lt;/p&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <p>
            Lighter font-weight utilities are available in a limited range. Lighter font-weights reduce the legibility of text, particularly
            at small font sizes, so the scale only goes down to <code>f3</code> at 20px. The larger sizes<code>f0</code> and{' '}
            <code>f00</code> allow for lighter and larger type that is in keeping with our marketing styles.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <a name="//apple_ref/cpp/Style/Potato%20chips" className="dashAnchor" />
          <h1 className="f00-light">Potato chips</h1>
          <a name="//apple_ref/cpp/Style/Potato%20chips" className="dashAnchor" />
          <h1 className="f0-light">Potato chips</h1>
          <a name="//apple_ref/cpp/Style/Potato%20chips" className="dashAnchor" />
          <h1 className="f1-light">Potato chips</h1>
          <a name="//apple_ref/cpp/Style/Potato%20chips" className="dashAnchor" />
          <h1 className="f2-light">Potato chips</h1>
          <a name="//apple_ref/cpp/Style/Potato%20chips" className="dashAnchor" />
          <h1 className="f3-light">Potato chips</h1>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;h1</span> <span className="na">className=</span>
                <span className="s">&quot;f00-light&quot;</span>
                <span className="nt">&gt;</span>Potato chips<span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;h1</span> <span className="na">className=</span>
                <span className="s">&quot;f0-light&quot;</span>
                <span className="nt">&gt;</span>Potato chips<span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;h1</span> <span className="na">className=</span>
                <span className="s">&quot;f1-light&quot;</span>
                <span className="nt">&gt;</span>Potato chips<span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;h1</span> <span className="na">className=</span>
                <span className="s">&quot;f2-light&quot;</span>
                <span className="nt">&gt;</span>Potato chips<span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;h1</span> <span className="na">className=</span>
                <span className="s">&quot;f3-light&quot;</span>
                <span className="nt">&gt;</span>Potato chips<span className="nt">&lt;/h1&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Line%20height%20styles" className="dashAnchor" />
          <h2>
            <a id="line-height-styles" className="anchor" href="#line-height-styles" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Line height styles
          </h2>
          <p>Change the line height density with these utilities.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p className="lh-default">
            Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage
            alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye
            picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
          </p>
          <p className="lh-condensed">
            Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage
            alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye
            picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
          </p>
          <p className="lh-condensed-ultra">
            Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage
            alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye
            picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
          </p>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;lh-default&quot;</span>
                <span className="nt">&gt;</span>
                Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta
                sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip
                ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
                <span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;lh-condensed&quot;</span>
                <span className="nt">&gt;</span>
                Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta
                sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip
                ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
                <span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;lh-condensed-ultra&quot;</span>
                <span className="nt">&gt;</span>
                Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta
                sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip
                ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
                <span className="nt">&lt;/p&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <p>
            The <code>lh-0</code> utility class sets <code>line-height: 0 !important</code>, and can be used to remove vertical spacing from
            elements that inherit line-height but don&apos;t contain any text.
          </p>
          <a name="//apple_ref/cpp/Style/Typographic%20styles" className="dashAnchor" />
          <h2>
            <a id="typographic-styles" className="anchor" href="#typographic-styles" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Typographic styles
          </h2>
          <p>Change the font weight, styles, and alignment with these utilities.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p className="text-normal">Normal</p>
          <p className="text-italic">Italic</p>
          <p className="text-bold">Bold</p>
          <p className="text-uppercase">Uppercase</p>
          <p className="no-wrap">No wrap</p>
          <p className="ws-normal">Normal whitespace</p>
          <p className="wb-break-all">Line break long lines</p>
          <p className="text-underline">Text underline</p>
          <p className="no-underline">No underline</p>
          <p className="text-emphasized">Emphasized</p>
          <p className="text-small">Small</p>
          <p className="lead">
            Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage
            alcatra tail.
          </p>
          <p className="text-mono">Monospace</p>
          <p className="user-select-none">User Select None</p>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-normal&quot;</span>
                <span className="nt">&gt;</span>Normal<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-italic&quot;</span>
                <span className="nt">&gt;</span>Italic<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-bold&quot;</span>
                <span className="nt">&gt;</span>Bold<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-uppercase&quot;</span>
                <span className="nt">&gt;</span>Uppercase<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;no-wrap&quot;</span>
                <span className="nt">&gt;</span>No wrap<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;ws-normal&quot;</span>
                <span className="nt">&gt;</span>Normal whitespace<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;wb-break-all&quot;</span>
                <span className="nt">&gt;</span>Line break long lines<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-underline&quot;</span>
                <span className="nt">&gt;</span>Text underline<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;no-underline&quot;</span>
                <span className="nt">&gt;</span>No underline<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-emphasized&quot;</span>
                <span className="nt">&gt;</span>Emphasized<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-small&quot;</span>
                <span className="nt">&gt;</span>Small<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;lead&quot;</span>
                <span className="nt">&gt;</span>Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round
                prosciutto hamburger porchetta sausage alcatra tail.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-mono&quot;</span>
                <span className="nt">&gt;</span>Monospace<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;user-select-none&quot;</span>
                <span className="nt">&gt;</span>User Select None<span className="nt">&lt;/p&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Text%20alignment" className="dashAnchor" />
          <h2>
            <a id="text-alignment" className="anchor" href="#text-alignment" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Text alignment
          </h2>
          <p>Use text alignment utilities to left align, center, or right align text.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p className="text-left">Left align</p>
          <p className="text-center">Center</p>
          <p className="text-right">Right align</p>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-left&quot;</span>
                <span className="nt">&gt;</span>Left align<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-center&quot;</span>
                <span className="nt">&gt;</span>Center<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-right&quot;</span>
                <span className="nt">&gt;</span>Right align<span className="nt">&lt;/p&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Responsive%20text%20alignment" className="dashAnchor" />
          <h2>
            <a id="responsive-text-alignment" className="anchor" href="#responsive-text-alignment" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Responsive text alignment
          </h2>
          <p>
            Use the following formula to make a text alignment utility responsive: <code>.text-[breakpoint]-[alignment]</code>
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p className="text-left text-sm-center text-lg-right">
            Left in a small viewport, centered in mid-sized viewports, and right aligned in larger viewports
          </p>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;text-left text-sm-center text-lg-right&quot;</span>
                <span className="nt">&gt;</span>Left in a small viewport, centered in mid-sized viewports, and right aligned in larger
                viewports
                <span className="nt">&lt;/p&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/List%20styles" className="dashAnchor" />
          <h2>
            <a id="list-styles" className="anchor" href="#list-styles" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            List styles
          </h2>
          <p>
            Remove bullets from an unordered list or numbers from an ordered list by applying <code>.list-style-none</code> to the{' '}
            <code>&lt;ul&gt;</code>.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <ul className="list-style-none">
            <li>First list item</li>
            <li>Second list item</li>
            <li>Third list item</li>
          </ul>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;list-style-none&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;</span>First list item<span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;</span>Second list item<span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;</span>Third list item<span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Text%20Shadows" className="dashAnchor" />
          <h2>
            <a id="text-shadows" className="anchor" href="#text-shadows" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Text Shadows
          </h2>
          <p>Text shadows can be used to help readability and to add some depth on colored backgrounds.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="bg-gray-dark p-5">
            <a
              name="//apple_ref/cpp/Style/.text-shadow-dark%20helps%20white%20text%20stand%20out%20on%20dark%20or%20photographic%20backgrounds"
              className="dashAnchor"
            />
            <h3 className="text-white text-shadow-dark">
              .text-shadow-dark helps white text stand out on dark or photographic backgrounds
            </h3>
          </div>
          <div className="bg-gray p-5">
            <a
              name="//apple_ref/cpp/Style/.text-shadow-light%20creates%20an%20embossed%20effect%20for%20dark%20text"
              className="dashAnchor"
            />
            <h3 className="text-shadow-light">.text-shadow-light creates an embossed effect for dark text</h3>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;bg-gray-dark p-5&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;text-white text-shadow-dark&quot;</span>
                <span className="nt">&gt;</span>.text-shadow-dark helps white text stand out on dark or photographic backgrounds
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;bg-gray p-5&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;text-shadow-light&quot;</span>
                <span className="nt">&gt;</span>.text-shadow-light creates an embossed effect for dark text
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/utilities/padding/">
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
            Padding
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/whats_new/changelog/">
            Changelog
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
