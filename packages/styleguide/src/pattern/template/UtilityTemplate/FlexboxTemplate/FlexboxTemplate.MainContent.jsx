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
              <a href="/primer/utilities/">Utilities</a>
            </li>
            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/utilities/flexbox/" aria-current="page" className="text-gray">
                Flexbox
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Flexbox</h2>
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
              href="/app/assets/stylesheets/primer-core/utilities/lib/layout.scss"
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
          <p>
            Flex utilities can be used to apply <code>flexbox</code> behaviors to elements by using utility classes.
          </p>
          <ul id="markdown-toc">
            <li>
              <a href="#required-reading" id="markdown-toc-required-reading">
                Required reading
              </a>
            </li>
            <li>
              <a href="#flex-container" id="markdown-toc-flex-container">
                Flex container
              </a>
              <ul>
                <li>
                  <a href="#css" id="markdown-toc-css">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#classes" id="markdown-toc-classes">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#example-using-d-flex" id="markdown-toc-example-using-d-flex">
                    Example using .d-flex
                  </a>
                </li>
                <li>
                  <a href="#example-using-d-inline-flex" id="markdown-toc-example-using-d-inline-flex">
                    Example using .d-inline-flex
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#flex-direction" id="markdown-toc-flex-direction">
                Flex direction
              </a>
              <ul>
                <li>
                  <a href="#css-1" id="markdown-toc-css-1">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#classes-1" id="markdown-toc-classes-1">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#example-using-flex-column" id="markdown-toc-example-using-flex-column">
                    Example using .flex-column
                  </a>
                </li>
                <li>
                  <a href="#example-using-flex-row" id="markdown-toc-example-using-flex-row">
                    Example using .flex-row
                  </a>
                </li>
                <li>
                  <a href="#example-using-flex-row-reverse" id="markdown-toc-example-using-flex-row-reverse">
                    Example using .flex-row-reverse
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#flex-wrap" id="markdown-toc-flex-wrap">
                Flex wrap
              </a>
              <ul>
                <li>
                  <a href="#css-2" id="markdown-toc-css-2">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#classes-2" id="markdown-toc-classes-2">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#flex-wrap-example" id="markdown-toc-flex-wrap-example">
                    flex-wrap example
                  </a>
                </li>
                <li>
                  <a href="#flex-nowrap-example" id="markdown-toc-flex-nowrap-example">
                    flex-nowrap example
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#justify-content" id="markdown-toc-justify-content">
                Justify content
              </a>
              <ul>
                <li>
                  <a href="#css-3" id="markdown-toc-css-3">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#classes-3" id="markdown-toc-classes-3">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#flex-justify-start" id="markdown-toc-flex-justify-start">
                    flex-justify-start
                  </a>
                </li>
                <li>
                  <a href="#flex-justify-end" id="markdown-toc-flex-justify-end">
                    flex-justify-end
                  </a>
                </li>
                <li>
                  <a href="#flex-justify-center" id="markdown-toc-flex-justify-center">
                    flex-justify-center
                  </a>
                </li>
                <li>
                  <a href="#flex-justify-between" id="markdown-toc-flex-justify-between">
                    flex-justify-between
                  </a>
                </li>
                <li>
                  <a href="#flex-justify-around" id="markdown-toc-flex-justify-around">
                    flex-justify-around
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#align-items" id="markdown-toc-align-items">
                Align items
              </a>
              <ul>
                <li>
                  <a href="#css-4" id="markdown-toc-css-4">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#classes-4" id="markdown-toc-classes-4">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#flex-items-start" id="markdown-toc-flex-items-start">
                    flex-items-start
                  </a>
                </li>
                <li>
                  <a href="#flex-items-end" id="markdown-toc-flex-items-end">
                    flex-items-end
                  </a>
                </li>
                <li>
                  <a href="#flex-items-center" id="markdown-toc-flex-items-center">
                    flex-items-center
                  </a>
                </li>
                <li>
                  <a href="#flex-items-baseline" id="markdown-toc-flex-items-baseline">
                    flex-items-baseline
                  </a>
                </li>
                <li>
                  <a href="#flex-items-stretch" id="markdown-toc-flex-items-stretch">
                    flex-items-stretch
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#align-content" id="markdown-toc-align-content">
                Align content
              </a>
              <ul>
                <li>
                  <a href="#css-5" id="markdown-toc-css-5">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#classes-5" id="markdown-toc-classes-5">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#flex-content-start" id="markdown-toc-flex-content-start">
                    flex-content-start
                  </a>
                </li>
                <li>
                  <a href="#flex-content-end" id="markdown-toc-flex-content-end">
                    flex-content-end
                  </a>
                </li>
                <li>
                  <a href="#flex-content-center" id="markdown-toc-flex-content-center">
                    flex-content-center
                  </a>
                </li>
                <li>
                  <a href="#flex-content-between" id="markdown-toc-flex-content-between">
                    flex-content-between
                  </a>
                </li>
                <li>
                  <a href="#flex-content-around" id="markdown-toc-flex-content-around">
                    flex-content-around
                  </a>
                </li>
                <li>
                  <a href="#flex-content-stretch" id="markdown-toc-flex-content-stretch">
                    flex-content-stretch
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#flex" id="markdown-toc-flex">
                Flex
              </a>
              <ul>
                <li>
                  <a href="#flex-auto" id="markdown-toc-flex-auto">
                    flex-auto
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#align-self" id="markdown-toc-align-self">
                Align self
              </a>
              <ul>
                <li>
                  <a href="#css-6" id="markdown-toc-css-6">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#classes-6" id="markdown-toc-classes-6">
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#flex-self-auto" id="markdown-toc-flex-self-auto">
                    flex-self-auto
                  </a>
                </li>
                <li>
                  <a href="#flex-self-start" id="markdown-toc-flex-self-start">
                    flex-self-start
                  </a>
                </li>
                <li>
                  <a href="#flex-self-end" id="markdown-toc-flex-self-end">
                    flex-self-end
                  </a>
                </li>
                <li>
                  <a href="#flex-self-center" id="markdown-toc-flex-self-center">
                    flex-self-center
                  </a>
                </li>
                <li>
                  <a href="#flex-self-baseline" id="markdown-toc-flex-self-baseline">
                    flex-self-baseline
                  </a>
                </li>
                <li>
                  <a href="#flex-self-stretch" id="markdown-toc-flex-self-stretch">
                    flex-self-stretch
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#responsive-flex-utilities" id="markdown-toc-responsive-flex-utilities">
                Responsive flex utilities
              </a>
              <ul>
                <li>
                  <a href="#example-classes" id="markdown-toc-example-classes">
                    Example classes
                  </a>
                </li>
                <li>
                  <a href="#example-usage" id="markdown-toc-example-usage">
                    Example usage
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#example-components" id="markdown-toc-example-components">
                Example components
              </a>
              <ul>
                <li>
                  <a href="#media-object" id="markdown-toc-media-object">
                    Media object
                  </a>
                </li>
                <li>
                  <a href="#responsive-media-object" id="markdown-toc-responsive-media-object">
                    Responsive media object
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#flexbox-bugs" id="markdown-toc-flexbox-bugs">
                Flexbox bugs
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Required%20reading" className="dashAnchor" />
          <h2>
            <a id="required-reading" className="anchor" href="#required-reading" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Required reading
          </h2>
          <p>
            Before using these utilities, <strong>you should be familiar with CSS3 Flexible Box spec</strong>. If you are not, check out
            MDN&apos;s guide:
          </p>
          <p>
            <img
              className="emoji"
              title=":book:"
              alt=":book:"
              src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d6.png"
              height="20"
              width="20"
            />{' '}
            <strong>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">
                Using CSS Flexible Boxes
              </a>
            </strong>
          </p>
          <a name="//apple_ref/cpp/Style/Flex%20container" className="dashAnchor" />
          <h2>
            <a id="flex-container" className="anchor" href="#flex-container" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Flex container
          </h2>
          <p>
            Use these classes to make an element lay out its content using the flexbox model. Each <strong>direct</strong> child of the flex
            container will become a flex item.
          </p>
          <a name="//apple_ref/cpp/Style/CSS" className="dashAnchor" />
          <h4>
            <a id="css" className="anchor" href="#css" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            CSS
          </h4>
          <pre className="highlight-css highlight">
            <code>
              <span className="nc">.d-flex</span> <span className="p">{'{'}</span> <span className="nl">display</span>
              <span className="p">:</span> <span className="n">flex</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.d-inline-flex</span> <span className="p">{'{'}</span> <span className="nl">display</span>
              <span className="p">:</span> <span className="n">inline-flex</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Classes" className="dashAnchor" />
          <h4>
            <a id="classes" className="anchor" href="#classes" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Classes
          </h4>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.d-flex</code>
                </td>
                <td>The element behaves like a block and lays out its content using the flexbox model.</td>
              </tr>
              <tr>
                <td>
                  <code>.d-inline-flex</code>
                </td>
                <td>The element behaves like an inline element and lays out its content using the flexbox model.</td>
              </tr>
            </tbody>
          </table>
          <a name="//apple_ref/cpp/Style/Example%20using%20.d-flex" className="dashAnchor" />
          <h4>
            <a id="example-using-d-flex" className="anchor" href="#example-using-d-flex" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Example using <code>.d-flex</code>
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex">
            <div className="p-5 border bg-gray-light">flex item 1</div>
            <div className="p-5 border bg-gray-light">flex item 2</div>
            <div className="p-5 border bg-gray-light">flex item 3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="c">&lt;!-- flex container --&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>flex item 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>flex item 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>flex item 3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Example%20using%20.d-inline-flex" className="dashAnchor" />
          <h4>
            <a id="example-using-d-inline-flex" className="anchor" href="#example-using-d-inline-flex" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Example using <code>.d-inline-flex</code>
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-inline-flex">
            <div className="p-5 border bg-gray-light">flex item 1</div>
            <div className="p-5 border bg-gray-light">flex item 2</div>
            <div className="p-5 border bg-gray-light">flex item 3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="c">&lt;!-- inline-flex container --&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-inline-flex&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>flex item 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>flex item 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>flex item 3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Flex%20direction" className="dashAnchor" />
          <h2>
            <a id="flex-direction" className="anchor" href="#flex-direction" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Flex direction
          </h2>
          <p>
            Use these classes to define the orientation of the main axis (<code>row</code> or <code>column</code>). By default, flex items
            will display in a row. Use <code>.flex-column</code> to change the direction of the main axis to vertical.
          </p>
          <a name="//apple_ref/cpp/Style/CSS" className="dashAnchor" />
          <h4>
            <a id="css-1" className="anchor" href="#css-1" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            CSS
          </h4>
          <pre className="highlight-css highlight">
            <code>
              <span className="nc">.flex-row</span> <span className="p">{'{'}</span> <span className="nl">flex-direction</span>
              <span className="p">:</span> <span className="n">row</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-row-reverse</span> <span className="p">{'{'}</span> <span className="nl">flex-direction</span>
              <span className="p">:</span> <span className="n">row-reverse</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-column</span> <span className="p">{'{'}</span> <span className="nl">flex-direction</span>
              <span className="p">:</span> <span className="n">column</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Classes" className="dashAnchor" />
          <h4>
            <a id="classes-1" className="anchor" href="#classes-1" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Classes
          </h4>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.flex-row</code>
                </td>
                <td>The main axis runs left to right (default).</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-row-reverse</code>
                </td>
                <td>The main axis runs right to left.</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-column</code>
                </td>
                <td>The main axis runs top to bottom.</td>
              </tr>
            </tbody>
          </table>
          <a name="//apple_ref/cpp/Style/Example%20using%20.flex-column" className="dashAnchor" />
          <h4>
            <a id="example-using-flex-column" className="anchor" href="#example-using-flex-column" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Example using <code>.flex-column</code>
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-column">
            <div className="p-5 border bg-gray-light">Item 1</div>
            <div className="p-5 border bg-gray-light">Item 2</div>
            <div className="p-5 border bg-gray-light">Item 3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-column&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Example%20using%20.flex-row" className="dashAnchor" />
          <h4>
            <a id="example-using-flex-row" className="anchor" href="#example-using-flex-row" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Example using <code>.flex-row</code>
          </h4>
          <p>
            This example uses the responsive variant <code>.flex-md-row</code> to override <code>.flex-column</code> Learn more about
            responsive flexbox utilities{' '}
            <strong>
              <a href="#responsive-flex-utilities">here</a>
            </strong>
            .
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-column flex-md-row">
            <div className="p-5 border bg-gray-light">Item 1</div>
            <div className="p-5 border bg-gray-light">Item 2</div>
            <div className="p-5 border bg-gray-light">Item 3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-column flex-md-row&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Example%20using%20.flex-row-reverse" className="dashAnchor" />
          <h4>
            <a id="example-using-flex-row-reverse" className="anchor" href="#example-using-flex-row-reverse" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Example using <code>.flex-row-reverse</code>
          </h4>
          <p>
            This example uses the responsive variant <code>.flex-md-row-reverse</code> to override <code>.flex-column</code> Learn more
            about responsive flexbox utilities{' '}
            <strong>
              <a href="#responsive-flex-utilities">here</a>
            </strong>
            .
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-column flex-md-row-reverse">
            <div className="p-5 border bg-gray-light">Item 1</div>
            <div className="p-5 border bg-gray-light">Item 2</div>
            <div className="p-5 border bg-gray-light">Item 3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-column flex-md-row-reverse&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Item 1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Item 2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Item 3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Flex%20wrap" className="dashAnchor" />
          <h2>
            <a id="flex-wrap" className="anchor" href="#flex-wrap" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Flex wrap
          </h2>
          <p>You can choose whether flex items are forced into a single line or wrapped onto multiple lines.</p>
          <a name="//apple_ref/cpp/Style/CSS" className="dashAnchor" />
          <h4>
            <a id="css-2" className="anchor" href="#css-2" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            CSS
          </h4>
          <pre className="highlight-css highlight">
            <code>
              <span className="nc">.flex-wrap</span> <span className="p">{'{'}</span> <span className="nl">flex-wrap</span>
              <span className="p">:</span> <span className="n">wrap</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-nowrap</span> <span className="p">{'{'}</span> <span className="nl">flex-wrap</span>
              <span className="p">:</span> <span className="nb">nowrap</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Classes" className="dashAnchor" />
          <h4>
            <a id="classes-2" className="anchor" href="#classes-2" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Classes
          </h4>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.flex-wrap</code>
                </td>
                <td>Flex items will break onto multiple lines (default)</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-nowrap</code>
                </td>
                <td>Flex items are laid out in a single line, even if they overflow</td>
              </tr>
            </tbody>
          </table>
          <a name="//apple_ref/cpp/Style/flex-wrap%20example" className="dashAnchor" />
          <h4>
            <a id="flex-wrap-example" className="anchor" href="#flex-wrap-example" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            <code>flex-wrap</code> example
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-wrap">
            <div className="p-5 px-6 border bg-gray-light">1</div>
            <div className="p-5 px-6 border bg-gray-light">2</div>
            <div className="p-5 px-6 border bg-gray-light">3</div>
            <div className="p-5 px-6 border bg-gray-light">4</div>
            <div className="p-5 px-6 border bg-gray-light">5</div>
            <div className="p-5 px-6 border bg-gray-light">6</div>
            <div className="p-5 px-6 border bg-gray-light">7</div>
            <div className="p-5 px-6 border bg-gray-light">8</div>
            <div className="p-5 px-6 border bg-gray-light">9</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-wrap&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>7<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>8<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>9<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-nowrap%20example" className="dashAnchor" />
          <h4>
            <a id="flex-nowrap-example" className="anchor" href="#flex-nowrap-example" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            <code>flex-nowrap</code> example
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-nowrap">
            <div className="p-5 px-6 border bg-gray-light">1</div>
            <div className="p-5 px-6 border bg-gray-light">2</div>
            <div className="p-5 px-6 border bg-gray-light">3</div>
            <div className="p-5 px-6 border bg-gray-light">4</div>
            <div className="p-5 px-6 border bg-gray-light">5</div>
            <div className="p-5 px-6 border bg-gray-light">6</div>
            <div className="p-5 px-6 border bg-gray-light">7</div>
            <div className="p-5 px-6 border bg-gray-light">8</div>
            <div className="p-5 px-6 border bg-gray-light">9</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-nowrap&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>7<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>8<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 px-6 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>9<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Justify%20content" className="dashAnchor" />
          <h2>
            <a id="justify-content" className="anchor" href="#justify-content" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Justify content
          </h2>
          <p>
            Use these classes to distribute space between and around flex items along the <strong>main axis</strong> of the container.
          </p>
          <a name="//apple_ref/cpp/Style/CSS" className="dashAnchor" />
          <h4>
            <a id="css-3" className="anchor" href="#css-3" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            CSS
          </h4>
          <pre lang="CSS">
            <code>
              .flex-justify-start {'{'} justify-content: flex-start; {'}'}
              .flex-justify-end {'{'} justify-content: flex-end; {'}'}
              .flex-justify-center {'{'} justify-content: center; {'}'}
              .flex-justify-between {'{'} justify-content: space-between; {'}'}
              .flex-justify-around {'{'} justify-content: space-around; {'}'}
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Classes" className="dashAnchor" />
          <h4>
            <a id="classes-3" className="anchor" href="#classes-3" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Classes
          </h4>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Default behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.flex-justify-start</code>
                </td>
                <td>Justify all items to the left</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-justify-end</code>
                </td>
                <td>Justify all items to the right</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-justify-center</code>
                </td>
                <td>Justify items to the center of the container</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-justify-between</code>
                </td>
                <td>Distribute items evenly. First item is on the start line, last item is on the end line.</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-justify-around</code>
                </td>
                <td>Distribute items evenly with equal space around them</td>
              </tr>
            </tbody>
          </table>
          <a name="//apple_ref/cpp/Style/flex-justify-start" className="dashAnchor" />
          <h4>
            <a id="flex-justify-start" className="anchor" href="#flex-justify-start" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-justify-start
          </h4>
          <p>
            Use <code>.flex-justify-start</code> to align items to the start line. By default this will be on the left side of the
            container. If you are using <code>.flex-column</code>, the end line will be at the top of the container.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-justify-start">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-justify-start&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-justify-end" className="dashAnchor" />
          <h4>
            <a id="flex-justify-end" className="anchor" href="#flex-justify-end" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-justify-end
          </h4>
          <p>
            Use <code>.flex-justify-end</code> to align items to the end line. By default this will be on the right side of the container.
            If you are using <code>.flex-column</code>, the end line will be at the bottom of the container.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-justify-end">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-justify-end&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-justify-center" className="dashAnchor" />
          <h4>
            <a id="flex-justify-center" className="anchor" href="#flex-justify-center" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-justify-center
          </h4>
          <p>
            Use <code>.flex-justify-center</code> to align items in the middle of the container.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-justify-center">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-justify-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-justify-between" className="dashAnchor" />
          <h4>
            <a id="flex-justify-between" className="anchor" href="#flex-justify-between" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-justify-between
          </h4>
          <p>
            Use <code>.flex-justify-between</code> to distribute items evenly in the container. The first items will be on the start line
            and the last item will be on the end line.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-justify-between">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-justify-between&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-justify-around" className="dashAnchor" />
          <h4>
            <a id="flex-justify-around" className="anchor" href="#flex-justify-around" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-justify-around
          </h4>
          <p>
            Use <code>.flex-justify-around</code> to distribute items evenly, with an equal amount of space around them. Visually the spaces
            won&apos;t look equal, since each item has the same unit of space around it. For example, the first item only has one unit of
            space between it and the start line, but it has two units of space between it and the next item.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-justify-around">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-justify-around&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Align%20items" className="dashAnchor" />
          <h2>
            <a id="align-items" className="anchor" href="#align-items" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Align items
          </h2>
          <p>
            Use these classes to align items on the <strong>cross axis</strong>.
          </p>
          <p>
            The cross axis runs perpendicular to the main axis. By default the main axis runs horizontally, so your items will align
            vertically on the cross axis. If you use <a href="#flex-direction">flex-column</a> to make the main axis run vertically, your
            items will be aligned horizontally.
          </p>
          <a name="//apple_ref/cpp/Style/CSS" className="dashAnchor" />
          <h4>
            <a id="css-4" className="anchor" href="#css-4" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            CSS
          </h4>
          <pre className="highlight-css highlight">
            <code>
              <span className="nc">.flex-items-start</span> <span className="p">{'{'}</span> <span className="nl">align-items</span>
              <span className="p">:</span> <span className="n">flex-start</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-items-end</span> <span className="p">{'{'}</span> <span className="nl">align-items</span>
              <span className="p">:</span> <span className="n">flex-end</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-items-center</span> <span className="p">{'{'}</span> <span className="nl">align-items</span>
              <span className="p">:</span> <span className="nb">center</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-items-baseline</span> <span className="p">{'{'}</span> <span className="nl">align-items</span>
              <span className="p">:</span> <span className="nb">baseline</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-items-stretch</span> <span className="p">{'{'}</span> <span className="nl">align-items</span>
              <span className="p">:</span> <span className="n">stretch</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Classes" className="dashAnchor" />
          <h4>
            <a id="classes-4" className="anchor" href="#classes-4" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Classes
          </h4>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.flex-items-start</code>
                </td>
                <td>Align items to the start of the cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-items-end</code>
                </td>
                <td>Align items to the end of the cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-items-center</code>
                </td>
                <td>Align items to the center of the cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-items-baseline</code>
                </td>
                <td>Align items along their baselines</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-items-stretch</code>
                </td>
                <td>Stretch items from start of cross axis to end of cross axis</td>
              </tr>
            </tbody>
          </table>
          <a name="//apple_ref/cpp/Style/flex-items-start" className="dashAnchor" />
          <h4>
            <a id="flex-items-start" className="anchor" href="#flex-items-start" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-items-start
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex flex-items-start">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-items-start&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-items-end" className="dashAnchor" />
          <h4>
            <a id="flex-items-end" className="anchor" href="#flex-items-end" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-items-end
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex flex-items-end">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-items-end&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-items-center" className="dashAnchor" />
          <h4>
            <a id="flex-items-center" className="anchor" href="#flex-items-center" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-items-center
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex flex-items-center">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-items-baseline" className="dashAnchor" />
          <h4>
            <a id="flex-items-baseline" className="anchor" href="#flex-items-baseline" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-items-baseline
          </h4>
          <p>
            With <code>.flex-items-baseline</code>, items will be aligned along their baselines even if they have different font sizes.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex flex-items-baseline">
            <div className="p-5 border bg-gray-light f1">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light f3">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-items-baseline&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light f1&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light f3&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-items-stretch" className="dashAnchor" />
          <h4>
            <a id="flex-items-stretch" className="anchor" href="#flex-items-stretch" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-items-stretch
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex flex-items-stretch">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-items-stretch&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Align%20content" className="dashAnchor" />
          <h2>
            <a id="align-content" className="anchor" href="#align-content" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Align content
          </h2>
          <p>
            When the main axis wraps, this creates multiple main axis lines and adds extra space in the cross axis. Use these classes to
            align the lines of the main axis on the cross axis.
          </p>
          <a name="//apple_ref/cpp/Style/CSS" className="dashAnchor" />
          <h4>
            <a id="css-5" className="anchor" href="#css-5" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            CSS
          </h4>
          <pre className="highlight-css highlight">
            <code>
              <span className="nc">.flex-content-start</span> <span className="p">{'{'}</span> <span className="nl">align-content</span>
              <span className="p">:</span> <span className="n">flex-start</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-content-end</span> <span className="p">{'{'}</span> <span className="nl">align-content</span>
              <span className="p">:</span> <span className="n">flex-end</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-content-center</span> <span className="p">{'{'}</span> <span className="nl">align-content</span>
              <span className="p">:</span> <span className="nb">center</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-content-between</span> <span className="p">{'{'}</span> <span className="nl">align-content</span>
              <span className="p">:</span> <span className="n">space-between</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-content-around</span> <span className="p">{'{'}</span> <span className="nl">align-content</span>
              <span className="p">:</span> <span className="n">space-around</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-content-stretch</span> <span className="p">{'{'}</span> <span className="nl">align-content</span>
              <span className="p">:</span> <span className="n">stretch</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Classes" className="dashAnchor" />
          <h4>
            <a id="classes-5" className="anchor" href="#classes-5" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Classes
          </h4>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.flex-content-start</code>
                </td>
                <td>Align content to the start of the cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-content-end</code>
                </td>
                <td>Align content to the end of the cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-content-center</code>
                </td>
                <td>Align content to the center of the cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-content-between</code>
                </td>
                <td>Distribute content evenly. First line is on the start of the cross axis, last line is on the end of the cross axis.</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-content-around</code>
                </td>
                <td>Stretch items from the start of the cross axis to the end of the cross axis.</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-content-stretch</code>
                </td>
                <td>Lines stretch to occupy available space.</td>
              </tr>
            </tbody>
          </table>
          <a name="//apple_ref/cpp/Style/flex-content-start" className="dashAnchor" />
          <h4>
            <a id="flex-content-start" className="anchor" href="#flex-content-start" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-content-start
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '300px' }} className="border d-flex flex-wrap flex-content-start">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
            <div className="p-5 border bg-gray-light">5</div>
            <div className="p-5 border bg-gray-light">6</div>
            <div className="p-5 border bg-gray-light">7</div>
            <div className="p-5 border bg-gray-light">8</div>
            <div className="p-5 border bg-gray-light">9</div>
            <div className="p-5 border bg-gray-light">10</div>
            <div className="p-5 border bg-gray-light">11</div>
            <div className="p-5 border bg-gray-light">12</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 300px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-wrap flex-content-start&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>7<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>8<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>9<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>10<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>11<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-content-end" className="dashAnchor" />
          <h4>
            <a id="flex-content-end" className="anchor" href="#flex-content-end" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-content-end
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '300px' }} className="border d-flex flex-wrap flex-content-end">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
            <div className="p-5 border bg-gray-light">5</div>
            <div className="p-5 border bg-gray-light">6</div>
            <div className="p-5 border bg-gray-light">7</div>
            <div className="p-5 border bg-gray-light">8</div>
            <div className="p-5 border bg-gray-light">9</div>
            <div className="p-5 border bg-gray-light">10</div>
            <div className="p-5 border bg-gray-light">11</div>
            <div className="p-5 border bg-gray-light">12</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 300px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-wrap flex-content-end&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>7<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>8<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>9<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>10<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>11<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-content-center" className="dashAnchor" />
          <h4>
            <a id="flex-content-center" className="anchor" href="#flex-content-center" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-content-center
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '300px' }} className="border d-flex flex-wrap flex-content-center">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
            <div className="p-5 border bg-gray-light">5</div>
            <div className="p-5 border bg-gray-light">6</div>
            <div className="p-5 border bg-gray-light">7</div>
            <div className="p-5 border bg-gray-light">8</div>
            <div className="p-5 border bg-gray-light">9</div>
            <div className="p-5 border bg-gray-light">10</div>
            <div className="p-5 border bg-gray-light">11</div>
            <div className="p-5 border bg-gray-light">12</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 300px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-wrap flex-content-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>7<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>8<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>9<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>10<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>11<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-content-between" className="dashAnchor" />
          <h4>
            <a id="flex-content-between" className="anchor" href="#flex-content-between" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-content-between
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '300px' }} className="border d-flex flex-wrap flex-content-between">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
            <div className="p-5 border bg-gray-light">5</div>
            <div className="p-5 border bg-gray-light">6</div>
            <div className="p-5 border bg-gray-light">7</div>
            <div className="p-5 border bg-gray-light">8</div>
            <div className="p-5 border bg-gray-light">9</div>
            <div className="p-5 border bg-gray-light">10</div>
            <div className="p-5 border bg-gray-light">11</div>
            <div className="p-5 border bg-gray-light">12</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 300px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-wrap flex-content-between&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>7<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>8<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>9<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>10<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>11<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-content-around" className="dashAnchor" />
          <h4>
            <a id="flex-content-around" className="anchor" href="#flex-content-around" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-content-around
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '300px' }} className="border d-flex flex-wrap flex-content-around">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
            <div className="p-5 border bg-gray-light">5</div>
            <div className="p-5 border bg-gray-light">6</div>
            <div className="p-5 border bg-gray-light">7</div>
            <div className="p-5 border bg-gray-light">8</div>
            <div className="p-5 border bg-gray-light">9</div>
            <div className="p-5 border bg-gray-light">10</div>
            <div className="p-5 border bg-gray-light">11</div>
            <div className="p-5 border bg-gray-light">12</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 300px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-wrap flex-content-around&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>7<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>8<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>9<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>10<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>11<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-content-stretch" className="dashAnchor" />
          <h4>
            <a id="flex-content-stretch" className="anchor" href="#flex-content-stretch" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-content-stretch
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '300px' }} className="border d-flex flex-wrap flex-content-stretch">
            <div className="p-5 border bg-gray-light">1</div>
            <div className="p-5 border bg-gray-light">2</div>
            <div className="p-5 border bg-gray-light">3</div>
            <div className="p-5 border bg-gray-light">4</div>
            <div className="p-5 border bg-gray-light">5</div>
            <div className="p-5 border bg-gray-light">6</div>
            <div className="p-5 border bg-gray-light">7</div>
            <div className="p-5 border bg-gray-light">8</div>
            <div className="p-5 border bg-gray-light">9</div>
            <div className="p-5 border bg-gray-light">10</div>
            <div className="p-5 border bg-gray-light">11</div>
            <div className="p-5 border bg-gray-light">12</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 300px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-wrap flex-content-stretch&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>1<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>2<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>3<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>4<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>5<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>6<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>7<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>8<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>9<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>10<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>11<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>12<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Flex" className="dashAnchor" />
          <h2>
            <a id="flex" className="anchor" href="#flex" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Flex
          </h2>
          <p>Use this class to specify the ability of a flex item to alter its dimensions to fill available space.</p>
          <pre lang="CSS">
            <code>
              .flex-auto {'{'} flex: 1 1 auto; {'}'}
            </code>
          </pre>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.flex-auto</code>
                </td>
                <td>
                  Sets default values for <code>flex-grow</code> (1), <code>flex-shrink</code> (1) and <code>flex-basis</code> (auto)
                </td>
              </tr>
            </tbody>
          </table>
          <a name="//apple_ref/cpp/Style/flex-auto" className="dashAnchor" />
          <h4>
            <a id="flex-auto" className="anchor" href="#flex-auto" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-auto
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex">
            <div className="p-5 border bg-gray-light flex-auto">.flex-auto</div>
            <div className="p-5 border bg-gray-light flex-auto">.flex-auto</div>
            <div className="p-5 border bg-gray-light flex-auto">.flex-auto</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-auto&quot;</span>
                <span className="nt">&gt;</span>.flex-auto<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-auto&quot;</span>
                <span className="nt">&gt;</span>.flex-auto<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-auto&quot;</span>
                <span className="nt">&gt;</span>.flex-auto<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Align%20self" className="dashAnchor" />
          <h2>
            <a id="align-self" className="anchor" href="#align-self" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Align self
          </h2>
          <p>
            Use these classes to adjust the alignment of an individual flex item on the cross axis. This overrides any{' '}
            <code>align-items</code> property applied to the flex container.
          </p>
          <a name="//apple_ref/cpp/Style/CSS" className="dashAnchor" />
          <h4>
            <a id="css-6" className="anchor" href="#css-6" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            CSS
          </h4>
          <pre className="highlight-css highlight">
            <code>
              <span className="nc">.flex-self-auto</span> <span className="p">{'{'}</span> <span className="nl">align-self</span>
              <span className="p">:</span> <span className="nb">auto</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-self-start</span> <span className="p">{'{'}</span> <span className="nl">align-self</span>
              <span className="p">:</span> <span className="n">flex-start</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-self-end</span> <span className="p">{'{'}</span> <span className="nl">align-self</span>
              <span className="p">:</span> <span className="n">flex-end</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-self-center</span> <span className="p">{'{'}</span> <span className="nl">align-self</span>
              <span className="p">:</span> <span className="nb">center</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-self-baseline</span> <span className="p">{'{'}</span> <span className="nl">align-self</span>
              <span className="p">:</span> <span className="nb">baseline</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
              <span className="nc">.flex-self-stretch</span> <span className="p">{'{'}</span> <span className="nl">align-self</span>
              <span className="p">:</span> <span className="n">stretch</span>
              <span className="p">;</span> <span className="p">{'}'}</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Classes" className="dashAnchor" />
          <h4>
            <a id="classes-6" className="anchor" href="#classes-6" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Classes
          </h4>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.flex-self-auto</code>
                </td>
                <td>Inherit alignment from parent</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-self-start</code>
                </td>
                <td>Align to the start of the cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-self-end</code>
                </td>
                <td>Align to the end of the cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-self-center</code>
                </td>
                <td>Align to center of cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-self-baseline</code>
                </td>
                <td>Align baseline to the start of the cross axis</td>
              </tr>
              <tr>
                <td>
                  <code>.flex-self-stretch</code>
                </td>
                <td>Stretch item from start of cross axis to end of cross axis.</td>
              </tr>
            </tbody>
          </table>
          <a name="//apple_ref/cpp/Style/flex-self-auto" className="dashAnchor" />
          <h4>
            <a id="flex-self-auto" className="anchor" href="#flex-self-auto" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-self-auto
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex">
            <div className="p-5 border bg-gray-light flex-self-auto">.flex-self-auto</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-self-auto&quot;</span>
                <span className="nt">&gt;</span>.flex-self-auto<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
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
          <a name="//apple_ref/cpp/Style/flex-self-start" className="dashAnchor" />
          <h4>
            <a id="flex-self-start" className="anchor" href="#flex-self-start" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-self-start
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex">
            <div className="p-5 border bg-gray-light flex-self-start">.flex-self-start</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-self-start&quot;</span>
                <span className="nt">&gt;</span>.flex-self-start<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
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
          <a name="//apple_ref/cpp/Style/flex-self-end" className="dashAnchor" />
          <h4>
            <a id="flex-self-end" className="anchor" href="#flex-self-end" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-self-end
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex">
            <div className="p-5 border bg-gray-light flex-self-end">.flex-self-end</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-self-end&quot;</span>
                <span className="nt">&gt;</span>.flex-self-end<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
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
          <a name="//apple_ref/cpp/Style/flex-self-center" className="dashAnchor" />
          <h4>
            <a id="flex-self-center" className="anchor" href="#flex-self-center" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-self-center
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex">
            <div className="p-5 border bg-gray-light flex-self-center">.flex-self-center</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-self-center&quot;</span>
                <span className="nt">&gt;</span>.flex-self-center<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
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
          <a name="//apple_ref/cpp/Style/flex-self-baseline" className="dashAnchor" />
          <h4>
            <a id="flex-self-baseline" className="anchor" href="#flex-self-baseline" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-self-baseline
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex flex-items-end">
            <div className="p-5 border bg-gray-light flex-self-baseline f4">.flex-self-baseline</div>
            <div className="p-5 border bg-gray-light f1">item</div>
            <div className="p-5 border bg-gray-light f00">item</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-items-end&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-self-baseline f4&quot;</span>
                <span className="nt">&gt;</span>.flex-self-baseline<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light f1&quot;</span>
                <span className="nt">&gt;</span>item<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light f00&quot;</span>
                <span className="nt">&gt;</span>item<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/flex-self-stretch" className="dashAnchor" />
          <h4>
            <a id="flex-self-stretch" className="anchor" href="#flex-self-stretch" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            flex-self-stretch
          </h4>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div style={{ 'min-height': '150px' }} className="border d-flex flex-items-start">
            <div className="p-5 border bg-gray-light flex-self-stretch">.flex-self-stretch</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-items-start&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-self-stretch&quot;</span>
                <span className="nt">&gt;</span>.flex-self-stretch<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
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
          <a name="//apple_ref/cpp/Style/Responsive%20flex%20utilities" className="dashAnchor" />
          <h2>
            <a id="responsive-flex-utilities" className="anchor" href="#responsive-flex-utilities" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Responsive flex utilities
          </h2>
          <p>
            All flexbox utilities can be adjust per <a href="../../objects/grid#breakpoints">breakpoint</a> using the following formulas:
          </p>
          <ul>
            <li>
              <code>d-[breakpoint]-[property]</code> for <code>display</code>
            </li>
            <li>
              <code>flex-[breakpoint]-[property]-[behavior]</code> for various flex properties
            </li>
            <li>
              <code>flex-[breakpoint]-item-equal</code> for equal width and equal height flex items
            </li>
          </ul>
          <p>Each responsive style is applied to the specified breakpoint and up.</p>
          <a name="//apple_ref/cpp/Style/Example%20classes" className="dashAnchor" />
          <h4>
            <a id="example-classes" className="anchor" href="#example-classes" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Example classes
          </h4>
          <pre className="highlight-css highlight">
            <code>
              <span className="c">\/* Example classes *\/</span>
              <span className="nc">.d-sm-flex</span> <span className="p">{}</span>
              <span className="nc">.d-md-inline-flex</span> <span className="p">{}</span>
              <span className="nc">.flex-lg-row</span> <span className="p">{}</span>
              <span className="nc">.flex-xl-column</span> <span className="p">{}</span>
              <span className="nc">.flex-sm-wrap</span> <span className="p">{}</span>
              <span className="nc">.flex-lg-nowrap</span> <span className="p">{}</span>
              <span className="nc">.flex-lg-self-start</span> <span className="p">{}</span>
              <span className="nc">.flex-md-item-equal</span> <span className="p">{}</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Example%20usage" className="dashAnchor" />
          <h4>
            <a id="example-usage" className="anchor" href="#example-usage" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Example usage
          </h4>
          <p>Mixing flex properties:</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div
            style={{ 'min-height': '150px' }}
            className="border d-flex flex-items-start flex-md-items-center flex-justify-start flex-lg-justify-between"
          >
            <div className="p-5 border bg-gray-light flex-md-self-stretch">.flex-self-stretch</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
            <div className="p-5 border bg-gray-light">&nbsp;</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">style=</span>
                <span className="s">&quot;min-height: 150px;&quot;</span> <span className="na">className=</span>
                <span className="s">
                  &quot;border d-flex flex-items-start flex-md-items-center flex-justify-start flex-lg-justify-between&quot;
                </span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light flex-md-self-stretch&quot;</span>
                <span className="nt">&gt;</span>.flex-self-stretch<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>
                <span className="ni">&amp;nbsp;</span>
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
          <p>Using the equal width, equal height utilities:</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex">
            <div className="flex-md-item-equal p-3 border bg-gray-light">Stuff and things</div>
            <div className="flex-md-item-equal p-3 border bg-gray-light">
              More stuff
              <br /> on multiple lines
            </div>
            <div className="flex-md-item-equal p-3 border bg-gray-light">Hi mom</div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flex-md-item-equal p-3 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Stuff and things<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flex-md-item-equal p-3 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>More stuff<span className="nt">&lt;br&gt;</span> on multiple lines
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;flex-md-item-equal p-3 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>Hi mom<span className="nt">&lt;/div&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Example%20components" className="dashAnchor" />
          <h2>
            <a id="example-components" className="anchor" href="#example-components" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Example components
          </h2>
          <p>The flex utilities can be used to create a number of components. Here are some examples.</p>
          <a name="//apple_ref/cpp/Style/Media%20object" className="dashAnchor" />
          <h3>
            <a id="media-object" className="anchor" href="#media-object" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Media object
          </h3>
          <p>You can use flex utilities to make a simple media object, like this:</p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border d-flex flex-items-center p-4">
            <div className="p-5 border bg-gray-light">image</div>
            <p className="pl-4 m-0">
              <b>Body</b> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.
            </p>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border d-flex flex-items-center p-4&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;p-5 border bg-gray-light&quot;</span>
                <span className="nt">&gt;</span>image<span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;pl-4 m-0&quot;</span>
                <span className="nt">&gt;&lt;b&gt;</span>Body<span className="nt">&lt;/b&gt;</span> Bacon ipsum dolor sit amet chuck
                prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.<span className="nt">&lt;/p&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Responsive%20media%20object" className="dashAnchor" />
          <h3>
            <a id="responsive-media-object" className="anchor" href="#responsive-media-object" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Responsive media object
          </h3>
          <p>
            Here is an example of a media object that is <strong>vertically centered on large screens</strong>, but converts to a stacked
            column layout on small screens.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="border p-3 d-flex flex-column flex-md-row flex-md-items-center">
            <div className="pr-0 pr-md-3 mb-3 mb-md-0 d-flex flex-justify-center flex-md-justify-start">
              <img alt="" style={{ 'max-width': '100px', 'max-height': '100px' }} src="/images/gravatars/gravatar-user-420.png" />
            </div>
            <div className="d-flex text-center text-md-left">
              <p>
                <b>Body</b> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.
              </p>
            </div>
            <div className="ml-md-3 d-flex flex-justify-center">
              <svg height="16" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;border p-3 d-flex flex-column flex-md-row flex-md-items-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;pr-0 pr-md-3 mb-3 mb-md-0 d-flex flex-justify-center flex-md-justify-start&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">style=</span>
                <span className="s">&quot;max-width:100px; max-height:100px;&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;/images/gravatars/gravatar-user-420.png&quot;</span> <span className="nt">/&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;d-flex text-center text-md-left&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;p&gt;&lt;b&gt;</span>Body<span className="nt">&lt;/b&gt;</span> Bacon ipsum dolor sit amet chuck
                prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;ml-md-3 d-flex flex-justify-center&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;mark-github&quot;, :height =&gt; &apos;32&apos; %&gt;
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
          <a name="//apple_ref/cpp/Style/Flexbox%20bugs" className="dashAnchor" />
          <h2>
            <a id="flexbox-bugs" className="anchor" href="#flexbox-bugs" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Flexbox bugs
          </h2>
          <p>
            This section lists flexbox bugs that affect browsers we <a href=".../styles#user-content-browser-support">currently support</a>.
          </p>
          <p>
            <strong>1. Minimum content sizing of flex items not honored:</strong> Some browsers don&apos;t respect flex item size. Instead
            of respecting the minimum content size, items shrink below their minimum size which can create some undesirable results, such as
            overflowing text. The workaround is to apply <code>flex-shrink: 0;</code> to the items using <code>d-flex</code>. This can be
            applied with the <code>flex-shrink-0</code> utility. For more information read{' '}
            <a href="https://github.com/philipwalton/flexbugs#1-minimum-content-sizing-of-flex-items-not-honored">philipwalton/flexbugs</a>.
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/utilities/details/">
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
            Details
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/utilities/layout/">
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
