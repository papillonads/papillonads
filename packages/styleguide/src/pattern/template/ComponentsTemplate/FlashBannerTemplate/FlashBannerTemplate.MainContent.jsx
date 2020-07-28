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
              <a href="/primer/components/flash-banner/" aria-current="page" className="text-gray">
                Flash banner
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Flash banner</h2>

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
              href="https://github.com/github/github/blob/master/docs/styleguide/css/styles/product/components/flash-banner.md"
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
              href="/primer/whats_new/status-key/#in-review"
              aria-label="May be refactored or deprecated; check issue for details"
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1"
            >
              <span className="text-yellow mr-1" aria-label="In review">
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
              In review
            </a>
          </div>
        </div>

        <div className="markdown-body">
          <p>
            <strong>Needs documentation.</strong>
          </p>
          <p>A banner rendered at the top of the page and a warning banner shown when you log in/out in another tab.</p>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div className="align-right" />
      </div>
    </main>
  )
}
