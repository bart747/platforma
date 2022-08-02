import Head from "next/head";
import { useEffect } from "react";
import Navigation from "../components/navigation";
import HeaderImage from "../components/headerImage";
import Footer from "../components/footer";
// import Heuristics from '../components/heuristics'
import ArticleList from "../components/articleList";
import ToolList from "../components/toolList";
import GetEmail from "../util/getEmail";
import HighlightCode from "../util/codeHighlight";

export default function DesignSystem() {
  useEffect(() => {
    return GetEmail("email");
  });

  const snippet: string = `
\`\`\`  
module.exports = {
  webpack: function(config) {
    config.module.rules.push(
      {
        test: /.md$/,
        use: 'raw-loader',
      },
    )
    return config
  }
}

<h1>Bla Bla</h1>

function round (number: number, precision: number): number {
  return (
    Math.round(
      number * Math.pow(10, precision)
    ) / Math.pow(10, precision);
  )
}

// some comment

const a = 5
let b = 8
(a, b) => a + b
\`\`\`
`;

  const htmlSnippet = { __html: HighlightCode(snippet) };

  return (
    <div>
      <Head>
        <title>Design System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl">
        <Navigation />
        <main className="max-w-xl mx-auto">
          <h1 className="text-center">
            Design System{" "}
            <span className="text-gray-500">Used to Create This Place</span>
          </h1>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Color Palette
            </h3>
            <div className="m-auto text-center">
              <svg
                className="fill-ink-black inline-block m-2"
                width="80"
                height="80"
              >
                <rect width="80" height="80" />
              </svg>

              <svg
                className="fill-brand-ivory inline-block m-2"
                width="80"
                height="80"
              >
                <rect
                  width="80"
                  height="80"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>

              <svg
                className="fill-brand-blue inline-block m-2"
                width="80"
                height="80"
              >
                <rect width="80" height="80" />
              </svg>
              <svg
                className="fill-brand-maroon inline-block m-2"
                width="80"
                height="80"
              >
                <rect width="80" height="80" />
              </svg>
            </div>
            <br />
            <p className="text-center">
              <svg className="text-brand-maroon inline align-top" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 14L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 10L10 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 18L12 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 3H6C4.89543 3 4 3.89543 4 5V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V5C20 3.89543 19.1046 3 18 3H14.5M10 3V1M10 3V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Text to show you some
              <span className="text-brand-blue font-bold"> practical </span>
              contrast.
            </p>
          </section>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Index Header Image
            </h3>
            <HeaderImage />
          </section>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Typography
            </h3>
            <h4
              className="text-center
                           font-mono font-normal text-gray-500"
            >
              Headlines
            </h4>
            <h1>Exemplary Design System Headline with Margins</h1>
            <h2>Exemplary Design System Headline with Margins</h2>
            <h3>Exemplary Design System Headline with Margins</h3>
            <h4>Exemplary Design System Headline with Margins</h4>

            <h4
              className="text-center
                           font-mono font-normal text-gray-500"
            >
              Paragraph
            </h4>
            <p>
              A standard paragraph. Every article got one. Very useful. I need
              more text to make it a better example. A little bit more. Almost
              there. This is not very interesting.
            </p>
            <h4
              className="text-center
                           font-mono font-normal text-gray-500"
            >
              Lists
            </h4>
            <ul>
              <li>Unordered list</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
            <ol>
              <li>Ordered list</li>
              <li>Two</li>
              <li>Three</li>
            </ol>
            <h4
              className="text-center
                           font-mono font-normal text-gray-500"
            >
              Quote
            </h4>
            <blockquote>
              Inspiration does exist, but it must find you working.
            </blockquote>
            <figcaption>— Pablo Picasso</figcaption>
            <blockquote>
              There are some ideas so wrong that only a very intelligent person
              could believe in them.
            </blockquote>
            <figcaption>— George Orwell</figcaption>
          </section>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Button
            </h3>
            <button>clicking is futile</button>
          </section>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Code Block
            </h3>
            <div dangerouslySetInnerHTML={htmlSnippet} />
          </section>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Navigation Top-Bar
            </h3>
            <Navigation />
          </section>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Article List
            </h3>
            <ArticleList />
          </section>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Tool List
            </h3>
            <ToolList />
          </section>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Contact Span
            </h3>
            <span id="email" className="align-top"></span>
          </section>
          <section>
            <h3
              className="text-center mt-20
                           font-mono font-normal text-gray-500"
            >
              Footer
            </h3>
            <Footer />
          </section>
        </main>
      </div>
    </div>
  );
}
