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
            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/objects/" aria-current="page" className="text-gray">
                Objects
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Objects</h2>
        <div className="markdown-body">
          <p>
            Objects help us with common layout patterns but aren&apos;t concerned with thematic styles. Examples include the table object,
            the grid, and the media object. Objects essentially provide some scaffolding for layouts and should be able to be used with
            other objects, components, and utilities.
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
