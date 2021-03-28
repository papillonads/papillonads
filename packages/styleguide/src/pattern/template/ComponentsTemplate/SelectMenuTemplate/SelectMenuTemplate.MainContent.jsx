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
              <a href="/primer/components/select-menu/" aria-current="page" className="text-gray">
                Select menu
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Select menu</h2>
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
              href="https://github.com/github/github/blob/master/docs/styleguide/css/styles/product/components/select-menu.md"
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
            The select menu provides advanced support for navigation, filtering, and more. Any popover within a select menu can make use of
            JavaScript-enabled live filtering, selected states, tabbed lists, and keyboard navigation with a bit of markup.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#basic-example" id="markdown-toc-basic-example">
                Basic example
              </a>
            </li>
            <li>
              <a href="#menu-contents" id="markdown-toc-menu-contents">
                Menu contents
              </a>
              <ul>
                <li>
                  <a href="#headers" id="markdown-toc-headers">
                    Headers
                  </a>
                </li>
                <li>
                  <a href="#list-items" id="markdown-toc-list-items">
                    List items
                  </a>
                </li>
                <li>
                  <a href="#filter" id="markdown-toc-filter">
                    Filter
                  </a>
                </li>
                <li>
                  <a href="#tabs" id="markdown-toc-tabs">
                    Tabs
                  </a>
                </li>
                <li>
                  <a href="#filter-and-tabs" id="markdown-toc-filter-and-tabs">
                    Filter and tabs
                  </a>
                </li>
                <li>
                  <a href="#blankslate" id="markdown-toc-blankslate">
                    Blankslate
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#menu-list-items" id="markdown-toc-menu-list-items">
                Menu list items
              </a>
              <ul>
                <li>
                  <a href="#multi-line-text" id="markdown-toc-multi-line-text">
                    Multi-line text
                  </a>
                </li>
                <li>
                  <a href="#with-avatars" id="markdown-toc-with-avatars">
                    With avatars
                  </a>
                </li>
                <li>
                  <a href="#with-dismiss-icon" id="markdown-toc-with-dismiss-icon">
                    With dismiss icon
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#menu-alignment" id="markdown-toc-menu-alignment">
                Menu alignment
              </a>
              <ul>
                <li>
                  <a href="#right-aligned-menus" id="markdown-toc-right-aligned-menus">
                    Right aligned menus
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#button-options" id="markdown-toc-button-options">
                Button options
              </a>
              <ul>
                <li>
                  <a href="#style-options" id="markdown-toc-style-options">
                    Style options
                  </a>
                </li>
                <li>
                  <a href="#stateful-text" id="markdown-toc-stateful-text">
                    Stateful text
                  </a>
                </li>
                <li>
                  <a href="#emphasized-text" id="markdown-toc-emphasized-text">
                    Emphasized text
                  </a>
                </li>
                <li>
                  <a href="#button-avatars" id="markdown-toc-button-avatars">
                    Button avatars
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Basic%20example" className="dashAnchor" />
          <h2>
            <a id="basic-example" className="anchor" href="#basic-example" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Basic example
          </h2>
          <p>
            Select menus should be trigged by a <code>&lt;button&gt;</code>. In the markup below, all classes prefixed with{' '}
            <code>select-menu</code> and <code>.js-</code> are required.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Choose an item
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 1</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 2</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Choose an item
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Menu%20contents" className="dashAnchor" />
          <h2>
            <a id="menu-contents" className="anchor" href="#menu-contents" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Menu contents
          </h2>
          <p>The contents of a select menu are easily customized with support for headers, footers, tabbed lists, and live filtering.</p>
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
          <p>Add a header to any select menu&apos;s popover to house a clear title and a dismiss button.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Choose an item
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 1</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 2</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Choose an item
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header js-navigation-enable&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/List%20items" className="dashAnchor" />
          <h3>
            <a id="list-items" className="anchor" href="#list-items" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            List items
          </h3>
          <p>
            The list of items is arguably the most important subcomponent within the menu. Build them out of anchors, buttons, or just about
            any <a href="http://w3c.github.io/html/dom.html#interactive-content">interactive content</a>.{' '}
            <a href="#menu-list-items">List items are also customizable</a> with options for avatars, additional icons, and multiple lines
            of text.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Choose an item
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-list js-navigation-container">
                  <button type="button" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 1</span>
                  </button>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 2</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Choose an item
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Filter" className="dashAnchor" />
          <h3>
            <a id="filter" className="anchor" href="#filter" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Filter
          </h3>
          <p>
            Enable live filtering of list items within a <code>.select-menu-list</code> with a search input. Only a handful of changes to
            your menu&apos;s markup are required:
          </p>
          <ul>
            <li>
              Add the text input, housed in <code>.select-menu-filters</code>, before the <code>.select-menu-list</code>.
            </li>
            <li>
              Add two attritubes, <code>data-filterable-for</code> and <code>data-filterable-type</code>, to the{' '}
              <code>.select-menu-list</code> to scope the filter to the list.
            </li>
          </ul>
          <p>
            There are no required changes for the <code>.select-menu-item</code>s.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              <i>Label:</i>
              <span className="js-select-button">Choose an item</span>
            </button>
            <div className="select-menu-modal-holder js-menu-content js-navigation-container">
              <div className="select-menu-modal">
                <div className="select-menu-header" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="js-select-menu-deferred-content">
                  <div className="select-menu-filters">
                    <div className="select-menu-text-filter">
                      <input
                        type="text"
                        id="example-filter-field"
                        className="form-control js-filterable-field js-navigation-enable"
                        placeholder="Filter this list"
                        aria-label="Type to filter"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="select-menu-list" data-filterable-for="example-filter-field" data-filterable-type="substring">
                    <input hidden="checkbox" name="example" value="" />
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Test element</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Filter to this</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">More content</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Something else</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">One more thing</div>
                    </a>
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
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;i&gt;</span>Label:<span className="nt">&lt;/i&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button&quot;</span>
                <span className="nt">&gt;</span>Choose an item<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder js-menu-content js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-menu-deferred-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-filters&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-text-filter&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;example-filter-field&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;form-control js-filterable-field js-navigation-enable&quot;</span>{' '}
                <span className="na">placeholder=</span>
                <span className="s">&quot;Filter this list&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Type to filter&quot;</span> <span className="na">autocomplete=</span>
                <span className="s">&quot;off&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list&quot;</span> <span className="na">data-filterable-for=</span>
                <span className="s">&quot;example-filter-field&quot;</span> <span className="na">data-filterable-type=</span>
                <span className="s">&quot;substring&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">hidden=</span>
                <span className="s">&quot;checkbox&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;example&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Test element
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Filter to this
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                More content
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Something else
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                One more thing
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Tabs" className="dashAnchor" />
          <h3>
            <a id="tabs" className="anchor" href="#tabs" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Tabs
          </h3>
          <p>
            Sometimes you need two or more lists of items in your select menu, e.g. branches and tags. Select menu lists can be tabbed with
            the addition of the tab toggles at the top of the menu and a few changes to the <code>.select-menu-list</code>.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              <i>Label:</i>
              <span className="js-select-button">Choose an item</span>
            </button>
            <div className="select-menu-modal-holder js-menu-content js-navigation-container">
              <div className="select-menu-modal">
                <div className="select-menu-header" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="js-select-menu-deferred-content">
                  <div className="select-menu-filters">
                    <div className="select-menu-tabs">
                      <ul>
                        <li className="select-menu-tab">
                          <a
                            href="#url"
                            data-tab-filter="branches"
                            data-filter-placeholder="Filter for "
                            className="js-select-menu-tab"
                            aria-current="false"
                          >
                            Branches
                          </a>
                        </li>
                        <li className="select-menu-tab">
                          <a
                            href="#url"
                            data-tab-filter="tags"
                            data-filter-placeholder="Find a tag…"
                            className="js-select-menu-tab selected"
                            aria-current="true"
                          >
                            Tags
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected"
                    data-filterable-for="example-filter-field"
                    data-filterable-type="substring"
                    data-tab-filter="branches"
                    role="menu"
                  >
                    <input hidden="checkbox" name="example" value="" />
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 1</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 2</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 3</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 4</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 5</div>
                    </a>
                  </div>
                  <div
                    className="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected"
                    data-filterable-for="example-filter-field"
                    data-filterable-type="substring"
                    data-tab-filter="tags"
                    role="menu"
                  >
                    <input hidden="checkbox" name="example" value="" />
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 1</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 2</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 3</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 4</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 5</div>
                    </a>
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
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;i&gt;</span>Label:<span className="nt">&lt;/i&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button&quot;</span>
                <span className="nt">&gt;</span>Choose an item<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder js-menu-content js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-menu-deferred-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-filters&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-tabs&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-tab&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">data-tab-filter=</span>
                <span className="s">&quot;branches&quot;</span> <span className="na">data-filter-placeholder=</span>
                <span className="s">&quot;Filter for &quot;</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-menu-tab&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>Branches<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-tab&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">data-tab-filter=</span>
                <span className="s">&quot;tags&quot;</span> <span className="na">data-filter-placeholder=</span>
                <span className="s">&quot;Find a tag…&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-menu-tab selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>Tags<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected&quot;</span>{' '}
                <span className="na">data-filterable-for=</span>
                <span className="s">&quot;example-filter-field&quot;</span> <span className="na">data-filterable-type=</span>
                <span className="s">&quot;substring&quot;</span> <span className="na">data-tab-filter=</span>
                <span className="s">&quot;branches&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">hidden=</span>
                <span className="s">&quot;checkbox&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;example&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket&quot;</span>{' '}
                <span className="na">data-filterable-for=</span>
                <span className="s">&quot;example-filter-field&quot;</span> <span className="na">data-filterable-type=</span>
                <span className="s">&quot;substring&quot;</span> <span className="na">data-tab-filter=</span>
                <span className="s">&quot;tags&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">hidden=</span>
                <span className="s">&quot;checkbox&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;example&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Filter%20and%20tabs" className="dashAnchor" />
          <h3>
            <a id="filter-and-tabs" className="anchor" href="#filter-and-tabs" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Filter and tabs
          </h3>
          <p>Show a filter and tabs in a single select menu.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              <i>Label:</i>
              <span className="js-select-button">Choose an item</span>
            </button>
            <div className="select-menu-modal-holder js-menu-content js-navigation-container js-active-navigation-container">
              <div className="select-menu-modal">
                <div className="select-menu-header" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="js-select-menu-deferred-content">
                  <div className="select-menu-filters">
                    <div className="select-menu-text-filter">
                      <input
                        type="text"
                        id="example-filter-field-2"
                        className="form-control js-filterable-field js-navigation-enable"
                        placeholder="Filter labels"
                        aria-label="Type or choose a label"
                        autoComplete="off"
                      />
                    </div>
                    <div className="select-menu-tabs">
                      <ul>
                        <li className="select-menu-tab">
                          <a
                            href="#url"
                            data-tab-filter="branches"
                            data-filter-placeholder="Filter for "
                            className="js-select-menu-tab"
                            aria-current="false"
                          >
                            Branches
                          </a>
                        </li>
                        <li className="select-menu-tab">
                          <a
                            href="#url"
                            data-tab-filter="tags"
                            data-filter-placeholder="Find a tag…"
                            className="js-select-menu-tab selected"
                            aria-current="true"
                          >
                            Tags
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected"
                    data-filterable-for="example-filter-field"
                    data-filterable-type="substring"
                    data-tab-filter="branches"
                    role="menu"
                  >
                    <input hidden="checkbox" name="example" value="" />
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 1</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 2</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 3</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 4</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Branch 5</div>
                    </a>
                  </div>
                  <div
                    className="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected"
                    data-filterable-for="example-filter-field"
                    data-filterable-type="substring"
                    data-tab-filter="tags"
                    role="menu"
                  >
                    <input hidden="checkbox" name="example" value="" />
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 1</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 2</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 3</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 4</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <svg
                        height="16"
                        className="octicon octicon-check select-menu-item-icon"
                        viewBox="0 0 12 16"
                        version="1.1"
                        width="12"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                      </svg>
                      <div className="select-menu-item-text js-select-button-text">Tag 5</div>
                    </a>
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
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;i&gt;</span>Label:<span className="nt">&lt;/i&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button&quot;</span>
                <span className="nt">&gt;</span>Choose an item<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder js-menu-content js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-menu-deferred-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-filters&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-text-filter&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;example-filter-field-2&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;form-control js-filterable-field js-navigation-enable&quot;</span>{' '}
                <span className="na">placeholder=</span>
                <span className="s">&quot;Filter labels&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Type or choose a label&quot;</span> <span className="na">autocomplete=</span>
                <span className="s">&quot;off&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-tabs&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-tab&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">data-tab-filter=</span>
                <span className="s">&quot;branches&quot;</span> <span className="na">data-filter-placeholder=</span>
                <span className="s">&quot;Filter for &quot;</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-menu-tab&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>Branches<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-tab&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">data-tab-filter=</span>
                <span className="s">&quot;tags&quot;</span> <span className="na">data-filter-placeholder=</span>
                <span className="s">&quot;Find a tag…&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-menu-tab selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>Tags<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket selected&quot;</span>{' '}
                <span className="na">data-filterable-for=</span>
                <span className="s">&quot;example-filter-field&quot;</span> <span className="na">data-filterable-type=</span>
                <span className="s">&quot;substring&quot;</span> <span className="na">data-tab-filter=</span>
                <span className="s">&quot;branches&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">hidden=</span>
                <span className="s">&quot;checkbox&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;example&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Branch 5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket&quot;</span>{' '}
                <span className="na">data-filterable-for=</span>
                <span className="s">&quot;example-filter-field&quot;</span> <span className="na">data-filterable-type=</span>
                <span className="s">&quot;substring&quot;</span> <span className="na">data-tab-filter=</span>
                <span className="s">&quot;tags&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">hidden=</span>
                <span className="s">&quot;checkbox&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;example&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Tag 5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Blankslate" className="dashAnchor" />
          <h3>
            <a id="blankslate" className="anchor" href="#blankslate" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Blankslate
          </h3>
          <p>
            Sometimes a select menu needs to communicate a &quot;blank slate&quot; where there&apos;s no content in the menu&apos;s list.
            Usually these include a clear call to action to add said content to the list. Swap out the contents of a{' '}
            <code>.select-menu-list</code> with the <code>.select-menu-blankslate</code> and customize it&apos;s contents as needed.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Choose an item
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="select-menu-list js-navigation-container">
                  <div className="select-menu-blankslate">
                    <svg height="16" className="octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <a name="//apple_ref/cpp/Style/Select%20menu%20blankslate" className="dashAnchor" />
                    <h3>Select menu blankslate</h3>
                    <p>Some text here to describe why you&apos;re seeing a blankslate and how to go about fixing that up.</p>
                    <button type="button" className="btn btn-sm btn-primary mt-3 mb-3">
                      Deal with it
                    </button>
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
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Choose an item
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header js-navigation-enable&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-blankslate&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :height =&gt; 32) %&gt;
                <span className="nt">&lt;h3&gt;</span>Select menu blankslate<span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;p&gt;</span>Some text here to describe why you&apos;re seeing a blankslate and how to go about
                fixing that up.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-sm btn-primary mt-3 mb-3&quot;</span>
                <span className="nt">&gt;</span>Deal with it<span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Menu%20list%20items" className="dashAnchor" />
          <h2>
            <a id="menu-list-items" className="anchor" href="#menu-list-items" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Menu list items
          </h2>
          <p>Select menu list items have a few options available to them for more complex information patterns.</p>
          <a name="//apple_ref/cpp/Style/Multi-line%20text" className="dashAnchor" />
          <h3>
            <a id="multi-line-text" className="anchor" href="#multi-line-text" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Multi-line text
          </h3>
          <p>
            Sometimes the contents of your select menu list require a heading and a description instead of just a string. Select menus come
            with some default styles for such situations with the addition of a few classes and wrapping <code>&lt;span&gt;</code>s.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              <i>Multi line:</i>
              <span className="js-select-button">Choose an item</span>
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="false">
                <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Notifications</span>
                </div>
                <div className="select-menu-list js-navigation-container js-active-navigation-container" role="menu">
                  <a href="#url" className="select-menu-item js-navigation-item selected" role="menuitem">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <div className="select-menu-item-text">
                      <span className="select-menu-item-heading">Not watching</span>
                      <span className="description">Be notified when participating or @mentioned.</span>
                      <span className="js-select-button-text hidden-select-button-text">Watch</span>
                    </div>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item" role="menuitem">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <div className="select-menu-item-text">
                      <span className="select-menu-item-heading">Watching</span>
                      <span className="description">Be notified of all conversations.</span>
                      <span className="js-select-button-text hidden-select-button-text">Stop watching</span>
                    </div>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item" role="menuitem">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <div className="select-menu-item-text">
                      <span className="select-menu-item-heading">Ignoring</span>
                      <span className="description">Never be notified.</span>
                      <span className="js-select-button-text hidden-select-button-text">Stop ignoring</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;i&gt;</span>Multi line:<span className="nt">&lt;/i&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button&quot;</span>
                <span className="nt">&gt;</span>Choose an item<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal subscription-menu-modal js-menu-content&quot;</span>{' '}
                <span className="na">aria-hidden=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header js-navigation-enable&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Notifications<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container js-active-navigation-container&quot;</span>{' '}
                <span className="na">role=</span>
                <span className="s">&quot;menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item selected&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;menuitem&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-heading&quot;</span>
                <span className="nt">&gt;</span>Not watching<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;description&quot;</span>
                <span className="nt">&gt;</span>Be notified when participating or @mentioned.<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button-text hidden-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Watch
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;menuitem&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-heading&quot;</span>
                <span className="nt">&gt;</span>Watching<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;description&quot;</span>
                <span className="nt">&gt;</span>Be notified of all conversations.<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button-text hidden-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Stop watching
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;menuitem&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-heading&quot;</span>
                <span className="nt">&gt;</span>Ignoring<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;description&quot;</span>
                <span className="nt">&gt;</span>Never be notified.<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button-text hidden-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                Stop ignoring
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/With%20avatars" className="dashAnchor" />
          <h3>
            <a id="with-avatars" className="anchor" href="#with-avatars" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            With avatars
          </h3>
          <p>Add avatars to a select menu to help indicate when a menu list item represents a user.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Choose an item
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-gravatar">
                      <img src="https://avatars.githubusercontent.com/jonrohan?v=3&amp;s=2020" alt="" height="20" width="20" />
                    </span>
                    <span className="select-menu-item-text js-select-button-text" />
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-gravatar">
                      <img src="https://avatars.githubusercontent.com/jonrohan?v=3&amp;s=2020" alt="" height="20" width="20" />
                    </span>
                    <span className="select-menu-item-text js-select-button-text" />
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-gravatar">
                      <img src="https://avatars.githubusercontent.com/jonrohan?v=3&amp;s=2020" alt="" height="20" width="20" />
                    </span>
                    <span className="select-menu-item-text js-select-button-text" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Choose an item
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header js-navigation-enable&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-gravatar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= avatar_for(current_user, 20, :alt =&gt; &quot;&quot;) %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= current_user.to_s %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-gravatar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= avatar_for(current_user, 20, :alt =&gt; &quot;&quot;) %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= current_user.to_s %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-gravatar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= avatar_for(current_user, 20, :alt =&gt; &quot;&quot;) %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= current_user.to_s %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/With%20dismiss%20icon" className="dashAnchor" />
          <h3>
            <a id="with-dismiss-icon" className="anchor" href="#with-dismiss-icon" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            With dismiss icon
          </h3>
          <p>Indicate how to toggle the selected state on a select menu list item with the addition of a dismiss icon.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Choose an item
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="select-menu-list js-navigation-container">
                  <button type="button" className="select-menu-item selected js-navigation-item width-full">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">
                      <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                        />
                      </svg>
                      Item 1
                    </span>
                  </button>
                  <button type="button" className="select-menu-item js-navigation-item width-full">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">
                      <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                        />
                      </svg>
                      Item 2
                    </span>
                  </button>
                  <button type="button" className="select-menu-item js-navigation-item width-full">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">
                      <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                        />
                      </svg>
                      Item 3
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Choose an item
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header js-navigation-enable&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item width-full&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Click to remove&quot;) %&gt;
                Item 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item width-full&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Click to remove&quot;) %&gt;
                Item 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item width-full&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Click to remove&quot;) %&gt;
                Item 3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Menu%20alignment" className="dashAnchor" />
          <h2>
            <a id="menu-alignment" className="anchor" href="#menu-alignment" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Menu alignment
          </h2>
          <p>
            By default select menus are automatically aligned to the top left corner of an element, but you can also customize that with a
            few utilities or custom display.
          </p>
          <a name="//apple_ref/cpp/Style/Right%20aligned%20menus" className="dashAnchor" />
          <h3>
            <a id="right-aligned-menus" className="anchor" href="#right-aligned-menus" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Right aligned menus
          </h3>
          <p>
            When select menus are right aligned, you can also right-align the select menu&apos;s popover with{' '}
            <code>.select-menu-modal-right</code>.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu float-right select-menu-modal-right js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Choose an item
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 1</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 2</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu float-right select-menu-modal-right js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Choose an item
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header js-navigation-enable&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Button%20options" className="dashAnchor" />
          <h2>
            <a id="button-options" className="anchor" href="#button-options" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Button options
          </h2>
          <p>Customize the select menu&apos;s trigger button by changing the button modifier class, enabling stateful text, and more.</p>
          <a name="//apple_ref/cpp/Style/Style%20options" className="dashAnchor" />
          <h3>
            <a id="style-options" className="anchor" href="#style-options" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Style options
          </h3>
          <p>
            Since select menus are powered by JavaScript behaviors, the specific display of your select menu button is up to you and your
            use case.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Default button
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 1</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 2</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Default button
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn btn-primary select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Primary button
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 1</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 2</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-primary select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Primary button
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn btn-outline select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Outline button
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 1</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 2</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-outline select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Outline button
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn-link select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              Link button
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 1</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 2</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">Item 3</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                Link button
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Stateful%20text" className="dashAnchor" />
          <h3>
            <a id="stateful-text" className="anchor" href="#stateful-text" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Stateful text
          </h3>
          <p>
            Select menu buttons have the option of showing the current selection in the button itself. Wrap the string you intend to update
            with a <code>.js-select-button</code> and the select menu JavaScript will automatically update the contents of that element with
            the selected item&apos;s text.
          </p>
          <p>Open the select menu below and click different options to see it in action.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              <span className="js-select-button">master</span>
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">master</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">feature-branch</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">refactor-component-name</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button&quot;</span>
                <span className="nt">&gt;</span>master<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header js-navigation-enable&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>master<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>feature-branch<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>refactor-component-name<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Emphasized%20text" className="dashAnchor" />
          <h3>
            <a id="emphasized-text" className="anchor" href="#emphasized-text" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Emphasized text
          </h3>
          <p>
            Sometimes you want to spice up your select menu with an emphasized label for the type of content within the menu. For example,
            you show <code>Branch:</code> in front of the current branch on our repository Code page. Within the button, wrap your string in
            an <code>&lt;i&gt;</code> element and you&apos;re good to go.
          </p>
          <p>As shown below, emphasized text works great with the stateful text functionality mentioned above.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              <i>Branch:</i>
              <span className="js-select-button">master</span>
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">master</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">feature-branch</span>
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-text js-select-button-text">refactor-component-name</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;i&gt;</span>Branch:<span className="nt">&lt;/i&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button&quot;</span>
                <span className="nt">&gt;</span>master<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header js-navigation-enable&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>master<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>feature-branch<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>refactor-component-name<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Button%20avatars" className="dashAnchor" />
          <h3>
            <a id="button-avatars" className="anchor" href="#button-avatars" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Button avatars
          </h3>
          <p>Add an avatar to the button, like we do in our context switcher on the logged in dashboard.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="select-menu js-menu-container js-select-menu">
            <button className="btn select-menu-button js-menu-target" type="button" aria-haspopup="true" aria-expanded="false">
              <div className="select-menu-button-gravatar js-select-button-gravatar">
                <img
                  src="https://avatars.githubusercontent.com/jonrohan?v=3&amp;s=2020"
                  alt="jonrohan"
                  aria-label=""
                  height="20"
                  width="20"
                />
              </div>
              <span className="js-select-button css-truncate css-truncate-target" />
            </button>
            <div className="select-menu-modal-holder">
              <div className="select-menu-modal js-menu-content">
                <div className="select-menu-header js-navigation-enable" tabIndex="-1">
                  <button className="btn-link close-button js-menu-close" type="button">
                    <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                      />
                    </svg>
                  </button>
                  <span className="select-menu-title">Options</span>
                </div>
                <div className="select-menu-list js-navigation-container">
                  <a href="#url" className="select-menu-item selected js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-gravatar">
                      <img
                        src="https://avatars.githubusercontent.com/jonrohan?v=3&amp;s=2020"
                        alt="jonrohan"
                        aria-label=""
                        height="20"
                        width="20"
                      />
                    </span>
                    <span className="select-menu-item-text js-select-button-text" />
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-gravatar">
                      <img
                        src="https://avatars.githubusercontent.com/jonrohan?v=3&amp;s=2020"
                        alt="jonrohan"
                        aria-label=""
                        height="20"
                        width="20"
                      />
                    </span>
                    <span className="select-menu-item-text js-select-button-text" />
                  </a>
                  <a href="#url" className="select-menu-item js-navigation-item">
                    <svg
                      height="16"
                      className="octicon octicon-check select-menu-item-icon"
                      viewBox="0 0 12 16"
                      version="1.1"
                      width="12"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
                    </svg>
                    <span className="select-menu-item-gravatar">
                      <img
                        src="https://avatars.githubusercontent.com/jonrohan?v=3&amp;s=2020"
                        alt="jonrohan"
                        aria-label=""
                        height="20"
                        width="20"
                      />
                    </span>
                    <span className="select-menu-item-text js-select-button-text" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu js-menu-container js-select-menu&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-button-gravatar js-select-button-gravatar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= avatar_for(current_user, 20, :&quot;aria-label&quot; =&gt; &quot;&quot;) %&gt;
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;js-select-button css-truncate css-truncate-target&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= current_user.to_s %&gt;<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal js-menu-content&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-header js-navigation-enable&quot;</span> <span className="na">tabindex=</span>
                <span className="s">&quot;-1&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn-link close-button js-menu-close&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;x&quot;, :&quot;aria-label&quot; =&gt; &quot;Close menu&quot;) %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-title&quot;</span>
                <span className="nt">&gt;</span>Options<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list js-navigation-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item selected js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-gravatar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= avatar_for(current_user, 20, :&quot;aria-label&quot; =&gt; &quot;&quot;) %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= current_user.to_s %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-gravatar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= avatar_for(current_user, 20, :&quot;aria-label&quot; =&gt; &quot;&quot;) %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= current_user.to_s %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;check&quot;, :class =&gt; &quot;select-menu-item-icon&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-gravatar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= avatar_for(current_user, 20, :&quot;aria-label&quot; =&gt; &quot;&quot;) %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text js-select-button-text&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= current_user.to_s %&gt;
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div className="align-right" />
      </div>
    </main>
  )
}
