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
              <a href="/primer/objects/">Objects</a>
            </li>
            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/objects/grid/" aria-current="page" className="text-gray">
                Grid
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Grid</h2>
        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-layout"
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
              href="https://github.com/primer/primer/blob/master/modules/primer-layout/lib/grid.scss"
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
            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-layout">
              1.6.0
            </a>
          </div>
          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>
        <div className="markdown-body">
          <p>
            The grid is 12 columns and percentage-based. The number of columns a container spans can be adjusted across breakpoints for
            responsive layouts. The grid system works with a variety of layout utilities to achieve different results.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#float-based-grid" id="markdown-toc-float-based-grid">
                Float based grid
              </a>
              <ul>
                <li>
                  <a href="#reversed-grid" id="markdown-toc-reversed-grid">
                    Reversed grid
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#nesting" id="markdown-toc-nesting">
                Nesting
              </a>
            </li>
            <li>
              <a href="#centering-a-column" id="markdown-toc-centering-a-column">
                Centering a column
              </a>
            </li>
            <li>
              <a href="#column-widths" id="markdown-toc-column-widths">
                Column widths
              </a>
            </li>
            <li>
              <a href="#offset-columns" id="markdown-toc-offset-columns">
                Offset columns
              </a>
            </li>
            <li>
              <a href="#gutters" id="markdown-toc-gutters">
                Gutters
              </a>
            </li>
            <li>
              <a href="#inline-block-grids" id="markdown-toc-inline-block-grids">
                Inline-block grids
              </a>
            </li>
            <li>
              <a href="#display-table-grids" id="markdown-toc-display-table-grids">
                Display table grids
              </a>
            </li>
            <li>
              <a href="#flexbox-grids" id="markdown-toc-flexbox-grids">
                Flexbox grids
              </a>
            </li>
            <li>
              <a href="#responsive-grids" id="markdown-toc-responsive-grids">
                Responsive grids
              </a>
              <ul>
                <li>
                  <a href="#breakpoints" id="markdown-toc-breakpoints">
                    Breakpoints
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#containers" id="markdown-toc-containers">
                Containers
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Float%20based%20grid" className="dashAnchor" />
          <h2>
            <a id="float-based-grid" className="anchor" href="#float-based-grid" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Float based grid
          </h2>
          <p>
            Use <code>.clearfix</code> on the container and float utilities with columns for a floated grid layout.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="container-lg clearfix">
            <div className="col-4 float-left border p-4">My column</div>
            <div className="col-4 float-left border p-4">Looks better</div>
            <div className="col-4 float-left border p-4">Than your column</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-lg clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 float-left border p-4&quot;</span>
                <span className="nt">&gt;</span>
                My column
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 float-left border p-4&quot;</span>
                <span className="nt">&gt;</span>
                Looks better
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 float-left border p-4&quot;</span>
                <span className="nt">&gt;</span>
                Than your column
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
          <a name="//apple_ref/cpp/Style/Reversed%20grid" className="dashAnchor" />
          <h3>
            <a id="reversed-grid" className="anchor" href="#reversed-grid" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Reversed grid
          </h3>
          <p>
            To reverse the order of columns, use <code>float-right</code> to float columns to the right.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="container-lg clearfix">
            <div className="col-4 float-right border p-4">One</div>
            <div className="col-4 float-right border p-4">Two</div>
            <div className="col-4 float-right border p-4">Three</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-lg clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 float-right border p-4&quot;</span>
                <span className="nt">&gt;</span>
                One
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 float-right border p-4&quot;</span>
                <span className="nt">&gt;</span>
                Two
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 float-right border p-4&quot;</span>
                <span className="nt">&gt;</span>
                Three
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
          <a name="//apple_ref/cpp/Style/Nesting" className="dashAnchor" />
          <h2>
            <a id="nesting" className="anchor" href="#nesting" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Nesting
          </h2>
          <p>
            You can infinitely nest grid layouts within other columns since the column widths are percentage based. With great flexibility
            comes great responsibility - be sensible with how far you nest!
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="clearfix">
            <div className="col-6 float-left px-1">
              <div className="border p-1">Unnested</div>
            </div>
            <div className="col-6 float-left">
              <div className="clearfix">
                <div className="col-6 float-left px-1">
                  <div className="border p-1">1 x Nested</div>
                </div>
                <div className="col-6 float-left">
                  <div className="col-6 float-left px-1">
                    <div className="border p-1">2 x Nested</div>
                  </div>
                  <div className="col-6 float-left px-1">
                    <div className="border p-1">2 x Nested</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-6 float-left px-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border p-1&quot;</span>
                <span className="nt">&gt;</span>Unnested<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-6 float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-6 float-left px-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border p-1&quot;</span>
                <span className="nt">&gt;</span>1 x Nested<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-6 float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-6 float-left px-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border p-1&quot;</span>
                <span className="nt">&gt;</span>2 x Nested<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-6 float-left px-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border p-1&quot;</span>
                <span className="nt">&gt;</span>2 x Nested<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Centering%20a%20column" className="dashAnchor" />
          <h2>
            <a id="centering-a-column" className="anchor" href="#centering-a-column" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Centering a column
          </h2>
          <p>
            Use <code>.mx-auto</code> to center columns within a container.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border">
            <div className="col-6 p-2 mx-auto border">This column is the center of my world.</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-6 p-2 mx-auto border&quot;</span>
                <span className="nt">&gt;</span>
                This column is the center of my world.
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
          <a name="//apple_ref/cpp/Style/Column%20widths" className="dashAnchor" />
          <h2>
            <a id="column-widths" className="anchor" href="#column-widths" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Column widths
          </h2>
          <p>Column widths can be used with any other block or inline-block elements to add percentage-based widths.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div>
            <div className="col-4 float-right p-2 border text-red">
              <svg height="16" className="octicon octicon-heart" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"
                />
              </svg>{' '}
              Don&apos;t go bacon my heart.
            </div>
            <p>
              T-bone drumstick alcatra ribeye. Strip steak chuck andouille tenderloin bacon tri-tip ball tip beef capicola rump. Meatloaf
              bresaola drumstick ball tip salami. Drumstick ham bacon alcatra pig porchetta, spare ribs leberkas pork belly.
            </p>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 float-right p-2 border text-red&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;heart&quot; %&gt; Don&apos;t go bacon my heart.
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;p&gt;</span>T-bone drumstick alcatra ribeye. Strip steak chuck andouille tenderloin bacon tri-tip
                ball tip beef capicola rump. Meatloaf bresaola drumstick ball tip salami. Drumstick ham bacon alcatra pig porchetta, spare
                ribs leberkas pork belly.<span className="nt">&lt;/p&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Offset%20columns" className="dashAnchor" />
          <h2>
            <a id="offset-columns" className="anchor" href="#offset-columns" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Offset columns
          </h2>
          <p>
            Using column offset classes can push a div over X number of columns. They work responsively using the{' '}
            <a href="../grid#responsive-grids">breakpoints outlined below</a>.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="clearfix">
            <div className="offset-1 col-3 border p-3">.offset-1</div>
            <div className="offset-2 col-3 border p-3">.offset-2</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;offset-1 col-3 border p-3&quot;</span>
                <span className="nt">&gt;</span>.offset-1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;offset-2 col-3 border p-3&quot;</span>
                <span className="nt">&gt;</span>.offset-2<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Gutters" className="dashAnchor" />
          <h2>
            <a id="gutters" className="anchor" href="#gutters" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Gutters
          </h2>
          <p>
            Use gutter styles or padding utilities to create gutters. You can use the default gutter style, <code>gutter</code>, or either
            of its modifiers, <code>gutter-condensed</code> or <code>gutter-spacious</code>. Gutter styles also support responsive
            breakpoint modifiers. Gutter styles add padding to the left and right side of each column and apply a negative margin to the
            container to ensure content inside each column lines up with content outside of the grid.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="clearfix gutter-md-spacious border">
            <div className="col-3 float-left">
              <div className="border p-3">.col-md-3</div>
            </div>
            <div className="col-3 float-left">
              <div className="border p-3">.col-md-3</div>
            </div>
            <div className="col-3 float-left">
              <div className="border p-3">.col-md-3</div>
            </div>
            <div className="col-3 float-left">
              <div className="border p-3">.col-md-3</div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;clearfix gutter-md-spacious border&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-3 float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border p-3&quot;</span>
                <span className="nt">&gt;</span>.col-md-3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-3 float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border p-3&quot;</span>
                <span className="nt">&gt;</span>.col-md-3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-3 float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border p-3&quot;</span>
                <span className="nt">&gt;</span>.col-md-3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-3 float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border p-3&quot;</span>
                <span className="nt">&gt;</span>.col-md-3<span className="nt">&lt;/div&gt;</span>
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
          <p>Use padding utilities to create gutters for more customized layouts.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="container-lg clearfix">
            <div className="col-3 float-left pr-2 mb-3">
              <div className="border bg-gray-light">.pr-2</div>
            </div>
            <div className="col-3 float-left px-2 mb-3">
              <div className="border bg-gray-light">.px-2</div>
            </div>
            <div className="col-3 float-left px-2 mb-3">
              <div className="border bg-gray-light">.px-2</div>
            </div>
            <div className="col-3 float-left pl-2 mb-3">
              <div className="border bg-gray-light">.pl-2</div>
            </div>
          </div>
          <div className="container-lg clearfix">
            <div className="col-3 float-left pr-2">
              <div className="border bg-gray-light">.pr-2</div>
            </div>
            <div className="col-9 float-left pl-2">
              <div className="border bg-gray-light">.pl-2</div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-lg clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-3 float-left pr-2 mb-3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>.pr-2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-3 float-left px-2 mb-3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>.px-2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-3 float-left px-2 mb-3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>.px-2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-3 float-left pl-2 mb-3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>.pl-2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-lg clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-3 float-left pr-2&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>.pr-2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-9 float-left pl-2&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>.pl-2<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Inline-block%20grids" className="dashAnchor" />
          <h2>
            <a id="inline-block-grids" className="anchor" href="#inline-block-grids" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Inline-block grids
          </h2>
          <p>
            Use column widths with <code>d-inline-block</code> as an alternative to floated grids.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div>
            <div className="col-4 d-inline-block border">.col-4 .d-inline-block</div>
            <div className="col-4 d-inline-block border">.col-4 .d-inline-block</div>
            <div className="col-4 d-inline-block border">.col-4 .d-inline-block</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 d-inline-block border&quot;</span>
                <span className="nt">&gt;</span>
                .col-4 .d-inline-block
                <span className="nt">&lt;/div&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 d-inline-block border&quot;</span>
                <span className="nt">&gt;</span>
                .col-4 .d-inline-block
                <span className="nt">&lt;/div&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 d-inline-block border&quot;</span>
                <span className="nt">&gt;</span>
                .col-4 .d-inline-block
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
            You can use column widths and other utilities on elements such as lists to create the layout you need while keeping the markup
            semantically correct.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <ul className="list-style-none">
            <li className="d-inline-block col-2 p-2">
              <img className="width-full avatar" src="/broccolini.png" alt="broccolini" />
            </li>
            <li className="d-inline-block col-2 p-2">
              <img className="width-full avatar" src="/jonrohan.png" alt="jonrohan" />
            </li>
            <li className="d-inline-block col-2 p-2">
              <img className="width-full avatar" src="/muan.png" alt="muan" />
            </li>
            <li className="d-inline-block col-2 p-2">
              <img className="width-full avatar" src="/pmarsceill.png" alt="pmarsceill" />
            </li>
            <li className="d-inline-block col-2 p-2">
              <img className="width-full avatar" src="/sophshep.png" alt="sophshep" />
            </li>
            <li className="d-inline-block col-2 p-2">
              <img className="width-full avatar" src="/cmwinters.png" alt="cmwinters" />
            </li>
            <li className="d-inline-block col-2 p-2">
              <img className="width-full avatar" src="/jeejkang.png" alt="jeejkang" />
            </li>
            <li className="d-inline-block col-2 p-2">
              <img className="width-full avatar" src="/mdo.png" alt="mdo" />
            </li>
          </ul>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;list-style-none&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block col-2 p-2&quot;</span>
                <span className="nt">&gt;&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/broccolini.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;broccolini&quot;</span> <span className="nt">/&gt;&lt;/li&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block col-2 p-2&quot;</span>
                <span className="nt">&gt;&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/jonrohan.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;jonrohan&quot;</span> <span className="nt">/&gt;&lt;/li&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block col-2 p-2&quot;</span>
                <span className="nt">&gt;&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/muan.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;muan&quot;</span> <span className="nt">/&gt;&lt;/li&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block col-2 p-2&quot;</span>
                <span className="nt">&gt;&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/pmarsceill.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;pmarsceill&quot;</span> <span className="nt">/&gt;&lt;/li&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block col-2 p-2&quot;</span>
                <span className="nt">&gt;&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/sophshep.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;sophshep&quot;</span> <span className="nt">/&gt;&lt;/li&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block col-2 p-2&quot;</span>
                <span className="nt">&gt;&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/cmwinters.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;cmwinters&quot;</span> <span className="nt">/&gt;&lt;/li&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block col-2 p-2&quot;</span>
                <span className="nt">&gt;&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/jeejkang.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;jeejkang&quot;</span> <span className="nt">/&gt;&lt;/li&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block col-2 p-2&quot;</span>
                <span className="nt">&gt;&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/mdo.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;mdo&quot;</span> <span className="nt">/&gt;&lt;/li&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Display%20table%20grids" className="dashAnchor" />
          <h2>
            <a id="display-table-grids" className="anchor" href="#display-table-grids" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Display table grids
          </h2>
          <p>
            Using <a href="../../utilities/layout#display">display table utilities</a> with columns gives you some alternative layout
            options.
          </p>
          <p>
            A useful example is being able to keep the height of the container equal across a row when the length of content may differ.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-table col-12">
            <div className="col-4 d-table-cell border p-2">
              Bacon ipsum dolor amet leberkas pork pig kielbasa shankle ribeye meatball, salami alcatra venison.
            </div>
            <div className="col-4 d-table-cell border p-2">
              Pork chop cupim cow turkey frankfurter, landjaeger fatback hamburger meatball salami spare ribs. Rump tenderloin salami,
              hamburger frankfurter landjaeger andouille.
            </div>
            <div className="col-4 d-table-cell border p-2">
              Brisket tongue frankfurter cupim strip steak rump picanha pancetta pork pig kevin pastrami biltong. Shankle venison meatball
              swine sausage ground round. Tail pork loin ribeye kielbasa short ribs pork chop.
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table col-12&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 d-table-cell border p-2&quot;</span>
                <span className="nt">&gt;</span>
                Bacon ipsum dolor amet leberkas pork pig kielbasa shankle ribeye meatball, salami alcatra venison.
                <span className="nt">&lt;/div&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 d-table-cell border p-2&quot;</span>
                <span className="nt">&gt;</span>
                Pork chop cupim cow turkey frankfurter, landjaeger fatback hamburger meatball salami spare ribs. Rump tenderloin salami,
                hamburger frankfurter landjaeger andouille.
                <span className="nt">&lt;/div&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 d-table-cell border p-2&quot;</span>
                <span className="nt">&gt;</span>
                Brisket tongue frankfurter cupim strip steak rump picanha pancetta pork pig kevin pastrami biltong. Shankle venison meatball
                swine sausage ground round. Tail pork loin ribeye kielbasa short ribs pork chop.
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
            You can also create an alternative <a href="../../utilities/layout#the-media-object">media object</a> layout with{' '}
            <code>.display-table</code> and column widths.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-table col-12">
            <div className="col-2 d-table-cell v-align-middle">
              <img className="width-full avatar" src="/github.png" alt="github" />
            </div>
            <div className="col-10 d-table-cell v-align-middle pl-4">
              <a name="//apple_ref/cpp/Style/GitHub" className="dashAnchor" />
              <h1 className="text-normal lh-condensed">GitHub</h1>
              <p className="h4 text-gray text-normal mb-2">How people build software.</p>
              <a className="text-gray text-small" href="#url">
                https://github.com/about
              </a>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table col-12&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-2 d-table-cell v-align-middle&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/github.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;github&quot;</span> <span className="nt">/&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-10 d-table-cell v-align-middle pl-4&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h1</span> <span className="na">className=</span>
                <span className="s">&quot;text-normal lh-condensed&quot;</span>
                <span className="nt">&gt;</span>GitHub<span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;h4 text-gray text-normal mb-2&quot;</span>
                <span className="nt">&gt;</span>How people build software.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;text-gray text-small&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>https://github.com/about<span className="nt">&lt;/a&gt;</span>
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
          <p>Note that table cells will fill the width of their container even when the total columns doesn&apos;t add up to 12.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-table col-12">
            <div className="col-4 d-table-cell border">.col-4 .d-table-cell</div>
            <div className="col-4 d-table-cell border">.col-4 .d-table-cell</div>
            <div className="col-2 d-table-cell border">.col-2 .d-table-cell</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table col-12&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 d-table-cell border&quot;</span>
                <span className="nt">&gt;</span>
                .col-4 .d-table-cell
                <span className="nt">&lt;/div&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-4 d-table-cell border&quot;</span>
                <span className="nt">&gt;</span>
                .col-4 .d-table-cell
                <span className="nt">&lt;/div&gt;</span>
                <span className="c">&lt;!-- --&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-2 d-table-cell border&quot;</span>
                <span className="nt">&gt;</span>
                .col-2 .d-table-cell
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
          <a name="//apple_ref/cpp/Style/Flexbox%20grids" className="dashAnchor" />
          <h2>
            <a id="flexbox-grids" className="anchor" href="#flexbox-grids" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Flexbox grids
          </h2>
          <p>
            You can use <a href="../../utilities/flexbox">flex utilities</a> on the container and columns to create a flexbox grid.
          </p>
          <p>
            This can be useful for keeping columns the same height, justifying content and vertically aligning items. The flexbox grid is
            also great for working with responsive layouts.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-flex flex-column flex-md-row flex-items-center flex-md-items-center">
            <div className="col-2 d-flex flex-items-center flex-items-center flex-md-items-start">
              <img className="width-full avatar mb-2 mb-md-0" src="/github.png" alt="github" />
            </div>
            <div className="col-12 col-md-10 d-flex flex-column flex-justify-center flex-items-center flex-md-items-start pl-md-4">
              <a name="//apple_ref/cpp/Style/GitHub" className="dashAnchor" />
              <h1 className="text-normal lh-condensed">GitHub</h1>
              <p className="h4 text-gray text-normal mb-2">How people build software.</p>
              <a className="text-gray text-small" href="#url">
                https://github.com/about
              </a>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-flex flex-column flex-md-row flex-items-center flex-md-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-2 d-flex flex-items-center flex-items-center flex-md-items-start&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-full avatar mb-2 mb-md-0&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/github.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;github&quot;</span> <span className="nt">/&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">
                  &quot;col-12 col-md-10 d-flex flex-column flex-justify-center flex-items-center flex-md-items-start pl-md-4&quot;
                </span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h1</span> <span className="na">className=</span>
                <span className="s">&quot;text-normal lh-condensed&quot;</span>
                <span className="nt">&gt;</span>GitHub<span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;h4 text-gray text-normal mb-2&quot;</span>
                <span className="nt">&gt;</span>How people build software.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;text-gray text-small&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>https://github.com/about<span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Responsive%20grids" className="dashAnchor" />
          <h2>
            <a id="responsive-grids" className="anchor" href="#responsive-grids" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Responsive grids
          </h2>
          <p>
            All the column width classes can be set per breakpoint to create responsive grid layouts. Each responsive style is applied to
            the specified breakpoint and up.
          </p>
          <a name="//apple_ref/cpp/Style/Breakpoints" className="dashAnchor" />
          <h3>
            <a id="breakpoints" className="anchor" href="#breakpoints" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Breakpoints
          </h3>
          <p>We use abbreviations for each breakpoint to keep the class names concise.</p>
          <table>
            <thead>
              <tr>
                <th>Shorthand</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sm</td>
                <td>min-width: 544px</td>
              </tr>
              <tr>
                <td>md</td>
                <td>min-width: 768px</td>
              </tr>
              <tr>
                <td>lg</td>
                <td>min-width: 1004px</td>
              </tr>
              <tr>
                <td>xl</td>
                <td>min-width: 1280px</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Note:</strong> The <code>lg</code> breakpoint matches our current page width of <code>980px</code> including left and
            right padding of <code>12px</code>. This is so that content doesn&apos;t touch the edges of the window when resized.
          </p>
          <hr />
          <p>
            In this example at the <code>sm</code> breakpoint 2 columns will show, at the <code>md</code> breakpoint 4 columns will show,
            and at the <code>lg</code> breakpoint 6 columns will show.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="container-lg clearfix">
            <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">.col-sm-6 .col-md-3 .col-lg-2</div>
            <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">.col-sm-6 .col-md-3 .col-lg-2</div>
            <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">.col-sm-6 .col-md-3 .col-lg-2</div>
            <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">.col-sm-6 .col-md-3 .col-lg-2</div>
            <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">.col-sm-6 .col-md-3 .col-lg-2</div>
            <div className="col-sm-6 col-md-3 col-lg-2 float-left p-2 border">.col-sm-6 .col-md-3 .col-lg-2</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-lg clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 col-md-3 col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6 .col-md-3 .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 col-md-3 col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6 .col-md-3 .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 col-md-3 col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6 .col-md-3 .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 col-md-3 col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6 .col-md-3 .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 col-md-3 col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6 .col-md-3 .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 col-md-3 col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6 .col-md-3 .col-lg-2
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
            For demonstration, this is how the above example would look at the <code>sm</code> breakpoint.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="container-lg clearfix">
            <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
            <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
            <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
            <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
            <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
            <div className="col-sm-6 float-left p-2 border">.col-sm-6</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-lg clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-sm-6 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-sm-6
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
            This is how that same example would look at the <code>md</code> breakpoint.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="container-lg clearfix">
            <div className="col-md-3 float-left p-2 border">.col-md-3</div>
            <div className="col-md-3 float-left p-2 border">.col-md-3</div>
            <div className="col-md-3 float-left p-2 border">.col-md-3</div>
            <div className="col-md-3 float-left p-2 border">.col-md-3</div>
            <div className="col-md-3 float-left p-2 border">.col-md-3</div>
            <div className="col-md-3 float-left p-2 border">.col-md-3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-lg clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-md-3 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-md-3
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-md-3 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-md-3
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-md-3 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-md-3
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-md-3 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-md-3
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-md-3 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-md-3
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-md-3 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-md-3
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
            This is how that example would look at the <code>lg</code> breakpoint.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="container-lg clearfix">
            <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
            <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
            <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
            <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
            <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
            <div className="col-lg-2 float-left p-2 border">.col-lg-2</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-lg clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-lg-2
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;col-lg-2 float-left p-2 border&quot;</span>
                <span className="nt">&gt;</span>
                .col-lg-2
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
          <a name="//apple_ref/cpp/Style/Containers" className="dashAnchor" />
          <h2>
            <a id="containers" className="anchor" href="#containers" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Containers
          </h2>
          <p>
            Container widths match our breakpoints and are available at a <code>md</code>, <code>lg</code>, and <code>xl</code> size.
            Containers apply a max-width rather than a fixed width for responsive layouts, and they center the container.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="container-md border">.container-md, max-width 768px</div>
          <div className="container-lg border">.container-lg, max-width 1012px</div>
          <div className="container-xl border">.container-xl, max-width 1280px</div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-md border&quot;</span>
                <span className="nt">&gt;</span>
                .container-md, max-width 768px
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-lg border&quot;</span>
                <span className="nt">&gt;</span>
                .container-lg, max-width 1012px
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;container-xl border&quot;</span>
                <span className="nt">&gt;</span>
                .container-xl, max-width 1280px
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
            <strong>Note:</strong> <code>.container</code> is being replaced with <code>.container-lg</code>. To match the current fixed
            page width use <code>.container-lg</code> with <code>px-3</code>. This gives the container padding on smaller screens which
            works better for responsive layouts.
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/components/truncate/">
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
            Truncate
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/objects/layout/">
            Layout
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
