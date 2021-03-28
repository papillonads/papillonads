/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
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
              <a href="/primer/support/typography/" aria-current="page" className="text-gray">
                Typography
              </a>
            </li>
          </ol>
        </nav>
        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Typography</h2>
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
              href="https://github.com/primer/primer/blob/master/modules/primer-support/lib/variables/typography.scss"
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
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1 border-right"
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
              <a href="#type-scale" id="markdown-toc-type-scale">
                Type Scale
              </a>
            </li>
            <li>
              <a href="#typography-variables" id="markdown-toc-typography-variables">
                Typography variables
              </a>
              <ul>
                <li>
                  <a href="#font-size-variables" id="markdown-toc-font-size-variables">
                    Font size variables
                  </a>
                </li>
                <li>
                  <a href="#font-weight-variables" id="markdown-toc-font-weight-variables">
                    Font weight variables
                  </a>
                </li>
                <li>
                  <a href="#line-height-variables" id="markdown-toc-line-height-variables">
                    Line height variables
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#typography-mixins" id="markdown-toc-typography-mixins">
                Typography Mixins
              </a>
            </li>
          </ul>
          <a name="//apple_ref/cpp/Style/Type%20Scale" className="dashAnchor" />
          <h2>
            <a id="type-scale" className="anchor" href="#type-scale" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Type Scale
          </h2>
          <p>
            The typography scale is designed to work for GitHub&apos;s product UI and marketing sites. Font sizes are designed to work in
            combination with line-height values so as to result in more sensible numbers wherever possible.
          </p>
          <p>
            Font sizes are smaller on mobile and scale up at the <code>md</code> <a href="./../breakpoints">breakpoint</a> to be larger on
            desktop.
          </p>
          <table>
            <thead>
              <tr>
                <th>Scale</th>
                <th>Font size: mobile</th>
                <th>Font size: desktop</th>
                <th>1.25 line height</th>
                <th>1.5 line height</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>00</td>
                <td>40px</td>
                <td>48px</td>
                <td>60</td>
                <td>72</td>
              </tr>
              <tr>
                <td>0</td>
                <td>32px</td>
                <td>40px</td>
                <td>50</td>
                <td>60</td>
              </tr>
              <tr>
                <td>1</td>
                <td>26px</td>
                <td>32px</td>
                <td>40</td>
                <td>48</td>
              </tr>
              <tr>
                <td>2</td>
                <td>22px</td>
                <td>24px</td>
                <td>30</td>
                <td>36</td>
              </tr>
              <tr>
                <td>3</td>
                <td>18px</td>
                <td>20px</td>
                <td>25</td>
                <td>30</td>
              </tr>
              <tr>
                <td>4</td>
                <td>16px</td>
                <td>16px</td>
                <td>20</td>
                <td>24</td>
              </tr>
              <tr>
                <td>5</td>
                <td>14px</td>
                <td>14px</td>
                <td>17.5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>6</td>
                <td>12px</td>
                <td>12px</td>
                <td>15</td>
                <td>18</td>
              </tr>
            </tbody>
          </table>
          <p>
            The typography scale is used to create <a href="../../utilities/typography">typography utilities</a>.
          </p>
          <a name="//apple_ref/cpp/Style/Typography%20variables" className="dashAnchor" />
          <h2>
            <a id="typography-variables" className="anchor" href="#typography-variables" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Typography variables
          </h2>
          <a name="//apple_ref/cpp/Style/Font%20size%20variables" className="dashAnchor" />
          <h4>
            <a id="font-size-variables" className="anchor" href="#font-size-variables" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Font size variables
          </h4>
          <pre className="highlight-scss highlight">
            <code>
              <span className="c1">// Heading sizes - mobile // h4—h6 remain the same size on both mobile &amp; desktop</span>
              <span className="nv">$h00-size-mobile</span>
              <span className="p">:</span> <span className="m">40px</span>
              <span className="p">;</span>
              <span className="nv">$h0-size-mobile</span>
              <span className="p">:</span> <span className="m">32px</span>
              <span className="p">;</span>
              <span className="nv">$h1-size-mobile</span>
              <span className="p">:</span> <span className="m">26px</span>
              <span className="p">;</span>
              <span className="nv">$h2-size-mobile</span>
              <span className="p">:</span> <span className="m">22px</span>
              <span className="p">;</span>
              <span className="nv">$h3-size-mobile</span>
              <span className="p">:</span> <span className="m">18px</span>
              <span className="p">;</span>
              <span className="c1">// Heading sizes - desktop</span>
              <span className="nv">$h00-size</span>
              <span className="p">:</span> <span className="m">48px</span>
              <span className="p">;</span>
              <span className="nv">$h0-size</span>
              <span className="p">:</span> <span className="m">40px</span>
              <span className="p">;</span>
              <span className="nv">$h1-size</span>
              <span className="p">:</span> <span className="m">32px</span>
              <span className="p">;</span>
              <span className="nv">$h2-size</span>
              <span className="p">:</span> <span className="m">24px</span>
              <span className="p">;</span>
              <span className="nv">$h3-size</span>
              <span className="p">:</span> <span className="m">20px</span>
              <span className="p">;</span>
              <span className="nv">$h4-size</span>
              <span className="p">:</span> <span className="m">16px</span>
              <span className="p">;</span>
              <span className="nv">$h5-size</span>
              <span className="p">:</span> <span className="m">14px</span>
              <span className="p">;</span>
              <span className="nv">$h6-size</span>
              <span className="p">:</span> <span className="m">12px</span>
              <span className="p">;</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Font%20weight%20variables" className="dashAnchor" />
          <h4>
            <a id="font-weight-variables" className="anchor" href="#font-weight-variables" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Font weight variables
          </h4>

          <pre className="highlight-scss highlight">
            <code>
              <span className="nv">$font-weight-bold</span>
              <span className="p">:</span> <span className="m">600</span> <span className="o">!</span>
              <span className="nb">default</span>
              <span className="p">;</span>
              <span className="nv">$font-weight-light</span>
              <span className="p">:</span> <span className="m">300</span> <span className="o">!</span>
              <span className="nb">default</span>
              <span className="p">;</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Line%20height%20variables" className="dashAnchor" />
          <h4>
            <a id="line-height-variables" className="anchor" href="#line-height-variables" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Line height variables
          </h4>
          <pre className="highlight-scss highlight">
            <code>
              <span className="nv">$lh-condensed-ultra</span>
              <span className="p">:</span> <span className="m">1</span> <span className="o">!</span>
              <span className="nb">default</span>
              <span className="p">;</span>
              <span className="nv">$lh-condensed</span>
              <span className="p">:</span> <span className="m">1</span>
              <span className="mi">.25</span> <span className="o">!</span>
              <span className="nb">default</span>
              <span className="p">;</span>
              <span className="nv">$lh-default</span>
              <span className="p">:</span> <span className="m">1</span>
              <span className="mi">.5</span> <span className="o">!</span>
              <span className="nb">default</span>
              <span className="p">;</span>
            </code>
          </pre>
          <a name="//apple_ref/cpp/Style/Typography%20Mixins" className="dashAnchor" />
          <h2>
            <a id="typography-mixins" className="anchor" href="#typography-mixins" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Typography Mixins
          </h2>
          <p>
            Typography mixins are available for heading styles and for our type scale. They can be used within components or custom CSS. The
            same styles are also available as <a href="../../utilities/typography/#heading-utilities">utilities</a>. which requires no
            additional CSS.
          </p>
          <p>
            Heading mixins are available for <code>h1</code> through to <code>h6</code>, this includes the font-size and font-weight.
            Example:
          </p>
          <pre className="highlight-scss highlight">
            <code>
              <span className="nc">.styles</span> <span className="p">{'{'}</span>
              <span className="k">@include</span> <span className="nd">h1</span>
              <span className="p">;</span>
              <span className="p">{'}'}</span>
            </code>
          </pre>
          <p>
            Responsive heading mixins can be used to adjust the font-size between the <code>sm</code> and <code>lg</code> breakpoint. Only
            headings 1—3 are responsive. Heading 4—6 are small enough to remain the same between mobile and desktop. Responsive heading
            mixins include the font-size and font-weight as well as the media query. To use a responsive heading mixin, postfix the heading
            with <code>-responsive</code>:
          </p>
          <pre className="highlight-scss highlight">
            <code>
              <span className="nc">.styles</span> <span className="p">{'{'}</span>
              <span className="k">@include</span> <span className="nd">h1-responsive</span>
              <span className="p">;</span>
              <span className="p">{'}'}</span>
            </code>
          </pre>
          <p>
            Responsive type scale mixins are also available. Type scale mixins apply a font-size that gets slightly bigger at the{' '}
            <code>lg</code> breakpoint. They do not apply a font-weight. Like the responsive heading mixins, they are only available for
            size <code>f1</code> to <code>f3</code> and are postfixed with <code>-responsive</code> as in the example below:
          </p>
          <pre className="highlight-scss highlight">
            <code>
              <span className="nc">.style</span> <span className="p">{'{'}</span>
              <span className="k">@include</span> <span className="nd">f1-responsive</span>
              <span className="p">;</span>
              <span className="p">{'}'}</span>
            </code>
          </pre>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/support/spacing/">
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
            Spacing
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/utilities/animations/">
            Animations
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
