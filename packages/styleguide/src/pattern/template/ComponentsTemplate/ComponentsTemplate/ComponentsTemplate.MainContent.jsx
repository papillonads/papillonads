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
              <a href="/primer/components/" aria-current="page" className="text-gray">
                Components
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Components</h2>

        <div className="markdown-body">
          <p>
            Components make it easier to mark up a set of elements that are commonly grouped together with similar visual styles. Their base
            styles are shared and variants are added with modifier classes, so usually components are comprised of multiple classes. Most
            importantly, components should be highly reusable across the site, rather than built for specific pages or features. To achieve
            this:
          </p>
          <ul>
            <li>
              <strong>Separate structure and skin:</strong> This means to define repeating visual features (like background and border
              styles) as separate “skins” that you can mix-and-match with your various components to achieve a large amount of visual
              variety without much code.
            </li>
            <li>
              <strong>Separate container and content:</strong> Essentially, this means “rarely use location-dependent styles”. A component
              should look the same no matter where you put it.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div className="align-right" />
      </div>
    </main>
  )
}
