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
              <a href="/primer/components/avatars/" aria-current="page" className="text-gray">
                Avatars
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Avatars</h2>
        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-avatars"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-avatars/"
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
            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-avatars">
              1.5.8
            </a>
          </div>
          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-product">primer-product</a>
          </div>
        </div>
        <div className="markdown-body">
          <p>
            Avatars are images that users can set as their profile picture. On GitHub, they&apos;re always going to be rounded squares. They
            can be custom photos, uploaded by users, or generated as Identicons as a placeholder.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#basic-example" id="markdown-toc-basic-example">
                Basic example
              </a>
              <ul>
                <li>
                  <a href="#small-avatars" id="markdown-toc-small-avatars">
                    Small avatars
                  </a>
                </li>
                <li>
                  <a href="#parent-child-avatars" id="markdown-toc-parent-child-avatars">
                    Parent-child avatars
                  </a>
                </li>
                <li>
                  <a href="#avatar-stack" id="markdown-toc-avatar-stack">
                    Avatar stack
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#circle-badge" id="markdown-toc-circle-badge">
                Circle Badge
              </a>
              <ul>
                <li>
                  <a href="#small" id="markdown-toc-small">
                    Small
                  </a>
                </li>
                <li>
                  <a href="#medium" id="markdown-toc-medium">
                    Medium
                  </a>
                </li>
                <li>
                  <a href="#large" id="markdown-toc-large">
                    Large
                  </a>
                </li>
                <li>
                  <a href="#dashed-connection" id="markdown-toc-dashed-connection">
                    Dashed connection
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
            Add <code>.avatar</code> to any <code>&lt;img&gt;</code> element to make it an avatar. This resets some key styles for
            alignment, address a Firefox image placeholder bug, and rounds the corners.
          </p>
          <p>
            Be sure to set <code>width</code> and <code>height</code> attributes for maximum browser performance.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <img className="avatar" alt="jonrohan" src="/jonrohan.png?v=3&amp;s=144" width="72" height="72" />
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;jonrohan&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/jonrohan.png?v=3&amp;s=144&quot;</span> <span className="na">width=</span>
                <span className="s">&quot;72&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;72&quot;</span>
                <span className="nt">&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Small%20avatars" className="dashAnchor" />
          <h3>
            <a id="small-avatars" className="anchor" href="#small-avatars" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Small avatars
          </h3>
          <p>
            We occasionally use smaller avatars. Anything less than <code>48px</code> wide should include the <code>.avatar-small</code>{' '}
            modifier class to reset the <code>border-radius</code> to a more appropriate level.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <img className="avatar avatar-small" alt="jonrohan" src="/jonrohan.png?v=3&amp;s=64" width="32" height="32" />
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar avatar-small&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;jonrohan&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/jonrohan.png?v=3&amp;s=64&quot;</span> <span className="na">width=</span>
                <span className="s">&quot;32&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;32&quot;</span>
                <span className="nt">&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Parent-child%20avatars" className="dashAnchor" />
          <h3>
            <a id="parent-child-avatars" className="anchor" href="#parent-child-avatars" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Parent-child avatars
          </h3>
          <p>When you need a larger parent avatar, and a smaller child one, overlaid slightly, use the parent-child classes.</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="avatar-parent-child float-left">
            <img className="avatar" alt="jonrohan" src="/jonrohan.png?v=3&amp;s=96" width="48" height="48" />
            <img className="avatar avatar-child" alt="josh" src="/josh.png?v=3&amp;s=40" width="20" height="20" />
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;avatar-parent-child float-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;jonrohan&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/jonrohan.png?v=3&amp;s=96&quot;</span> <span className="na">width=</span>
                <span className="s">&quot;48&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;48&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar avatar-child&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;josh&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/josh.png?v=3&amp;s=40&quot;</span> <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Avatar%20stack" className="dashAnchor" />
          <h3>
            <a id="avatar-stack" className="anchor" href="#avatar-stack" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Avatar stack
          </h3>
          <p>
            Stacked avatars can be used to show multiple collaborators or participants when there is limited space available. When you hover
            over the stack, the avatars will reveal themselves.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="AvatarStack AvatarStack--three-plus">
            <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, and octocat">
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;AvatarStack AvatarStack--three-plus&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1&quot;</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">&quot;octocat, octocat, and octocat&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
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
          <p>Based on the number of avatars in the stack, add these modifier classes:</p>
          <ul>
            <li>
              <code>AvatarStack--two</code> for 2 avatars.
            </li>
            <li>
              <code>AvatarStack--three-plus</code> for 3 or more avatars.
            </li>
          </ul>
          <p>
            If you have more than three avatars, add a div with the classes <code>avatar avatar-more</code> as the third avatar in the
            stack, as such:
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="AvatarStack AvatarStack--three-plus">
            <div
              className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
              aria-label="octocat, octocat, octocat, octocat, and octocat"
            >
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
              <div className="avatar avatar-more" />
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;AvatarStack AvatarStack--three-plus&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1&quot;</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">&quot;octocat, octocat, octocat, octocat, and octocat&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;avatar avatar-more&quot;</span>
                <span className="nt">&gt;&lt;/div&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
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
            You can also link individual avatars. To do this shift the <code>avatar</code> class over to the anchor:
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="AvatarStack AvatarStack--two">
            <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat and octocat">
              <a href="#" className="avatar">
                <img
                  height="20"
                  alt="@octocat"
                  src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                  width="20"
                />
              </a>
              <a href="#" className="avatar">
                <img
                  height="20"
                  alt="@octocat"
                  src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                  width="20"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;AvatarStack AvatarStack--two&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1&quot;</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">&quot;octocat and octocat&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
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
            Use <code>AvatarStack--right</code> to right-align the avatar stack. Remember to switch the alignment of tooltips when making
            this change.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="AvatarStack AvatarStack--three-plus AvatarStack--right">
            <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1" aria-label="octocat, octocat, and octocat">
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
              <img
                className="avatar"
                height="20"
                alt="@octocat"
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                width="20"
              />
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;AvatarStack AvatarStack--three-plus AvatarStack--right&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1&quot;</span>{' '}
                <span className="na">aria-label=</span>
                <span className="s">&quot;octocat, octocat, and octocat&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;20&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;@octocat&quot;</span> <span className="na">src=</span>
                <span className="s">
                  &quot;https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png&quot;
                </span>{' '}
                <span className="na">width=</span>
                <span className="s">&quot;20&quot;</span>
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
          <a name="//apple_ref/cpp/Style/Circle%20Badge" className="dashAnchor" />
          <h2>
            <a id="circle-badge" className="anchor" href="#circle-badge" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Circle Badge
          </h2>
          <p>
            <code>.CircleBadge</code> allows for the display of badge-like icons or logos. They are used mostly with Octicons or partner
            integration icons.
          </p>
          <p>
            <code>.CircleBadge</code> should have an <code>aria-label</code>, <code>title</code> (for a link), or an <code>alt</code> (for
            child <code>img</code> elements) attribute specified if there is no text-based alternative to describe it. If there is a
            text-based alternative or the icon has no semantic value, <code>aria-hidden=&quot;true&quot;</code> or an empty <code>alt</code>{' '}
            attribute may be used.
          </p>
          <a name="//apple_ref/cpp/Style/Small" className="dashAnchor" />
          <h3>
            <a id="small" className="anchor" href="#small" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Small
          </h3>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <a className="CircleBadge CircleBadge--small float-left mr-2" href="#small" title="Travis CI">
            <img src="https://assets-cdn.github.com/images/modules/site/travis-logo.png" className="CircleBadge-icon" alt="" />
          </a>
          <a className="CircleBadge CircleBadge--small bg-yellow" title="Zap this!" href="#small">
            <svg
              height="16"
              className="octicon octicon-zap CircleBadge-icon text-white"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z" />
            </svg>
          </a>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;CircleBadge CircleBadge--small float-left mr-2&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#small&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Travis CI&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">src=</span>
                <span className="s">&quot;&lt;%= image_path &quot;</span>
                <span className="na">modules</span>
                <span className="err">/</span>
                <span className="na">site</span>
                <span className="err">/</span>
                <span className="na">travis-logo</span>
                <span className="err">.</span>
                <span className="na">png</span>
                <span className="err">&quot;</span> <span className="err">%</span>
                <span className="nt">&gt;</span>&quot; className=&quot;CircleBadge-icon&quot; alt=&quot;&quot;&gt;
                <span className="nt">&lt;/a&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;CircleBadge CircleBadge--small bg-yellow&quot;</span> <span className="na">title=</span>
                <span className="s">&quot;Zap this!&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#small&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;zap&quot;, :class =&gt; &quot;CircleBadge-icon text-white&quot; %&gt;
                <span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Medium" className="dashAnchor" />
          <h3>
            <a id="medium" className="anchor" href="#medium" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Medium
          </h3>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="CircleBadge CircleBadge--medium bg-gray-dark">
            <img src="https://assets-cdn.github.com/images/modules/site/travis-logo.png" alt="Travis CI" className="CircleBadge-icon" />
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;CircleBadge CircleBadge--medium bg-gray-dark&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">src=</span>
                <span className="s">&quot;&lt;%= image_path &quot;</span>
                <span className="na">modules</span>
                <span className="err">/</span>
                <span className="na">site</span>
                <span className="err">/</span>
                <span className="na">travis-logo</span>
                <span className="err">.</span>
                <span className="na">png</span>
                <span className="err">&quot;</span> <span className="err">%</span>
                <span className="nt">&gt;</span>&quot; alt=&quot;Travis CI&quot; className=&quot;CircleBadge-icon&quot;&gt;
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
          <a name="//apple_ref/cpp/Style/Large" className="dashAnchor" />
          <h3>
            <a id="large" className="anchor" href="#large" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Large
          </h3>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="CircleBadge CircleBadge--large">
            <img src="https://assets-cdn.github.com/images/modules/site/travis-logo.png" alt="Travis CI" className="CircleBadge-icon" />
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;CircleBadge CircleBadge--large&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">src=</span>
                <span className="s">&quot;&lt;%= image_path &quot;</span>
                <span className="na">modules</span>
                <span className="err">/</span>
                <span className="na">site</span>
                <span className="err">/</span>
                <span className="na">travis-logo</span>
                <span className="err">.</span>
                <span className="na">png</span>
                <span className="err">&quot;</span> <span className="err">%</span>
                <span className="nt">&gt;</span>&quot; alt=&quot;Travis CI&quot; className=&quot;CircleBadge-icon&quot;&gt;
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
          <a name="//apple_ref/cpp/Style/Dashed%20connection" className="dashAnchor" />
          <h3>
            <a id="dashed-connection" className="anchor" href="#dashed-connection" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Dashed connection
          </h3>
          <p>
            For specific cases where two badges or more need to be shown as related or connected (such as integrations or specific product
            workflows), a <code>DashedConnection</code> class was created. Use utility classes to ensure badges are spaced correctly.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="DashedConnection">
            <ul className="d-flex list-style-none flex-justify-between" aria-label="A sample GitHub workflow">
              <li className="CircleBadge CircleBadge--small" aria-label="GitHub">
                <svg
                  height="16"
                  className="octicon octicon-mark-github width-full height-full"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </li>
              <li className="CircleBadge CircleBadge--small" aria-label="Slack">
                <img src="https://assets-cdn.github.com/images/modules/site/logos/slack-logo.png" alt="" className="CircleBadge-icon" />
              </li>
              <li className="CircleBadge CircleBadge--small" aria-label="Travis CI">
                <img src="https://assets-cdn.github.com/images/modules/site/travis-logo.png" alt="" className="CircleBadge-icon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;DashedConnection&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;ul</span> <span className="na">className=</span>
                <span className="s">&quot;d-flex list-style-none flex-justify-between&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;A sample GitHub workflow&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;CircleBadge CircleBadge--small&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;GitHub&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;mark-github&quot;, :class =&gt; &quot;width-full height-full&quot; %&gt;
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;CircleBadge CircleBadge--small&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Slack&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">src=</span>
                <span className="s">&quot;&lt;%= image_path &quot;</span>
                <span className="na">modules</span>
                <span className="err">/</span>
                <span className="na">site</span>
                <span className="err">/</span>
                <span className="na">logos</span>
                <span className="err">/</span>
                <span className="na">slack-logo</span>
                <span className="err">.</span>
                <span className="na">png</span>
                <span className="err">&quot;</span> <span className="err">%</span>
                <span className="nt">&gt;</span>&quot; alt=&quot;&quot; className=&quot;CircleBadge-icon&quot;&gt;
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;CircleBadge CircleBadge--small&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Travis CI&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">src=</span>
                <span className="s">&quot;&lt;%= image_path &quot;</span>
                <span className="na">modules</span>
                <span className="err">/</span>
                <span className="na">site</span>
                <span className="err">/</span>
                <span className="na">travis-logo</span>
                <span className="err">.</span>
                <span className="na">png</span>
                <span className="err">&quot;</span> <span className="err">%</span>
                <span className="nt">&gt;</span>&quot; alt=&quot;&quot; className=&quot;CircleBadge-icon&quot;&gt;
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
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/components/alerts/">
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
            Alerts
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/blankslate/">
            Blankslate
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
