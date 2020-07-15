import React from 'react'

export function MainContent() {
  return (
    <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
      <div className="flex-row width-full bg-blue py-3 py-lg-6">
        <div className="main-content mx-auto py-4 px-3 px-md-6 px-lg-3 text-white">
          <div className="">
            <h1 className="f000-light mb-4">Primer</h1>

            <div className="f2-light pb-4">
              Resources, tooling, and design guidelines for building websites with Primer, GitHub&apos;s front-end framework.
            </div>
          </div>
        </div>
      </div>

      <div className="flex-row main-content my-6 mx-auto px-3 px-md-6 px-lg-3">
        <section className="pb-4">
          <h2 className="f00-light pt-6">Introduction</h2>
          <p className="f3-light mb-4">
            Our goal is to create a system that enables us to build consistent user experiences with ease, yet with enough flexibility to
            support the broad spectrum of GitHub websites. This goal is embedded in our design and code decisions. Our approach to CSS is
            influenced by Object Oriented CSS principles, functional CSS, and BEM architecture.
          </p>

          <p className="f3-light mb-4">
            This style guide is living documentation that will be updated as we continue to improve and evolve our design system.
          </p>
        </section>

        <section className="markdown-body">
          <ul className="list-style-none border-left border-thick pb-2 mb-6">
            <p className="h5 mb-3">Section contents</p>
            <li className="mb-3">
              <a className="text-bold" href="#styles-overview">
                Styles overview
              </a>
            </li>
            <li className="">
              <a className="text-bold" href="#primer-packages">
                Primer packages
              </a>
            </li>
          </ul>
        </section>

        <hr className="mx-auto my-6" style={{ width: '200px' }} />

        <section id="styles-overview" className="mb-6 pt-6 text-center">
          <h3 className="f1 text-normal">Highly reusable, flexible styles</h3>
          <p className="f3-light mb-4 container-md">
            Styles can be mixed and matched to achieve many different layouts, independent of their location. These styles fall into three
            categories:
          </p>

          <ul className="d-flex flex-wrap flex-md-nowrap list-style-none gutter-lg py-4 text-center">
            <li className="col-12 col-md-4 mb-5 mb-md-0">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 58.5 58.7" className="mb-3" width="62">
                <title>utilities</title>
                <path
                  d="M41.6 15.6l-1.4-1.4a1 1 0 1 0-1.4 1.4l1.4 1.4a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4zM33.9 7.9a1 1 0 1 0-1.4 1.4l1.4 1.4a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4zM27.9 26.6a1 1 0 0 0-1.4 1.4l1.4 1.4a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4zM21.6 20.2a1 1 0 0 0-1.4 1.4l1.4 1.4a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4zM15.4 38.7a1 1 0 0 0-1.4 1.4l1.4 1.4a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4zM9.3 32.7a1 1 0 1 0-1.4 1.4l1.4 1.4a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4z"
                  fill="#6bbcff"
                />
                <path
                  d="M26.6 13.4V1a.94.94 0 0 0-1-1H1a.94.94 0 0 0-1 1v24.8a.94.94 0 0 0 1 1h12.4a.94.94 0 0 0 1-1V14.4h11.2a1.08 1.08 0 0 0 1-1zm-2-1H13.4a.94.94 0 0 0-1 1v11.4H2V2h22.6v10.4zM58.2 19.9a.91.91 0 0 0-.7-.3H45.1a.94.94 0 0 0-1 1v11.3H33.9a1.9 1.9 0 0 0-1.9 1.9v10.6H21.5a1.9 1.9 0 0 0-1.9 1.9v10.5a1.9 1.9 0 0 0 1.9 1.9h36a.94.94 0 0 0 1-1V20.6a.91.91 0 0 0-.3-.7zm-1.7 1.7v22.8H46.1V21.7zM44.1 34v21.1L33.9 44.9 33.8 34h10.3zM21.5 46.4h11l10.4 10.4H21.5V46.4zm24.6 10.3V46.4h10.4v10.4z"
                  fill="#008fff"
                />
              </svg>

              <h3 className="text-normal">
                <a className="link-gray-dark" href="utilities/">
                  Utilities
                </a>
              </h3>
              <p className="px-1">Single purpose, immutable styles, that do one thing well.</p>
            </li>
            <li className="col-12 col-md-4 mb-5 mb-md-0">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 53.46 55.1" className="mb-3" width="60">
                <title>objects</title>
                <path
                  d="M38.1 41.9L2 41.8a2.08 2.08 0 0 1-2-2L.1 2a2 2 0 0 1 2-2l36.1.1a2 2 0 0 1 2 2l-.1 37.8a2 2 0 0 1-2 2zM2 39.75l36.1.16.1-37.8L2.1 2z"
                  fill="#2088ff"
                />
                <path
                  d="M44.9 48.5L8 48.4a1 1 0 1 1 0-2l36.8.1.1-38.4a1 1 0 0 1 1-1 1 1 0 0 1 1 1l-.1 38.5a1.9 1.9 0 0 1-1.9 1.9z"
                  fill="#79b8ff"
                />
                <path
                  d="M51.5 55.1L14.56 55a1 1 0 1 1 0-2l36.8.1.1-38.4a1 1 0 0 1 1-1 1 1 0 0 1 1 1l-.06 38.49a1.9 1.9 0 0 1-1.89 1.91z"
                  fill="#79b8ff"
                />
                <path
                  d="M29.7 32.6H10.5a1 1 0 1 1 0-2h19.2a1 1 0 0 1 0 2zM29.7 25.5H10.5a1 1 0 1 1 0-2h19.2a1 1 0 0 1 0 2zM29.7 18.4H10.5a1 1 0 1 1 0-2h19.2a1 1 0 1 1 0 2zM20.1 11.3h-9.6a1 1 0 1 1 0-2h9.6a1 1 0 1 1 0 2z"
                  fill="#2088ff"
                />
              </svg>

              <h3 className="text-normal">
                <a className="link-gray-dark" href="objects/">
                  Objects
                </a>
              </h3>
              <p className="px-1">Scaffolding for common page and content layouts.</p>
            </li>
            <li className="col-12 col-md-4">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 73.15 55.6" className="mb-3" width="72">
                <title>styles</title>
                <path
                  d="M70.1 55.6H42.55a3 3 0 0 1-3-3v-9.46a1 1 0 0 1 2 0v9.46a1 1 0 0 0 1 1h27.6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-27.6a1 1 0 0 0-1 1v10.8a1 1 0 1 1-2 0V3a3 3 0 0 1 3-3h27.6a3 3 0 0 1 3 3v49.6a3 3 0 0 1-3 3h-.05zM30.55 47.8H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h27.55a3 3 0 0 1 3 3v10.8a1 1 0 0 1-2 0V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v41.8a1 1 0 0 0 1 1h27.55a1 1 0 0 0 1-1v-1.62a1 1 0 0 1 2 0v1.62a3 3 0 0 1-3 3z"
                  fill="#79b8ff"
                />
                <path fill="#79b8ff" d="M40.5 8.6h31v2h-31zM1.6 8.6h31v2h-31z" />
                <path
                  d="M62.3 38.15H21.9a3 3 0 0 1-3-3v-13.9a3 3 0 0 1 3-3h40.4a3 3 0 0 1 3 3v13.9a3 3 0 0 1-3 3zm-40.4-17.9a1 1 0 0 0-1 1v13.9a1 1 0 0 0 1 1h40.4a1 1 0 0 0 1-1v-13.9a1 1 0 0 0-1-1H21.9z"
                  fill="#2088ff"
                />
                <path
                  d="M31.3 32.25h-3.64a2.39 2.39 0 0 1-2.11-2.3v-3.5a2.33 2.33 0 0 1 2.3-2.3h3.5a2.33 2.33 0 0 1 2.2 2.3v3.5a2.33 2.33 0 0 1-2.25 2.3zm-3.41-2h3.41a.32.32 0 0 0 .3-.3v-3.5a.32.32 0 0 0-.3-.3h-3.5a.32.32 0 0 0-.3.3v3.5a.43.43 0 0 0 .39.3zM57.1 29.15H38.7a1 1 0 0 1 0-2h18.4a1 1 0 0 1 0 2zM15.92 29.22a1 1 0 0 1-.45-.11l-.47-.2a6.86 6.86 0 0 1-.66-.26 1 1 0 0 1 .89-1.79l.47.2a6.86 6.86 0 0 1 .66.28 1 1 0 0 1-.44 1.88zM11.95 26.76a1 1 0 0 1-.71-.29 12.44 12.44 0 0 1-1.69-2.06 1 1 0 0 1 1.68-1.08A10.39 10.39 0 0 0 12.65 25a1 1 0 0 1-.7 1.76zM9.29 21.83a1 1 0 0 1-1-.76 6.13 6.13 0 0 1-.12-1.47 1 1 0 0 1 2 0 4.78 4.78 0 0 0 .06 1 1 1 0 0 1-.74 1.2z"
                  fill="#2088ff"
                />
              </svg>

              <h3 className="text-normal">
                <a className="link-gray-dark" href="components/">
                  Components
                </a>
              </h3>
              <p className="px-1">Abstracted patterns for frequently used visual styles.</p>
            </li>
          </ul>
        </section>

        <section className="mb-6 pt-6">
          <h3 className="f1 text-normal text-center">Systematically designed for GitHub</h3>
          <p className="f3-light mb-6 text-center container-md mx-auto">
            Primer is built upon systems that form the foundation of our styles such as spacing, typography, and color. This systematic
            approach helps ensure our styles are consistent and interoperable with each other.
          </p>

          <div className="col-12 col-md-11 mx-auto">
            <div className="d-flex flex-wrap flex-md-nowrap mb-5 pt-4">
              <div className="col-12 col-md-2 mb-3 mb-md-0 text-center flex-self-center">
                <svg width="100" height="100" viewBox="0 0 120 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>Group</title>
                  <desc>Created using Figma</desc>
                  <g id="Canvas" transform="translate(-12622 -7539)">
                    <g id="Group">
                      <g id="Line 5">
                        <use href="#path0_stroke" transform="matrix(6.13546e-17 1 -1 6.11103e-17 12740 7539)" fill="#2088FF" />
                      </g>
                      <g id="Line 5">
                        <use href="#path0_stroke" transform="matrix(6.12323e-17 1 -1 6.12323e-17 12622 7539)" fill="#2088FF" />
                      </g>
                      <g id="Line 5">
                        <use href="#path0_stroke" transform="matrix(6.16285e-17 1 -1 6.08387e-17 12681 7539)" fill="#79B8FF" />
                      </g>
                      <g id="Rectangle 10">
                        <use href="#path1_fill" transform="translate(12640.2 7559.69)" fill="#79B8FF" />
                      </g>
                      <g id="Rectangle 10">
                        <use href="#path1_fill" transform="translate(12699.2 7559.69)" fill="#79B8FF" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <path id="path0_stroke" d="M 0 0L 100 0L 100 -2L 0 -2L 0 0Z" />
                    <path id="path1_fill" d="M 0 0L 22.5588 0L 22.5588 58.6207L 0 58.6207L 0 0Z" />
                  </defs>
                </svg>
              </div>
              <div className="col-12 col-md-10 px-2 pl-md-6">
                <h4 className="f3 text-normal mb-2">Highly composable spacing scale</h4>
                <p>
                  The base-8 spacing scale is highly composable and works with the density of GitHub’s content. Margin and padding spacers
                  bring consistency to vertical and horizontal rhythm, while remaining flexible so you can tweak layouts to work for every
                  context.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap flex-md-nowrap mb-5">
              <div className="col-12 col-md-2 mb-3 mb-md-0 text-center flex-self-center">
                <img alt="" width="100" src="/assets/typography.png" />
              </div>
              <div className="col-12 col-md-10 px-2 pl-md-6">
                <h4 className="f3 text-normal mb-2">Customizable typography</h4>
                <p>
                  Font size and line-height options work together to result in more sensible numbers. Font styles come in a range of weights
                  and sizes so that we can style appropriately for content and readability. Type utilities allow us to change the visual
                  styles while keeping markup semantic.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap flex-md-nowrap mb-5 pb-4">
              <div className="col-12 col-md-2 mb-3 mb-md-0 text-center flex-self-center">
                <svg width="100" height="108" viewBox="0 0 108 108" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>Group</title>
                  <desc>Created using Figma</desc>
                  <g id="Canvas" transform="translate(-12627 -7962)">
                    <g id="Group">
                      <g id="Ellipse 3">
                        <use href="#path0_fill" transform="translate(12647.8 8003.54)" fill="#2088FF" fillOpacity="0.3" />
                      </g>
                      <g id="Ellipse 3">
                        <use href="#path0_fill" transform="translate(12668.5 7970.31)" fill="#2088FF" fillOpacity="0.3" />
                      </g>
                      <g id="Ellipse 3">
                        <use href="#path0_fill" transform="translate(12627 7970.31)" fill="#2088FF" fillOpacity="0.3" />
                      </g>
                      <g id="Ellipse 3">
                        <use href="#path0_fill" transform="translate(12627 7995.23)" fill="#2088FF" fillOpacity="0.3" />
                      </g>
                      <g id="Ellipse 3">
                        <use href="#path0_fill" transform="translate(12668.5 7995.23)" fill="#2088FF" fillOpacity="0.3" />
                      </g>
                      <g id="Ellipse 3">
                        <use href="#path0_fill" transform="translate(12647.8 7962)" fill="#2088FF" fillOpacity="0.3" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <path
                      id="path0_fill"
                      d="M 66.4615 33.2308C 66.4615 51.5836 51.5836 66.4615 33.2308 66.4615C 14.8779 66.4615 0 51.5836 0 33.2308C 0 14.8779 14.8779 0 33.2308 0C 51.5836 0 66.4615 14.8779 66.4615 33.2308Z"
                    />
                  </defs>
                </svg>
              </div>
              <div className="col-12 col-md-10 px-2 pl-md-6">
                <h4 className="f3 text-normal mb-2">Meaningful color</h4>
                <p>
                  The color system allows us to add meaningful signals to content and interactions. Color variables and utilities offer
                  thematic styling options without being tied to structure. Text and background colors come in a range of accessible
                  combinations to ensure we build inclusive interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="mx-auto my-6" style={{ width: '200px' }} />

        <section id="primer-packages" className="mb-6 pt-4">
          <h3 className="f1 text-normal">Primer packages</h3>
          <p className="f3-light mb-4">
            Each component or group of styles is packaged up and distributed via npm. Primer includes 23 packages that are grouped into
            useful meta-packages for easy install. Each package and meta-package is independently versioned and distributed via npm, so
            it&apos;s easy to include all or part of Primer within your own project.
          </p>

          <div className="mt-4">
            <div className="Box rounded-2 text-center bg-gray-light p-3 col-12 col-md-6 mx-auto mb-6">
              <h4 className="f3  d-inline-block mr-1">
                <a className="link-gray-dark" href="https://github.com/primer/primer/blob/master/modules/primer">
                  Primer
                </a>
              </h4>
              <span className="f3 d-inline-block mr-2">
                <a href="https://www.npmjs.com/package/primer">10.10.2</a>
              </span>
              <a className="v-align-text-bottom d-inline-block" title="npm version" href="https://travis-ci.org/primer/primer">
                <img alt="Build Status" src="https://travis-ci.org/primer/primer.svg?branch=master" />
              </a>
              <p className="mt-2 mb-0">This package includes all 32 Primer modules.</p>
            </div>

            <ul className="list-style-none d-flex flex-wrap gutter-sm">
              <li className="mb-3 col-12 col-md-4 d-flex">
                <div className="Box Box-condensed flex-md-column position-relative">
                  <div className="Box-header py-2">
                    <h4 className="text-normal d-inline-block mr-2">
                      <a className="link-gray-dark" href="https://github.com/primer/primer/blob/master/modules/primer-core">
                        Core
                      </a>
                    </h4>
                    <span className="d-inline-block">
                      <a href="https://www.npmjs.com/package/primer-core">6.10.6</a>
                    </span>
                  </div>
                  <p className="px-3 my-3">
                    The core package contains modules that are shared between GitHub product and marketing websites.
                  </p>
                  <h5 className="px-3 mt-3 mb-1">13 packages:</h5>
                  <ul className="px-3 mb-3 list-style-none">
                    <li>
                      <a href="https://www.npmjs.com/package/primer-base">primer-base</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-box">primer-box</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-breadcrumb">primer-breadcrumb</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-buttons">primer-buttons</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-forms">primer-forms</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-layout">primer-layout</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-navigation">primer-navigation</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-pagination">primer-pagination</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-support">primer-support</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-table-object">primer-table-object</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-tooltips">primer-tooltips</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-truncate">primer-truncate</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-utilities">primer-utilities</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mb-3 col-12 col-md-4 d-flex">
                <div className="Box Box-condensed flex-md-column position-relative">
                  <div className="Box-header py-2">
                    <h4 className="text-normal d-inline-block mr-2">
                      <a className="link-gray-dark" href="https://github.com/primer/primer/blob/master/modules/primer-product">
                        Product
                      </a>
                    </h4>
                    <span className="d-inline-block">
                      <a href="https://www.npmjs.com/package/primer-product">5.8.1</a>
                    </span>
                  </div>
                  <p className="px-3 my-3">The product package contains modules that are used on GitHub product websites.</p>
                  <h5 className="px-3 mt-3 mb-1">10 packages:</h5>
                  <ul className="px-3 mb-3 list-style-none">
                    <li>
                      <a href="https://www.npmjs.com/package/primer-alerts">primer-alerts</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-avatars">primer-avatars</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-blankslate">primer-blankslate</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-branch-name">primer-branch-name</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-labels">primer-labels</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-markdown">primer-markdown</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-popover">primer-popover</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-progress">primer-progress</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-subhead">primer-subhead</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-support">primer-support</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mb-3 col-12 col-md-4 d-flex">
                <div className="Box Box-condensed flex-md-column position-relative">
                  <div className="Box-header py-2">
                    <h4 className="text-normal d-inline-block mr-2">
                      <a className="link-gray-dark" href="https://github.com/primer/primer/blob/master/modules/primer-marketing">
                        Marketing
                      </a>
                    </h4>
                    <span className="d-inline-block">
                      <a href="https://www.npmjs.com/package/primer-marketing">6.3.1</a>
                    </span>
                  </div>
                  <p className="px-3 my-3">The marketing package contains modules that are used on GitHub marketing websites.</p>
                  <h5 className="px-3 mt-3 mb-1">8 packages:</h5>
                  <ul className="px-3 mb-3 list-style-none">
                    <li>
                      <a href="https://www.npmjs.com/package/primer-marketing-buttons">primer-marketing-buttons</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-marketing-support">primer-marketing-support</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-marketing-type">primer-marketing-type</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-marketing-utilities">primer-marketing-utilities</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-page-headers">primer-page-headers</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-page-sections">primer-page-sections</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-support">primer-support</a>
                    </li>

                    <li>
                      <a href="https://www.npmjs.com/package/primer-tables">primer-tables</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <div className="bg-gray py-6">
          <div className="d-flex flex-wrap flex-md-nowrap px-6 gutter-lg">
            <div className="col-12 col-md-9 pr-0 pr-lg-2">
              <h3 className="f3 text-normal">Use Primer in your project</h3>
              <p className="mb-3">Pick and choose what you need. Install the entire Primer bundle or individual packages via npm.</p>
              <a href="#styles-overview" className="btn btn-outline">
                Installation instructions
              </a>
            </div>

            <div className="col-12 col-md-6 pl-0 pl-lg-3">
              <h3 className="f3 text-normal">Learn how to build with Primer</h3>
              <p className="mb-3">
                The best way to learn is by doing. Our quick start guides will help you familiarize yourself with Primer.
              </p>
              <a href="#styles-overview" className="btn btn-outline">
                Take the tutorial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
