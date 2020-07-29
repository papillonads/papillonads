/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
              <a href="/primer/components/markdown/" aria-current="page" className="text-gray">
                Markdown
              </a>
            </li>
          </ol>
        </nav>

        <h2 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">Markdown</h2>

        <div className="border-top border-bottom py-3 mb-4 clearfix">
          <div className="float-right">
            <a
              href="https://github.com/primer/primer/issues/new?title=primer-markdown"
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
              href="https://github.com/primer/primer/tree/master/modules/primer-markdown/"
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

            <a className="d-inline-block px-2 py-1" href="https://npmjs.com/package/primer-markdown">
              3.7.11
            </a>
          </div>

          <div className="d-inline-block">
            <span className="text-bold">Package:</span>
            <a href="https://github.com/primer/primer/tree/master/modules/primer-product">primer-product</a>
          </div>
        </div>

        <div className="markdown-body">
          <p>
            Text can be <strong>bold</strong>, <em>italic</em>, or <del>strikethrough</del>. <a href="https://github.com">Links</a> should
            be blue with no underlines (unless hovered over).
          </p>
          <p>
            There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between
            paragraphs. There should be whitespace between paragraphs.
          </p>
          <p>
            There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between
            paragraphs. There should be whitespace between paragraphs.
          </p>
          <blockquote>
            <p>There should be no margin above this first sentence.</p>
            <p>Blockquotes should be a lighter gray with a gray border along the left side.</p>
            <p>There should be no margin below this final sentence.</p>
          </blockquote>
          <a name="//apple_ref/cpp/Style/Header%201" className="dashAnchor" />
          <h1>
            <a id="header-1" className="anchor" href="#header-1" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Header 1
          </h1>
          <p>
            This is a normal paragraph following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta
            chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs
            biltong.
          </p>
          <a name="//apple_ref/cpp/Style/Header%202" className="dashAnchor" />
          <h2>
            <a id="header-2" className="anchor" href="#header-2" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Header 2
          </h2>
          <blockquote>
            <p>
              This is a blockquote following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck
              sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs
              biltong.
            </p>
          </blockquote>
          <a name="//apple_ref/cpp/Style/Header%203" className="dashAnchor" />
          <h3>
            <a id="header-3" className="anchor" href="#header-3" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Header 3
          </h3>
          <pre>
            <code>This is a code block following a header.</code>
          </pre>
          <a name="//apple_ref/cpp/Style/Header%204" className="dashAnchor" />
          <h4>
            <a id="header-4" className="anchor" href="#header-4" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Header 4
          </h4>
          <ul>
            <li>This is an unordered list following a header.</li>
            <li>This is an unordered list following a header.</li>
            <li>This is an unordered list following a header.</li>
          </ul>
          <h5>
            <a id="header-5" className="anchor" href="#header-5" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Header 5
          </h5>
          <ol>
            <li>This is an ordered list following a header.</li>
            <li>This is an ordered list following a header.</li>
            <li>This is an ordered list following a header.</li>
          </ol>
          <h6>
            <a id="header-6" className="anchor" href="#header-6" aria-hidden="true">
              <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
            </a>
            Header 6
          </h6>
          <table>
            <thead>
              <tr>
                <th>What</th>
                <th>Follows</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A table</td>
                <td>A header</td>
              </tr>
              <tr>
                <td>A table</td>
                <td>A header</td>
              </tr>
              <tr>
                <td>A table</td>
                <td>A header</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <p>There&apos;s a horizontal rule above and below this.</p>
          <hr />
          <p>Here is an unordered list:</p>
          <ul>
            <li>Salt-n-Pepa</li>
            <li>Bel Biv DeVoe</li>
            <li>Kid &apos;N Play</li>
          </ul>
          <p>And an ordered list:</p>
          <ol>
            <li>Michael Jackson</li>
            <li>Michael Bolton</li>
            <li>Michael Bublé</li>
          </ol>
          <p>And an unordered task list:</p>
          <ul>
            <li>[x] Create a sample markdown document</li>
            <li>[x] Add task lists to it</li>
            <li>[ ] Take a vacation</li>
          </ul>
          <p>And a &quot;mixed&quot; task list:</p>
          <ul>
            <li>[ ] Steal underpants</li>
            <li>?</li>
            <li>[ ] Profit!</li>
          </ul>
          <p>And a nested list:</p>
          <ul>
            <li>
              Jackson 5
              <ul>
                <li>Michael</li>
                <li>Tito</li>
                <li>Jackie</li>
                <li>Marlon</li>
                <li>Jermaine</li>
              </ul>
            </li>
            <li>
              TMNT
              <ul>
                <li>Leonardo</li>
                <li>Michelangelo</li>
                <li>Donatello</li>
                <li>Raphael</li>
              </ul>
            </li>
          </ul>
          <p>Definition lists can be used with HTML syntax. Definition terms are bold and italic.</p>
          <dl>
            <dt>Name</dt>
            <dd>Godzilla</dd>
            <dt>Born</dt>
            <dd>1952</dd>
            <dt>Birthplace</dt>
            <dd>Japan</dd>
            <dt>Color</dt>
            <dd>Green</dd>
          </dl>
          <hr />
          <p>Tables should have bold headings and alternating shaded rows.</p>
          <table>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Album</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jackson</td>
                <td>Thriller</td>
                <td>1982</td>
              </tr>
              <tr>
                <td>Prince</td>
                <td>Purple Rain</td>
                <td>1984</td>
              </tr>
              <tr>
                <td>Beastie Boys</td>
                <td>License to Ill</td>
                <td>1986</td>
              </tr>
            </tbody>
          </table>
          <p>If a table is too wide, it should condense down and/or scroll horizontally.</p>
          <table>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Album</th>
                <th>Year</th>
                <th>Label</th>
                <th>Awards</th>
                <th>Songs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Jackson</td>
                <td>Thriller</td>
                <td>1982</td>
                <td>Epic Records</td>
                <td>
                  Grammy Award for Album of the Year, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite
                  Soul/R&amp;B Album, Brit Award for Best Selling Album, Grammy Award for Best Engineered Album, Non-Classical
                </td>
                <td>
                  Wanna Be Startin&apos; Somethin&apos;, Baby Be Mine, The Girl Is Mine, Thriller, Beat It, Billie Jean, Human Nature,
                  P.Y.T. (Pretty Young Thing), The Lady in My Life
                </td>
              </tr>
              <tr>
                <td>Prince</td>
                <td>Purple Rain</td>
                <td>1984</td>
                <td>Warner Brothers Records</td>
                <td>
                  Grammy Award for Best Score Soundtrack for Visual Media, American Music Award for Favorite Pop/Rock Album, American Music
                  Award for Favorite Soul/R&amp;B Album, Brit Award for Best Soundtrack/Cast Recording, Grammy Award for Best Rock
                  Performance by a Duo or Group with Vocal
                </td>
                <td>
                  Let&apos;s Go Crazy, Take Me With U, The Beautiful Ones, Computer Blue, Darling Nikki, When Doves Cry, I Would Die 4 U,
                  Baby I&apos;m a Star, Purple Rain
                </td>
              </tr>
              <tr>
                <td>Beastie Boys</td>
                <td>License to Ill</td>
                <td>1986</td>
                <td>Mercury Records</td>
                <td>noawardsbutthistablecelliswide</td>
                <td>
                  Rhymin &amp; Stealin, The New Style, She&apos;s Crafty, Posse in Effect, Slow Ride, Girls, (You Gotta) Fight for Your
                  Right, No Sleep Till Brooklyn, Paul Revere, Hold It Now, Hit It, Brass Monkey, Slow and Low, Time to Get Ill
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <p>
            Code snippets like <code>var foo = &quot;bar&quot;;</code> can be shown inline.
          </p>
          <p>
            Also, <code>this should vertically align</code>{' '}
            <del>
              <code>with this</code>
            </del>{' '}
            <del>and this</del>.
          </p>
          <p>Code can also be shown in a block element.</p>
          <pre>
            <code>var foo = &quot;bar&quot;;</code>
          </pre>
          <p>Code can also use syntax highlighting.</p>
          <pre className="highlight-javascript highlight">
            <code>
              <span className="kd">var</span> <span className="nx">foo</span> <span className="o">=</span>{' '}
              <span className="s2">&quot;bar&quot;</span>
              <span className="p">;</span>
            </code>
          </pre>
          <pre>
            <code>
              Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long
              enough to demonstrate this.
            </code>
          </pre>
          <pre className="highlight-javascript highlight">
            <code>
              <span className="kd">var</span> <span className="nx">foo</span> <span className="o">=</span>{' '}
              <span className="s2">
                &quot;The same thing is true for code with syntax highlighting. A single line of code should horizontally scroll if it is
                really long.&quot;
              </span>
              <span className="p">;</span>
            </code>
          </pre>
          <p>Inline code inside table cells should still be distinguishable.</p>
          <table>
            <thead>
              <tr>
                <th>Language</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Javascript</td>
                <td>
                  <code>var foo = &quot;bar&quot;;</code>
                </td>
              </tr>
              <tr>
                <td>Ruby</td>
                <td>
                  <code>foo = &quot;bar&quot;</code>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <p>Small images should be shown at their actual size.</p>
          <p>
            <img src="http://placekitten.com/g/300/200/" alt="" />
          </p>
          <p>Large images should always scale down and fit in the content container.</p>
          <p>
            <img src="http://placekitten.com/g/1200/800/" alt="" />
          </p>
          <pre>
            <code>This is the final element on the page and there should be no margin below this.</code>
          </pre>
        </div>
      </div>
      <div className="mt-4 d-flex flex-justify-between">
        <div>
          <a href="/primer/components/labels/">
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
            Labels
          </a>
        </div>
        <div className="align-right">
          <a href="/primer/components/marketing-buttons/">
            Marketing Buttons
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
