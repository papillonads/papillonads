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
              <a href="/primer/components/tooltips/" aria-current="page" className="text-gray">
                Tooltips
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Tooltips</h2>
        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-tooltips"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-tooltips/"
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
            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-tooltips">
              1.5.9
            </a>
          </div>
          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>
        <div className="markdown-body">
          <p>Add tooltips built entirely in CSS to nearly any element.</p>
          <ul id="markdown-toc">
            <li>
              <a href="#implementation-and-accessibility" id="markdown-toc-implementation-and-accessibility">
                Implementation and accessibility
              </a>
            </li>
            <li>
              <a href="#tooltip-direction" id="markdown-toc-tooltip-direction">
                Tooltip direction
              </a>
            </li>
            <li>
              <a href="#tooltip-alignment" id="markdown-toc-tooltip-alignment">
                Tooltip alignment
              </a>
            </li>
            <li>
              <a href="#tooltips-with-multiple-lines" id="markdown-toc-tooltips-with-multiple-lines">
                Tooltips with multiple lines
              </a>
            </li>
            <li>
              <a href="#tooltips-no-delay" id="markdown-toc-tooltips-no-delay">
                Tooltips No Delay
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Implementation%20and%20accessibility" className="dashAnchor"></a>
          <h2>
            <a id="implementation-and-accessibility" className="anchor" href="#implementation-and-accessibility" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Implementation and accessibility
          </h2>
          <p>
            <strong>Attention</strong>: we use <code>aria-label</code> for tooltips instead of something like <code>data-tooltip</code>{' '}
            because it is crucial that the tooltip content is available for screen reader users as well. However, <code>aria-label</code>{' '}
            <strong>replaces</strong> the text content of an element for screen reader users, so only use tooltip if there is no better way
            to present the information, or consider using <code>title</code> for supplement information.
          </p>
          <p>
            <strong>Note:</strong> Tooltip classes will conflict with Octicon styles, and as such, must be applied to the parent element
            instead of the icon.
          </p>
          <a name="//apple_ref/cpp/Style/Tooltip%20direction" className="dashAnchor"></a>
          <h2>
            <a id="tooltip-direction" className="anchor" href="#tooltip-direction" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Tooltip direction
          </h2>
          <p>Specify the direction of a tooltip with north, south, east, and west directions:</p>
          <ul>
            <li>
              <code>.tooltipped-n</code>
            </li>
            <li>
              <code>.tooltipped-ne</code>
            </li>
            <li>
              <code>.tooltipped-e</code>
            </li>
            <li>
              <code>.tooltipped-se</code>
            </li>
            <li>
              <code>.tooltipped-s</code>
            </li>
            <li>
              <code>.tooltipped-sw</code>
            </li>
            <li>
              <code>.tooltipped-w</code>
            </li>
            <li>
              <code>.tooltipped-nw</code>
            </li>
          </ul>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span className="tooltipped tooltipped-n border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the North side.">
            Tooltip North
          </span>
          <span
            className="tooltipped tooltipped-ne border p-2 mb-2 mr-2 float-left"
            aria-label="This is the tooltip on the North East side."
          >
            Tooltip North East
          </span>
          <span className="tooltipped tooltipped-e border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the East side.">
            Tooltip East
          </span>
          <span
            className="tooltipped tooltipped-se border p-2 mb-2 mr-2 float-left"
            aria-label="This is the tooltip on the South East side."
          >
            Tooltip South East
          </span>
          <span className="tooltipped tooltipped-s border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the South side.">
            Tooltip South
          </span>
          <span
            className="tooltipped tooltipped-sw border p-2 mb-2 mr-2 float-left"
            aria-label="This is the tooltip on the South West side."
          >
            Tooltip South West
          </span>
          <span className="tooltipped tooltipped-w border p-2 mb-2 mr-2 float-left" aria-label="This is the tooltip on the West side.">
            Tooltip West
          </span>
          <span
            className="tooltipped tooltipped-nw border p-2 mb-2 mr-2 float-left"
            aria-label="This is the tooltip on the North West side."
          >
            Tooltip North West
          </span>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-n border p-2 mb-2 mr-2 float-left"</span> <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip on the North side."</span>
                <span className="nt">&gt;</span>
                Tooltip North
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-ne border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip on the North East side."</span>
                <span className="nt">&gt;</span>
                Tooltip North East
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-e border p-2 mb-2 mr-2 float-left"</span> <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip on the East side."</span>
                <span className="nt">&gt;</span>
                Tooltip East
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-se border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip on the South East side."</span>
                <span className="nt">&gt;</span>
                Tooltip South East
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-s border p-2 mb-2 mr-2 float-left"</span> <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip on the South side."</span>
                <span className="nt">&gt;</span>
                Tooltip South
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-sw border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip on the South West side."</span>
                <span className="nt">&gt;</span>
                Tooltip South West
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-w border p-2 mb-2 mr-2 float-left"</span> <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip on the West side."</span>
                <span className="nt">&gt;</span>
                Tooltip West
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-nw border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip on the North West side."</span>
                <span className="nt">&gt;</span>
                Tooltip North West
                <span className="nt">&lt;/span&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Tooltip%20alignment" className="dashAnchor"></a>
          <h2>
            <a id="tooltip-alignment" className="anchor" href="#tooltip-alignment" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Tooltip alignment
          </h2>
          <p>Align tooltips to the left or right of an element, combined with a directional class to specify north or south.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span
            className="tooltipped tooltipped-ne tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left"
            aria-label="Tooltipped NE and aligned left."
          >
            Tooltip North East align left 1
          </span>
          <span
            className="tooltipped tooltipped-ne tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left"
            aria-label="Tooltipped NE and aligned left."
          >
            Tooltip North East align left 2
          </span>
          <span
            className="tooltipped tooltipped-se tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left"
            aria-label="Tooltipped SW and aigned left."
          >
            Tooltip South East align left 1
          </span>
          <span
            className="tooltipped tooltipped-se tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left"
            aria-label="Tooltipped SW and aigned left."
          >
            Tooltip South East align left 2
          </span>
          <span
            className="tooltipped tooltipped-nw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left"
            aria-label="Tooltipped NW and aligned right."
          >
            Tooltip North West align right 1
          </span>
          <span
            className="tooltipped tooltipped-nw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left"
            aria-label="Tooltipped NW and aligned right."
          >
            Tooltip North West align right 2
          </span>
          <span
            className="tooltipped tooltipped-sw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left"
            aria-label="Tooltipped SE and aligned right."
          >
            Tooltip South West align right 1
          </span>
          <span
            className="tooltipped tooltipped-sw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left"
            aria-label="Tooltipped SE and aligned right."
          >
            Tooltip South West align right 2
          </span>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-ne tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"Tooltipped NE and aligned left."</span>
                <span className="nt">&gt;</span>
                Tooltip North East align left 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-ne tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"Tooltipped NE and aligned left."</span>
                <span className="nt">&gt;</span>
                Tooltip North East align left 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-se tooltipped-align-left-1 border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"Tooltipped SW and aigned left."</span>
                <span className="nt">&gt;</span>
                Tooltip South East align left 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-se tooltipped-align-left-2 border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"Tooltipped SW and aigned left."</span>
                <span className="nt">&gt;</span>
                Tooltip South East align left 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-nw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"Tooltipped NW and aligned right."</span>
                <span className="nt">&gt;</span>
                Tooltip North West align right 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-nw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"Tooltipped NW and aligned right."</span>
                <span className="nt">&gt;</span>
                Tooltip North West align right 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-sw tooltipped-align-right-1 border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"Tooltipped SE and aligned right."</span>
                <span className="nt">&gt;</span>
                Tooltip South West align right 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-sw tooltipped-align-right-2 border p-2 mb-2 mr-2 float-left"</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">"Tooltipped SE and aligned right."</span>
                <span className="nt">&gt;</span>
                Tooltip South West align right 2<span className="nt">&lt;/span&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Tooltips%20with%20multiple%20lines" className="dashAnchor"></a>
          <h2>
            <a id="tooltips-with-multiple-lines" className="anchor" href="#tooltips-with-multiple-lines" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Tooltips with multiple lines
          </h2>
          <p>
            Use <code>.tooltipped-multiline</code> when you have long content. This style has some limitations: you cannot pre-format the
            text with newlines, and tooltips are limited to a max-width of <code>250px</code>.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span
            className="tooltipped tooltipped-multiline tooltipped-n border p-2"
            aria-label="This is the tooltip with multiple lines. This is the tooltip with multiple lines."
          >
            Tooltip with multiple lines
          </span>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-multiline tooltipped-n border p-2"</span> <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip with multiple lines. This is the tooltip with multiple lines."</span>
                <span className="nt">&gt;</span>
                Tooltip with multiple lines
                <span className="nt">&lt;/span&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Tooltips%20No%20Delay" className="dashAnchor"></a>
          <h2>
            <a id="tooltips-no-delay" className="anchor" href="#tooltips-no-delay" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Tooltips No Delay
          </h2>
          <p>
            By default the tooltips have a slight delay before appearing. This is to keep multiple tooltips in the UI from being
            distracting. There is a modifier class you can use to override this. <code>.tooltipped-no-delay</code>
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span className="tooltipped tooltipped-n tooltipped-no-delay border p-2" aria-label="This is the tooltip on the no delay side.">
            Tooltip no delay
          </span>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">"tooltipped tooltipped-n tooltipped-no-delay border p-2"</span> <span className="na">aria-label=</span>
                <span className="s">"This is the tooltip on the no delay side."</span>
                <span className="nt">&gt;</span>
                Tooltip no delay
                <span className="nt">&lt;/span&gt;</span>
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
          <a href="/primer/components/tables/">
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
            Tables
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/truncate/">
            Truncate
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
