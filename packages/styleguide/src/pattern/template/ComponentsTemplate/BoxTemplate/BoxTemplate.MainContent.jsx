/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
              <a href="/primer/components/box/" aria-current="page" className="text-gray">
                Box
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Box</h2>
        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-box"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-box/"
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
              href="/primer/whats_new/status-key/#new-release"
              aria-label="Safe to use; provide feedback in issue"
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1 border-right"
            >
              <span className="text-green mr-1" aria-label="New release">
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
              New release
            </a>
            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-box">
              2.5.11
            </a>
          </div>
          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>
        <div className="markdown-body">
          <p>
            The <code>.Box</code> component can be used for something as simple as a rounded corner box, or more complex lists and forms. It
            includes optional modifiers for padding density and color themes.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#box" id="markdown-toc-box">
                Box
              </a>
            </li>
            <li>
              <a href="#box-elements" id="markdown-toc-box-elements">
                Box elements
              </a>
              <ul>
                <li>
                  <a href="#box-row" id="markdown-toc-box-row">
                    Box row
                  </a>
                </li>
                <li>
                  <a href="#box-row-markup-structure" id="markdown-toc-box-row-markup-structure">
                    Box row markup structure
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#box-padding-density" id="markdown-toc-box-padding-density">
                Box padding density
              </a>
            </li>
            <li>
              <a href="#blue-box-theme" id="markdown-toc-blue-box-theme">
                Blue box theme
              </a>
            </li>
            <li>
              <a href="#blue-box-header-theme" id="markdown-toc-blue-box-header-theme">
                Blue box header theme
              </a>
            </li>
            <li>
              <a href="#box-danger-theme" id="markdown-toc-box-danger-theme">
                Box danger theme
              </a>
            </li>
            <li>
              <a href="#row-themes" id="markdown-toc-row-themes">
                Row themes
              </a>
              <ul>
                <li>
                  <a href="#box-row-unread" id="markdown-toc-box-row-unread">
                    Box row unread
                  </a>
                </li>
                <li>
                  <a href="#box-row-link" id="markdown-toc-box-row-link">
                    Box row link
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#dashed-border" id="markdown-toc-dashed-border">
                Dashed border
              </a>
            </li>
            <li>
              <a href="#boxes-with-flash-alerts" id="markdown-toc-boxes-with-flash-alerts">
                Boxes with flash alerts
              </a>
            </li>
            <li>
              <a href="#boxes-with-icons" id="markdown-toc-boxes-with-icons">
                Boxes with icons
              </a>
            </li>
            <li>
              <a href="#box-headers-with-counters" id="markdown-toc-box-headers-with-counters">
                Box headers with counters
              </a>
            </li>
            <li>
              <a href="#form-elements-and-buttons-in-boxes" id="markdown-toc-form-elements-and-buttons-in-boxes">
                Form elements and buttons in boxes
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Box" className="dashAnchor" />
          <h2>
            <a id="box" className="anchor" href="#box" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box
          </h2>
          <p>
            A <code>.Box</code> is a container with a a white background, a light gray border, and rounded corners. By default there are no
            additional styles such as padding, these can be added as needed with utility classes. Other styles and layouts can be achieved
            with box elements and modifiers shown in the documentation below.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">This is a box.</div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                This is a box.
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
          <a name="//apple_ref/cpp/Style/Box%20elements" className="dashAnchor" />
          <h2>
            <a id="box-elements" className="anchor" href="#box-elements" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box elements
          </h2>
          <p>
            Box elements include <code>Box-header</code>, <code>Box-body</code>, and <code>Box-footer</code>. These elements include borders
            and consistent padding. Optionally, you can include use <code>Box-title</code> which applies a bold font-weight the heading.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header">
              <a name="//apple_ref/cpp/Style/Box%20title" className="dashAnchor" />
              <h3 className="Box-title">Box title</h3>
            </div>
            <div className="Box-body">Box body</div>
            <div className="Box-footer">Box footer</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title&quot;</span>
                <span className="nt">&gt;</span>
                Box title
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-footer&quot;</span>
                <span className="nt">&gt;</span>
                Box footer
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
          <a name="//apple_ref/cpp/Style/Box%20row" className="dashAnchor" />
          <h3>
            <a id="box-row" className="anchor" href="#box-row" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box row
          </h3>
          <p>
            Use <code>Box-row</code> to add rows with borders and maintain the same padding. Box rows have a lighter border to give contrast
            between the header and footer.
          </p>
          <p>
            <strong>Note:</strong> Box rows have some reliance on markup structure in order to target the first and last rows, therefore
            using an unordered list is recommended. See <a href="#box-row-markup-structure">box row markup structure</a> for more
            information.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
              <li className="Box-row">Box row three</li>
              <li className="Box-row">Box row four</li>
            </ul>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row one
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row two
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row three
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row four
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
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
          <p>
            Rows can be used with or without <code>Box-header</code>, <code>Box-footer</code>, or <code>Box-body</code>.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header">Box header</div>
            <div className="Box-body">
              <strong>Box body</strong>
            </div>
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
              <li className="Box-row">Box row three</li>
              <li className="Box-row">Box row four</li>
            </ul>
            <div className="Box-footer">Box footer</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                Box header
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;strong&gt;</span>Box body<span className="nt">&lt;/strong&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row one
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row two
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row three
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row four
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-footer&quot;</span>
                <span className="nt">&gt;</span>
                Box footer
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
          <a name="//apple_ref/cpp/Style/Box%20row%20markup%20structure" className="dashAnchor" />
          <h3>
            <a id="box-row-markup-structure" className="anchor" href="#box-row-markup-structure" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box row markup structure
          </h3>
          <p>
            Box rows have some reliance on markup structure in order to target the first and last rows. Box rows are given a top border that
            is lighter in color than other box elements so the first row is targeted to apply a darker border color. An inner border-radius
            is applied to the first and last rows that that row corners don&apos;t poke outside the <code>Box</code>, this can be
            particularly noticeable when using a highlight on box rows.
          </p>
          <p>
            Using an unordered list is recommended in order to target the first and last rows, however, if you need to use a{' '}
            <code>&lt;div&gt;</code> for your rows, you may want to place your rows inside a parent <code>&lt;div&gt;</code> so that the
            first and last rows are styled appropriately.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header">Box header</div>
            <div>
              <div className="Box-row">Box row using a div</div>
              <div className="Box-row">Box row using a div</div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                Box header
                <span className="nt">&lt;/div&gt;</span>
                <span className="c">&lt;!-- This wrapping div ensures the first and last rows can be targeted for styling. --&gt;</span>
                <span className="nt">&lt;div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>Box row using a div<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>Box row using a div<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Box%20padding%20density" className="dashAnchor" />
          <h2>
            <a id="box-padding-density" className="anchor" href="#box-padding-density" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box padding density
          </h2>
          <p>You can changed the padding density of the box component.</p>
          <p>
            Use <code>Box--condensed</code> to apply a more condensed line-height and reduce the padding on the Y axis.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box Box--condensed">
            <div className="Box-header">
              <a name="//apple_ref/cpp/Style/Box%20title" className="dashAnchor" />
              <h3 className="Box-title">Box title</h3>
            </div>
            <div className="Box-body">Box body</div>
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
            </ul>
            <div className="Box-footer">Box footer</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box Box--condensed&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title&quot;</span>
                <span className="nt">&gt;</span>
                Box title
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row one
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row two
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-footer&quot;</span>
                <span className="nt">&gt;</span>
                Box footer
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
          <p>
            Use <code>Box--spacious</code> to increase padding and increase the title font size.
          </p>
          <p>
            You may want to increase the overall font size to work with the larger padding, in this example the default body font size is
            increased to 16px using the <code>f4</code> typography utility.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box Box--spacious f4">
            <div className="Box-header">
              <a name="//apple_ref/cpp/Style/Box%20title" className="dashAnchor" />
              <h3 className="Box-title">Box title</h3>
            </div>
            <div className="Box-body">Box body</div>
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
            </ul>
            <div className="Box-footer">Box footer</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box Box--spacious f4&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title&quot;</span>
                <span className="nt">&gt;</span>
                Box title
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row one
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row two
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-footer&quot;</span>
                <span className="nt">&gt;</span>
                Box footer
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
          <a name="//apple_ref/cpp/Style/Blue%20box%20theme" className="dashAnchor" />
          <h2>
            <a id="blue-box-theme" className="anchor" href="#blue-box-theme" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Blue box theme
          </h2>
          <p>
            Use <code>Box--blue</code> to style the box borders and box header in blue.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box Box--blue">
            <div className="Box-header">Box header</div>
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
            </ul>
            <div className="Box-footer">Box footer</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box Box--blue&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                Box header
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row one
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row two
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-footer&quot;</span>
                <span className="nt">&gt;</span>
                Box footer
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
          <a name="//apple_ref/cpp/Style/Blue%20box%20header%20theme" className="dashAnchor" />
          <h2>
            <a id="blue-box-header-theme" className="anchor" href="#blue-box-header-theme" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Blue box header theme
          </h2>
          <p>
            Use <code>Box-header--blue</code> to add to change the header border and background to blue.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header Box-header--blue">
              <a name="//apple_ref/cpp/Style/Box%20with%20blue%20header" className="dashAnchor" />
              <h3 className="Box-title">Box with blue header</h3>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                {' '}
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header Box-header--blue&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title&quot;</span>
                <span className="nt">&gt;</span>Box with blue header<span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
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
          <a name="//apple_ref/cpp/Style/Box%20danger%20theme" className="dashAnchor" />
          <h2>
            <a id="box-danger-theme" className="anchor" href="#box-danger-theme" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box danger theme
          </h2>
          <p>
            Use <code>Box--danger</code> to apply a red border to the outside of the box. This theme is helpful for communicating
            destructive actions.
          </p>
          <p>
            <strong>Note:</strong> <code>Box-danger</code> only works with either <code>Box-row</code>&apos;s or <code>Box-body</code>.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box Box--danger">
            <div className="Box-row">Row one</div>
            <div className="Box-row">Row two</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box Box--danger&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Row one
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Row two
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
          <p>
            <code>Box-danger</code> is often paired with a red heading. See the <a href="../subhead">subhead</a> docs for more information.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Subhead border-bottom-0">
            <a name="//apple_ref/cpp/Style/Danger%20zone" className="dashAnchor" />
            <h2 className="Subhead-heading Subhead-heading--danger">Danger zone</h2>
          </div>
          <div className="Box Box--danger">
            <div className="Box-body">Box body</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Subhead border-bottom-0&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h2</span> <span className="na">className=</span>
                <span className="s">&quot;Subhead-heading Subhead-heading--danger&quot;</span>
                <span className="nt">&gt;</span>Danger zone<span className="nt">&lt;/h2&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box Box--danger&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
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
          <a name="//apple_ref/cpp/Style/Row%20themes" className="dashAnchor" />
          <h2>
            <a id="row-themes" className="anchor" href="#row-themes" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Row themes
          </h2>
          <p>You can change the background color for individual rows, or change the color on hover or navigation focus.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-row Box-row--gray">.Box-row--gray</div>
            <div className="Box-row Box-row--hover-gray">.Box-row--hover-gray</div>
            <div className="Box-row Box-row--yellow">.Box-row--yellow</div>
            <div className="Box-row Box-row--hover-blue">.Box-row--hover-blue</div>
            <div className="Box-row Box-row--blue">.Box-row--blue</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--gray&quot;</span>
                <span className="nt">&gt;</span>
                .Box-row--gray
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--hover-gray&quot;</span>
                <span className="nt">&gt;</span>
                .Box-row--hover-gray
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--yellow&quot;</span>
                <span className="nt">&gt;</span>
                .Box-row--yellow
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--hover-blue&quot;</span>
                <span className="nt">&gt;</span>
                .Box-row--hover-blue
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--blue&quot;</span>
                <span className="nt">&gt;</span>
                .Box-row--blue
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
          <p>
            Use <code>Box-row--focus-gray</code> or <code>Box-row--focus-blue</code> when using along-side <code>navigation-focus</code> if
            you want to highlight rows when using keyboard commands.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-row Box-row--focus-gray navigation-focus">.Box-row--focus-gray and .navigation-focus</div>
            <div className="Box-row Box-row--focus-gray">.Box-row--focus-gray</div>
            <div className="Box-row Box-row--focus-blue navigation-focus">.Box-row--focus-blue and .navigation-focus</div>
            <div className="Box-row Box-row--focus-blue">.Box-row--focus-blue</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--focus-gray navigation-focus&quot;</span>
                <span className="nt">&gt;</span>
                .Box-row--focus-gray and .navigation-focus
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--focus-gray&quot;</span>
                <span className="nt">&gt;</span>
                .Box-row--focus-gray
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--focus-blue navigation-focus&quot;</span>
                <span className="nt">&gt;</span>
                .Box-row--focus-blue and .navigation-focus
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--focus-blue&quot;</span>
                <span className="nt">&gt;</span>
                .Box-row--focus-blue
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
          <a name="//apple_ref/cpp/Style/Box%20row%20unread" className="dashAnchor" />
          <h3>
            <a id="box-row-unread" className="anchor" href="#box-row-unread" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box row unread
          </h3>
          <p>
            Use <code>.Box-row-unread</code> to apply a blue vertical line highlight for indicating a row contains unread items.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-row">Box row</div>
            <div className="Box-row Box-row--unread">Box row unread</div>
            <div className="Box-row">Box row</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row Box-row--unread&quot;</span>
                <span className="nt">&gt;</span>
                Box row unread
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row
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
          <a name="//apple_ref/cpp/Style/Box%20row%20link" className="dashAnchor" />
          <h3>
            <a id="box-row-link" className="anchor" href="#box-row-link" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box row link
          </h3>
          <p>
            Use .<code>Box-row-link</code> when you want a link to appear dark gray and blue on hover on desktop, and remain a blue link on
            mobile. This is useful to indicate links on mobile without having hover styles.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-row">
              <a className="Box-row-link" href="#box-row-link">
                Box row link
              </a>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row-link&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#box-row-link&quot;</span>
                <span className="nt">&gt;</span>Box row link<span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Dashed%20border" className="dashAnchor" />
          <h2>
            <a id="dashed-border" className="anchor" href="#dashed-border" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Dashed border
          </h2>
          <p>
            Use the <code>border-dashed</code> utility to apply a dashed border to a box.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box border-dashed p-2">A box with a dashed border</div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box border-dashed p-2&quot;</span>
                <span className="nt">&gt;</span>A box with a dashed border
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
          <a name="//apple_ref/cpp/Style/Boxes%20with%20flash%20alerts" className="dashAnchor" />
          <h2>
            <a id="boxes-with-flash-alerts" className="anchor" href="#boxes-with-flash-alerts" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Boxes with flash alerts
          </h2>
          <p>
            Use <code>flash-full</code> for flash alert inside a box to remove the rounded corners. Place the flash alert above the{' '}
            <code>Box-body</code> and underneath the <code>Box-header</code>.
          </p>
          <p>
            Flash alerts come in three different colors and can be used with icons and buttons, see the{' '}
            <a href="../alerts">alert documentation</a> for more information.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header">Box header</div>
            <div className="flash flash-full">
              <button type="button" className="flash-close js-flash-close">
                <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                  />
                </svg>
              </button>
              Flash message with close button.
            </div>
            <div className="flash flash-full flash-success">
              <svg height="16" className="octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
              </svg>{' '}
              Flash success with an icon.
            </div>
            <div className="flash flash-full flash-warn">
              <svg height="16" className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
                />
              </svg>{' '}
              Flash warning with an icon.
            </div>
            <div className="flash flash-full flash-error">Flash error inside a Box.</div>
            <div className="Box-body">Box body</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                Box header
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flash flash-full&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;flash-close js-flash-close&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;x&quot; %&gt;<span className="nt">&lt;/button&gt;</span>
                Flash message with close button.
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flash flash-full flash-success&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;) %&gt; Flash success with an icon.
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flash flash-full flash-warn&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;alert&quot;) %&gt; Flash warning with an icon.
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flash flash-full flash-error&quot;</span>
                <span className="nt">&gt;</span>
                Flash error inside a Box.
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
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
          <a name="//apple_ref/cpp/Style/Boxes%20with%20icons" className="dashAnchor" />
          <h2>
            <a id="boxes-with-icons" className="anchor" href="#boxes-with-icons" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Boxes with icons
          </h2>
          <p>
            Use <code>Box-btn-octicon</code> with <code>btn-octicon</code> when you want the icon to maintain the same padding as other box
            elements. This selector offsets margin to ensure it lines up on the left and right sides of the box so you may need to add
            padding neighboring elements.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-body">
              <span className="pr-2">Box body</span>
              <button type="button" href="#" className="Box-btn-octicon btn-octicon">
                <svg height="16" className="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                {' '}
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;pr-2&quot;</span>
                <span className="nt">&gt;</span>Box body<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">href=</span>
                <span className="s">&quot;#&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;Box-btn-octicon btn-octicon&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;pencil&quot;) %&gt;<span className="nt">&lt;/button&gt;</span>
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
          <p>
            It&apos;s common to want to float icons to the far left or right and stop the <code>Box-title</code>from wrapping underneath. To
            do this you&apos;ll need to create a media object with utilities. Add <code>clearfix</code> to the surrounding div (this could
            be the header, body, or rows), add <code>overflow-hidden</code> to the title (or other text element), and float the icons as
            desired.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header clearfix">
              <button type="button" href="#" className="Box-btn-octicon btn-octicon float-right">
                <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                  />
                </svg>
              </button>
              <a
                name="//apple_ref/cpp/Style/A%20very%20long%20title%20that%20wraps%20onto%20multiple%20lines%20without%20overlapping%20or%20wrapping%20underneath%20the%20icon%20to%20it's%20right"
                className="dashAnchor"
              />
              <h3 className="Box-title overflow-hidden pr-3">
                A very long title that wraps onto multiple lines without overlapping or wrapping underneath the icon to it&apos;s right
              </h3>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                {' '}
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">href=</span>
                <span className="s">&quot;#&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;Box-btn-octicon btn-octicon float-right&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;) %&gt;<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title overflow-hidden pr-3&quot;</span>
                <span className="nt">&gt;</span>A very long title that wraps onto multiple lines without overlapping or wrapping underneath
                the icon to it&apos;s right<span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
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
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-row clearfix">
              <button type="button" href="#" className="Box-btn-octicon btn-octicon float-left">
                <svg height="16" className="octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                </svg>
              </button>
              <p className="overflow-hidden pl-3">
                A very long paragraph that wraps onto multiple lines without overlapping or wrapping underneath the icon to it&apos;s left
              </p>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                {' '}
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">href=</span>
                <span className="s">&quot;#&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;Box-btn-octicon btn-octicon float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;check&quot; %&gt;<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;overflow-hidden pl-3&quot;</span>
                <span className="nt">&gt;</span>A very long paragraph that wraps onto multiple lines without overlapping or wrapping
                underneath the icon to it&apos;s left<span className="nt">&lt;/p&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Box%20headers%20with%20counters" className="dashAnchor" />
          <h2>
            <a id="box-headers-with-counters" className="anchor" href="#box-headers-with-counters" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box headers with counters
          </h2>
          <p>
            Use a counter with a background that works against the contrast of the box header. The default counter colors do not stand out
            well against the header background so we suggest using one of the following styles:
          </p>
          <p>
            Use <code>Counter--gray</code> for a counter with a gray background and dark gray text.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header">
              <a name="//apple_ref/cpp/Style/Box%20title%0A%20%20%20%20%20%2012" className="dashAnchor" />
              <h3 className="Box-title">
                Box title
                <span className="Counter Counter--gray">12</span>
              </h3>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title&quot;</span>
                <span className="nt">&gt;</span>
                Box title
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;Counter Counter--gray&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
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
          <p>
            Use <code>Counter--gray-dark</code> for a counter with a dark gray background and white text.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header">
              <a name="//apple_ref/cpp/Style/Box%20title%0A%20%20%20%20%20%2012" className="dashAnchor" />
              <h3 className="Box-title">
                Box title
                <span className="Counter Counter--gray-dark">12</span>
              </h3>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title&quot;</span>
                <span className="nt">&gt;</span>
                Box title
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;Counter Counter--gray-dark&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
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
          <a name="//apple_ref/cpp/Style/Form%20elements%20and%20buttons%20in%20boxes" className="dashAnchor" />
          <h2>
            <a id="form-elements-and-buttons-in-boxes" className="anchor" href="#form-elements-and-buttons-in-boxes" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Form elements and buttons in boxes
          </h2>
          <p>
            To achieve different layouts when adding buttons or form elements to boxes we suggest you use utilities to achieve the layout
            you want. Here&apos;s some common examples:
          </p>
          <p>
            Use <a href="../../utilities/flexbox">flexbox utilities</a> to center align items, and avoid using floats by using{' '}
            <code>flex-auto</code> to have the text fill the remaining space so that the button rests on the far right.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box Box--condensed">
            <div className="Box-header d-flex flex-items-center">
              <a name="//apple_ref/cpp/Style/Box%20title" className="dashAnchor" />
              <h3 className="Box-title overflow-hidden flex-auto">Box title</h3>
              <button type="button" className="btn btn-primary btn-sm">
                Button
              </button>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box Box--condensed&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header d-flex flex-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title overflow-hidden flex-auto&quot;</span>
                <span className="nt">&gt;</span>
                Box title
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary btn-sm&quot;</span>
                <span className="nt">&gt;</span>
                Button
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
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
          <p>A similar approach can be used for buttons with multiple lines of text within a row.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-row d-flex flex-items-center">
              <div className="flex-auto">
                <strong>Row title</strong>
                <div className="text-small text-gray-light">Description</div>
              </div>
              <button type="button" className="btn btn-primary" name="button">
                View
              </button>
            </div>
            <div className="Box-row d-flex flex-items-center">
              <div className="flex-auto">
                <strong>Row title</strong>
                <div className="text-small text-gray-light">Description</div>
              </div>
              <button type="button" className="btn btn-primary" name="button">
                View
              </button>
            </div>
            <div className="Box-row d-flex flex-items-center">
              <div className="flex-auto">
                <strong>Row title</strong>
                <div className="text-small text-gray-light">Description</div>
              </div>
              <button type="button" className="btn btn-primary" name="button">
                View
              </button>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row d-flex flex-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flex-auto&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;strong&gt;</span>Row title<span className="nt">&lt;/strong&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-small text-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                Description
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>View<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row d-flex flex-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flex-auto&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;strong&gt;</span>Row title<span className="nt">&lt;/strong&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-small text-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                Description
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>View<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row d-flex flex-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flex-auto&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;strong&gt;</span>Row title<span className="nt">&lt;/strong&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-small text-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                Description
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>View<span className="nt">&lt;/button&gt;</span>
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
          <p>
            Using flexbox along with form, button, and link styles, you can create more complex box headers for things like bulk actions and
            sorting.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header d-flex flex-items-center">
              <form className="flex-auto">
                <label>
                  <input className="mr-1" type="checkbox" />
                  Check it
                </label>
              </form>
              <button type="button" className="btn-link select-menu-button muted-link">
                Select menu
              </button>
            </div>
            <div className="Box-body">Box body</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header d-flex flex-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;form</span> <span className="na">className=</span>
                <span className="s">&quot;flex-auto&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;mr-1&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;checkbox&quot;</span>
                <span className="nt">&gt;</span>
                Check it
                <span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn-link select-menu-button muted-link&quot;</span>
                <span className="nt">&gt;</span>
                Select menu
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                Box body
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
          <p>
            You can put forms in boxes. Often form submission buttons are aligned to the bottom right of the form which you can do with{' '}
            <code>text-right</code> instead of using floats.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header">
              <a name="//apple_ref/cpp/Style/Example%20form%20title" className="dashAnchor" />
              <h3 className="Box-title">Example form title</h3>
            </div>
            <form>
              <div className="Box-body">
                <dl className="form-group">
                  <dt>
                    <label>Example label</label>
                  </dt>
                  <dd>
                    <input className="form-control" type="text" />
                  </dd>
                </dl>
                <div className="form-checkbox">
                  <label>
                    <input type="checkbox" checked="" />
                    Yes please
                  </label>
                </div>
              </div>
              <div className="Box-footer text-right">
                <button type="button" className="btn btn-secondary mr-1">
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title&quot;</span>
                <span className="nt">&gt;</span>
                Example form title
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;dl</span> <span className="na">className=</span>
                <span className="s">&quot;form-group&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;dt&gt;&lt;label&gt;</span>Example label<span className="nt">&lt;/label&gt;&lt;/dt&gt;</span>
                <span className="nt">&lt;dd&gt;&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span>
                <span className="nt">&gt;&lt;/dd&gt;</span>
                <span className="nt">&lt;/dl&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;form-checkbox&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;checkbox&quot;</span> <span className="na">checked=</span>
                <span className="s">&quot;checked&quot;</span>
                <span className="nt">&gt;</span>
                Yes please
                <span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-footer text-right&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-secondary mr-1&quot;</span>
                <span className="nt">&gt;</span>
                Cancel
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>
                Submit
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <p>
            When a box is all by itself centered on a page you can use <a href="../../objects/grid">column widths</a> to control the width
            of the box. If needed, break the mold a little and use <a href="../../utilities/typography">typography utilities</a> instead of
            the built in box title styles.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box Box--spacious col-6 mx-auto text-center">
            <form>
              <div className="Box-body">
                <a name="//apple_ref/cpp/Style/Example%20form" className="dashAnchor" />
                <h3 className="f1-light">Example form</h3>
                <dl className="form-group mb-4">
                  <dt>
                    <label>Example label</label>
                  </dt>
                  <dd>
                    <input className="form-control" type="text" />
                  </dd>
                </dl>
                <button type="button" className="btn btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box Box--spacious col-6 mx-auto text-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;f1-light&quot;</span>
                <span className="nt">&gt;</span>
                Example form
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;dl</span> <span className="na">className=</span>
                <span className="s">&quot;form-group mb-4&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;dt&gt;&lt;label&gt;</span>Example label<span className="nt">&lt;/label&gt;&lt;/dt&gt;</span>
                <span className="nt">&lt;dd&gt;&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span>
                <span className="nt">&gt;&lt;/dd&gt;</span>
                <span className="nt">&lt;/dl&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary btn-block&quot;</span>
                <span className="nt">&gt;</span>
                Submit
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <p>
            Box patterns can also be made with, and modified with <a href="../../utilities/borders">border utilities</a>.
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/components/blankslate/">
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
            Blankslate
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/branch-name/">
            Branch name
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
/* eslint-enable jsx-a11y/label-has-associated-control */
