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
              <a href="/primer/components/pagination/" aria-current="page" className="text-gray">
                Pagination
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Pagination</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-pagination"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-pagination/"
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
              <span className="text-green mr-1" aria-label="New Release">
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
              New Release
            </a>

            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-pagination">
              1.0.5
            </a>
          </div>

          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-product">primer-product</a>
          </div>
        </div>

        <div className="markdown-body">
          <p>
            Use the pagination component to apply button styles to a connected set of links that go to related pages (for example, previous,
            next, or page numbers).
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#previousnext-pagination" id="markdown-toc-previousnext-pagination">
                Previous/next pagination
              </a>
            </li>
            <li>
              <a href="#numbered-pagination" id="markdown-toc-numbered-pagination">
                Numbered pagination
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Previous/next%20pagination" className="dashAnchor" />
          <h2>
            <a id="previousnext-pagination" className="anchor" href="#previousnext-pagination" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Previous/next pagination
          </h2>
          <p>
            You can make a very simple pagination container with just the Previous and Next buttons. Add the class <code>disabled</code> to
            the <code>Previous</code> button if there isn&apos;t a preceding page, or to the <code>Next</code> button if there isn&apos;t a
            succeeding page.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="paginate-container" aria-label="Pagination">
            <div className="pagination">
              <span className="previous_page disabled">Previous</span>
              <a className="next_page" rel="next" href="#url" aria-label="Next Page">
                Next
              </a>
            </div>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;paginate-container&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Pagination&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;pagination&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;previous_page disabled&quot;</span>
                <span className="nt">&gt;</span>Previous<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;next_page&quot;</span> <span className="na">rel=</span>
                <span className="s">&quot;next&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Next Page&quot;</span>
                <span className="nt">&gt;</span>Next<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/nav&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Numbered%20pagination" className="dashAnchor" />
          <h2>
            <a id="numbered-pagination" className="anchor" href="#numbered-pagination" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Numbered pagination
          </h2>
          <p>For pagination across multiple pages, make sure it&apos;s clear to the user where they are in a set of pages.</p>
          <p>
            To do this, add anchor links to the <code>pagination</code> element. Previous and Next buttons should always be present. Add the
            class <code>disabled</code> to the Previous button if you&apos;re on the first page. Apply the class <code>current</code> to the
            current numbered page.
          </p>
          <p>
            As always, make sure to include the appropriate <code>aria</code> attributes to make the element accessible.
          </p>
          <ul>
            <li>
              Add <code>aria-label=&quot;Pagination&quot;</code> to the the <code>paginate-container</code> element.
            </li>
            <li>
              Add <code>aria-current=&quot;true&quot;</code> to the current page marker.
            </li>
            <li>
              Add <code>aria-label=&quot;Page X&quot;</code> to each anchor link.
            </li>
          </ul>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="paginate-container" aria-label="Pagination">
            <div className="pagination">
              <span className="previous_page disabled">Previous</span>
              <em className="current selected" aria-current="true">
                1
              </em>
              <a href="#url" aria-label="Page 2">
                2
              </a>
              <a href="#url" aria-label="Page 3">
                3
              </a>
              <span className="gap">…</span>
              <a href="#url" aria-label="Page 8">
                8
              </a>
              <a href="#url" aria-label="Page 9">
                9
              </a>
              <a href="#url" aria-label="Page 10">
                10
              </a>
              <a className="next_page" rel="next" href="#url" aria-label="Next Page">
                Next
              </a>
            </div>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;paginate-container&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Pagination&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;pagination&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;previous_page disabled&quot;</span>
                <span className="nt">&gt;</span>Previous<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;em</span> <span className="na">class=</span>
                <span className="s">&quot;current selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/em&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Page 2&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Page 3&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;gap&quot;</span>
                <span className="nt">&gt;</span>…<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Page 8&quot;</span>
                <span className="nt">&gt;</span>8<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Page 9&quot;</span>
                <span className="nt">&gt;</span>9<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Page 10&quot;</span>
                <span className="nt">&gt;</span>10<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;next_page&quot;</span> <span className="na">rel=</span>
                <span className="s">&quot;next&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Next Page&quot;</span>
                <span className="nt">&gt;</span>Next<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/nav&gt;</span>
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
          <a href="/primer/components/page-sections/">
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
            Page sections
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/popover/">
            Popover
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
