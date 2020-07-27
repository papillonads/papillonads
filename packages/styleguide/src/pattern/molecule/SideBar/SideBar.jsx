import React from 'react'
import { Link } from 'react-router-dom'
import { sideBarDefaultProps, sideBarPropTypes } from './SideBar.prop'
import { supportPageRoute, utilityPageRoute, objectsPageRoute, componentsPageRoute } from '../../../route'

export function SideBar() {
  return (
    <nav id="navigation" className="sidebar flex-column flex-justify-start overflow-auto border-right bg-gray-light pb-4" data-pjax="">
      <ul className="list-style-none">
        <li className="px-4 my-4">
          <Link
            className="position-relative f4 d-block text-gray-dark position-relative f4 d-block text-gray-dark text-bold"
            to={supportPageRoute.support.path}
          >
            Support
          </Link>

          <ul className="pt-2 list-style-none">
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={supportPageRoute.breakpoints.path}>
                Breakpoints
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={supportPageRoute.colorSystem.path}>
                Color system
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
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
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={supportPageRoute.spacing.path}>
                Spacing
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={supportPageRoute.typography.path}>
                Typography
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={supportPageRoute.marketingVariables.path}>
                Marketing variables
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="new release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="mt-4 border-bottom" />

        <li className="px-4 my-4">
          <Link
            className="position-relative f4 d-block text-gray-dark position-relative f4 d-block text-gray-dark text-bold"
            to={utilityPageRoute.utility.path}
          >
            Utilities
          </Link>

          <ul className="pt-2 list-style-none">
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.animations.path}>
                Animations
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.borders.path}>
                Borders
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.marketingBorders.path}>
                Marketing borders
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.boxShadow.path}>
                Box shadow
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.colors.path}>
                Colors
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.details.path}>
                Details
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.marketingFilters.path}>
                Filters
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.flexbox.path}>
                Flexbox
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.layout.path}>
                Layout
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.marketingLayout.path}>
                Marketing layout
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.margin.path}>
                Margin
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.marketingMargin.path}>
                Marketing margin
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.padding.path}>
                Padding
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.marketingPadding.path}>
                Marketing padding
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.typography.path}>
                Typography
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={utilityPageRoute.marketingTypography.path}>
                Marketing typography
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="mt-4 border-bottom" />

        <li className="px-4 my-4">
          <Link
            className="position-relative f4 d-block text-gray-dark position-relative f4 d-block text-gray-dark text-bold"
            to={objectsPageRoute.objects.path}
          >
            Objects
          </Link>

          <ul className="pt-2 list-style-none">
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={objectsPageRoute.grid.path}>
                Grid
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={objectsPageRoute.layout.path}>
                Layout
                <span className="position-absolute right-0">
                  <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={objectsPageRoute.tableObject.path}>
                Table object
              </Link>
            </li>
          </ul>
        </li>
        <li className="mt-4 border-bottom" />

        <li className="px-4 my-4">
          <Link
            className="position-relative f4 d-block text-gray-dark position-relative f4 d-block text-gray-dark text-bold"
            to={componentsPageRoute.components.path}
          >
            Components
          </Link>

          <ul className="pt-2 list-style-none">
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={componentsPageRoute.alerts.path}>
                Alerts
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={componentsPageRoute.avatars.path}>
                Avatars
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={componentsPageRoute.blankslate.path}>
                Blankslate
              </Link>
            </li>

            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={componentsPageRoute.box.path}>
                Box
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>

            <li className="">
              <a href="/primer/components/box-overlay/" className="position-relative f5 py-1 d-block">
                Box overlay
                <span className="position-absolute right-0">
                  <span className="text-yellow  tooltipped tooltipped-nw" aria-label="Experimental">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/boxed-groups/" className="position-relative f5 py-1 d-block">
                Boxed groups
                <span className="position-absolute right-0">
                  <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/branch-name/" className="position-relative f5 py-1 d-block">
                Branch name
              </a>
            </li>

            <li className="">
              <a href="/primer/components/breadcrumb/" className="position-relative f5 py-1 d-block">
                Breadcrumbs
              </a>
            </li>

            <li className="">
              <a href="/primer/components/buttons/" className="position-relative f5 py-1 d-block">
                Buttons
              </a>
            </li>

            <li className="">
              <a href="/primer/components/dropdown/" className="position-relative f5 py-1 d-block">
                Dropdown
              </a>
            </li>

            <li className="">
              <a href="/primer/components/flash-banner/" className="position-relative f5 py-1 d-block">
                Flash banner
                <span className="position-absolute right-0">
                  <span className="text-yellow  tooltipped tooltipped-nw" aria-label="In review">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/forms/" className="position-relative f5 py-1 d-block">
                Forms
              </a>
            </li>

            <li className="">
              <a href="/primer/components/labels/" className="position-relative f5 py-1 d-block">
                Labels
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/markdown/" className="position-relative f5 py-1 d-block">
                Markdown
              </a>
            </li>

            <li className="">
              <a href="/primer/components/marketing-buttons/" className="position-relative f5 py-1 d-block">
                Marketing Buttons
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/navigation/" className="position-relative f5 py-1 d-block">
                Navigation
              </a>
            </li>

            <li className="">
              <a href="/primer/components/octicons/" className="position-relative f5 py-1 d-block">
                Octicons
              </a>
            </li>

            <li className="">
              <a href="/primer/components/page-headers/" className="position-relative f5 py-1 d-block">
                Page headers
                <span className="position-absolute right-0">
                  <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/page-sections/" className="position-relative f5 py-1 d-block">
                Page sections
                <span className="position-absolute right-0">
                  <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/pagehead/" className="position-relative f5 py-1 d-block">
                Pagehead
              </a>
            </li>

            <li className="">
              <a href="/primer/components/pagination/" className="position-relative f5 py-1 d-block">
                Pagination
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/popover/" className="position-relative f5 py-1 d-block">
                Popover
                <span className="position-absolute right-0">
                  <span className="text-yellow  tooltipped tooltipped-nw" aria-label="Experimental">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/progress/" className="position-relative f5 py-1 d-block">
                Progress
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New Release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/select-menu/" className="position-relative f5 py-1 d-block">
                Select menu
              </a>
            </li>

            <li className="">
              <a href="/primer/components/subhead/" className="position-relative f5 py-1 d-block">
                Subhead
                <span className="position-absolute right-0">
                  <span className="text-green  tooltipped tooltipped-nw" aria-label="New release">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/tables/" className="position-relative f5 py-1 d-block">
                Tables
                <span className="position-absolute right-0">
                  <span className="text-red  tooltipped tooltipped-nw" aria-label="Deprecated">
                    <svg
                      height="18"
                      className="octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot octicon octicon-primitive-dot v-align-text-top"
                      viewBox="0 0 8 16"
                      version="1.1"
                      width="9"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>

            <li className="">
              <a href="/primer/components/tooltips/" className="position-relative f5 py-1 d-block">
                Tooltips
              </a>
            </li>

            <li className="">
              <a href="/primer/components/truncate/" className="position-relative f5 py-1 d-block">
                Truncate
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

SideBar.defaultProps = sideBarDefaultProps

SideBar.propTypes = sideBarPropTypes
