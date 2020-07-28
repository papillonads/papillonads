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
              <a href="/primer/components/dropdown/" aria-current="page" className="text-gray">
                Dropdown
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Dropdown</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title="
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
              href="https://github.com/github/github/blob/master/docs/styleguide/css/styles/product/components/dropdown.md"
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
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1"
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
          </div>
        </div>

        <div className="markdown-body">
          <p>
            Dropdowns are lightweight, JavaScript-powered context menus for housing navigation and actions. They&apos;re great for instances
            where you don&apos;t need the full power (and code) of the select menu.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#basic-examples" id="markdown-toc-basic-examples">
                Basic examples
              </a>
            </li>
            <li>
              <a href="#options" id="markdown-toc-options">
                Options
              </a>
              <ul>
                <li>
                  <a href="#alignment" id="markdown-toc-alignment">
                    Alignment
                  </a>
                </li>
                <li>
                  <a href="#dividers" id="markdown-toc-dividers">
                    Dividers
                  </a>
                </li>
                <li>
                  <a href="#headers" id="markdown-toc-headers">
                    Headers
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Basic%20examples" className="dashAnchor" />
          <h2>
            <a id="basic-examples" className="anchor" href="#basic-examples" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Basic examples
          </h2>
          <p>
            Dropdowns should be trigged by a <code>&lt;button&gt;</code>.{' '}
            <strong>
              <a href="#alignment">Each dropdown menu requires a directional class</a>
            </strong>
            , much like our tooltips.
          </p>
          <p>Using a GitHub button:</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="btn" aria-haspopup="true">
              Dropdown
              <div className="dropdown-caret" />
            </summary>

            <ul className="dropdown-menu dropdown-menu-se">
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                Dropdown
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-se&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
          <p>Using a button customized with additional utilities:</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="text-gray p-2 d-inline" aria-haspopup="true">
              Dropdown
              <div className="dropdown-caret" />
            </summary>

            <ul className="dropdown-menu dropdown-menu-se">
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;text-gray p-2 d-inline&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                Dropdown
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-se&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Options" className="dashAnchor" />
          <h2>
            <a id="options" className="anchor" href="#options" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Options
          </h2>
          <a name="//apple_ref/cpp/Style/Alignment" className="dashAnchor" />
          <h3>
            <a id="alignment" className="anchor" href="#alignment" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Alignment
          </h3>
          <p>Align the direction of dropdown menus and their arrows with modifier classes.</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="btn" aria-haspopup="true">
              .dropdown-ne
              <div className="dropdown-caret" />
            </summary>

            <ul className="dropdown-menu dropdown-menu-ne">
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                .dropdown-ne
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-ne&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="btn" aria-haspopup="true">
              .dropdown-e
              <div className="dropdown-caret" />
            </summary>

            <ul className="dropdown-menu dropdown-menu-e">
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                .dropdown-e
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-e&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="btn" aria-haspopup="true">
              .dropdown-se
              <div className="dropdown-caret" />
            </summary>

            <ul className="dropdown-menu dropdown-menu-se">
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                .dropdown-se
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-se&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="btn" aria-haspopup="true">
              .dropdown-s
              <div className="dropdown-caret" />
            </summary>

            <ul className="dropdown-menu dropdown-menu-s">
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                .dropdown-s
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-s&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="btn" aria-haspopup="true">
              .dropdown-sw
              <div className="dropdown-caret" />
            </summary>

            <ul className="dropdown-menu dropdown-menu-sw">
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                .dropdown-sw
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-sw&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="btn" aria-haspopup="true">
              .dropdown-w
              <div className="dropdown-caret" />
            </summary>

            <ul className="dropdown-menu dropdown-menu-w">
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                .dropdown-w
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-w&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Dividers" className="dashAnchor" />
          <h3>
            <a id="dividers" className="anchor" href="#dividers" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Dividers
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="btn" aria-haspopup="true">
              Dropdown
              <div className="dropdown-caret" />
            </summary>

            <ul className="dropdown-menu dropdown-menu-se">
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  Dropdown item
                </a>
              </li>
              <li className="dropdown-divider" role="separator" />
              <li>
                <a className="dropdown-item" href="#url">
                  Another item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#url">
                  One more
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                Dropdown
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-se&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-divider&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;separator&quot;</span>
                <span className="nt">&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Another item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>One more<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Headers" className="dashAnchor" />
          <h3>
            <a id="headers" className="anchor" href="#headers" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Headers
          </h3>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <details className="dropdown details-reset details-overlay d-inline-block">
            <summary className="btn" aria-haspopup="true">
              Dropdown
              <div className="dropdown-caret" />
            </summary>

            <div className="dropdown-menu dropdown-menu-se">
              <div className="dropdown-header">Dropdown header</div>
              <ul>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#url">
                    Dropdown item
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown details-reset details-overlay d-inline-block&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                Dropdown
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-caret&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-menu dropdown-menu-se&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-header&quot;</span>
                <span className="nt">&gt;</span>
                Dropdown header
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;dropdown-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Dropdown item<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
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
        <div className="align-right" />
      </div>
    </main>
  )
}
/* eslint-enable jsx-a11y/anchor-has-content */
/* eslint-enable jsx-a11y/anchor-is-valid */
