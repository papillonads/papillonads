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
              <a href="/primer/support/">Support</a>
            </li>

            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/support/spacing/" aria-current="page" className="text-gray">
                Spacing
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Spacing</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-support"
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
              href="https://github.com/primer/primer/blob/master/modules/primer-support/lib/variables/layout.scss"
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
              href="/primer/whats_new/status-key/#stable"
              aria-label="Safe to use; provide feedback in issue"
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1 border-right"
            >
              <span className="text-green mr-1" aria-label="Stable">
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
              Stable
            </a>

            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-support">
              4.7.0
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
              <a href="#spacing-scale" id="markdown-toc-spacing-scale">
                Spacing scale
              </a>
            </li>
            <li>
              <a href="#em-based-spacing" id="markdown-toc-em-based-spacing">
                Em-based spacing
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Spacing%20scale" className="dashAnchor" />
          <h2>
            <a id="spacing-scale" className="anchor" href="#spacing-scale" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Spacing scale
          </h2>
          <p>
            The spacing scale is a <strong>base-8</strong> scale. We chose a base-8 scale because eight is a highly composable number (it
            can be divided and multiplied many times and result in whole numbers), yet allows spacing dense enough for GitHub&apos;s UI. The
            scale&apos;s exception is that it begins at 4px to allow smaller padding and margin for denser parts of the site, from there on
            it steps up consistently in equal values of <code>8px</code>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Variable</th>
                <th>Scale</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$spacer-0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>$spacer-1</td>
                <td>1</td>
                <td>4px</td>
              </tr>
              <tr>
                <td>$spacer-2</td>
                <td>2</td>
                <td>8px</td>
              </tr>
              <tr>
                <td>$spacer-3</td>
                <td>3</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>$spacer-4</td>
                <td>4</td>
                <td>24px</td>
              </tr>
              <tr>
                <td>$spacer-5</td>
                <td>5</td>
                <td>32px</td>
              </tr>
              <tr>
                <td>$spacer-6</td>
                <td>6</td>
                <td>40px</td>
              </tr>
            </tbody>
          </table>
          <p>
            These variables are encouraged to be used within components and custom CSS. The spacing scale is also used for{' '}
            <a href="../../utilities/margin">margin</a> and <a href="../../utilities/padding">padding</a> utilities.
          </p>
          <p>
            See <a href="../../support/marketing-variables/">primer-marketing-support</a> for the extended spacing scale used for marketing
            needs and the related y-axis spacing utilities for <a href="../../utilities/marketing-margin">margin</a> and{' '}
            <a href="../../utilities/marketing-padding">padding</a>.
          </p>
          <a name="//apple_ref/cpp/Style/Em-based%20spacing" className="dashAnchor" />
          <h2>
            <a id="em-based-spacing" className="anchor" href="#em-based-spacing" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Em-based spacing
          </h2>
          <p>
            Ems are used for spacing within components such as buttons and form elements. We stick to common fractions for em values (and
            powers of 2 where possible) so that , in combination with typography and line-height, the total height lands on sensible
            numbers.
          </p>
          <p>
            We aim for whole numbers, however, GitHub&apos;s body font-size is 14px which is difficult to work with, so we sometimes
            can&apos;t achieve a whole number. Less desirable values are highlighted in <span className="text-red">red</span> below.
          </p>
          <table>
            <thead>
              <tr>
                <th>Variable</th>
                <th>Fraction</th>
                <th>Y Padding (em)</th>
                <th>Total height at 14px</th>
                <th>Total height at 16px</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$em-spacer-1</td>
                <td>1/16</td>
                <td>.0625</td>
                <td>
                  <span className="text-red">22.75</span>
                </td>
                <td>26</td>
              </tr>
              <tr>
                <td>$em-spacer-2</td>
                <td>1/8</td>
                <td>.125</td>
                <td>
                  <span className="text-red">24.5</span>
                </td>
                <td>28</td>
              </tr>
              <tr>
                <td>$em-spacer-3</td>
                <td>1/4</td>
                <td>.25</td>
                <td>28</td>
                <td>32</td>
              </tr>
              <tr>
                <td>$em-spacer-4</td>
                <td>3/8</td>
                <td>.375</td>
                <td>
                  <span className="text-red">31.5</span>
                </td>
                <td>36</td>
              </tr>
              <tr>
                <td>$em-spacer-5</td>
                <td>1/2</td>
                <td>.5</td>
                <td>35</td>
                <td>40</td>
              </tr>
              <tr>
                <td>$em-spacer-6</td>
                <td>3/4</td>
                <td>.75</td>
                <td>42</td>
                <td>48</td>
              </tr>
            </tbody>
          </table>
          <p>
            The variables listed above are preferred for use within components and custom CSS. To calculate values with other font-sizes or
            em values, we suggest using <a href="http://jxnblk.com/formula/">Formula</a>.
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/support/marketing-variables/">
            <svg
              height="14"
              className="octicon octicon-chevron-left v-align-text-bottom"
              viewBox="0 0 8 16"
              version="1.1"
              width="7"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z" />
            </svg>
            Marketing variables
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/support/typography/">
            Typography
            <svg
              height="14"
              className="octicon octicon-chevron-right v-align-text-bottom"
              viewBox="0 0 8 16"
              version="1.1"
              width="7"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
