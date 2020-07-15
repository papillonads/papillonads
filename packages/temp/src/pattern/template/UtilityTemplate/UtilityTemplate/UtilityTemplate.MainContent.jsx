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
              <a href="/primer/utilities/" aria-current="page" className="text-gray">
                Utilities
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Utilities</h2>

        <div className="markdown-body">
          <p>
            Utilities provide the building blocks for layout and handle a range common use cases that help us avoid writing custom styles.
            When we need to add some margin or padding, rather than adding a new selector specific to that use case, we can use utilities.
            This helps us reduce the number of unique property-value pairs, and helps us keep more consistent styles across the site.
          </p>
          <ul>
            <li>
              Utilities should do one job well and one job only, are immutable, and on occasion are an acceptable approach to overriding
              component styles.
            </li>
            <li>Utility class-names should be transparent and clearly describe the job they do.</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div />
        <div className="align-right" />
      </div>
    </main>
  )
}
