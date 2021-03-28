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
              <a href="/primer/components/">Components</a>
            </li>

            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/components/buttons/" aria-current="page" className="text-gray">
                Buttons
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Buttons</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-buttons"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-buttons/"
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

            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-buttons">
              2.6.2
            </a>
          </div>

          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>

        <div className="markdown-body">
          <p>
            Buttons are used for <strong>actions</strong>, like in forms, while textual hyperlinks are used for{' '}
            <strong>destinations</strong>, or moving from one page to another.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#default-button" id="markdown-toc-default-button">
                Default button
              </a>
            </li>
            <li>
              <a href="#primary-button" id="markdown-toc-primary-button">
                Primary button
              </a>
            </li>
            <li>
              <a href="#danger-button" id="markdown-toc-danger-button">
                Danger button
              </a>
            </li>
            <li>
              <a href="#outline-button" id="markdown-toc-outline-button">
                Outline button
              </a>
            </li>
            <li>
              <a href="#large-button" id="markdown-toc-large-button">
                Large button
              </a>
            </li>
            <li>
              <a href="#disabled-state" id="markdown-toc-disabled-state">
                Disabled state
              </a>
            </li>
            <li>
              <a href="#block-button" id="markdown-toc-block-button">
                Block button
              </a>
            </li>
            <li>
              <a href="#link-button" id="markdown-toc-link-button">
                Link button
              </a>
            </li>
            <li>
              <a href="#button-with-counts" id="markdown-toc-button-with-counts">
                Button with counts
              </a>
            </li>
            <li>
              <a href="#button-groups" id="markdown-toc-button-groups">
                Button groups
              </a>
            </li>
            <li>
              <a href="#hidden-text-button" id="markdown-toc-hidden-text-button">
                Hidden text button
              </a>
            </li>
            <li>
              <a
                href="#using-button-styles-with-the-details-summary-element"
                id="markdown-toc-using-button-styles-with-the-details-summary-element"
              >
                Using button styles with the details summary element
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Default%20button" className="dashAnchor" />
          <h2>
            <a id="default-button" className="anchor" href="#default-button" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Default button
          </h2>
          <p>
            Use the standard—yet classy—<code>.btn</code> for form actions and primary page actions. These are used extensively around the
            site.
          </p>
          <p>
            When using a <code>&lt;button&gt;</code> element,{' '}
            <strong>
              always specify a <code>type</code>
            </strong>
            . When using a <code>&lt;a&gt;</code> element,{' '}
            <strong>
              always add <code>role=&quot;button&quot;</code> for accessibility
            </strong>
            .
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <button className="btn" type="button">
            Button button
          </button>
          <a className="btn" href="#url" role="button">
            Link button
          </a>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Link button<span className="nt">&lt;/a&gt;</span>
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
            You can find them in two sizes: the default <code>.btn</code> and the smaller <code>.btn-sm</code>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <button className="btn" type="button">
            Button
          </button>
          <button className="btn btn-sm" type="button">
            Small button
          </button>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-sm&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Small button<span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Primary%20button" className="dashAnchor" />
          <h2>
            <a id="primary-button" className="anchor" href="#primary-button" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Primary button
          </h2>
          <p>
            Primary buttons are green and are used to indicate the <em>primary</em> action on a page. When you need your buttons to stand
            out, use <code>.btn.btn-primary</code>. You can use it with both button sizes—just add <code>.btn-primary</code>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <button className="btn btn-primary" type="button">
            Primary button
          </button>
          <button className="btn btn-sm btn-primary" type="button">
            Small primary button
          </button>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Primary button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-sm btn-primary&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Small primary button<span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Danger%20button" className="dashAnchor" />
          <h2>
            <a id="danger-button" className="anchor" href="#danger-button" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Danger button
          </h2>
          <p>
            Danger buttons are red. They help reiterate that the intended action is important or potentially dangerous (e.g., deleting a
            repo or transferring ownership). Similar to the primary buttons, just add <code>.btn-danger</code>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <button className="btn btn-danger" type="button">
            Danger button
          </button>
          <button className="btn btn-sm btn-danger" type="button">
            Small danger button
          </button>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-danger&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Danger button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-sm btn-danger&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Small danger button<span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Outline%20button" className="dashAnchor" />
          <h2>
            <a id="outline-button" className="anchor" href="#outline-button" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Outline button
          </h2>
          <p>
            Outline buttons downplay an action as they appear like boxy links. Just add <code>.btn-outline</code> and go.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <button className="btn btn-outline" type="button">
            Outline button
          </button>
          <button className="btn btn-sm btn-outline" type="button">
            Outline button
          </button>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-outline&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Outline button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-sm btn-outline&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Outline button<span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Large%20button" className="dashAnchor" />
          <h2>
            <a id="large-button" className="anchor" href="#large-button" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Large button
          </h2>
          <p>
            Use <code>.btn-large</code> to increase the padding and border radius of a button. This is useful for prominent calls to action
            in hero sections.
          </p>
          <p>
            <a href="https://styleguide.github.com/primer/utilities/typography/#type-scale-utilities">Type scale utilities</a> can be used
            to alter the font-size if needed. Padding is applied in em&apos;s so that it scales proportionally with the font-size.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p>
            <a className="btn btn-large btn-purple" href="#url" role="button">
              Large link button
            </a>
            <button className="btn btn-large" type="button">
              Large button button
            </button>
          </p>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-large btn-purple&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Large link button<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-large&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Large button button<span className="nt">&lt;/button&gt;</span>
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
            Use <code>.btn-large</code> with a type scale utility to transform the text to a bigger size.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p className="f3">
            <a className="btn btn-large btn-purple" href="#url" role="button">
              Large link button
            </a>
            <button className="btn btn-large btn-outline-blue" type="button">
              Large button button
            </button>
          </p>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;f3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-large btn-purple&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Large link button<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-large btn-outline-blue&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Large button button<span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Disabled%20state" className="dashAnchor" />
          <h2>
            <a id="disabled-state" className="anchor" href="#disabled-state" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Disabled state
          </h2>
          <p>
            Disable <code>&lt;button&gt;</code> elements with the boolean <code>disabled</code> attribute and <code>&lt;a&gt;</code>{' '}
            elements with the <code>.disabled</code> class.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <button className="btn" type="button" disabled="">
            Disabled button
          </button>
          <a className="btn disabled" href="#url" role="button">
            Disabled button
          </a>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">disabled</span>
                <span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;btn disabled&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/a&gt;</span>
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
          <p>Similar styles are applied to primary, danger, and outline buttons:</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <button className="btn btn-primary" type="button" disabled="">
            Disabled button
          </button>
          <a className="btn btn-primary disabled" href="#url" role="button">
            Disabled button
          </a>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">disabled</span>
                <span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary disabled&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/a&gt;</span>
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
          <button className="btn btn-danger" type="button" disabled="">
            Disabled button
          </button>
          <a className="btn btn-danger disabled" href="#url" role="button">
            Disabled button
          </a>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-danger&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">disabled</span>
                <span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-danger disabled&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/a&gt;</span>
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
          <button className="btn btn-outline" type="button" disabled="">
            Disabled button
          </button>
          <a className="btn btn-outline disabled" href="#url" role="button">
            Disabled button
          </a>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-outline&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">disabled</span>
                <span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-outline disabled&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Disabled button<span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Block%20button" className="dashAnchor" />
          <h2>
            <a id="block-button" className="anchor" href="#block-button" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Block button
          </h2>
          <p>
            Make any button full-width by adding <code>.btn-block</code>. It adds <code>width: 100%;</code>, changes the{' '}
            <code>display</code> from <code>inline-block</code> to <code>block</code>, and centers the button text.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p>
            <button className="btn btn-block" type="button">
              Block button
            </button>
          </p>
          <p>
            <button className="btn btn-sm btn-block" type="button">
              Small block button
            </button>
          </p>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p&gt;&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-block&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Block button<span className="nt">&lt;/button&gt;&lt;/p&gt;</span>
                <span className="nt">&lt;p&gt;&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-sm btn-block&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Small block button<span className="nt">&lt;/button&gt;&lt;/p&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Link%20button" className="dashAnchor" />
          <h2>
            <a id="link-button" className="anchor" href="#link-button" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Link button
          </h2>
          <p>
            Create a button that looks like a link with <code>.btn-link</code>. Rather than using an <code>&lt;a&gt;</code> to trigger JS,
            this style on a <code>&lt;button&gt;</code> should be used for better accessibility.
          </p>
          <p>
            <strong>
              The <code>.btn-link</code> class is not designed to be used with <code>.btn</code>; the overlapping styles are not compatible.
            </strong>
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p>
            <button className="btn-link" type="button">
              Link button
            </button>
          </p>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p&gt;&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn-link&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Link button<span className="nt">&lt;/button&gt;&lt;/p&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Button%20with%20counts" className="dashAnchor" />
          <h2>
            <a id="button-with-counts" className="anchor" href="#button-with-counts" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Button with counts
          </h2>
          <p>
            You can easily append a count to a <strong>small button</strong>. Add the <code>.with-count</code> class to the{' '}
            <code>.btn-sm</code> and then add the <code>.social-count</code> after the button.
          </p>
          <p>
            <strong>Be sure to clear the float added by the additional class.</strong>
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="clearfix">
            <a className="btn btn-sm btn-with-count" href="#url" role="button">
              <svg height="16" className="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                />
              </svg>
              Watch
            </a>
            <a className="social-count" href="#url">
              6
            </a>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-sm btn-with-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;eye&quot; %&gt; Watch
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;social-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/a&gt;</span>
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
            You can also use the <a href="../labels#counters">counter</a> component within buttons:
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <button className="btn" type="button">
            Button
            <span className="Counter">12</span>
          </button>

          <button className="btn btn-primary" type="button">
            Button
            <span className="Counter">12</span>
          </button>

          <button className="btn btn-danger" type="button">
            Button
            <span className="Counter">12</span>
          </button>

          <button className="btn btn-outline" type="button">
            Button
            <span className="Counter">12</span>
          </button>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                Button
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                Button
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-danger&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                Button
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-outline&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                Button
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Button%20groups" className="dashAnchor" />
          <h2>
            <a id="button-groups" className="anchor" href="#button-groups" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Button groups
          </h2>
          <p>
            Have a hankering for a series of buttons that are attached to one another? Wrap them in a <code>.BtnGroup</code> and the buttons
            will be rounded and spaced automatically.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="BtnGroup mr-2">
            <button className="btn BtnGroup-item" type="button">
              Button
            </button>
            <button className="btn BtnGroup-item" type="button">
              Button
            </button>
            <button className="btn BtnGroup-item" type="button">
              Button
            </button>
          </div>

          <div className="BtnGroup mr-2">
            <button className="btn BtnGroup-item btn-outline" type="button">
              Button
            </button>
            <button className="btn BtnGroup-item btn-outline" type="button">
              Button
            </button>
            <button className="btn BtnGroup-item btn-outline" type="button">
              Button
            </button>
          </div>

          <div className="BtnGroup">
            <button className="btn BtnGroup-item btn-sm" type="button">
              Button
            </button>
            <button className="btn BtnGroup-item btn-sm" type="button">
              Button
            </button>
            <button className="btn BtnGroup-item btn-sm" type="button">
              Button
            </button>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;BtnGroup mr-2&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;BtnGroup mr-2&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item btn-outline&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item btn-outline&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item btn-outline&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;BtnGroup&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item btn-sm&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item btn-sm&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item btn-sm&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
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
            Add <code>.BtnGroup-parent</code> to parent elements, like <code>&lt;form&gt;</code>s or <code>&lt;details&gt;</code>s, within{' '}
            <code>.BtnGroup</code>s for proper spacing and rounded corners.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="BtnGroup">
            <button className="btn BtnGroup-item" type="button">
              Button
            </button>
            <form className="BtnGroup-parent">
              <button className="btn BtnGroup-item" type="button">
                Button in a form
              </button>
            </form>
            <button className="btn BtnGroup-item" type="button">
              Button
            </button>
            <button className="btn BtnGroup-item" type="button">
              Button
            </button>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;BtnGroup&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;form</span> <span className="na">className=</span>
                <span className="s">&quot;BtnGroup-parent&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button in a form<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn BtnGroup-item&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Hidden%20text%20button" className="dashAnchor" />
          <h2>
            <a id="hidden-text-button" className="anchor" href="#hidden-text-button" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Hidden text button
          </h2>
          <p>
            Use <code>.hidden-text-expander</code> to indicate and toggle hidden text.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span className="hidden-text-expander">
            <button type="button" className="ellipsis-expander" aria-expanded="false">
              …
            </button>
          </span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;hidden-text-expander&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;ellipsis-expander&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;hellip;</span>
                <span className="nt">&lt;/button&gt;</span>
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
          <p>
            You can also make the expander appear inline by adding <code>.inline</code>.
          </p>
          <a name="//apple_ref/cpp/Style/Using%20button%20styles%20with%20the%20details%20summary%20element" className="dashAnchor" />
          <h2>
            <a
              id="using-button-styles-with-the-details-summary-element"
              className="anchor"
              href="#using-button-styles-with-the-details-summary-element"
              aria-hidden="true"
            >
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Using button styles with the details summary element
          </h2>
          <p>
            You can add <code>.btn</code> and <code>.btn-*</code> classes to any
            <br />
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary">
              <code>&lt;summary&gt;</code>
            </a>
            <br />
            element so that it gains the appearance of a button, and
            <br />
            selected/active styles when the parent
            <br />
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details">
              <code>&lt;details&gt;</code>
            </a>
            <br />
            element is open.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <details>
            <summary className="btn btn-block btn-primary">Toggle the content</summary>
            <p className="mt-2">This content will be toggled.</p>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-block btn-primary&quot;</span>
                <span className="nt">&gt;</span>Toggle the content<span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;mt-2&quot;</span>
                <span className="nt">&gt;</span>
                This content will be toggled.
                <span className="nt">&lt;/p&gt;</span>
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
        <div>
          <a href="/primer/components/breadcrumb/">
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
            Breadcrumbs
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/forms/">
            Forms
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
