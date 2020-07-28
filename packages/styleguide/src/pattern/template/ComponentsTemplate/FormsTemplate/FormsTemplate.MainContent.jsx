/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
              <a href="/primer/components/">Components</a>
            </li>

            <li className="breadcrumb-item text-small breadcrumb-item-selected">
              <a href="/primer/components/forms/" aria-current="page" className="text-gray">
                Forms
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Forms</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-forms"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-forms/"
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

            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-forms">
              2.1.6
            </a>
          </div>

          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-core">primer-core</a>
          </div>
        </div>

        <div className="markdown-body">
          <p>Style individual form controls and utilize common layouts.</p>
          <ul id="markdown-toc">
            <li>
              <a href="#kitchen-sink" id="markdown-toc-kitchen-sink">
                Kitchen sink
              </a>
            </li>
            <li>
              <a href="#example-form" id="markdown-toc-example-form">
                Example form
              </a>
            </li>
            <li>
              <a href="#form-contrast" id="markdown-toc-form-contrast">
                Form contrast
              </a>
            </li>
            <li>
              <a href="#sizing" id="markdown-toc-sizing">
                Sizing
              </a>
            </li>
            <li>
              <a href="#selects" id="markdown-toc-selects">
                Selects
              </a>
            </li>
            <li>
              <a href="#form-groups" id="markdown-toc-form-groups">
                Form groups
              </a>
            </li>
            <li>
              <a href="#form-group-validation" id="markdown-toc-form-group-validation">
                Form group validation
              </a>
            </li>
            <li>
              <a href="#checkboxes-and-radios" id="markdown-toc-checkboxes-and-radios">
                Checkboxes and radios
              </a>
            </li>
            <li>
              <a href="#input-group" id="markdown-toc-input-group">
                Input group
              </a>
            </li>
            <li>
              <a href="#form-actions" id="markdown-toc-form-actions">
                Form actions
              </a>
            </li>
          </ul>
          <p>Overview:</p>
          <ul>
            <li>
              We reset several elements&apos; default styles for cross browser consistency and easier manipulation later. This includes{' '}
              <code>&lt;fieldset&gt;</code>s, WebKit validation bubbles, and most textual <code>&lt;input&gt;</code>s.
            </li>
            <li>
              Specific types of textual <code>&lt;input&gt;</code>s are styled automatically, but <code>.form-control</code> is available
              should you need it.
            </li>
            <li>
              Always declare a <code>type</code> on your <code>&lt;button&gt;</code>s.
            </li>
            <li>Form layouts rely on form groups.</li>
          </ul>
          <a name="//apple_ref/cpp/Style/Kitchen%20sink" className="dashAnchor" />
          <h4>
            <a id="kitchen-sink" className="anchor" href="#kitchen-sink" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Kitchen sink
          </h4>
          <p>All our inputs and buttons side-by-side for easy testing of sizing and alignment with one another.</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <p>
            <button className="btn" type="button">
              Button
            </button>
            <button className="btn select-menu-button" type="button" aria-expanded="false" aria-haspopup="true">
              Select menu
            </button>
            <input className="form-control" type="text" placeholder="Standard input" aria-label="Repository description" />
            <input className="form-control input-monospace" type="text" placeholder="Monospace input" aria-label="SHA" />
            <select className="form-select" aria-label="Important decision">
              <option>Select</option>
              <option value="option 2">Option 2</option>
            </select>
          </p>

          <p>
            <button className="btn btn-sm" type="button">
              Small button
            </button>
            <button className="btn btn-sm select-menu-button" type="button" aria-expanded="false" aria-haspopup="true">
              Select menu
            </button>
            <input className="form-control input-sm" type="text" placeholder="Small input" aria-label="Repository description" />
            <select className="form-select select-sm" aria-label="Important decision">
              <option>Select</option>
              <option value="option 1">Option 1</option>
            </select>
          </p>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn select-menu-button&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                Select menu
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Standard input&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Repository description&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control input-monospace&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Monospace input&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;SHA&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;select</span> <span className="na">className=</span>
                <span className="s">&quot;form-select&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Important decision&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;option&gt;</span>Select<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option</span> <span className="na">value=</span>
                <span className="s">&quot;option 2&quot;</span>
                <span className="nt">&gt;</span>Option 2<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;/select&gt;</span>
                <span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;p&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-sm&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span>
                <span className="nt">&gt;</span>Small button<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-sm select-menu-button&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-expanded=</span>
                <span className="s">&quot;false&quot;</span> <span className="na">aria-haspopup=</span>
                <span className="s">&quot;true&quot;</span>
                <span className="nt">&gt;</span>
                Select menu
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control input-sm&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Small input&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Repository description&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;select</span> <span className="na">className=</span>
                <span className="s">&quot;form-select select-sm&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Important decision&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;option&gt;</span>Select<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option</span> <span className="na">value=</span>
                <span className="s">&quot;option 1&quot;</span>
                <span className="nt">&gt;</span>Option 1<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;/select&gt;</span>
                <span className="nt">&lt;/p&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Example%20form" className="dashAnchor" />
          <h4>
            <a id="example-form" className="anchor" href="#example-form" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Example form
          </h4>
          <p>
            Form controls in Primer currently have no basic layout specified (this is by design). You&apos;ll need to use{' '}
            <code>&lt;fieldset&gt;</code>s, <code>&lt;div&gt;</code>s, or other elements and styles to rearrange them.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <label htmlFor="name">Name</label>
            <input className="form-control" type="text" id="name" />

            <label htmlFor="email">Email address</label>
            <input className="form-control" type="email" id="email" />

            <label>
              <input type="checkbox" /> Remember me
            </label>

            <label>
              <input type="radio" id="herp" name="herpderp" checked="" /> Herp
            </label>
            <label>
              <input type="radio" id="derp" name="herpderp" /> Derp
            </label>

            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;label</span> <span className="na">for=</span>
                <span className="s">&quot;name&quot;</span>
                <span className="nt">&gt;</span>Name<span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;name&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;label</span> <span className="na">for=</span>
                <span className="s">&quot;email&quot;</span>
                <span className="nt">&gt;</span>Email address<span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;email&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;email&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;checkbox&quot;</span>
                <span className="nt">&gt;</span> Remember me
                <span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;radio&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;herp&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;herpderp&quot;</span> <span className="na">checked</span>
                <span className="nt">&gt;</span> Herp
                <span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;radio&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;derp&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;herpderp&quot;</span>
                <span className="nt">&gt;</span> Derp
                <span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span>
                <span className="nt">&gt;</span>Submit<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Form%20contrast" className="dashAnchor" />
          <h4>
            <a id="form-contrast" className="anchor" href="#form-contrast" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Form contrast
          </h4>
          <p>
            Textual form controls have a white background by default. You can change this to a light gray with <code>.input-contrast</code>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <input className="form-control" type="text" placeholder="Default input" aria-label="Default input" />
            <input className="form-control input-contrast" type="text" placeholder="Input with contrast" aria-label="Input with contrast" />
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Default input&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Default input&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control input-contrast&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Input with contrast&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Input with contrast&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Sizing" className="dashAnchor" />
          <h4>
            <a id="sizing" className="anchor" href="#sizing" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Sizing
          </h4>
          <p>Make inputs smaller, larger, or full-width with an additional class.</p>
          <h5>
            <a id="small" className="anchor" href="#small" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Small
          </h5>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <input className="form-control input-sm" type="text" placeholder="Small input" aria-label="Small input" />
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control input-sm&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Small input&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Small input&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <h5>
            <a id="large" className="anchor" href="#large" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Large
          </h5>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <input className="form-control input-lg" type="text" placeholder="Large input" aria-label="Large input" />
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control input-lg&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Large input&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Large input&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <h5>
            <a id="block" className="anchor" href="#block" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Block
          </h5>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <input className="form-control input-block" type="text" placeholder="Full-width input" aria-label="Full-width input" />
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control input-block&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Full-width input&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Full-width input&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <h5>
            <a
              id="hide-webkits-contact-info-autofill-icon"
              className="anchor"
              href="#hide-webkits-contact-info-autofill-icon"
              aria-hidden="true"
            >
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Hide webkit&apos;s contact info autofill icon
          </h5>
          <p>
            Webkit sometimes gets confused and tries to add an icon/dropdown to autofill contact information on fields that may not be
            appropriate (such as input for number of users). Use this class to override the display of this icon.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <input
              className="form-control input-hide-webkit-autofill"
              placeholder="Hide Webkit's contact autofill on this input"
              type="text"
              aria-label="Hide Webkit's contact autofill on this input"
            />
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control input-hide-webkit-autofill&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Hide Webkit&apos;s contact autofill on this input&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Hide Webkit&apos;s contact autofill on this input&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Selects" className="dashAnchor" />
          <h4>
            <a id="selects" className="anchor" href="#selects" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Selects
          </h4>
          <p>
            Primer adds light <code>height</code> and <code>vertical-align</code> styles to <code>&lt;select&gt;</code>s for all browsers to
            render them consistently with textual inputs.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <select className="form-select" aria-label="Preference">
              <option>Choose an option</option>
              <option>Git</option>
              <option>Subversion</option>
              <option>Social Coding</option>
              <option>Beets</option>
              <option>Bears</option>
              <option>Battlestar Galactica</option>
            </select>
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;select</span> <span className="na">className=</span>
                <span className="s">&quot;form-select&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Preference&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;option&gt;</span>Choose an option<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Git<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Subversion<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Social Coding<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Beets<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Bears<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Battlestar Galactica<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;/select&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <h5>
            <a id="small-1" className="anchor" href="#small-1" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Small
          </h5>
          <p>
            Use the <code>.select-sm</code> class to resize both default and custom <code>&lt;select&gt;</code>s to match the size of{' '}
            <a href="../buttons/#default-buttons">our small buttons</a>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <select className="form-select select-sm" aria-label="Preference">
            <option>Choose an option</option>
            <option>Git</option>
            <option>Subversion</option>
            <option>Social Coding</option>
            <option>Beets</option>
            <option>Bears</option>
            <option>Battlestar Galactica</option>
          </select>

          <select className="form-select select-sm" aria-label="Preference">
            <option>Choose an option</option>
            <option>Git</option>
            <option>Subversion</option>
            <option>Social Coding</option>
            <option>Beets</option>
            <option>Bears</option>
            <option>Battlestar Galactica</option>
          </select>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;select</span> <span className="na">className=</span>
                <span className="s">&quot;form-select select-sm&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Preference&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;option&gt;</span>Choose an option<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Git<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Subversion<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Social Coding<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Beets<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Bears<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Battlestar Galactica<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;/select&gt;</span>
                <span className="nt">&lt;select</span> <span className="na">className=</span>
                <span className="s">&quot;form-select select-sm&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Preference&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;option&gt;</span>Choose an option<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Git<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Subversion<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Social Coding<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Beets<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Bears<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Battlestar Galactica<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;/select&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Form%20groups" className="dashAnchor" />
          <h4>
            <a id="form-groups" className="anchor" href="#form-groups" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Form groups
          </h4>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <dl className="form-group">
              <dt>
                <label htmlFor="example-text">Example Text</label>
              </dt>
              <dd>
                <input className="form-control" type="text" value="Example Value" id="example-text" />
              </dd>
            </dl>

            <dl className="form-group">
              <dt>
                <label htmlFor="example-select">Example Select</label>
              </dt>
              <dd>
                <select className="form-select" id="example-select">
                  <option>Choose an option</option>
                  <option>Git</option>
                  <option>Subversion</option>
                  <option>Social Coding</option>
                  <option>Beets</option>
                  <option>Bears</option>
                  <option>Battlestar Galactica</option>
                </select>
              </dd>
            </dl>

            <dl className="form-group">
              <dt>
                <label htmlFor="example-textarea">Example Textarea</label>
              </dt>
              <dd>
                <textarea className="form-control" id="example-textarea" />
              </dd>
            </dl>
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;dl</span> <span className="na">className=</span>
                <span className="s">&quot;form-group&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;dt&gt;&lt;label</span> <span className="na">for=</span>
                <span className="s">&quot;example-text&quot;</span>
                <span className="nt">&gt;</span>Example Text<span className="nt">&lt;/label&gt;&lt;/dt&gt;</span>
                <span className="nt">&lt;dd&gt;&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;Example Value&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;example-text&quot;</span>
                <span className="nt">&gt;&lt;/dd&gt;</span>
                <span className="nt">&lt;/dl&gt;</span>
                <span className="nt">&lt;dl</span> <span className="na">className=</span>
                <span className="s">&quot;form-group&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;dt&gt;&lt;label</span> <span className="na">for=</span>
                <span className="s">&quot;example-select&quot;</span>
                <span className="nt">&gt;</span>Example Select<span className="nt">&lt;/label&gt;&lt;/dt&gt;</span>
                <span className="nt">&lt;dd&gt;</span>
                <span className="nt">&lt;select</span> <span className="na">className=</span>
                <span className="s">&quot;form-select&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;example-select&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;option&gt;</span>Choose an option<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Git<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Subversion<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Social Coding<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Beets<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Bears<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;option&gt;</span>Battlestar Galactica<span className="nt">&lt;/option&gt;</span>
                <span className="nt">&lt;/select&gt;</span>
                <span className="nt">&lt;/dd&gt;</span>
                <span className="nt">&lt;/dl&gt;</span>
                <span className="nt">&lt;dl</span> <span className="na">className=</span>
                <span className="s">&quot;form-group&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;dt&gt;&lt;label</span> <span className="na">for=</span>
                <span className="s">&quot;example-textarea&quot;</span>
                <span className="nt">&gt;</span>Example Textarea<span className="nt">&lt;/label&gt;&lt;/dt&gt;</span>
                <span className="nt">&lt;dd&gt;</span>
                <span className="nt">&lt;textarea</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;example-textarea&quot;</span>
                <span className="nt">&gt;&lt;/textarea&gt;</span>
                <span className="nt">&lt;/dd&gt;</span>
                <span className="nt">&lt;/dl&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Form%20group%20validation" className="dashAnchor" />
          <h4>
            <a id="form-group-validation" className="anchor" href="#form-group-validation" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Form group validation
          </h4>
          <p>
            Convey errors and warnings for form groups. Add the appropriate class—either <code>.errored</code> or <code>.warn</code>—to the{' '}
            <code>&lt;dl className=&quot;form-group&quot;&gt;</code> to start. Then, house your error messaging in an additional{' '}
            <code>&lt;dd&gt;</code> with either <code>.error</code> or <code>.warning</code>.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <dl className="form-group errored">
              <dt>
                <label htmlFor="example-text-errored">Example Text</label>
              </dt>
              <dd>
                <input
                  className="form-control"
                  type="text"
                  value="Example Value"
                  id="example-text-errored"
                  aria-describedby="form-error-text"
                />
              </dd>
              <dd className="error" id="form-error-text">
                This example input has an error.
              </dd>
            </dl>
            <br />
            <dl className="form-group warn">
              <dt>
                <label htmlFor="example-text-warn">Example Text</label>
              </dt>
              <dd>
                <input
                  className="form-control"
                  type="text"
                  value="Example Value"
                  id="example-text-warn"
                  aria-describedby="form-warning-text"
                />
              </dd>
              <dd className="warning" id="form-warning-text">
                This example input has a warning.
              </dd>
            </dl>
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;dl</span> <span className="na">className=</span>
                <span className="s">&quot;form-group errored&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;dt&gt;&lt;label</span> <span className="na">for=</span>
                <span className="s">&quot;example-text-errored&quot;</span>
                <span className="nt">&gt;</span>Example Text<span className="nt">&lt;/label&gt;&lt;/dt&gt;</span>
                <span className="nt">&lt;dd&gt;&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;Example Value&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;example-text-errored&quot;</span> <span className="na">aria-describedby=</span>
                <span className="s">&quot;form-error-text&quot;</span>
                <span className="nt">&gt;&lt;/dd&gt;</span>
                <span className="nt">&lt;dd</span> <span className="na">className=</span>
                <span className="s">&quot;error&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;form-error-text&quot;</span>
                <span className="nt">&gt;</span>This example input has an error.<span className="nt">&lt;/dd&gt;</span>
                <span className="nt">&lt;/dl&gt;</span>
                <span className="nt">&lt;br&gt;</span>
                <span className="nt">&lt;dl</span> <span className="na">className=</span>
                <span className="s">&quot;form-group warn&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;dt&gt;&lt;label</span> <span className="na">for=</span>
                <span className="s">&quot;example-text-warn&quot;</span>
                <span className="nt">&gt;</span>Example Text<span className="nt">&lt;/label&gt;&lt;/dt&gt;</span>
                <span className="nt">&lt;dd&gt;&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">value=</span>
                <span className="s">&quot;Example Value&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;example-text-warn&quot;</span> <span className="na">aria-describedby=</span>
                <span className="s">&quot;form-warning-text&quot;</span>
                <span className="nt">&gt;&lt;/dd&gt;</span>
                <span className="nt">&lt;dd</span> <span className="na">className=</span>
                <span className="s">&quot;warning&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;form-warning-text&quot;</span>
                <span className="nt">&gt;</span>This example input has a warning.<span className="nt">&lt;/dd&gt;</span>
                <span className="nt">&lt;/dl&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Checkboxes%20and%20radios" className="dashAnchor" />
          <h4>
            <a id="checkboxes-and-radios" className="anchor" href="#checkboxes-and-radios" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Checkboxes and radios
          </h4>
          <p>Utilities to spice up the alignment and styling of checkbox and radio controls.</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <div className="form-checkbox">
              <label>
                <input type="checkbox" checked="" aria-describedby="help-text-for-checkbox" />
                Available for hire
              </label>
              <p className="note" id="help-text-for-checkbox">
                This will do insanely <strong>awesome</strong> and <strong>amazing</strong> things!
              </p>
            </div>
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;form-checkbox&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;checkbox&quot;</span> <span className="na">checked=</span>
                <span className="s">&quot;checked&quot;</span> <span className="na">aria-describedby=</span>
                <span className="s">&quot;help-text-for-checkbox&quot;</span>
                <span className="nt">&gt;</span>
                Available for hire
                <span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span>
                <span className="s">&quot;note&quot;</span> <span className="na">id=</span>
                <span className="s">&quot;help-text-for-checkbox&quot;</span>
                <span className="nt">&gt;</span>
                This will do insanely <span className="nt">&lt;strong&gt;</span>awesome<span className="nt">&lt;/strong&gt;</span> and{' '}
                <span className="nt">&lt;strong&gt;</span>amazing<span className="nt">&lt;/strong&gt;</span> things!
                <span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <p>You may also add emphasis to the label:</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <div className="form-checkbox">
              <label>
                <input type="checkbox" checked="" />
                <em className="highlight">Available for hire</em>
              </label>
            </div>
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;form-checkbox&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;checkbox&quot;</span> <span className="na">checked=</span>
                <span className="s">&quot;checked&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;em</span> <span className="na">className=</span>
                <span className="s">&quot;highlight&quot;</span>
                <span className="nt">&gt;</span>Available for hire<span className="nt">&lt;/em&gt;</span>
                <span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <h5>
            <a
              id="show--hide-content-based-on-a-checkbox-or-radio-button-state"
              className="anchor"
              href="#show--hide-content-based-on-a-checkbox-or-radio-button-state"
              aria-hidden="true"
            >
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Show / hide content based on a checkbox or radio button state
          </h5>
          <p>
            Content that is hidden by default should only be done so if it is non-essential for the context of the surrounding content. Be
            sure to use the <code>aria-live=&quot;polite&quot;</code> attribute on the parent label for added content to be announced when
            displayed.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <div className="form-checkbox">
              <label>
                <input type="radio" name="hireme" />
                Not available for hire
              </label>
            </div>
            <div className="form-checkbox">
              <label aria-live="polite">
                <input type="radio" className="form-checkbox-details-trigger" name="hireme" />
                Available for hire
                <span className="form-checkbox-details text-normal">
                  <span className="d-block mb-1">Available hours per week</span>
                  <input type="text" name="" className="form-control input-contrast" size="3" />
                  <span className="text-small text-gray pl-2">hours per week</span>
                </span>
              </label>
            </div>
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;form-checkbox&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;label&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;radio&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;hireme&quot;</span>
                <span className="nt">&gt;</span>
                Not available for hire
                <span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;form-checkbox&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;label</span> <span className="na">aria-live=</span>
                <span className="s">&quot;polite&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;radio&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;form-checkbox-details-trigger&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;hireme&quot;</span>
                <span className="nt">&gt;</span>
                Available for hire
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;form-checkbox-details text-normal&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;d-block mb-1&quot;</span>
                <span className="nt">&gt;</span>Available hours per week<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">name=</span>
                <span className="s">&quot;&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;form-control input-contrast&quot;</span> <span className="na">size=</span>
                <span className="s">&quot;3&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;text-small text-gray pl-2&quot;</span>
                <span className="nt">&gt;</span>hours per week<span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/label&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Input%20group" className="dashAnchor" />
          <h4>
            <a id="input-group" className="anchor" href="#input-group" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Input group
          </h4>
          <p>Attached an input and button to one another.</p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <form>
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Username" aria-label="Username" />
              <span className="input-group-button">
                <button className="btn" type="button" aria-label="Copy to clipboard">
                  <svg height="16" className="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </form>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;form&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;input-group&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;input</span> <span className="na">className=</span>
                <span className="s">&quot;form-control&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;text&quot;</span> <span className="na">placeholder=</span>
                <span className="s">&quot;Username&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Username&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;span</span> <span className="na">className=</span>
                <span className="s">&quot;input-group-button&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">aria-label=</span>
                <span className="s">&quot;Copy to clipboard&quot;</span>
                <span className="nt">&gt;</span>
                <span className="err">&lt;</span>%= octicon &quot;clippy&quot; %&gt;
                <span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/span&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/form&gt;</span>
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
          <a name="//apple_ref/cpp/Style/Form%20actions" className="dashAnchor" />
          <h4>
            <a id="form-actions" className="anchor" href="#form-actions" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Form actions
          </h4>
          <p>
            Align buttons to the right—via <code>float: right</code> on the buttons—in forms with <code>.form-actions</code>. The floats are
            automatically cleared for you.
          </p>
        </div>

        <div className="mt-3 position-relative clearfix p-3 styleguide-example border border-gray-light">
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
            <button type="button" className="btn">
              Cancel
            </button>
          </div>
        </div>

        <div className="markdown-body mb-3 position-relative clipboard-reveal js-zeroclipboard-container">
          <div className="js-zeroclipboard-target">
            <pre className="highlight-html highlight">
              <code>
                <span className="nt">&lt;div</span> <span className="na">className=</span>
                <span className="s">&quot;form-actions&quot;</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;submit&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;btn btn-primary&quot;</span>
                <span className="nt">&gt;</span>Save changes<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;button</span> <span className="na">type=</span>
                <span className="s">&quot;button&quot;</span> <span className="na">className=</span>
                <span className="s">&quot;btn&quot;</span>
                <span className="nt">&gt;</span>Cancel<span className="nt">&lt;/button&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
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
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/components/buttons/">
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
            Buttons
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/labels/">
            Labels
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
/* eslint-enable jsx-a11y/anchor-has-content */
/* eslint-enable jsx-a11y/anchor-is-valid */
/* eslint-enable jsx-a11y/label-has-associated-control */
