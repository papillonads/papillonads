import { navigationDefaultProps, navigationPropTypes } from './Navigation.prop'

export function Navigation() {
  return (
    <div
      className="bg-gray-dark"
      style={{
        position: '-webkit-sticky',
        position: 'sticky', // eslint-disable-line
        top: 0,
        left: 0,
        right: 0,
        zIndex: 101,
      }}
    >
      <div
        className="main-nav d-flex flex-justify-between px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark Details js-details-container"
        data-pjax="#js-pjax-container"
      >
        <div className="d-flex flex-self-center flex-lg-auto mr-lg-2">
          <a href="/" className="border-gray-dark no-underline text-white" aria-label="Github Style guide">
            <svg
              height="28"
              aria-label="github-logo"
              className="octicon octicon-mark-github"
              viewBox="0 0 16 16"
              version="1.1"
              width="28"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          <div className="flex-self-center Details-content--shown">
            <div className="dropdown js-menu-container js-select-menu">
              <h1 className="h4 text-normal pl-3 mt-1">
                <button
                  className="btn-link text-white link-white no-underline js-menu-target"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Primer
                  <div className="dropdown-caret" />
                </button>
              </h1>
              <div className="dropdown-menu-content js-menu-content">
                <ul className="dropdown-menu dropdown-menu-se mt-2 ml-3">
                  <li>
                    <a href="/primer/" className="dropdown-item text-bold">
                      Primer
                    </a>
                  </li>
                  <li>
                    <a href="/js/" className="dropdown-item">
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <a href="/brand/" className="dropdown-item">
                      Brand Guide
                    </a>
                  </li>
                  <li>
                    <a href="/email/" className="dropdown-item">
                      Email (WIP)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-flex flex-justify-end">
          <nav className="flex-self-center flex-shrink-0 text-white" aria-label="Primary">
            <a href="/primer/" className="text-white px-md-1 px-lg-2 text-bold">
              Docs
            </a>
            <a href="/primer/getting_started/" className="text-white px-md-1 px-lg-2">
              Getting started
            </a>
            <a href="/primer/principles/" className="text-white px-md-1 px-lg-2">
              Principles
            </a>
            <a href="/primer/tools/" className="text-white px-md-1 px-lg-2">
              Tools
            </a>
            <a href="/primer/whats_new/" className="text-white px-md-1 px-lg-2">
              Whatʼs new
            </a>
          </nav>
        </div>
        <div className="d-flex flex-self-auto flex-justify-end col-12 col-lg-2">
          <a href="#navigation" className="Details-content--shown d-lg-none btn btn-outline btn-dark mr-2">
            Menu
          </a>
          <button
            type="button"
            aria-expanded="false"
            aria-controls="search-form"
            className="Details-content--shown d-lg-none btn btn-outline btn-dark py-2 js-details-target js-form-autofocus js-search-prop"
          >
            <svg height="16" aria-label="search" className="octicon octicon-search" viewBox="0 0 16 16" version="1.1" width="16" role="img">
              <path
                fillRule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              />
            </svg>
          </button>
          <div className="Details-content--hidden Details-lg-content--shown flex-self-center flex-auto col-12 ml-2 ml-lg-3">
            <form
              acceptCharset="UTF-8"
              autoComplete="off"
              className="mb-0 position-relative mx-2 anim-slide-in js-search"
              data-type="css"
              id="search-form"
              disabled=""
            >
              <input
                type="text"
                autoComplete="off"
                data-hotkey="s"
                placeholder="Search Primer"
                className="js-navigation-enable js-form-autofocus-target form-control width-full search-dark f4 f-lg-5"
                id="search-query"
                name="q"
              />
            </form>
            <div
              className="js-search-results js-navigation-container js-active-navigation-container
      position-absolute bg-white mt-3 mt-lg-1 mr-lg-3 right-0 box-shadow-medium
      search-results"
              hidden="true"
            >
              <div className="js-search-no-results p-3 p-lg-2" hidden="">
                No results found for “<span className="js-search-query-text" />”
              </div>
            </div>
          </div>
          <button
            type="button"
            aria-expanded="false"
            aria-controls="search-form"
            className="d-lg-none btn btn-outline btn-link anim-fade-in fast text-white px-2 mr-n2 js-details-target Details-content--hidden js-escape-hatch"
          >
            <svg
              height="16"
              className="octicon octicon-x fill-white"
              aria-label="close"
              viewBox="0 0 12 16"
              version="1.1"
              width="12"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

Navigation.defaultProps = navigationDefaultProps

Navigation.propTypes = navigationPropTypes
