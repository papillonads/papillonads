/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
              <a href="/primer/utilities/layout/" aria-current="page" className="text-gray">
                Layout
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Layout</h2>
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
          <p>Change the document layout with display, float, alignment, and other utilities.</p>
          <ul id="markdown-toc">
            <li>
              <a href="#display" id="markdown-toc-display">
                Display
              </a>
              <ul>
                <li>
                  <a href="#the-html-hidden-attribute" id="markdown-toc-the-html-hidden-attribute">
                    The HTML hidden attribute
                  </a>
                </li>
                <li>
                  <a href="#displaytable-wrapping-issues" id="markdown-toc-displaytable-wrapping-issues">
                    display:table wrapping issues
                  </a>
                </li>
                <li>
                  <a href="#responsive-display" id="markdown-toc-responsive-display">
                    Responsive display
                  </a>
                </li>
                <li>
                  <a href="#responsive-hide" id="markdown-toc-responsive-hide">
                    Responsive hide
                  </a>
                </li>
                <li>
                  <a href="#text-direction" id="markdown-toc-text-direction">
                    Text direction
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#visibility" id="markdown-toc-visibility">
                Visibility
              </a>
            </li>
            <li>
              <a href="#overflow" id="markdown-toc-overflow">
                Overflow
              </a>
            </li>
            <li>
              <a href="#floats" id="markdown-toc-floats">
                Floats
              </a>
              <ul>
                <li>
                  <a href="#responsive-floats" id="markdown-toc-responsive-floats">
                    Responsive floats
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#alignment" id="markdown-toc-alignment">
                Alignment
              </a>
            </li>
            <li>
              <a href="#width-and-height" id="markdown-toc-width-and-height">
                Width and height
              </a>
            </li>
            <li>
              <a href="#position" id="markdown-toc-position">
                Position
              </a>
              <ul>
                <li>
                  <a href="#screen-reader-only" id="markdown-toc-screen-reader-only">
                    Screen reader only
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#the-media-object" id="markdown-toc-the-media-object">
                The media object
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Display" className="dashAnchor" />
          <h2>
            <a id="display" className="anchor" href="#display" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Display
          </h2>
          <p>
            Adjust the display of an element with <code>.d-block</code>, <code>.d-none</code>, <code>.d-inline</code>,{' '}
            <code>.d-inline-block</code>, <code>.d-table</code>, <code>.d-table-cell</code> utilities.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-inline border">
            .d-inline
            <div className="d-inline-block border">.d-inline-block</div>
            <span className="d-block border">.d-block</span>
            <div className="d-table border">
              <div className="d-table-cell border">.d-table-cell</div>
            </div>
            <div className="d-table-cell border">.d-table-cell</div>
            <div className="d-none">.d-none</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline border&quot;</span>
                <span className="nt">&gt;</span>
                .d-inline
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block border&quot;</span>
                <span className="nt">&gt;</span>
                .d-inline-block
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;d-block border&quot;</span>
                <span className="nt">&gt;</span>.d-block<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table border&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell border&quot;</span>
                <span className="nt">&gt;</span>
                .d-table-cell
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell border&quot;</span>
                <span className="nt">&gt;</span>
                .d-table-cell
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-none&quot;</span>
                <span className="nt">&gt;</span>
                .d-none
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
          <a name="//apple_ref/cpp/Style/The%20HTML%20hidden%20attribute" className="dashAnchor" />
          <h3>
            <a id="the-html-hidden-attribute" className="anchor" href="#the-html-hidden-attribute" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            The HTML <code>hidden</code> attribute
          </h3>
          <p>
            As of <a href="https://github.com/primer/primer/releases/v10.10.0">Primer v10.10.0</a>, <code>primer-base</code> includes a rule
            that sets <code>display: none !important</code> for any element with the{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden">
              <code>hidden</code> attribute
            </a>
            . You can safely use the <code>hidden</code> attribute with display utilities, but we suggest:
          </p>
          <ol>
            <li>
              Use the <code>hidden</code> attribute (and corresponding JavaScript property) if you&apos;re going to programmatically show
              and hide content.
            </li>
            <li>
              Use <code>d-none</code> and/or its responsive variants (<code>d-sm-block</code>, <code>d-lg-none</code>) to conditionally show
              content at different screen sizes.
            </li>
          </ol>
          <p>
            Rather than toggling the <code>d-none</code> class in JavaScript, you should toggle the <code>hidden</code> property on an
            element. This means that you won&apos;t have to restore any more specific display utility (<code>d-inline</code> or{' '}
            <code>d-flex</code>, for instance) just to work around the order in which they&apos;re listed in the stylesheet.
          </p>
          <pre className="highlight-js highlight">
            <code>
              <span className="c1">\/\/ Good:</span>
              <span className="nx">element</span>
              <span className="p">.</span>
              <span className="nx">hidden</span> <span className="o">=</span> <span className="o">!</span>
              <span className="nx">visible</span>
              <span className="c1">\/\/ Bad:</span>
              <span className="nx">element</span>
              <span className="p">.</span>
              <span className="nx">classList</span>
              <span className="p">.</span>
              <span className="nx">toggle</span>
              <span className="p">(</span>
              <span className="s1">&apos;d-none&apos;</span>
              <span className="p">,</span> <span className="o">!</span>
              <span className="nx">visible</span>
              <span className="p">)</span>
              <span className="nx">element</span>
              <span className="p">.</span>
              <span className="nx">classList</span>
              <span className="p">.</span>
              <span className="nx">toggle</span>
              <span className="p">(</span>
              <span className="s1">&apos;d-inline&apos;</span>
              <span className="p">,</span> <span className="nx">visible</span>
              <span className="p">)</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/display:table%20wrapping%20issues" className="dashAnchor" />
          <h3>
            <a id="displaytable-wrapping-issues" className="anchor" href="#displaytable-wrapping-issues" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            <code>display:table</code> wrapping issues
          </h3>
          <p>
            There are known issues with using <code>display:table</code> and wrapping long strings, particularly in Firefox. You may need to
            use <code>table-fixed</code> on elements with <code>d-table</code> and apply column widths to table cells, which you can do with
            our <a href="../../objects/grid#column-widths">column width styles</a>.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-table table-fixed width-full">
            <div className="d-table-cell border">.d-table-cell</div>
            <div className="d-table-cell col-10 border">d-table-cell .col-10</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table table-fixed width-full&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell border&quot;</span>
                <span className="nt">&gt;</span>
                .d-table-cell
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell col-10 border&quot;</span>
                <span className="nt">&gt;</span>
                d-table-cell .col-10
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
          <a name="//apple_ref/cpp/Style/Responsive%20display" className="dashAnchor" />
          <h3>
            <a id="responsive-display" className="anchor" href="#responsive-display" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Responsive display
          </h3>
          <p>
            A selection of display utilities are able to be applied or changed per <a href="../../objects/grid#breakpoints">breakpoint</a>.{' '}
            <code>.d-block</code>, <code>.d-none</code>, <code>.d-inline</code>, and <code>.d-inline-block</code> are available as
            responsive utilities using the following formula: <code>d-[breakpoint]-[property]</code>. For example:{' '}
            <code>d-md-inline-block</code>. Each responsive display utility is applied to the specified breakpoint and up.
          </p>
          <p>
            In the following example, the <code>ul</code> element switches from <code>display: block</code> on mobile to{' '}
            <code>display: inline-block</code> at the <code>md</code> breakpoint, while the list items remain inline.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <h5 className="d-md-inline-block">.d-md-inline-block</h5>
          <ul className="d-md-inline-block border">
            <li className="d-inline border">.d-inline</li>
            <li className="d-inline border">.d-inline</li>
          </ul>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;h5</span> <span className="na">className=</span>
                <span className="s">&quot;d-md-inline-block&quot;</span>
                <span className="nt">&gt;</span>.d-md-inline-block<span className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;d-md-inline-block border&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline border&quot;</span>
                <span className="nt">&gt;</span>.d-inline<span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline border&quot;</span>
                <span className="nt">&gt;</span>.d-inline<span className="nt">&lt;/li&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Responsive%20hide" className="dashAnchor" />
          <h3>
            <a id="responsive-hide" className="anchor" href="#responsive-hide" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Responsive hide
          </h3>
          <p>
            Hide utilities are able to be applied or changed per breakpoint using the following formula:
            <br /> <code>hide-[breakpoint]</code>, for example: <code>hide-sm</code>. Hide utilities act differently from other responsive
            styles and are applied to each <strong>breakpoint-range only</strong>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Shorthand</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-sm</td>
                <td>0—544px</td>
              </tr>
              <tr>
                <td>-md</td>
                <td>544px—768px</td>
              </tr>
              <tr>
                <td>-lg</td>
                <td>768px—1004px</td>
              </tr>
              <tr>
                <td>-xl</td>
                <td>1004px and above</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div>
            <a name="//apple_ref/cpp/Style/Potato%20update" className="dashAnchor" />
            <h3>Potato update</h3>
            <span className="hide-sm hide-md">
              Opened by <a href="#url">broccolini</a>
            </span>
            <span className="d-md-none">Updated</span> 3 hours ago
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div&gt;</span>
                <span className="nt">&lt;h3&gt;</span>Potato update<span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;hide-sm hide-md&quot;</span>
                <span className="nt">&gt;</span>Opened by <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>broccolini<span className="nt">&lt;/a&gt;&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;d-md-none&quot;</span>
                <span className="nt">&gt;</span>Updated<span className="nt">&lt;/span&gt;</span> 3 hours ago
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
          <a name="//apple_ref/cpp/Style/Text%20direction" className="dashAnchor" />
          <h3>
            <a id="text-direction" className="anchor" href="#text-direction" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Text direction
          </h3>
          <p>
            <code>.direction-ltr</code> or <code>.direction-rtl</code> can be used to change the text direction. This is especially helpful
            when paired with <code>.d-table</code>, <code>.d-table-cell</code>, and <code>.v-align-middle</code> to create equal height,
            vertically centered, alternating content.
          </p>
          <a name="//apple_ref/cpp/Style/Visibility" className="dashAnchor" />
          <h2>
            <a id="visibility" className="anchor" href="#visibility" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Visibility
          </h2>
          <p>
            Adjust the visibility of an element with <code>.v-hidden</code> and <code>.v-visible</code>.
          </p>
          <a name="//apple_ref/cpp/Style/Overflow" className="dashAnchor" />
          <h2>
            <a id="overflow" className="anchor" href="#overflow" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Overflow
          </h2>
          <p>
            Adjust element overflow with <code>.overflow-hidden</code>, <code>.overflow-scroll</code>, and <code>.overflow-auto</code>.{' '}
            <code>.overflow-hidden</code> can also be used to create a new{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context">block formatting context</a> or clear
            floats.
          </p>
          <a name="//apple_ref/cpp/Style/Floats" className="dashAnchor" />
          <h2>
            <a id="floats" className="anchor" href="#floats" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Floats
          </h2>
          <p>
            Use <code>.float-left</code> and <code>.float-right</code> to set floats, and <code>.clearfix</code> to clear.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="clearfix border border-gray">
            <div className="float-left border border-gray">.float-left</div>
            <div className="float-right border border-gray">.float-right</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;clearfix border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;float-left border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                .float-left
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;float-right border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                .float-right
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
          <a name="//apple_ref/cpp/Style/Responsive%20floats" className="dashAnchor" />
          <h3>
            <a id="responsive-floats" className="anchor" href="#responsive-floats" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Responsive floats
          </h3>
          <p>
            Float utilities can be applied or changed per <a href="../../objects/grid#breakpoints">breakpoint</a>. This can be useful for
            responsive layouts when you want an element to be full width on mobile but floated at a larger breakpoint.
          </p>
          <p>
            Each responsive float utility is applied to the specified breakpoint and up, using the following formula:{' '}
            <code>float-[breakpoint]-[property]</code>. For example: <code>float-md-left</code>. Remember to use <code>.clearfix</code> to
            clear.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="clearfix border border-gray">
            <div className="float-md-left border border-gray">.float-md-left</div>
            <div className="float-md-right border border-gray">.float-md-right</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;clearfix border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;float-md-left border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                .float-md-left
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;float-md-right border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                .float-md-right
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
          <a name="//apple_ref/cpp/Style/Alignment" className="dashAnchor" />
          <h2>
            <a id="alignment" className="anchor" href="#alignment" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Alignment
          </h2>
          <p>
            Adjust the alignment of an element with <code>.v-align-baseline</code>, <code>.v-align-top</code>, <code>.v-align-middle</code>{' '}
            or <code>.v-align-bottom</code>. The vertical-align property only applies to inline or table-cell boxes.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-table border border-gray">
            <div className="d-table-cell">
              <a name="//apple_ref/cpp/Style/Potatoes" className="dashAnchor" />
              <h1>Potatoes</h1>
            </div>
            <div className="d-table-cell v-align-baseline">.v-align-baseline</div>
            <div className="d-table-cell v-align-top">.v-align-top</div>
            <div className="d-table-cell v-align-middle">.v-align-middle</div>
            <div className="d-table-cell v-align-bottom">.v-align-bottom</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell&quot;</span>
                <span className="nt">&gt;&lt;h1&gt;</span>Potatoes<span className="nt">&lt;/h1&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell v-align-baseline&quot;</span>
                <span className="nt">&gt;</span>.v-align-baseline<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell v-align-top&quot;</span>
                <span className="nt">&gt;</span>.v-align-top<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell v-align-middle&quot;</span>
                <span className="nt">&gt;</span>.v-align-middle<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell v-align-bottom&quot;</span>
                <span className="nt">&gt;</span>.v-align-bottom<span className="nt">&lt;/div&gt;</span>
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
            Use <code>v-align-text-top</code> or <code>v-align-text-bottom</code> to adjust the alignment of an element with the top or
            bottom of the parent element&apos;s font.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border border-gray">
            <a
              name="//apple_ref/cpp/Style/Potatoes%0A%20%20%20%20.v-align-text-top%0A%20%20%20%20.v-align-text-bottom"
              className="dashAnchor"
            />
            <h1 className="mr-1">
              Potatoes
              <span className="f4 v-align-text-top mr-1">.v-align-text-top</span>
              <span className="f4 v-align-text-bottom mr-1">.v-align-text-bottom</span>
            </h1>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h1</span> <span className="na">className=</span>
                <span className="s">&quot;mr-1&quot;</span>
                <span className="nt">&gt;</span>Potatoes
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;f4 v-align-text-top mr-1&quot;</span>
                <span className="nt">&gt;</span>.v-align-text-top<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;f4 v-align-text-bottom mr-1&quot;</span>
                <span className="nt">&gt;</span>.v-align-text-bottom<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/h1&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Width%20and%20height" className="dashAnchor" />
          <h2>
            <a id="width-and-height" className="anchor" href="#width-and-height" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Width and height
          </h2>
          <p>
            Use <code>.width-fit</code> to set max-width 100%.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="one-fourth column">
            <img className="width-fit bg-gray" src="/images/gravatars/gravatar-user-420.png" alt="width fitted octocat" />
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;one-fourth column&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;width-fit bg-gray&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/images/gravatars/gravatar-user-420.png&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;width fitted octocat&quot;</span> <span className="nt">/&gt;</span>
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
            Use <code>.width-full</code> to set width to 100%.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-table width-full">
            <div className="d-table-cell">
              <input
                className="form-control width-full"
                type="text"
                value="Full width form field"
                aria-label="Sample full width form field"
              />
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table width-full&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control width-full&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;Full width form field&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Sample full width form field&quot;</span>
                <span className="nt">&gt;</span>
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
            Use <code>.height-fit</code> to set max-height 100%.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="one-fourth column" style={{ height: '100px', overflow: 'auto' }}>
            <div className="p-3 height-fit border">
              Bacon ipsum dolor amet meatball flank beef tail pig boudin ham hock chicken capicola. Shoulder ham spare ribs turducken pork
              tongue. Bresaola corned beef sausage jowl ribeye kielbasa tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin pig,
              chuck ground round chicken tongue corned beef biltong.
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;one-fourth column&quot;</span> <span className="na">style=</span>
                <span className="s">&quot;height: 100px; overflow: auto;&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-3 height-fit border&quot;</span>
                <span className="nt">&gt;</span>
                Bacon ipsum dolor amet meatball flank beef tail pig boudin ham hock chicken capicola. Shoulder ham spare ribs turducken pork
                tongue. Bresaola corned beef sausage jowl ribeye kielbasa tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin
                pig, chuck ground round chicken tongue corned beef biltong.
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
            Use <code>.height-full</code> to set height to 100%.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-table border border-gray">
            <div className="d-table-cell height-full v-align-middle pl-3">
              <svg height="16" className="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
                />
              </svg>
            </div>
            <div className="p-3">
              Bacon ipsum dolor amet meatball flank beef tail pig boudin ham hock chicken capicola. Shoulder ham spare ribs turducken pork
              tongue. Bresaola corned beef sausage jowl ribeye kielbasa tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin pig,
              chuck ground round chicken tongue corned beef biltong.
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-table-cell height-full v-align-middle pl-3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;three-bars&quot; %&gt;
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-3&quot;</span>
                <span className="nt">&gt;</span>
                Bacon ipsum dolor amet meatball flank beef tail pig boudin ham hock chicken capicola. Shoulder ham spare ribs turducken pork
                tongue. Bresaola corned beef sausage jowl ribeye kielbasa tenderloin andouille leberkas tongue. Ribeye tri-tip tenderloin
                pig, chuck ground round chicken tongue corned beef biltong.
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
          <a name="//apple_ref/cpp/Style/Position" className="dashAnchor" />
          <h2>
            <a id="position" className="anchor" href="#position" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Position
          </h2>
          <p>
            Position utilities can be used to alter the default document flow.{' '}
            <strong>Be careful when using positioning, it&apos;s often unnecessary and commonly misused.</strong>
          </p>
          <p>
            Use <code>.position-relative</code> to create a new stacking context.
          </p>
          <p>
            <em>Note how the other elements are displayed as if &quot;Two&quot; were in its normal position and taking up space.</em>
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="d-inline-block float-left bg-blue text-white m-3" style={{ width: '100px', height: '100px' }}>
            One
          </div>
          <div
            className="d-inline-block float-left position-relative bg-blue text-white m-3"
            style={{ width: '100px', height: '100px', top: '12px', left: '12px' }}
          >
            Two
          </div>
          <div className="d-inline-block float-left bg-blue text-white m-3" style={{ width: '100px', height: '100px' }}>
            Three
          </div>
          <div className="d-inline-block float-left bg-blue text-white m-3" style={{ width: '100px', height: '100px' }}>
            Four
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block float-left bg-blue text-white m-3&quot;</span> <span className="na">style=</span>
                <span className="s">&quot;width:100px; height:100px;&quot;</span>
                <span className="nt">&gt;</span>
                One
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block float-left position-relative bg-blue text-white m-3&quot;</span>{' '}
                <span className="na">style=</span>
                <span className="s">&quot;width:100px; height:100px; top:12px; left:12px;&quot;</span>
                <span className="nt">&gt;</span>
                Two
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block float-left bg-blue text-white m-3&quot;</span> <span className="na">style=</span>
                <span className="s">&quot;width:100px; height:100px;&quot;</span>
                <span className="nt">&gt;</span>
                Three
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-inline-block float-left bg-blue text-white m-3&quot;</span> <span className="na">style=</span>
                <span className="s">&quot;width:100px; height:100px;&quot;</span>
                <span className="nt">&gt;</span>
                Four
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
            Use <code>.position-absolute</code> to take elements out of the normal document flow.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="position-relative" style={{ height: '116px' }}>
            <button type="button" className="btn mb-1">
              Button
            </button>
            <div className="position-absolute border border-gray p-2">
              <a href="#url" className="d-block p-1">
                Mashed potatoes
              </a>
              <a href="#url" className="d-block p-1">
                Fries
              </a>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;position-relative&quot;</span> <span className="na">style=</span>
                <span className="s">&quot;height:116px;&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;btn mb-1&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;position-absolute border border-gray p-2&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;d-block p-1&quot;</span>
                <span className="nt">&gt;</span>Mashed potatoes<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;d-block p-1&quot;</span>
                <span className="nt">&gt;</span>Fries<span className="nt">&lt;/a&gt;</span>
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
            Use <code>.position-fixed</code> to position an element relative to the viewport.{' '}
            <strong>Be careful when using fixed positioning. It is tricky to use and can lead to unwanted side effects.</strong>
          </p>
          <p>
            <em>Note: fixed positioning has been disabled here for demonstration only.</em>
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="position-fixed bg-gray-light border-bottom border-gray p-3">.position-fixed</div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;position-fixed bg-gray-light border-bottom border-gray p-3&quot;</span>
                <span className="nt">&gt;</span>
                .position-fixed
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
            Use <code>top-0</code>, <code>right-0</code>, <code>bottom-0</code>, and <code>left-0</code> with <code>position-absolute</code>
            , <code>position-fixed</code>, or <code>position-relative</code> to further specify an elements position.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ height: '64px' }}>
            <div className="border position-absolute top-0 left-0">.top-0 .left-0</div>
            <div className="border position-absolute top-0 right-0">.top-0 .right-0</div>
            <div className="border position-absolute bottom-0 right-0">.bottom-0 .right-0</div>
            <div className="border position-absolute bottom-0 left-0">.bottom-0 .left-0</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;height: 64px;&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border position-absolute top-0 left-0&quot;</span>
                <span className="nt">&gt;</span>
                .top-0 .left-0
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border position-absolute top-0 right-0&quot;</span>
                <span className="nt">&gt;</span>
                .top-0 .right-0
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border position-absolute bottom-0 right-0&quot;</span>
                <span className="nt">&gt;</span>
                .bottom-0 .right-0
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border position-absolute bottom-0 left-0&quot;</span>
                <span className="nt">&gt;</span>
                .bottom-0 .left-0
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
          <p>To fill an entire width or height, use opposing directions.</p>
          <p>
            <em>Note: fixed positioning has been disabled here for demonstration only.</em>
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="position-fixed left-0 right-0 p-3 bg-gray-dark text-white">.position-fixed .left-0 .right-0</div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;position-fixed left-0 right-0 p-3 bg-gray-dark text-white&quot;</span>
                <span className="nt">&gt;</span>
                .position-fixed .left-0 .right-0
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
          <a name="//apple_ref/cpp/Style/Screen%20reader%20only" className="dashAnchor" />
          <h3>
            <a id="screen-reader-only" className="anchor" href="#screen-reader-only" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Screen reader only
          </h3>
          <p>
            Use <code>.sr-only</code> to position an element outside of the viewport for screen reader access only.{' '}
            <strong>Even though the element can&apos;t be seen, make sure it still has a sensible tab order.</strong>
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="js-details-container Details">
            <button type="button" className="btn">
              Tab once from this button, and press enter
            </button>
            <button type="button" className="sr-only js-details-target">
              Screen reader only button
            </button>
            <div className="Details-content--hidden">Button activated!</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;js-details-container Details&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span>
                <span className="nt">&gt;</span>Tab once from this button, and press enter<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;sr-only js-details-target&quot;</span>
                <span className="nt">&gt;</span>
                Screen reader only button
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Details-content--hidden&quot;</span>
                <span className="nt">&gt;</span>
                Button activated!
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
          <a name="//apple_ref/cpp/Style/The%20media%20object" className="dashAnchor" />
          <h2>
            <a id="the-media-object" className="anchor" href="#the-media-object" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            The media object
          </h2>
          <p>Create a media object with utilities.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="clearfix p-3 border">
            <div className="float-left p-3 mr-3 bg-gray">Image</div>
            <div className="overflow-hidden">
              <p>
                <b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork chop meatball strip steak bresaola doner sirloin capicola
                biltong shank pig. Alcatra frankfurter ham hock, ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.
              </p>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;clearfix p-3 border&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;float-left p-3 mr-3 bg-gray&quot;</span>
                <span className="nt">&gt;</span>
                Image
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;overflow-hidden&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;p&gt;&lt;b&gt;</span>Body<span className="nt">&lt;/b&gt;</span> Bacon ipsum dolor amet shankle rump
                tenderloin pork chop meatball strip steak bresaola doner sirloin capicola biltong shank pig. Alcatra frankfurter ham hock,
                ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.<span className="nt">&lt;/p&gt;</span>
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
          <p>Create a double-sided media object for a container with a flexible center.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="clearfix p-3 border border-gray">
            <div className="float-left p-3 mr-3 bg-gray">Image</div>
            <div className="float-right p-3 ml-3 bg-gray">Image</div>
            <div className="overflow-hidden">
              <p>
                <b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork chop meatball strip steak bresaola doner sirloin capicola
                biltong shank pig. Alcatra frankfurter ham hock, ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.
              </p>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;clearfix p-3 border border-gray&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;float-left p-3 mr-3 bg-gray&quot;</span>
                <span className="nt">&gt;</span>
                Image
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;float-right p-3 ml-3 bg-gray&quot;</span>
                <span className="nt">&gt;</span>
                Image
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;overflow-hidden&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;p&gt;&lt;b&gt;</span>Body<span className="nt">&lt;/b&gt;</span> Bacon ipsum dolor amet shankle rump
                tenderloin pork chop meatball strip steak bresaola doner sirloin capicola biltong shank pig. Alcatra frankfurter ham hock,
                ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.<span className="nt">&lt;/p&gt;</span>
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
            You can also create a media object with <a href="./flexbox#media-object">flexbox utilities</a> instead of floats which can be
            useful for changing the vertical alignment.
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/utilities/flexbox/">
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
            Flexbox
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/utilities/margin/">
            Margin
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
