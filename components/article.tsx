import Head from 'next/head'
import Footer from '../components/footer'
import ReactMarkdown from 'react-markdown'
import Navigation from '../components/navigation'

interface ArticleProps {
  title: string;
  content: string;
}

function ArticlePage (props: ArticleProps) {
  return (
    <div className="page-wrapper">
      <Head>
        <title>{ props.title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
        <article>
          <ReactMarkdown allowDangerousHtml={true}>
            { props.content }
          </ReactMarkdown>
        </article>
      <Footer />
    </div>
  )
}

export default ArticlePage
