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
              <a href="/primer/components/">Components</a>
            </li>

            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/components/popover/" aria-current="page" className="text-gray">
                Popover
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Popover</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-popover"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-popover/"
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
              href="/primer/whats_new/status-key/#experimental"
              aria-label="Not safe to use in production yet; check issue for details"
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1 border-right"
            >
              <span className="text-yellow mr-1" aria-label="Experimental">
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
              Experimental
            </a>

            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-popover">
              0.1.6
            </a>
          </div>

          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-product">primer-product</a>
          </div>
        </div>

        <div className="markdown-body">
          <p>
            Popovers are used to bring attention to specific user interface elements, typically to suggest an action or to guide users
            through a new experience.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#notes" id="markdown-toc-notes">
                Notes
              </a>
            </li>
            <li>
              <a href="#basic-example" id="markdown-toc-basic-example">
                Basic example
              </a>
            </li>
            <li>
              <a href="#large-example" id="markdown-toc-large-example">
                Large example
              </a>
            </li>
            <li>
              <a href="#bottom" id="markdown-toc-bottom">
                Bottom
              </a>
            </li>
            <li>
              <a href="#bottom-right" id="markdown-toc-bottom-right">
                Bottom-right
              </a>
            </li>
            <li>
              <a href="#bottom-left" id="markdown-toc-bottom-left">
                Bottom-left
              </a>
            </li>
            <li>
              <a href="#left" id="markdown-toc-left">
                Left
              </a>
            </li>
            <li>
              <a href="#left-bottom" id="markdown-toc-left-bottom">
                Left-bottom
              </a>
            </li>
            <li>
              <a href="#left-top" id="markdown-toc-left-top">
                Left-top
              </a>
            </li>
            <li>
              <a href="#right" id="markdown-toc-right">
                Right
              </a>
            </li>
            <li>
              <a href="#right-bottom" id="markdown-toc-right-bottom">
                Right-bottom
              </a>
            </li>
            <li>
              <a href="#right-top" id="markdown-toc-right-top">
                Right-top
              </a>
            </li>
            <li>
              <a href="#top-left" id="markdown-toc-top-left">
                Top-left
              </a>
            </li>
            <li>
              <a href="#top-right" id="markdown-toc-top-right">
                Top-right
              </a>
            </li>
          </ul>
          <p>A popover consist of:</p>
          <ul>
            <li>
              The block element, <code>.Popover</code>, which simply positions its content absolutely atop other body content.
            </li>
            <li>
              The child element, <code>.Popover-message</code>, which contains the markup for the intended messaging and the visual
              &quot;caret.&quot;
            </li>
          </ul>
          <p>
            In the examples below, <code>Popover-message</code>, in particular, uses a handful of utility classes to style it appropriately.
            And these are intended to demonstrate the default, go-to presentation for the popover&qpos;s message. By default, the
            message&qpos;s caret is centered on the top edge of the message.
          </p>
          <p>
            The <code>Popover-message</code> element also supports several modifiers, most of which position the caret differently:
          </p>
          <ul>
            <li>
              <a href="#default-top-center">
                <code>.Popover-message--top</code>
              </a>{' '}
              (default): Places the caret on the top edge of the message, horizontally centered.
            </li>
            <li>
              <a href="#bottom">
                <code>.Popover-message--bottom</code>
              </a>{' '}
              Places the caret on the bottom edge of the message, horizontally centered.
            </li>
            <li>
              <a href="#right">
                <code>.Popover-message--right</code>
              </a>
              : Places the caret on the right edge of the message, vertically centered.
            </li>
            <li>
              <a href="#left">
                <code>.Popover-message--left</code>
              </a>
              : Places the caret on the left edge of the message, vertically centered.
            </li>
          </ul>
          <p>
            Each of these modifiers also support a syntax for adjusting the positioning the caret to the right, left, top, or bottom of its
            respective edge. That syntax looks like:
          </p>
          <ul>
            <li>
              <a href="#bottom-left">
                <code>.Popover-message--bottom-left</code>
              </a>
            </li>
            <li>
              <a href="#bottom-right">
                <code>.Popover-message--bottom-right</code>
              </a>
            </li>
            <li>
              <a href="#left-bottom">
                <code>.Popover-message--left-bottom</code>
              </a>
            </li>
            <li>
              <a href="#left-top">
                <code>.Popover-message--left-top</code>
              </a>
            </li>
            <li>
              <a href="#right-bottom">
                <code>.Popover-message--right-bottom</code>
              </a>
            </li>
            <li>
              <a href="#right-top">
                <code>.Popover-message--right-top</code>
              </a>
            </li>
            <li>
              <a href="#top-left">
                <code>.Popover-message--top-left</code>
              </a>
            </li>
            <li>
              <a href="#top-right">
                <code>.Popover-message--top-right</code>
              </a>
            </li>
          </ul>
          <p>
            Lastly, there is an added{' '}
            <a href="#large">
              <code>.Popover-message--large</code>
            </a>{' '}
            modifier, which assumes a slightly wider popover message on screens wider than 544px.
          </p>
          <a name="//apple_ref/cpp/Style/Notes" className="dashAnchor" />
          <h3>
            <a id="notes" className="anchor" href="#notes" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Notes
          </h3>
          <p>The samples below include optional markup, like:</p>
          <ul>
            <li>
              An outermost container that establishes stacking context (e.g. <code>position-relative</code>).
            </li>
            <li>A choice piece of user interface (a button, in this case) to relate the popover to.</li>
            <li>
              Use of the <code>Details</code> and <code>js-details</code> family of class names, which interact with JavaScript to
              demonstrate dismissal of the popover by clicking the nested &quot;Got it!&quot; button.
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Basic%20example" className="dashAnchor" />
          <h3>
            <a id="basic-example" className="anchor" href="#basic-example" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Basic example
          </h3>
          <p>Defaults to caret oriented top-center.</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="position-relative text-center">
            <button type="button" className="btn btn-primary">
              UI
            </button>
            <div className="Popover right-0 left-0">
              <div className="Popover-message text-left p-4 mt-2 mx-auto Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;position-relative text-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover right-0 left-0&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message text-left p-4 mt-2 mx-auto Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Large%20example" className="dashAnchor" />
          <h3>
            <a id="large-example" className="anchor" href="#large-example" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Large example
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="position-relative text-center">
            <button type="button" className="btn btn-primary">
              UI
            </button>
            <div className="Popover right-0 left-0">
              <div className="Popover-message Popover-message--large text-left p-4 mt-2 Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;position-relative text-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover right-0 left-0&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--large text-left p-4 mt-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Bottom" className="dashAnchor" />
          <h3>
            <a id="bottom" className="anchor" href="#bottom" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Bottom
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="position-relative text-center">
            <div className="Popover position-relative">
              <div className="Popover-message Popover-message--bottom p-4 mx-auto mb-2 text-left Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
            <button type="button" className="btn btn-primary">
              UI
            </button>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;position-relative text-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">
                  &quot;Popover-message Popover-message--bottom p-4 mx-auto mb-2 text-left Box box-shadow-large&quot;
                </span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Bottom-right" className="dashAnchor" />
          <h3>
            <a id="bottom-right" className="anchor" href="#bottom-right" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Bottom-right
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="position-relative text-right">
            <div className="Popover position-relative">
              <div className="Popover-message Popover-message--bottom-right p-4 mb-2 text-left Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
            <button type="button" className="btn btn-primary">
              UI
            </button>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;position-relative text-right&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--bottom-right p-4 mb-2 text-left Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Bottom-left" className="dashAnchor" />
          <h3>
            <a id="bottom-left" className="anchor" href="#bottom-left" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Bottom-left
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Popover position-relative">
            <div className="Popover-message Popover-message--bottom-left p-4 mb-2 Box box-shadow-large">
              <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
              <h4 className="mb-2">Popover heading</h4>
              <p>Message about this particular piece of UI.</p>
              <button type="submit" className="btn btn-outline mt-2 text-bold">
                Got it!
              </button>
            </div>
          </div>
          <button type="button" className="btn btn-primary">
            UI
          </button>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--bottom-left p-4 mb-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Left" className="dashAnchor" />
          <h3>
            <a id="left" className="anchor" href="#left" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Left
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-flex flex-justify-center flex-items-center">
            <button type="button" className="btn btn-primary">
              UI
            </button>
            <div className="Popover position-relative">
              <div className="Popover-message Popover-message--left p-4 ml-2 Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;d-flex flex-justify-center flex-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--left p-4 ml-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Left-bottom" className="dashAnchor" />
          <h3>
            <a id="left-bottom" className="anchor" href="#left-bottom" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Left-bottom
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-flex flex-justify-center flex-items-end">
            <button type="button" className="btn btn-primary">
              UI
            </button>
            <div className="Popover position-relative">
              <div className="Popover-message Popover-message--left-bottom p-4 ml-2 Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;d-flex flex-justify-center flex-items-end&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--left-bottom p-4 ml-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Left-top" className="dashAnchor" />
          <h3>
            <a id="left-top" className="anchor" href="#left-top" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Left-top
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-flex flex-justify-center flex-items-start">
            <button type="button" className="btn btn-primary">
              UI
            </button>
            <div className="Popover position-relative">
              <div className="Popover-message Popover-message--left-top p-4 ml-2 Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;d-flex flex-justify-center flex-items-start&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--left-top p-4 ml-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Right" className="dashAnchor" />
          <h3>
            <a id="right" className="anchor" href="#right" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Right
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-flex flex-justify-center flex-items-center">
            <div className="Popover position-relative">
              <div className="Popover-message Popover-message--right p-4 mr-2 Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
            <button type="button" className="btn btn-primary">
              UI
            </button>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;d-flex flex-justify-center flex-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--right p-4 mr-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Right-bottom" className="dashAnchor" />
          <h3>
            <a id="right-bottom" className="anchor" href="#right-bottom" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Right-bottom
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-flex flex-justify-center flex-items-end">
            <div className="Popover position-relative">
              <div className="Popover-message Popover-message--right-bottom p-4 mr-2 Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
            <button type="button" className="btn btn-primary">
              UI
            </button>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;d-flex flex-justify-center flex-items-end&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--right-bottom p-4 mr-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Right-top" className="dashAnchor" />
          <h3>
            <a id="right-top" className="anchor" href="#right-top" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Right-top
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-flex flex-justify-center flex-items-start">
            <div className="Popover position-relative">
              <div className="Popover-message Popover-message--right-top p-4 mr-2 Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
            <button type="button" className="btn btn-primary">
              UI
            </button>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;d-flex flex-justify-center flex-items-start&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--right-top p-4 mr-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Top-left" className="dashAnchor" />
          <h3>
            <a id="top-left" className="anchor" href="#top-left" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Top-left
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="position-relative">
            <button type="button" className="btn btn-primary">
              UI
            </button>
            <div className="Popover">
              <div className="Popover-message Popover-message--top-left p-4 mt-2 Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;position-relative&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--top-left p-4 mt-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Top-right" className="dashAnchor" />
          <h3>
            <a id="top-right" className="anchor" href="#top-right" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Top-right
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="position-relative text-right">
            <button type="button" className="btn btn-primary">
              UI
            </button>
            <div className="Popover right-0">
              <div className="Popover-message Popover-message--top-right text-left p-4 mt-2 Box box-shadow-large">
                <a name="//apple_ref/cpp/Style/Popover%20heading" className="dashAnchor" />
                <h4 className="mb-2">Popover heading</h4>
                <p>Message about this particular piece of UI.</p>
                <button type="submit" className="btn btn-outline mt-2 text-bold">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;position-relative text-right&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>UI<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover right-0&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Popover-message Popover-message--top-right text-left p-4 mt-2 Box box-shadow-large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h4</span> <span className="na">class=</span>
                <span className="s">&quot;mb-2&quot;</span>
                <span className="nt">&gt;</span>Popover heading<span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;p&gt;</span>Message about this particular piece of UI.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline mt-2 text-bold&quot;</span>
                <span className="nt">&gt;</span>Got it!<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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
          <a href="/primer/components/pagination/">
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
            Pagination
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/progress/">
            Progress
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
