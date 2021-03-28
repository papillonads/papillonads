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
              <a href="/primer/components/pagehead/" aria-current="page" className="text-gray">
                Pagehead
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Pagehead</h2>
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
              href="https://github.com/github/github/blob/master/docs/styleguide/css/styles/product/components/pagehead.md"
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
            Give a page a clear, separated title and optional top nav by adding a <code>.pagehead</code>.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#basic-pagehead" id="markdown-toc-basic-pagehead">
                Basic pagehead
              </a>
              <ul>
                <li>
                  <a href="#avatars" id="markdown-toc-avatars">
                    Avatars
                  </a>
                </li>
                <li>
                  <a href="#path-divider" id="markdown-toc-path-divider">
                    Path divider
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#pagehead-actions" id="markdown-toc-pagehead-actions">
                Pagehead actions
              </a>
            </li>
            <li>
              <a href="#org-nav" id="markdown-toc-org-nav">
                Org nav
              </a>
            </li>
            <li>
              <a href="#repohead" id="markdown-toc-repohead">
                Repohead
              </a>
              <ul>
                <li>
                  <a href="#base" id="markdown-toc-base">
                    Base
                  </a>
                </li>
                <li>
                  <a href="#private" id="markdown-toc-private">
                    Private
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Basic%20pagehead" className="dashAnchor" />
          <h2>
            <a id="basic-pagehead" className="anchor" href="#basic-pagehead" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Basic pagehead
          </h2>
          <p>
            In its simplest form, you can build a pagehead with a <code>pagehead</code> element with an <code>h1</code> child.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="pagehead">
            <a name="//apple_ref/cpp/Style/Title" className="dashAnchor" />
            <h1>Title</h1>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h1&gt;</span>Title<span className="nt">&lt;/h1&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Avatars" className="dashAnchor" />
          <h3>
            <a id="avatars" className="anchor" href="#avatars" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Avatars
          </h3>
          <p>
            Place an avatar inside the <code>h1</code> to have margins applied to it. Don&apos;t forget the <code>avatar</code> class!
          </p>
          <p>
            Also be sure to add <code>aria-hidden=&quot;true&quot;</code> to hide the avatar from screenreaders.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="pagehead">
            <a name="//apple_ref/cpp/Style/jonrohan" className="dashAnchor" />
            <h1>
              <img
                src="https://avatars.githubusercontent.com/jonrohan?v=3&amp;s=3232"
                alt="jonrohan"
                aria-hidden="true"
                height="32"
                width="32"
              />
              jonrohan
            </h1>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-erb highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h1&gt;</span>
                <span className="cp">&lt;%=</span> <span className="n">avatar_for</span>
                <span className="p">(</span>
                <span className="s2">&quot;jonrohan&quot;</span>
                <span className="p">,</span> <span className="mi">32</span>
                <span className="p">,</span> <span className="s2">&quot;aria-hidden&quot;</span>
                <span className="p">:</span> <span className="s2">&quot;true&quot;</span>
                <span className="p">)</span> <span className="cp">%&gt;</span>
                jonrohan
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
          <a name="//apple_ref/cpp/Style/Path%20divider" className="dashAnchor" />
          <h3>
            <a id="path-divider" className="anchor" href="#path-divider" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Path divider
          </h3>
          <p>
            For path or breadcrumb patterns, wrap the <code>/</code> with <code>path-divider</code> to add some nice horizontal spacing.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="pagehead">
            <a name="//apple_ref/cpp/Style/jonrohan%0A%20%20%20%20/%0A%20%20%20%20primer" className="dashAnchor" />
            <h1>
              <span className="author">
                <a href="#url" className="url fn" rel="author">
                  jonrohan
                </a>
              </span>
              <span className="path-divider">/</span>
              <strong>
                <a href="#url">primer</a>
              </strong>
            </h1>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h1&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;author&quot;</span>
                <span className="nt">&gt;&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;url fn&quot;</span> <span className="na">rel=</span>
                <span className="s">&quot;author&quot;</span>
                <span className="nt">&gt;</span>jonrohan<span className="nt">&lt;/a&gt;&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;path-divider&quot;</span>
                <span className="nt">&gt;</span>/<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;strong&gt;&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>primer<span className="nt">&lt;/a&gt;&lt;/strong&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Pagehead%20actions" className="dashAnchor" />
          <h2>
            <a id="pagehead-actions" className="anchor" href="#pagehead-actions" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Pagehead actions
          </h2>
          <p>
            To add actions on the right side of the <code>pagehead</code>, use the <code>pagehead-actions</code> element. Place{' '}
            <code>pagehead-actions</code> before the <code>h1</code> to ensure proper placement.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="pagehead">
            <ul className="pagehead-actions">
              <li>
                <button type="button" className="btn btn-sm" href="#url">
                  Action
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-sm btn-primary" href="#url">
                  Action
                </button>
              </li>
            </ul>
            <a name="//apple_ref/cpp/Style/Title" className="dashAnchor" />
            <h1>Title</h1>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead-actions&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-sm&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-sm btn-primary&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Action<span className="nt">&lt;/button&gt;&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;h1&gt;</span>Title<span className="nt">&lt;/h1&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Org%20nav" className="dashAnchor" />
          <h2>
            <a id="org-nav" className="anchor" href="#org-nav" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Org nav
          </h2>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="pagehead orghead px-3">
            <nav className="orgnav clearfix" role="navigation">
              <a className="pagehead-tabs-item selected" href="#url">
                <svg height="16" className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                  />
                </svg>
                Repositories
              </a>
              <a className="pagehead-tabs-item" href="#url">
                <svg height="16" className="octicon octicon-jersey" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M4.5 6l-.5.5v5l.5.5h2l.5-.5v-5L6.5 6h-2zM6 11H5V7h1v4zm6.27-7.25C12.05 2.37 11.96 1.12 12 0H9.02c0 .27-.13.48-.39.69-.25.2-.63.3-1.13.3-.5 0-.88-.09-1.13-.3-.23-.2-.36-.42-.36-.69H3c.05 1.13-.03 2.38-.25 3.75C2.55 5.13 1.95 5.88 1 6v9c.02.27.11.48.31.69.2.21.42.3.69.31h11c.27-.02.48-.11.69-.31.21-.2.3-.42.31-.69V6c-.95-.13-1.53-.88-1.75-2.25h.02zM13 15H2V7c.89-.5 1.48-1.25 1.72-2.25S4.03 2.5 4 1h1c-.02.78.16 1.47.52 2.06.36.58 1.02.89 2 .94.98-.02 1.64-.33 2-.94.36-.59.5-1.28.48-2.06h1c.02 1.42.13 2.55.33 3.38.2.81.69 2 1.67 2.63v8V15zM8.5 6l-.5.5v5l.5.5h2l.5-.5v-5l-.5-.5h-2zm1.5 5H9V7h1v4z"
                  />
                </svg>
                Teams
                <span className="Counter">1</span>
              </a>
              <a className="pagehead-tabs-item" href="#url">
                <svg height="16" className="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
                  />
                </svg>
                Projects
                <span className="Counter">2</span>
              </a>
              <a className="pagehead-tabs-item" href="#url">
                <svg height="16" className="octicon octicon-briefcase" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M9 4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H9zM6 3h2v1H6V3zm7 6H8v1H6V9H1V5h1v3h10V5h1v4z"
                  />
                </svg>
                Jobs
                <span className="Counter">3</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead orghead px-3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;orgnav clearfix&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;navigation&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead-tabs-item selected&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;repo&quot;) %&gt; Repositories
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead-tabs-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;jersey&quot;) %&gt; Teams
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead-tabs-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;project&quot;) %&gt; Projects
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead-tabs-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;briefcase&quot;) %&gt; Jobs
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/nav&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Repohead" className="dashAnchor" />
          <h2>
            <a id="repohead" className="anchor" href="#repohead" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Repohead
          </h2>
          <p>
            Use <code>pagehead</code> to construct a header and navigation for a repository.
          </p>
          <a name="//apple_ref/cpp/Style/Base" className="dashAnchor" />
          <h3>
            <a id="base" className="anchor" href="#base" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Base
          </h3>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="pagehead repohead experiment-repo-nav">
            <div className="container-lg repohead-details-container px-3 clearfix">
              <ul className="pagehead-actions">
                <li>
                  <div className="clearfix">
                    <button type="button" className="btn btn-sm btn-with-count" href="#url">
                      <svg height="16" className="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                        />
                      </svg>
                      Watch
                    </button>
                    <button type="button" className="social-count" href="#url">
                      6
                    </button>
                  </div>
                </li>
                <li>
                  <div className="clearfix">
                    <button type="button" className="btn btn-sm btn-with-count" href="#url">
                      <svg
                        height="16"
                        className="octicon octicon-repo-forked"
                        viewBox="0 0 10 16"
                        version="1.1"
                        width="10"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                        />
                      </svg>
                      Fork
                    </button>
                    <button type="button" className="social-count" href="#url">
                      0
                    </button>
                  </div>
                </li>
              </ul>
              <a name="//apple_ref/cpp/Style/cmwinters%0A%20%20%20%20%20%20/%0A%20%20%20%20%20%20project" className="dashAnchor" />
              <h1>
                <svg height="16" className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                  />
                </svg>
                <span className="author">
                  <a href="#url" className="url fn" rel="author">
                    cmwinters
                  </a>
                </span>
                <span className="path-divider">/</span>
                <strong>
                  <a href="#url">project</a>
                </strong>
              </h1>
            </div>
            <div className="container-lg px-3">
              <nav className="reponav clearfix" role="navigation">
                <a className="reponav-item selected" href="#url">
                  <svg height="16" className="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                    <path fillRule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z" />
                  </svg>
                  Code
                </a>
                <a className="reponav-item" href="#url">
                  <svg height="16" className="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                    />
                  </svg>
                  Issues
                  <span className="Counter">1</span>
                </a>
                <a className="reponav-item" href="#url">
                  <svg
                    height="16"
                    className="octicon octicon-git-pull-request"
                    viewBox="0 0 12 16"
                    version="1.1"
                    width="12"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                    />
                  </svg>
                  Pull requests
                  <span className="Counter">2</span>
                </a>
                <a className="reponav-item" href="#url">
                  <svg height="16" className="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
                    />
                  </svg>
                  Projects
                  <span className="Counter">3</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead repohead experiment-repo-nav&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;container-lg repohead-details-container px-3 clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead-actions&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-sm btn-with-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;eye&quot;)%&gt; Watch
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;social-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-sm btn-with-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;repo-forked&quot;) %&gt; Fork
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;social-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>0<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;h1&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;repo&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;author&quot;</span>
                <span className="nt">&gt;&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;url fn&quot;</span> <span className="na">rel=</span>
                <span className="s">&quot;author&quot;</span>
                <span className="nt">&gt;</span>cmwinters<span className="nt">&lt;/a&gt;&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;path-divider&quot;</span>
                <span className="nt">&gt;</span>/<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;strong&gt;&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>project<span className="nt">&lt;/a&gt;&lt;/strong&gt;</span>
                <span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;container-lg px-3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;reponav clearfix&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;navigation&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;reponav-item selected&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;code&quot;) %&gt; Code
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;reponav-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;issue-opened&quot;) %&gt; Issues
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;reponav-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;git-pull-request&quot;) %&gt; Pull requests
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;reponav-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;project&quot;) %&gt; Projects
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/nav&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Private" className="dashAnchor" />
          <h3>
            <a id="private" className="anchor" href="#private" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Private
          </h3>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="pagehead repohead experiment-repo-nav">
            <div className="container-lg repohead-details-container px-3 clearfix">
              <ul className="pagehead-actions">
                <li>
                  <div className="clearfix">
                    <button type="button" className="btn btn-sm btn-with-count" href="#url">
                      <svg height="16" className="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                        />
                      </svg>
                      Watch
                    </button>
                    <button type="button" className="social-count" href="#url">
                      6
                    </button>
                  </div>
                </li>
                <li>
                  <div className="clearfix">
                    <button type="button" className="btn btn-sm btn-with-count" href="#url">
                      <svg
                        height="16"
                        className="octicon octicon-repo-forked"
                        viewBox="0 0 10 16"
                        version="1.1"
                        width="10"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                        />
                      </svg>
                      Fork
                    </button>
                    <button type="button" className="social-count" href="#url">
                      0
                    </button>
                  </div>
                </li>
              </ul>
              <a
                name="//apple_ref/cpp/Style/cmwinters%0A%20%20%20%20%20%20/%0A%20%20%20%20%20%20project%0A%20%20%20%20%20%20Private"
                className="dashAnchor"
              />
              <h1 className="private">
                <svg height="16" className="octicon octicon-lock" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"
                  />
                </svg>
                <span className="author">
                  <a href="#url" className="url fn" rel="author">
                    cmwinters
                  </a>
                </span>
                <span className="path-divider">/</span>
                <strong>
                  <a href="#url">project</a>
                </strong>
                <span className="Label Label--outline v-align-middle">Private</span>
              </h1>
            </div>
            <div className="container-lg px-3">
              <nav className="reponav clearfix" role="navigation">
                <a className="reponav-item selected" href="#url">
                  <svg height="16" className="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                    <path fillRule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z" />
                  </svg>
                  Code
                </a>
                <a className="reponav-item" href="#url">
                  <svg height="16" className="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                    />
                  </svg>
                  Issues
                  <span className="Counter">1</span>
                </a>
                <a className="reponav-item" href="#url">
                  <svg
                    height="16"
                    className="octicon octicon-git-pull-request"
                    viewBox="0 0 12 16"
                    version="1.1"
                    width="12"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                    />
                  </svg>
                  Pull requests
                  <span className="Counter">2</span>
                </a>
                <a className="reponav-item" href="#url">
                  <svg height="16" className="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
                    />
                  </svg>
                  Projects
                  <span className="Counter">3</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead repohead experiment-repo-nav&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;container-lg repohead-details-container px-3 clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">class=</span>
                <span className="s">&quot;pagehead-actions&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-sm btn-with-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;eye&quot;) %&gt; Watch
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;social-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;clearfix&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-sm btn-with-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;repo-forked&quot;) %&gt; Fork
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">class=</span>
                <span className="s">&quot;social-count&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>0<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;h1</span> <span className="na">class=</span>
                <span className="s">&quot;private&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;lock&quot;) %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;author&quot;</span>
                <span className="nt">&gt;&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;url fn&quot;</span> <span className="na">rel=</span>
                <span className="s">&quot;author&quot;</span>
                <span className="nt">&gt;</span>cmwinters<span className="nt">&lt;/a&gt;&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;path-divider&quot;</span>
                <span className="nt">&gt;</span>/<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;strong&gt;&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>project<span className="nt">&lt;/a&gt;&lt;/strong&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Label Label--outline v-align-middle&quot;</span>
                <span className="nt">&gt;</span>Private<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;container-lg px-3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;reponav clearfix&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;navigation&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;reponav-item selected&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;code&quot;) %&gt; Code
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;reponav-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;issue-opened&quot;) %&gt; Issues
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;reponav-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;git-pull-request&quot;) %&gt; Pull requests
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;reponav-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;project&quot;) %&gt; Projects
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/nav&gt;</span>
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
