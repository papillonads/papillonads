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
              <a href="/primer/components/navigation/" aria-current="page" className="text-gray">
                Navigation
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Navigation</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-navigation"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-navigation/"
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

            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-navigation">
              1.5.9
            </a>
          </div>

          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>

        <div className="markdown-body">
          <p>
            Primer comes with several navigation components. Some were designed with singular purposes, while others were design to be more
            flexible and appear quite frequently.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#menu" id="markdown-toc-menu">
                Menu
              </a>
            </li>
            <li>
              <a href="#underline-nav" id="markdown-toc-underline-nav">
                Underline nav
              </a>
            </li>
            <li>
              <a href="#tabnav" id="markdown-toc-tabnav">
                Tabnav
              </a>
            </li>
            <li>
              <a href="#filter-list" id="markdown-toc-filter-list">
                Filter list
              </a>
            </li>
            <li>
              <a href="#sub-navigation" id="markdown-toc-sub-navigation">
                Sub navigation
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Menu" className="dashAnchor" />
          <h2>
            <a id="menu" className="anchor" href="#menu" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Menu
          </h2>
          <p>
            The menu is a vertical list of navigational links. <strong>A menu&apos;s width and placement must be set by you.</strong> If you
            like, just use our grid columns as a parent. Otherwise, apply a custom <code>width</code>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="menu" aria-label="Person settings">
            <a className="menu-item selected" href="#url" aria-current="page">
              Account
            </a>
            <a className="menu-item" href="#url">
              Profile
            </a>
            <a className="menu-item" href="#url">
              Emails
            </a>
            <a className="menu-item" href="#url">
              Notifications
            </a>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;menu&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Person settings&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item selected&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>Account<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Profile<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Emails<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Notifications<span className="nt">&lt;/a&gt;</span>
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
          <p>There are a few subcomponents and add-ons that work well with the menu, including avatars, counters, and Octicons.</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="menu" aria-label="Person settings">
            <a className="menu-item selected" href="#url" aria-current="page">
              <svg height="16" className="octicon octicon-tools" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
                />
              </svg>
              Account
            </a>
            <a className="menu-item" href="#url">
              <svg height="16" className="octicon octicon-person" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
                />
              </svg>
              Profile
            </a>
            <a className="menu-item" href="#url">
              <svg height="16" className="octicon octicon-mail" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
                />
              </svg>
              Emails
            </a>
            <a className="menu-item" href="#url">
              <svg height="16" className="octicon octicon-radio-tower" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4.79 6.11c.25-.25.25-.67 0-.92-.32-.33-.48-.76-.48-1.19 0-.43.16-.86.48-1.19.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19-.57.58-.85 1.35-.85 2.11 0 .76.29 1.53.85 2.11.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54 0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94.68.7 1.02 1.62 1.02 2.54 0 .92-.34 1.83-1.02 2.54-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92.32.33.48.76.48 1.19 0 .43-.16.86-.48 1.19-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11 0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z"
                />
              </svg>
              <span className="Counter">3</span>
              Notifications
            </a>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;menu&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Person settings&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item selected&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;tools&quot; %&gt; Account
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;person&quot; %&gt; Profile
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;mail&quot; %&gt; Emails
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;radio-tower&quot; %&gt;
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/span&gt;</span>
                Notifications
                <span className="nt">&lt;/a&gt;</span>
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
          <p>
            You can also add optional headings to a menu. Feel free to use nearly any semantic element with the <code>.menu-heading</code>{' '}
            class, including inline elements, headings, and more.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="menu" aria-labelledby="menu-heading">
            <span className="menu-heading" id="menu-heading">
              Menu heading
            </span>
            <a className="menu-item selected" href="#url" aria-current="page">
              Account
            </a>
            <a className="menu-item" href="#url">
              Profile
            </a>
            <a className="menu-item" href="#url">
              Emails
            </a>
            <a className="menu-item" href="#url">
              Notifications
            </a>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;menu&quot;</span> <span className="na">aria-labelledby=</span>
                <span className="s">&quot;menu-heading&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;menu-heading&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;menu-heading&quot;</span>
                <span className="nt">&gt;</span>Menu heading<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item selected&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>Account<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Profile<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Emails<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;menu-item&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>Notifications<span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Underline%20nav" className="dashAnchor" />
          <h2>
            <a id="underline-nav" className="anchor" href="#underline-nav" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Underline nav
          </h2>
          <p>
            Use <code>.UnderlineNav</code> to style navigation with a minimal underlined selected state, typically used for navigation
            placed at the top of the page. This component comes with variations to accommodate icons, containers and other content.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="UnderlineNav">
            <div className="UnderlineNav-body">
              <a href="#url" role="tab" title="Item 1" className="UnderlineNav-item selected">
                Item 1
              </a>
              <a href="#url" role="tab" title="Item 2" className="UnderlineNav-item">
                Item 2
              </a>
              <a href="#url" role="tab" title="Item 3" className="UnderlineNav-item">
                Item 3
              </a>
              <a href="#url" role="tab" title="Item 4" className="UnderlineNav-item">
                Item 4
              </a>
            </div>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;tab&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Item 1&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item selected&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;tab&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Item 2&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;tab&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Item 3&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;tab&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Item 4&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 4<span className="nt">&lt;/a&gt;</span>
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
          <p>
            Use <code>.UnderlineNav-actions</code> to place another element, such as a button, to the opposite side of the navigation items.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="UnderlineNav" aria-label="Foo bar">
            <div className="UnderlineNav-body">
              <a href="#url" className="UnderlineNav-item selected">
                Item 1
              </a>
              <a href="#url" className="UnderlineNav-item">
                Item 2
              </a>
              <a href="#url" className="UnderlineNav-item">
                Item 3
              </a>
              <a href="#url" className="UnderlineNav-item">
                Item 4
              </a>
            </div>
            <div className="UnderlineNav-actions">
              <a className="btn">Button</a>
            </div>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Foo bar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item selected&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 4<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-actions&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;btn&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/a&gt;</span>
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
          <p>
            Use <code>.UnderlineNav--right</code> to right align the navigation.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="UnderlineNav UnderlineNav--right">
            <div className="UnderlineNav-body">
              <a href="#url" role="tab" title="Item 1" className="UnderlineNav-item selected">
                Item 1
              </a>
              <a href="#url" role="tab" title="Item 2" className="UnderlineNav-item">
                Item 2
              </a>
              <a href="#url" role="tab" title="Item 3" className="UnderlineNav-item">
                Item 3
              </a>
              <a href="#url" role="tab" title="Item 4" className="UnderlineNav-item">
                Item 4
              </a>
            </div>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav UnderlineNav--right&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;tab&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Item 1&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item selected&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;tab&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Item 2&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;tab&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Item 3&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;tab&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Item 4&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 4<span className="nt">&lt;/a&gt;</span>
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
          <p>
            <code>.UnderlineNav--right</code> also works with when used with <code>.UnderlineNav-actions</code>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="UnderlineNav UnderlineNav--right" aria-label="Foo bar">
            <div className="UnderlineNav-actions">
              <a className="btn">Button</a>
            </div>
            <div className="UnderlineNav-body">
              <a href="#url" className="UnderlineNav-item selected">
                Item 1
              </a>
              <a href="#url" className="UnderlineNav-item">
                Item 2
              </a>
              <a href="#url" className="UnderlineNav-item">
                Item 3
              </a>
              <a href="#url" className="UnderlineNav-item">
                Item 4
              </a>
            </div>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav UnderlineNav--right&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Foo bar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-actions&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;btn&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item selected&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 4<span className="nt">&lt;/a&gt;</span>
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
          <p>
            <code>.Counters</code> and <code>.octicons</code> can be used with navigation items. Use <code>.UnderlineNav-octicon</code> to
            add color and hover styles.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="UnderlineNav" aria-label="Foo bar">
            <div className="UnderlineNav-body">
              <a href="#url" className="UnderlineNav-item selected">
                <svg
                  height="16"
                  className="octicon octicon-tools UnderlineNav-octicon"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
                  />
                </svg>
                Item 1
              </a>
              <a href="#url" className="UnderlineNav-item">
                <svg
                  height="16"
                  className="octicon octicon-tools UnderlineNav-octicon"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
                  />
                </svg>
                Item 2<span className="Counter">10</span>
              </a>
              <a href="#url" className="UnderlineNav-item">
                <svg
                  height="16"
                  className="octicon octicon-tools UnderlineNav-octicon"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
                  />
                </svg>
                Item 3
              </a>
              <a href="#url" className="UnderlineNav-item">
                <svg
                  height="16"
                  className="octicon octicon-tools UnderlineNav-octicon"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58-.88-.91 1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2-.51 1.96-1.89.52-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3 3.84 3.98c.31.33.73.49 1.14.49.41 0 .82-.16 1.14-.49.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0 6.33 7.46l.88.91-4.31 4.46-.99.53-1.39 2.27.35.37 2.2-1.44.51-1.02L7.9 9.08l.88.91L16 2.53z"
                  />
                </svg>
                Item 4
              </a>
            </div>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Foo bar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item selected&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;tools&quot;, :class =&gt; &quot;UnderlineNav-octicon&quot; %&gt; Item 1
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;tools&quot;, :class =&gt; &quot;UnderlineNav-octicon&quot; %&gt; Item 2
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>10<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;tools&quot;, :class =&gt; &quot;UnderlineNav-octicon&quot; %&gt; Item 3
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;tools&quot;, :class =&gt; &quot;UnderlineNav-octicon&quot; %&gt; Item 4
                <span className="nt">&lt;/a&gt;</span>
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
          <p>
            Use <code>.UnderlineNav--full</code> in combination with container styles and <code>.UnderlineNav-container</code> to make
            navigation fill the width of the container.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="UnderlineNav UnderlineNav--full" aria-label="Foo bar">
            <div className="container-lg UnderlineNav-container">
              <div className="UnderlineNav-body">
                <a href="#url" className="UnderlineNav-item selected">
                  Item 1
                </a>
                <a href="#url" className="UnderlineNav-item">
                  Item 2<span className="Counter">10</span>
                </a>
                <a href="#url" className="UnderlineNav-item">
                  Item 3
                </a>
                <a href="#url" className="UnderlineNav-item">
                  Item 4
                </a>
              </div>
              <div className="UnderlineNav-actions">
                <a className="btn">Button</a>
              </div>
            </div>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav UnderlineNav--full&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Foo bar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;container-lg UnderlineNav-container&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-body&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item selected&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>10<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-item&quot;</span>
                <span className="nt">&gt;</span>Item 4<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;UnderlineNav-actions&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;btn&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Tabnav" className="dashAnchor" />
          <h2>
            <a id="tabnav" className="anchor" href="#tabnav" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Tabnav
          </h2>
          <p>
            When you need to toggle between different views, consider using a tabnav. It&apos;ll given you a left-aligned horizontal row
            of... tabs!
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="tabnav">
            <nav className="tabnav-tabs" aria-label="Foo bar">
              <a href="#url" className="tabnav-tab selected" aria-current="page">
                Foo tab
              </a>
              <a href="#url" className="tabnav-tab">
                Bar tab
              </a>
            </nav>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tabs&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Foo bar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tab selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>Foo tab<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tab&quot;</span>
                <span className="nt">&gt;</span>Bar tab<span className="nt">&lt;/a&gt;</span>
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
          <p>
            Use <code>.float-right</code> to align additional elements in the <code>.tabnav</code>:
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="tabnav">
            <a className="btn btn-sm float-right" href="#url" role="button">
              Button
            </a>
            <nav className="tabnav-tabs" aria-label="Foo bar">
              <a href="#url" className="tabnav-tab selected" aria-current="page">
                Foo Tab
              </a>
              <a href="#url" className="tabnav-tab">
                Bar Tab
              </a>
            </nav>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;btn btn-sm float-right&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">role=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tabs&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Foo bar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tab selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>Foo Tab<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tab&quot;</span>
                <span className="nt">&gt;</span>Bar Tab<span className="nt">&lt;/a&gt;</span>
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
          <p>
            Additional bits of text and links can be styled for optimal placement with <code>.tabnav-extra</code>:
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="tabnav">
            <div className="tabnav-extra float-right">Tabnav widget text here.</div>
            <nav className="tabnav-tabs" aria-label="Foo bar">
              <a href="#url" className="tabnav-tab selected" aria-current="page">
                Foo Tab
              </a>
              <a href="#url" className="tabnav-tab">
                Bar Tab
              </a>
            </nav>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-extra float-right&quot;</span>
                <span className="nt">&gt;</span>
                Tabnav widget text here.
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tabs&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Foo bar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tab selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>Foo Tab<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tab&quot;</span>
                <span className="nt">&gt;</span>Bar Tab<span className="nt">&lt;/a&gt;</span>
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

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="tabnav">
            <div className="float-right">
              <a className="tabnav-extra" href="#url">
                Tabnav extra link
              </a>
              <a className="tabnav-extra" href="#url">
                Tabnav extra link
              </a>
            </div>
            <nav className="tabnav-tabs" aria-label="Foo bar">
              <a href="#url" className="tabnav-tab selected" aria-current="page">
                Foo Tab
              </a>
              <a href="#url" className="tabnav-tab">
                Bar Tab
              </a>
            </nav>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;float-right&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-extra&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                Tabnav extra link
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-extra&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>
                Tabnav extra link
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tabs&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Foo bar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tab selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>Foo Tab<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;tabnav-tab&quot;</span>
                <span className="nt">&gt;</span>Bar Tab<span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Filter%20list" className="dashAnchor" />
          <h2>
            <a id="filter-list" className="anchor" href="#filter-list" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Filter list
          </h2>
          <p>
            A vertical list of filters. Grey text on white background. Selecting a filter from the list will fill its background with blue
            and make the text white.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <ul className="filter-list">
            <li>
              <a href="#url" className="filter-item selected" aria-current="page">
                <span className="count" title="results">
                  21
                </span>
                First filter
              </a>
            </li>
            <li>
              <a href="#url" className="filter-item">
                <span className="count" title="results">
                  3
                </span>
                Second filter
              </a>
            </li>
            <li>
              <a href="#url" className="filter-item">
                Third filter
              </a>
            </li>
          </ul>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;ul</span> <span className="na">class=</span>
                <span className="s">&quot;filter-list&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;filter-item selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;count&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;results&quot;</span>
                <span className="nt">&gt;</span>21<span className="nt">&lt;/span&gt;</span>
                First filter
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;filter-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;count&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;results&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/span&gt;</span>
                Second filter
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;filter-item&quot;</span>
                <span className="nt">&gt;</span>
                Third filter
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/li&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Sub%20navigation" className="dashAnchor" />
          <h2>
            <a id="sub-navigation" className="anchor" href="#sub-navigation" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Sub navigation
          </h2>
          <p>
            <code>.subnav</code> is navigation that is typically used when on a dashboard type interface with another set of navigation
            above it. This helps distinguish navigation hierarchy.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <nav className="subnav" aria-label="Respository">
            <a href="#url" className="subnav-item selected" aria-current="page">
              Item 1
            </a>
            <a href="#url" className="subnav-item">
              Item 2
            </a>
            <a href="#url" className="subnav-item">
              Item 3
            </a>
          </nav>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;subnav&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Respository&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-item selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-item&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-item&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>
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
          <p>
            You can have <code>subnav-search</code> in the subnav bar.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="subnav">
            <nav className="subnav-links" aria-label="Repository">
              <a href="#url" className="subnav-item selected" aria-current="page">
                Item 1
              </a>
              <a href="#url" className="subnav-item">
                Item 2
              </a>
              <a href="#url" className="subnav-item">
                Item 3
              </a>
            </nav>
            <div className="subnav-search float-left">
              <input type="search" name="name" className="form-control subnav-search-input" value="" aria-label="Search site" />
              <svg
                height="16"
                className="octicon octicon-search subnav-search-icon"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;subnav&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-links&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Repository&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-item selected&quot;</span> <span className="na">aria-current=</span>
                <span className="s">&quot;page&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-item&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-item&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/nav&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-search float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;search&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;name&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;form-control subnav-search-input&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Search site&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;search&quot;, :class =&gt; &quot;subnav-search-icon&quot; %&gt;
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
            You can also use a <code>subnav-search-context</code> to display search help in a select menu.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="subnav">
            <nav className="subnav-links">
              <a href="#url" className="subnav-item selected">
                Item 1
              </a>
              <a href="#url" className="subnav-item">
                Item 2
              </a>
              <a href="#url" className="subnav-item">
                Item 3
              </a>
            </nav>
            <div className="float-left ml-3 select-menu js-menu-container js-select-menu subnav-search-context">
              <button
                type="button"
                name="button"
                className="btn select-menu-button js-menu-target"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Filters{' '}
              </button>
              <div className="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
                <div className="select-menu-modal">
                  <div className="select-menu-list">
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <div className="select-menu-item-text">Search filter 1</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <div className="select-menu-item-text">Search filter 2</div>
                    </a>
                    <a href="#url" className="select-menu-item js-navigation-item">
                      <div className="select-menu-item-text">Search filter 3</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="subnav-search float-left">
              <input type="search" name="name" className="form-control subnav-search-input" value="" aria-label="Search site" />
              <svg
                height="16"
                className="octicon octicon-search subnav-search-icon"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;subnav&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;nav</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-links&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-item selected&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-item&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-item&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/nav&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;float-left ml-3 select-menu js-menu-container js-select-menu subnav-search-context&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;btn select-menu-button js-menu-target&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>Filters <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal-holder js-menu-content js-navigation-container&quot;</span>{' '}
                <span className="na">aria-hidden=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-modal&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-list&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text&quot;</span>
                <span className="nt">&gt;</span>
                Search filter 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text&quot;</span>
                <span className="nt">&gt;</span>
                Search filter 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item js-navigation-item&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;select-menu-item-text&quot;</span>
                <span className="nt">&gt;</span>
                Search filter 3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;subnav-search float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;search&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;name&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;form-control subnav-search-input&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Search site&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;search&quot;, :class =&gt; &quot;subnav-search-icon&quot; %&gt;
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
          <a href="/primer/components/marketing-buttons/">
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
            Marketing Buttons
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/page-headers/">
            Page headers
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
