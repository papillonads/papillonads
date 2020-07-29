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
              <a href="/primer/components/labels/" aria-current="page" className="text-gray">
                Labels
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Labels</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-labels"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-labels/"
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

            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-labels">
              1.5.11
            </a>
          </div>

          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-product">primer-product</a>
          </div>
        </div>

        <div className="markdown-body">
          <p>
            Labels add metatdata or indicate status of items and navigational elements. Three different types of labels are available:{' '}
            <a href="#default-label-styles">Labels</a> for adding metadata, <a href="#states">States</a> for indicating status, and{' '}
            <a href="#counters">Counters</a> for showing the count for a number of items.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#labels" id="markdown-toc-labels">
                Labels
              </a>
              <ul>
                <li>
                  <a href="#label-themes" id="markdown-toc-label-themes">
                    Label themes
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#states" id="markdown-toc-states">
                States
              </a>
              <ul>
                <li>
                  <a href="#state-themes" id="markdown-toc-state-themes">
                    State themes
                  </a>
                </li>
                <li>
                  <a href="#small-states" id="markdown-toc-small-states">
                    Small states
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#counters" id="markdown-toc-counters">
                Counters
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Labels" className="dashAnchor" />
          <h2>
            <a id="labels" className="anchor" href="#labels" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Labels
          </h2>
          <p>
            The base label component styles the text, adds padding and rounded corners, and an inset box shadow. Labels come in various
            themes which apply colors and different border styles.
          </p>
          <p>
            GitHub also programmatically generates and applies a background color for labels on items such as issues and pull requests.
            Users are able to select any background color and the text color will adjust to work with light and dark background colors.
          </p>
          <p>
            The base <code>Label</code> style does not apply a background color, here&apos;s an example using the <code>bg-blue</code>{' '}
            utility to apply a blue background:
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span title="Label: default label" className="Label bg-blue">
            default label
          </span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Label: default label&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;Label bg-blue&quot;</span>
                <span className="nt">&gt;</span>default label<span className="nt">&lt;/span&gt;</span>
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
            <strong>Note:</strong> Be sure to include a title attribute on labels, it&apos;s helpful for people using screen-readers to
            differentiate a label from other text. I.e. without the title attribute, the following example would read as{' '}
            <em>&quot;New select component design&quot;</em>, rather than identifying <code>design</code> as a label.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <a href="#url">New select component</a>
          <span className="Label bg-blue ml-1">design</span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="c">&lt;!-- Don&apos;t do this --&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>New select component<span className="nt">&lt;/a&gt;&lt;span</span>{' '}
                <span className="na">class=</span>
                <span className="s">&quot;Label bg-blue ml-1&quot;</span>
                <span className="nt">&gt;</span>design<span className="nt">&lt;/span&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Label%20themes" className="dashAnchor" />
          <h3>
            <a id="label-themes" className="anchor" href="#label-themes" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Label themes
          </h3>
          <p>
            Labels come in a few different themes. Use a theme that helps communicate the content of the label, and ensure it&apos;s used
            consistently.
          </p>
          <p>
            Use <code>Label--gray</code> to create a label with a light gray background and gray text. This label is neutral in color and
            can be used in contexts where all you need to communicate is metadata, or whe you want a label to feel less prominent compared
            with labels with stronger colors.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span title="Label: gray label" className="Label Label--gray">
            gray label
          </span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Label: gray label&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;Label Label--gray&quot;</span>
                <span className="nt">&gt;</span>gray label<span className="nt">&lt;/span&gt;</span>
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
            Use <code>Label--gray-darker</code> to create a label with a dark-gray background color. This label is also neutral in color,
            however, since it&apos;s background is darker it can stand out more compared to <code>Label--gray</code>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span title="Label: dark gray label" className="Label Label--gray-darker">
            dark gray label
          </span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Label: dark gray label&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;Label Label--gray-darker&quot;</span>
                <span className="nt">&gt;</span>dark gray label<span className="nt">&lt;/span&gt;</span>
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
            Use <code>Label--orange</code> to communicate &quot;warning&quot;. The orange background color is very close to red, so avoid
            using next to labels with a red background color since most people will find it hard to tell the difference.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span title="Label: orange label" className="Label Label--orange">
            orange label
          </span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Label: orange label&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;Label Label--orange&quot;</span>
                <span className="nt">&gt;</span>orange label<span className="nt">&lt;/span&gt;</span>
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
            Use <code>Label--outline</code> to create a label with gray text, a gray border, and a transparent background. The outline
            reduces the contrast of this label in combination with filled labels. Use this in contexts where you need it to stand out less
            than other labels and communicate a neutral message.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span title="Label: outline label" className="Label Label--outline">
            outlined label
          </span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Label: outline label&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;Label Label--outline&quot;</span>
                <span className="nt">&gt;</span>outlined label<span className="nt">&lt;/span&gt;</span>
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
            Use <code>Label--outline-green</code> in combination with <code>Label--outline</code> to communicate a positive message.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span title="Label: green outline label" className="Label Label--outline Label--outline-green">
            green outlined label
          </span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Label: green outline label&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;Label Label--outline Label--outline-green&quot;</span>
                <span className="nt">&gt;</span>green outlined label<span className="nt">&lt;/span&gt;</span>
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
          <a name="//apple_ref/cpp/Style/States" className="dashAnchor" />
          <h2>
            <a id="states" className="anchor" href="#states" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            States
          </h2>
          <p>
            Use state labels to inform users of an items status. States are large labels with bolded text. The default state has a gray
            background.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span className="State">Default</span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;State&quot;</span>
                <span className="nt">&gt;</span>Default<span className="nt">&lt;/span&gt;</span>
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
          <a name="//apple_ref/cpp/Style/State%20themes" className="dashAnchor" />
          <h3>
            <a id="state-themes" className="anchor" href="#state-themes" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            State themes
          </h3>
          <p>States come in a few variations that apply different colors. Use the state that best communicates the status or function.</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span title="Status: open" className="State State--green">
            <svg height="16" className="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>{' '}
            Open
          </span>
          <span title="Status: closed" className="State State--red">
            <svg height="16" className="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>{' '}
            Closed
          </span>
          <span title="Status: merged" className="State State--purple">
            <svg height="16" className="octicon octicon-git-merge" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>{' '}
            Merged
          </span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Status: open&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;State State--green&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;git-pull-request&quot; %&gt; Open<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Status: closed&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;State State--red&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;git-pull-request&quot; %&gt; Closed
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Status: merged&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;State State--purple&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;git-merge&quot; %&gt; Merged<span className="nt">&lt;/span&gt;</span>
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
            <strong>Note:</strong> Similar to <a href="#labels">labels</a>, you should include the title attribute on states to
            differentiate them from other content.
          </p>
          <a name="//apple_ref/cpp/Style/Small%20states" className="dashAnchor" />
          <h3>
            <a id="small-states" className="anchor" href="#small-states" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Small states
          </h3>
          <p>
            Use <code>State--small</code> for a state label with reduced padding a smaller font size. This is useful in denser areas of
            content.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span title="Status: open" className="State State--green State--small">
            <svg height="16" className="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
              />
            </svg>{' '}
            Open
          </span>
          <span title="Status: closed" className="State State--red State--small">
            <svg height="16" className="octicon octicon-issue-closed" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"
              />
            </svg>{' '}
            Closed
          </span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Status: open&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;State State--green State--small&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;issue-opened&quot; %&gt; Open<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">title=</span>
                <span className="s">&quot;Status: closed&quot;</span> <span className="na">class=</span>
                <span className="s">&quot;State State--red State--small&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;issue-closed&quot; %&gt; Closed<span className="nt">&lt;/span&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Counters" className="dashAnchor" />
          <h2>
            <a id="counters" className="anchor" href="#counters" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Counters
          </h2>
          <p>
            Use the <code>Counter</code> component to add a count to navigational elements and buttons. Counters come in 3 variations: the
            default <code>Counter</code> with a light gray background, <code>Counter--gray</code> with a dark-gray background and inverse
            white text, and <code>Counter--gray-light</code> with a light-gray background and dark gray text. When a counter is empty,
            it&apos;s visibility will be hidden.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <span className="Counter">16</span>
          <span className="Counter Counter--gray">32</span>
          <span className="Counter Counter--gray-light">64</span>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>16<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter Counter--gray&quot;</span>
                <span className="nt">&gt;</span>32<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter Counter--gray-light&quot;</span>
                <span className="nt">&gt;</span>64<span className="nt">&lt;/span&gt;</span>
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
            Use the <code>Counter</code> in navigation to indicate the number of items without the user having to click through or count the
            items, such as open issues in a GitHub repo. See more options in <a href="../navigation">navigation</a>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="tabnav">
            <nav className="tabnav-tabs" aria-label="Foo bar">
              <a href="#url" className="tabnav-tab selected" aria-current="page">
                Foo tab <span className="Counter">23</span>
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
                <span className="nt">&gt;</span>Foo tab <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter&quot;</span>
                <span className="nt">&gt;</span>23<span className="nt">&lt;/a&gt;</span>
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
            Counters can also be used in <code>Box</code> headers to indicate the number of items in a list. See more on the{' '}
            <a href="../box">box component</a>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="Box">
            <div className="Box-header">
              <a name="//apple_ref/cpp/Style/Box%20title%0A%20%20%20%20%20%203" className="dashAnchor" />
              <h3 className="Box-title">
                Box title
                <span className="Counter Counter--gray">3</span>
              </h3>
            </div>
            <ul>
              <li className="Box-row">Box row one</li>
              <li className="Box-row">Box row two</li>
              <li className="Box-row">Box row three</li>
            </ul>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Box&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">class=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">class=</span>
                <span className="s">&quot;Box-title&quot;</span>
                <span className="nt">&gt;</span>
                Box title
                <span className="nt">&lt;span</span> <span className="na">class=</span>
                <span className="s">&quot;Counter Counter--gray&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">class=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row one
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">class=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row two
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">class=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                Box row three
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
          <a href="/primer/components/forms/">
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
            Forms
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/markdown/">
            Markdown
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
