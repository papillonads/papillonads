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
              <a href="/primer/components/">Components</a>
            </li>

            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/components/box-overlay/" aria-current="page" className="text-gray">
                Box overlay
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Box overlay</h2>

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
              href="https://github.com/github/github/tree/master/app/assets/stylesheets/components/box-overlay.scss"
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
              href="/primer/whats_new/status-key/#experimental"
              aria-label="Not safe to use in production yet; check issue for details"
              className="d-inline-block tooltipped tooltipped-n link-gray-dark no-underline px-2 py-1"
            >
              <span className="text-yellow mr-1" aria-label="Experimental">
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
              Experimental
            </a>
          </div>
        </div>

        <div className="markdown-body">
          <a name="//apple_ref/cpp/Style/Box%20overlays" className="dashAnchor" />
          <h2>
            <a id="box-overlays" className="anchor" href="#box-overlays" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Box overlays
          </h2>
          <p>
            Use the <code>Box--overlay</code> with the <code>&lt;details&gt;</code> and{' '}
            <a href="https://github.com/github/details-dialog">
              <code>&lt;details-dialog&gt;</code>
            </a>
            , and add the <code>details-overlay-dark</code> utility if you wish to apply a dark transparent background.
          </p>
          <p>
            Box overlays come in three widths. The default <code>Box--overlay</code> is 440px wide, <code>Box-overlay--narrow</code> is
            320px wide, and <code>Box-overlay--wide</code> is 640px wide.
          </p>
          <p>
            <strong>Note:</strong> <code>position: fixed</code> has been disabled in this example
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <details className="details-reset details-overlay details-overlay-dark">
            <summary className="btn" aria-haspopup="dialog">
              Open dialog
            </summary>
            <details-dialog className="Box Box--overlay d-flex flex-column anim-fade-in fast" role="dialog">
              <div className="Box-header">
                <button className="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog="">
                  <svg height="16" className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                    />
                  </svg>
                </button>
                <a name="//apple_ref/cpp/Style/Box%20title" className="dashAnchor" />
                <h3 className="Box-title">Box title</h3>
              </div>
              <div className="overflow-auto">
                <div className="Box-body overflow-auto">
                  <p>
                    The quick brown fox jumps over the lazy dog and feels as if he were in the seventh heaven of typography together with
                    Hermann Zapf, the most famous artist of the...
                  </p>
                </div>
                <ul>
                  <li className="Box-row">
                    <img
                      className="avatar v-align-middle mr-2"
                      src="https://avatars.githubusercontent.com/broccolini?s=48"
                      alt=""
                      width="24"
                      height="24"
                    />
                    @broccolini
                  </li>
                  <li className="Box-row border-bottom">
                    <img
                      className="avatar v-align-middle mr-2"
                      src="https://avatars.githubusercontent.com/jonrohan?s=48"
                      alt=""
                      width="24"
                      height="24"
                    />
                    @jonrohan
                  </li>
                  <li className="Box-row border-bottom">
                    <img
                      className="avatar v-align-middle mr-2"
                      src="https://avatars.githubusercontent.com/shawnbot?s=48"
                      alt=""
                      width="24"
                      height="24"
                    />
                    @shawnbot
                  </li>
                </ul>
              </div>
              <div className="Box-footer">
                <button type="button" className="btn btn-block" data-close-dialog="">
                  Okidoki
                </button>
              </div>
            </details-dialog>
          </details>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;details</span> <span className="na">className=</span>
                <span className="s">&quot;details-reset details-overlay details-overlay-dark&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;summary</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;dialog&quot;</span>
                <span className="nt">&gt;</span>Open dialog<span className="nt">&lt;/summary&gt;</span>
                <span className="nt">&lt;details-dialog</span> <span className="na">className=</span>
                <span className="s">&quot;Box Box--overlay d-flex flex-column anim-fade-in fast&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-header&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;Box-btn-octicon btn-octicon float-right&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Close dialog&quot;</span> <span className="na">data-close-dialog</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;x&quot; %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;h3</span> <span className="na">className=</span>
                <span className="s">&quot;Box-title&quot;</span>
                <span className="nt">&gt;</span>Box title<span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;overflow-auto&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-body overflow-auto&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;p&gt;</span>
                The quick brown fox jumps over the lazy dog and feels as if he were in the seventh heaven of typography together with
                Hermann Zapf, the most famous artist of the...
                <span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;ul&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar v-align-middle mr-2&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;https://avatars.githubusercontent.com/broccolini?s=48&quot;</span>{' '}
                <span className="na">alt=</span>
                <span className="s">&quot;&quot;</span> <span className="na">width=</span>
                <span className="s">&quot;24&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;24&quot;</span>
                <span className="nt">&gt;</span>
                @broccolini
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row border-bottom&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar v-align-middle mr-2&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;https://avatars.githubusercontent.com/jonrohan?s=48&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;&quot;</span> <span className="na">width=</span>
                <span className="s">&quot;24&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;24&quot;</span>
                <span className="nt">&gt;</span>
                @jonrohan
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;li</span> <span className="na">className=</span>
                <span className="s">&quot;Box-row border-bottom&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;img</span> <span className="na">className=</span>
                <span className="s">&quot;avatar v-align-middle mr-2&quot;</span> <span className="na">src=</span>
                <span className="s">&quot;https://avatars.githubusercontent.com/shawnbot?s=48&quot;</span> <span className="na">alt=</span>
                <span className="s">&quot;&quot;</span> <span className="na">width=</span>
                <span className="s">&quot;24&quot;</span> <span className="na">height=</span>
                <span className="s">&quot;24&quot;</span>
                <span className="nt">&gt;</span>
                @shawnbot
                <span className="nt">&lt;/li&gt;</span>
                <span className="nt">&lt;/ul&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;Box-footer&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-block&quot;</span> <span className="na">autofocus</span>{' '}
                <span className="na">data-close-dialog</span>
                <span className="nt">&gt;</span>Okidoki<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/details-dialog&gt;</span>
                <span className="nt">&lt;/details&gt;</span>
              </code>
            </pre>
          </div>
          <button
            type="button"
            className="position-absolute text-gray right-0 top-0 m-2 js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s"
            aria-label="Copy"
            data-copied-hint="Copied!"
          >
            <svg className="octicon octicon-clippy js-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
              />
            </svg>
          </button>
        </div>

        <div className="markdown-body">
          <p>In github.com there is a shared dialog partial. You will only have to pass in the modal content:</p>
          <pre>
            <code>
              &lt;%= render layout: &quot;shared/details_dialog&quot;, locals: {'{'}
              button_text: &quot;Delete account&quot;, title: &quot;Are you sure you want to delete this account?&quot;, button_class:
              &quot;btn btn-danger&quot;
              {'}'} do %&gt; &lt;div className=&quot;Box-body overflow-auto&quot;&gt; &lt;p&gt; This action is irreversible. &lt;/p&gt;
              &lt;button type=&quot;button&quot; className=&quot;btn btn-block btn-danger mt-2&quot; data-close-dialog autofocus&gt; Delete
              &lt;/button&gt; &lt;/div&gt; &lt;% end %&gt;
            </code>
          </pre>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div className="align-right" />
      </div>
    </main>
  )
}
