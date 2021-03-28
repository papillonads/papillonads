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
              <a href="/primer/utilities/colors/" aria-current="page" className="text-gray">
                Colors
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Colors</h2>
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
              4.11.1
            </a>
          </div>
          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>
        <div className="markdown-body">
          <p>Use color utilities to apply color to the background of elements, text, and borders.</p>
          <ul>
            <li>
              <a href="#background-colors">Background colors</a>
            </li>
            <li>
              <a href="#text-colors">Text colors</a>
            </li>
            <li>
              <a href="#link-colors">Link colors</a>
            </li>
            <li>
              <a href="#border-colors">Border colors</a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Background%20colors" className="dashAnchor" />
          <h2>
            <a id="background-colors" className="anchor" href="#background-colors" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Background colors
          </h2>
          <p>
            Background colors are most commonly used for filling large blocks of content or areas with a color. When selecting a background
            color, make sure the foreground color contrast passes a minimum WCAG accessibility rating of{' '}
            <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">level AA</a>. Meeting these standards
            ensures that content is accessible by everyone, regardless of disability or user device. You can{' '}
            <a href="http://jxnblk.com/colorable/demos/text/">check your color combination with this demo site</a>. For more information,
            read our <a href="/primer/principles/accessibility">accessibility standards</a>.
          </p>
          <a name="//apple_ref/cpp/Style/Gray" className="dashAnchor" />
          <h3>
            <a id="gray" className="anchor" href="#gray" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Gray
          </h3>
          <div className="container-lg clearfix mb-4">
            <div className="col-3 float-left pr-4">
              <div className="h4">.bg-gray</div>
              <code>#f6f8fa, $bg-gray</code>
              <div className="mt-2 bg-gray" style={{ height: '60px' }} />
            </div>
            <div className="col-9 float-left">
              <div className="container-lg clearfix">
                <div className="col-6 float-left">
                  <div className="h4">.bg-gray-dark</div>
                  <code>#24292e, $bg-gray-dark</code>
                  <div className="mt-2 bg-gray-dark border-right-0" style={{ height: '60px' }} />
                </div>
                <div className="col-6 float-left">
                  <div className="h4">.bg-gray-light</div>
                  <code>#fafbfc, $bg-gray-light</code>
                  <div className="mt-2 bg-gray-light" style={{ height: '60px' }} />
                </div>
              </div>
            </div>
          </div>
          <a name="//apple_ref/cpp/Style/Blue" className="dashAnchor" />
          <h3>
            <a id="blue" className="anchor" href="#blue" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Blue
          </h3>
          <div className="container-lg clearfix mb-4">
            <div className="col-3 float-left pr-4">
              <div className="h4">.bg-blue</div>
              <code>#0366d6, $bg-blue</code>
              <div className="mt-2 bg-blue" style={{ height: '60px' }} />
            </div>
            <div className="col-9 float-left">
              <div className="container-lg clearfix">
                <div className="h4">.bg-blue-light</div>
                <code>#f1f8ff, $bg-blue-light</code>
                <div className="mt-2 bg-blue-light" style={{ height: '60px' }} />
              </div>
            </div>
          </div>
          <a name="//apple_ref/cpp/Style/Yellow" className="dashAnchor" />
          <h3>
            <a id="yellow" className="anchor" href="#yellow" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Yellow
          </h3>
          <div className="container-lg clearfix mb-4">
            <div className="col-3 float-left pr-4">
              <div className="h4">.bg-yellow</div>
              <code>#ffd33d, $bg-yellow</code>
              <div className="mt-2 bg-yellow" style={{ height: '60px' }} />
            </div>
            <div className="col-9 float-left">
              <div className="container-lg clearfix">
                <div className="h4">.bg-yellow-light</div>
                <code>#fff5b1, $bg-yellow-light</code>
                <div className="mt-2 bg-yellow-light" style={{ height: '60px' }} />
              </div>
            </div>
          </div>
          <a name="//apple_ref/cpp/Style/Red" className="dashAnchor" />
          <h3>
            <a id="red" className="anchor" href="#red" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Red
          </h3>
          <div className="container-lg clearfix mb-4">
            <div className="col-3 float-left pr-4">
              <div className="h4">.bg-red</div>
              <code>#d73a49, $bg-red</code>
              <div className="mt-2 bg-red" style={{ height: '60px' }} />
            </div>
            <div className="col-9 float-left">
              <div className="container-lg clearfix">
                <div className="h4">.bg-red-light</div>
                <code>#ffdce0, $bg-red-light</code>
                <div className="mt-2 bg-red-light" style={{ height: '60px' }} />
              </div>
            </div>
          </div>
          <a name="//apple_ref/cpp/Style/Green" className="dashAnchor" />
          <h3>
            <a id="green" className="anchor" href="#green" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Green
          </h3>
          <div className="container-lg clearfix mb-4">
            <div className="col-3 float-left pr-4">
              <div className="h4">.bg-green</div>
              <code>#28a745, $bg-green</code>
              <div className="mt-2 bg-green" style={{ height: '60px' }} />
            </div>
            <div className="col-9 float-left">
              <div className="container-lg clearfix">
                <div className="h4">.bg-green-light</div>
                <code>#dcffe4, $bg-green-light</code>
                <div className="mt-2 bg-green-light" style={{ height: '60px' }} />
              </div>
            </div>
          </div>
          <a name="//apple_ref/cpp/Style/Purple" className="dashAnchor" />
          <h3>
            <a id="purple" className="anchor" href="#purple" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Purple
          </h3>
          <div className="container-lg clearfix mb-4">
            <div className="col-3 float-left pr-4">
              <div className="h4">.bg-purple</div>
              <code>#6f42c1, $bg-purple</code>
              <div className="mt-2 bg-purple" style={{ height: '60px' }} />
            </div>
            <div className="col-9 float-left">
              <div className="container-lg clearfix">
                <div className="h4">.bg-purple-light</div>
                <code>#f5f0ff, $bg-purple-light</code>
                <div className="mt-2 bg-purple-light" style={{ height: '60px' }} />
              </div>
            </div>
          </div>
          <a name="//apple_ref/cpp/Style/Text%20colors" className="dashAnchor" />
          <h2>
            <a id="text-colors" className="anchor" href="#text-colors" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Text colors
          </h2>
          <p>
            Use text color utilities to set text or <a href="/styleguide/css/styles/core/components/octicons">octicons</a> to a specific
            color. Color contrast must pass a minimum WCAG accessibility rating of{' '}
            <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">level AA</a>. This ensures that viewers
            who cannot see the full color spectrum are able to read the text. To customize outside of the suggested combinations below, we
            recommend using this <a href="http://jxnblk.com/colorable/demos/text/">color contrast testing tool</a>. For more information,
            read our <a href="/primer/principles/accessibility">accessibility standards</a>.
          </p>
          <p>
            These are our most common text with background color combinations. They don&apos;t all pass accessibility standards currently,
            but will be updated in the future. <strong>Any of the combinations with a warning icon must be used with caution</strong>.
          </p>
          <a name="//apple_ref/cpp/Style/Text%20color%20inheritance" className="dashAnchor" />
          <h3>
            <a id="text-color-inheritance" className="anchor" href="#text-color-inheritance" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Text color inheritance
          </h3>
          <p>
            You can set the color inheritance on an element by using the <code>text-inherit</code> class.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="text-purple">
            This text is purple,{' '}
            <a href="#" className="text-inherit">
              including the link
            </a>
          </div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-purple&quot;</span>
                <span className="nt">&gt;</span>
                This text is purple, <span className="nt">&lt;a</span> <span className="na">href=</span>
                <span className="s">&quot;#&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;text-inherit&quot;</span>
                <span className="nt">&gt;</span>including the link<span className="nt">&lt;/a&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Text%20on%20white%20background" className="dashAnchor" />
          <h3>
            <a id="text-on-white-background" className="anchor" href="#text-on-white-background" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Text on white background
          </h3>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="text-blue mb-2">.text-blue on white</div>
          <div className="text-gray-dark mb-2">.text-gray-dark on white</div>
          <div className="text-gray mb-2">.text-gray on white</div>
          <div className="text-red mb-2">.text-red on white</div>
          <div className="text-orange mb-2">.text-orange on white</div>
          <span className="float-left text-red tooltipped tooltipped-n" aria-label="Does not meet accessibility standards">
            <svg height="16" className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
              />
            </svg>
          </span>
          <div className="text-orange-light mb-2">.text-orange-light on white</div>
          <span className="float-left text-red tooltipped tooltipped-n" aria-label="Does not meet accessibility standards">
            <svg height="16" className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
              />
            </svg>
          </span>
          <div className="text-green mb-2 ml-4">.text-green on white</div>
          <div className="text-purple mb-2">.text-purple on white</div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-blue mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-blue on white
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-gray-dark mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-gray-dark on white
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-gray mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-gray on white
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-red mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-red on white
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-orange mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-orange on white
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;float-left text-red tooltipped tooltipped-n&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Does not meet accessibility standards&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;alert&quot;) %&gt;<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-orange-light mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-orange-light on white
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;float-left text-red tooltipped tooltipped-n&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Does not meet accessibility standards&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon(&quot;alert&quot;) %&gt;<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-green mb-2 ml-4&quot;</span>
                <span className="nt">&gt;</span>
                .text-green on white
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-purple mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-purple on white
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
          <a name="//apple_ref/cpp/Style/Text%20on%20colored%20backgrounds" className="dashAnchor" />
          <h3>
            <a id="text-on-colored-backgrounds" className="anchor" href="#text-on-colored-backgrounds" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Text on colored backgrounds
          </h3>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="text-white bg-blue mb-2">.text-white on .bg-blue</div>
          <div className="bg-blue-light mb-2">.text-gray-dark on .bg-blue-light</div>
          <div className="text-white bg-red mb-2">.text-white on .bg-red</div>
          <div className="text-red bg-red-light mb-2">.text-red on .bg-red-light</div>
          <div className="bg-green-light mb-2">.text-gray-dark on .bg-green-light</div>
          <div className="bg-yellow mb-2">.text-gray-dark on .bg-yellow</div>
          <div className="bg-yellow-light mb-2">.text-gray-dark on .bg-yellow-light</div>
          <div className="text-white bg-purple mb-2">.text-white on .bg-purple</div>
          <div className="text-white bg-gray-dark mb-2">.text-white on .bg-gray-dark</div>
          <div className="bg-gray">.text-gray-dark on .bg-gray</div>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-white bg-blue mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-white on .bg-blue
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;bg-blue-light mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-gray-dark on .bg-blue-light
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-white bg-red mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-white on .bg-red
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-red bg-red-light mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-red on .bg-red-light
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;bg-green-light mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-gray-dark on .bg-green-light
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;bg-yellow mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-gray-dark on .bg-yellow
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;bg-yellow-light mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-gray-dark on .bg-yellow-light
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-white bg-purple mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-white on .bg-purple
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;text-white bg-gray-dark mb-2&quot;</span>
                <span className="nt">&gt;</span>
                .text-white on .bg-gray-dark
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;bg-gray&quot;</span>
                <span className="nt">&gt;</span>
                .text-gray-dark on .bg-gray
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
          <a name="//apple_ref/cpp/Style/Link%20colors" className="dashAnchor" />
          <h2>
            <a id="link-colors" className="anchor" href="#link-colors" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Link colors
          </h2>
          <p>
            Base link styles turn links blue and apply an underline on hover. You can override the base link styles with text color
            utilities and the following link utilities.{' '}
            <strong>
              Bear in mind that link styles are easier for more people to see and interact with when the changes in styles do not rely on
              color alone.
            </strong>
          </p>
          <p>
            Use <code>link-gray</code> to turn the link color to <code>$text-gray</code> and remain hover on blue.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <a className="link-gray" href="#url">
            link-gray
          </a>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;link-gray&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>link-gray<span className="nt">&lt;/a&gt;</span>
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
            Use <code>link-gray-dark</code> to turn the link color to <code>$text-gray-dark</code> and remain hover on blue.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <a className="link-gray-dark" href="#url">
            link-gray-dark
          </a>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;link-gray-dark&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>link-gray-dark<span className="nt">&lt;/a&gt;</span>
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
            Use <code>.muted-link</code> to turn the link light gray in color, and blue on hover or focus with no underline.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <a className="muted-link" href="#url">
            muted-link
          </a>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;muted-link&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>muted-link<span className="nt">&lt;/a&gt;</span>
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
            Use <code>link-hover-blue</code> to make any text color used with links to turn blue on hover. This is useful when you want only
            part of a link to turn blue on hover.
          </p>
        </div>
        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <a className="text-gray-dark no-underline" href="#url">
            A link with only part of it is <span className="link-hover-blue">blue on hover</span>.
          </a>
        </div>
        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;a</span> <span className="na">className=</span>
                <span className="s">&quot;text-gray-dark no-underline&quot;</span> <span className="na">href=</span>
                <span className="s">&quot;#url&quot;</span>
                <span className="nt">&gt;</span>A link with only part of it is <span className="nt">&lt;span</span>{' '}
                <span className="na">className=</span>
                <span className="s">&quot;link-hover-blue&quot;</span>
                <span className="nt">&gt;</span>blue on hover<span className="nt">&lt;/span&gt;</span>.
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
          <a name="//apple_ref/cpp/Style/Border%20colors" className="dashAnchor" />
          <h2>
            <a id="border-colors" className="anchor" href="#border-colors" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Border colors
          </h2>
          <p>
            Border colors are documented on the{' '}
            <a href="../..//utilities/borders#border-width-style-and-color-utilities">border utilities page</a>.
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div />
        <div className="align-right" />
      </div>
    </main>
  )
}
