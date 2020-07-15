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
              <a href="/primer/support/">Support</a>
            </li>
            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/support/color-system/" aria-current="page" className="text-gray">
                Color system
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Color system</h2>
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
              href="https://github.com/primer/primer/blob/master/modules/primer-support/lib/variables/color-system.scss"
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
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1"
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
          </div>
          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>
        <div className="markdown-body">
          <ul id="markdown-toc">
            <li>
              <a href="#color-palette" id="markdown-toc-color-palette">
                Color palette
              </a>
            </li>
            <li>
              <a href="#color-variables" id="markdown-toc-color-variables">
                Color variables
              </a>
              <ul>
                <li>
                  <a href="#gray" id="markdown-toc-gray">
                    Gray
                  </a>
                </li>
                <li>
                  <a href="#blue" id="markdown-toc-blue">
                    Blue
                  </a>
                </li>
                <li>
                  <a href="#green" id="markdown-toc-green">
                    Green
                  </a>
                </li>
                <li>
                  <a href="#yellow" id="markdown-toc-yellow">
                    Yellow
                  </a>
                </li>
                <li>
                  <a href="#orange" id="markdown-toc-orange">
                    Orange
                  </a>
                </li>
                <li>
                  <a href="#red" id="markdown-toc-red">
                    Red
                  </a>
                </li>
                <li>
                  <a href="#purple" id="markdown-toc-purple">
                    Purple
                  </a>
                </li>
                <li>
                  <a href="#black-fades" id="markdown-toc-black-fades">
                    Black fades
                  </a>
                </li>
                <li>
                  <a href="#white-fades" id="markdown-toc-white-fades">
                    White fades
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Color%20palette" className="dashAnchor" />
          <h2>
            <a id="color-palette" className="anchor" href="#color-palette" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Color palette
          </h2>
          <div className="markdown-no-margin mb-6 d-flex h5">
            <div className="gray-500 d-flex color-square mr-2">
              <p className="p-3 flex-self-end text-white">Gray</p>
            </div>
            <div className="blue-500 d-flex color-square mr-2">
              <p className="p-3 flex-self-end text-white">Blue</p>
            </div>
            <div className="green-500 d-flex color-square mr-2">
              <p className="p-3 flex-self-end text-white">Green</p>
            </div>
            <div className="purple-500 d-flex color-square mr-2">
              <p className="p-3 flex-self-end text-white">Purple</p>
            </div>
            <div className="yellow-500 d-flex color-square mr-2">
              <p className="p-3 flex-self-end">Yellow</p>
            </div>
            <div className="orange-500 d-flex color-square mr-2">
              <p className="p-3 flex-self-end">Orange</p>
            </div>
            <div className="red-500 d-flex color-square mr-2">
              <p className="p-3 flex-self-end text-white">Red</p>
            </div>
            <div className="bg-white d-flex color-square border border-gray-dark">
              <p className="p-3 flex-self-end">White</p>
            </div>
          </div>
          <a name="//apple_ref/cpp/Style/Color%20variables" className="dashAnchor" />
          <h2>
            <a id="color-variables" className="anchor" href="#color-variables" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Color variables
          </h2>
          <div className="d-flex flex-wrap gutter">
            <div className="mb-6 flex-column col-6 markdown-no-margin">
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
              <div className="gray-500 my-2 p-3 text-white">
                <p className="f00-light pb-3">Gray</p>
                <div className="d-flex">
                  <p className="h4 flex-auto">$gray-500</p>
                  <p className="text-right text-mono flex-auto  text-normal">#6a737d</p>
                </div>
              </div>
              <div className="gray-000 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#fafbfc</span>
                <p className="p-3">$gray-000</p>
              </div>
              <div className="gray-100 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#f6f8fa</span>
                <p className="p-3">$gray-100</p>
              </div>
              <div className="gray-200 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#e1e4e8</span>
                <p className="p-3">$gray-200</p>
              </div>
              <div className="gray-300 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#d1d5da</span>
                <p className="p-3">$gray-300</p>
              </div>
              <div className="gray-400 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#959da5</span>
                <p className="p-3">$gray-400</p>
              </div>
              <div className="gray-500 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#6a737d</span>
                <p className="p-3">$gray-500</p>
              </div>
              <div className="gray-600 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#586069</span>
                <p className="p-3">$gray-600</p>
              </div>
              <div className="gray-700 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#444d56</span>
                <p className="p-3">$gray-700</p>
              </div>
              <div className="gray-800 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#2f363d</span>
                <p className="p-3">$gray-800</p>
              </div>
              <div className="gray-900 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#24292e</span>
                <p className="p-3">$gray-900</p>
              </div>
            </div>
            <div className="mb-6 flex-column col-6 markdown-no-margin">
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
              <div className="blue-500 my-2 p-3 text-white">
                <p className="f00-light pb-3">Blue</p>
                <div className="d-flex">
                  <p className="h4 flex-auto">$blue-500</p>
                  <p className="text-right text-mono flex-auto  text-normal">#0366d6</p>
                </div>
              </div>
              <div className="blue-000 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#f1f8ff</span>
                <p className="p-3">$blue-000</p>
              </div>
              <div className="blue-100 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#dbedff</span>
                <p className="p-3">$blue-100</p>
              </div>
              <div className="blue-200 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#c8e1ff</span>
                <p className="p-3">$blue-200</p>
              </div>
              <div className="blue-300 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#79b8ff</span>
                <p className="p-3">$blue-300</p>
              </div>
              <div className="blue-400 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#2188ff</span>
                <p className="p-3">$blue-400</p>
              </div>
              <div className="blue-500 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#0366d6</span>
                <p className="p-3">$blue-500</p>
              </div>
              <div className="blue-600 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#005cc5</span>
                <p className="p-3">$blue-600</p>
              </div>
              <div className="blue-700 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#044289</span>
                <p className="p-3">$blue-700</p>
              </div>
              <div className="blue-800 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#032f62</span>
                <p className="p-3">$blue-800</p>
              </div>
              <div className="blue-900 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#05264c</span>
                <p className="p-3">$blue-900</p>
              </div>
            </div>
            <div className="mb-6 flex-column col-6 markdown-no-margin">
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
              <div className="green-500 my-2 p-3 text-white">
                <p className="f00-light pb-3">Green</p>
                <div className="d-flex">
                  <p className="h4 flex-auto">$green-500</p>
                  <p className="text-right text-mono flex-auto  text-normal">#28a745</p>
                </div>
              </div>
              <div className="green-000 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#f0fff4</span>
                <p className="p-3">$green-000</p>
              </div>
              <div className="green-100 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#dcffe4</span>
                <p className="p-3">$green-100</p>
              </div>
              <div className="green-200 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#bef5cb</span>
                <p className="p-3">$green-200</p>
              </div>
              <div className="green-300 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#85e89d</span>
                <p className="p-3">$green-300</p>
              </div>
              <div className="green-400 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#34d058</span>
                <p className="p-3">$green-400</p>
              </div>
              <div className="green-500 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#28a745</span>
                <p className="p-3">$green-500</p>
              </div>
              <div className="green-600 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#22863a</span>
                <p className="p-3">$green-600</p>
              </div>
              <div className="green-700 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#176f2c</span>
                <p className="p-3">$green-700</p>
              </div>
              <div className="green-800 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#165c26</span>
                <p className="p-3">$green-800</p>
              </div>
              <div className="green-900 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#144620</span>
                <p className="p-3">$green-900</p>
              </div>
            </div>
            <div className="mb-6 flex-column col-6 markdown-no-margin">
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
              <div className="yellow-500 my-2 p-3 text-black">
                <p className="f00-light pb-3">Yellow</p>
                <div className="d-flex">
                  <p className="h4 flex-auto">$yellow-500</p>
                  <p className="text-right text-mono flex-auto  text-normal">#ffd33d</p>
                </div>
              </div>
              <div className="yellow-000 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#fffdef</span>
                <p className="p-3">$yellow-000</p>
              </div>
              <div className="yellow-100 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#fffbdd</span>
                <p className="p-3">$yellow-100</p>
              </div>
              <div className="yellow-200 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#fff5b1</span>
                <p className="p-3">$yellow-200</p>
              </div>
              <div className="yellow-300 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#ffea7f</span>
                <p className="p-3">$yellow-300</p>
              </div>
              <div className="yellow-400 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#ffdf5d</span>
                <p className="p-3">$yellow-400</p>
              </div>
              <div className="yellow-500 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#ffd33d</span>
                <p className="p-3">$yellow-500</p>
              </div>
              <div className="yellow-600 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#f9c513</span>
                <p className="p-3">$yellow-600</p>
              </div>
              <div className="yellow-700 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#dbab09</span>
                <p className="p-3">$yellow-700</p>
              </div>
              <div className="yellow-800 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#b08800</span>
                <p className="p-3">$yellow-800</p>
              </div>
              <div className="yellow-900 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#735c0f</span>
                <p className="p-3">$yellow-900</p>
              </div>
            </div>
            <div className="mb-6 flex-column col-6 markdown-no-margin">
              <a name="//apple_ref/cpp/Style/Orange" className="dashAnchor" />
              <h3>
                <a id="orange" className="anchor" href="#orange" aria-hidden="true">
                  <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                    />
                  </svg>
                </a>
                Orange
              </h3>
              <div className="orange-500 my-2 p-3 text-white">
                <p className="f00-light pb-3">Orange</p>
                <div className="d-flex">
                  <p className="h4 flex-auto">$orange-500</p>
                  <p className="text-right text-mono flex-auto  text-normal">#f66a0a</p>
                </div>
              </div>
              <div className="orange-000 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#fff8f2</span>
                <p className="p-3">$orange-000</p>
              </div>
              <div className="orange-100 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#ffebda</span>
                <p className="p-3">$orange-100</p>
              </div>
              <div className="orange-200 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#ffd1ac</span>
                <p className="p-3">$orange-200</p>
              </div>
              <div className="orange-300 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#ffab70</span>
                <p className="p-3">$orange-300</p>
              </div>
              <div className="orange-400 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#fb8532</span>
                <p className="p-3">$orange-400</p>
              </div>
              <div className="orange-500 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#f66a0a</span>
                <p className="p-3">$orange-500</p>
              </div>
              <div className="orange-600 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#e36209</span>
                <p className="p-3">$orange-600</p>
              </div>
              <div className="orange-700 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#d15704</span>
                <p className="p-3">$orange-700</p>
              </div>
              <div className="orange-800 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#c24e00</span>
                <p className="p-3">$orange-800</p>
              </div>
              <div className="orange-900 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#a04100</span>
                <p className="p-3">$orange-900</p>
              </div>
            </div>
            <div className="mb-6 flex-column col-6 markdown-no-margin">
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
              <div className="red-500 my-2 p-3 text-white">
                <p className="f00-light pb-3">Red</p>
                <div className="d-flex">
                  <p className="h4 flex-auto">$red-500</p>
                  <p className="text-right text-mono flex-auto  text-normal">#d73a49</p>
                </div>
              </div>
              <div className="red-000 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#ffeef0</span>
                <p className="p-3">$red-000</p>
              </div>
              <div className="red-100 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#ffdce0</span>
                <p className="p-3">$red-100</p>
              </div>
              <div className="red-200 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#fdaeb7</span>
                <p className="p-3">$red-200</p>
              </div>
              <div className="red-300 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#f97583</span>
                <p className="p-3">$red-300</p>
              </div>
              <div className="red-400 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#ea4a5a</span>
                <p className="p-3">$red-400</p>
              </div>
              <div className="red-500 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#d73a49</span>
                <p className="p-3">$red-500</p>
              </div>
              <div className="red-600 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#cb2431</span>
                <p className="p-3">$red-600</p>
              </div>
              <div className="red-700 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#b31d28</span>
                <p className="p-3">$red-700</p>
              </div>
              <div className="red-800 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#9e1c23</span>
                <p className="p-3">$red-800</p>
              </div>
              <div className="red-900 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#86181d</span>
                <p className="p-3">$red-900</p>
              </div>
            </div>
            <div className="mb-6 flex-column col-6 markdown-no-margin">
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
              <div className="purple-500 my-2 p-3 text-white">
                <p className="f00-light pb-3">Purple</p>
                <div className="d-flex">
                  <p className="h4 flex-auto">$purple-500</p>
                  <p className="text-right text-mono flex-auto  text-normal">#6f42c1</p>
                </div>
              </div>
              <div className="purple-000 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#f5f0ff</span>
                <p className="p-3">$purple-000</p>
              </div>
              <div className="purple-100 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#e6dcfd</span>
                <p className="p-3">$purple-100</p>
              </div>
              <div className="purple-200 h4 text-black">
                <span className="float-right p-3 text-mono text-normal">#d1bcf9</span>
                <p className="p-3">$purple-200</p>
              </div>
              <div className="purple-300 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#b392f0</span>
                <p className="p-3">$purple-300</p>
              </div>
              <div className="purple-400 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#8a63d2</span>
                <p className="p-3">$purple-400</p>
              </div>
              <div className="purple-500 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#6f42c1</span>
                <p className="p-3">$purple-500</p>
              </div>
              <div className="purple-600 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#5a32a3</span>
                <p className="p-3">$purple-600</p>
              </div>
              <div className="purple-700 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#4c2889</span>
                <p className="p-3">$purple-700</p>
              </div>
              <div className="purple-800 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#3a1d6e</span>
                <p className="p-3">$purple-800</p>
              </div>
              <div className="purple-900 h4 text-white">
                <span className="float-right p-3 text-mono text-normal">#29134e</span>
                <p className="p-3">$purple-900</p>
              </div>
            </div>
            <div className="mb-6 flex-column col-6" />

            <div className="mb-3 flex-column col-6 markdown-no-margin">
              <a name="//apple_ref/cpp/Style/Black%20fades" className="dashAnchor" />
              <h3>
                <a id="black-fades" className="anchor" href="#black-fades" aria-hidden="true">
                  <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                    />
                  </svg>
                </a>
                Black fades
              </h3>
              <div className="black text-white my-2 p-3">
                <p className="f00-light pb-3">Black</p>
                <div className="d-flex pb-1">
                  <p className="h4 flex-auto">$black</p>
                  <p className="text-right text-mono flex-auto">
                    <code>rgb(27,31,35)</code> #1b1f23
                  </p>
                </div>
                <p className="f5 pt-3 border-top border-white">
                  Black fades apply alpha transparency to the <strong>$black</strong> variable. The black color value has a slight blue hue
                  to match our grays.
                </p>
              </div>
              <div className="bg-white">
                <div className="black-fade-15">
                  <p className="h4 p-3">$black-fade-15</p>
                </div>
                <div className="black-fade-30">
                  <p className="h4 p-3">$black-fade-30</p>
                </div>
                <div className="black-fade-50">
                  <p className="h4 p-3">$black-fade-50</p>
                </div>
                <div className="black-fade-70">
                  <p className="h4 p-3 text-white">$black-fade-70</p>
                </div>
                <div className="black-fade-85">
                  <p className="h4 p-3 text-white">$black-fade-85</p>
                </div>
              </div>
            </div>
            <div className="mb-3 flex-column col-6 markdown-no-margin">
              <a name="//apple_ref/cpp/Style/White%20fades" className="dashAnchor" />
              <h3>
                <a id="white-fades" className="anchor" href="#white-fades" aria-hidden="true">
                  <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                    />
                  </svg>
                </a>
                White fades
              </h3>
              <div className="bg-white border text-gray-dark my-2 p-3">
                <p className="f00-light pb-3">White</p>
                <div className="d-flex pb-1">
                  <p className="h4 flex-auto">$white</p>
                  <p className="text-right text-mono flex-auto">
                    <code>rgb(255, 255, 255)</code> #fff
                  </p>
                </div>
                <p className="f5 pt-3 border-top border-white">
                  White fades apply alpha transparency to the <strong>$white</strong> variable, below these are shown overlaid on a dark
                  gray background.
                </p>
              </div>
              <div className="bg-gray-dark">
                <div className="white-fade-15">
                  <p className="h4 p-3 text-white">$white-fade-15</p>
                </div>
                <div className="white-fade-30">
                  <p className="h4 p-3 text-white">$white-fade-30</p>
                </div>
                <div className="white-fade-50">
                  <p className="h4 p-3">$white-fade-50</p>
                </div>
                <div className="white-fade-70">
                  <p className="h4 p-3">$white-fade-70</p>
                </div>
                <div className="white-fade-85">
                  <p className="h4 p-3">$white-fade-85</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div />
        <div className="align-right" />
      </div>
    </main>
  )
}
/* eslint-enable jsx-a11y/anchor-has-content */
/* eslint-enable jsx-a11y/anchor-is-valid */
