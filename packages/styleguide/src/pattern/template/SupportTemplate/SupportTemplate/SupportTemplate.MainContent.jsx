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
              <a href="/primer/support/" aria-current="page" className="text-gray">
                Support
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Support</h2>

        <div className="markdown-body">
          <p>
            Primer is built on systems that form the foundation of our styles, and inform the way we write and organize our CSS. Building
            upon systems helps us make styles consistent and interoperable with each other, and assists us with visual hierarchy and
            vertical rhythm.
          </p>
          <p>
            We use Sass variables to keep color, typography, spacing, and other foundations of our system consistent. Occasionally we use
            Sass mixins to apply multiple CSS properties, they are a convenient solution for frequently-used verbose patterns.
          </p>
          <p>We&apos;ve documented variables, mixins, and the systems they are built on for the following:</p>
          <ul>
            <li>
              <a href="breakpoints/">Breakpoints</a>
            </li>
            <li>
              <a href="color-system/">Colors</a>
            </li>
            <li>
              <a href="spacing/">Spacing</a>
            </li>
            <li>
              <a href="typography/">Typography</a>
            </li>
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
