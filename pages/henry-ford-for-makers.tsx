import Head from 'next/head'
import Footer from '../components/footer'
import ReactMarkdown from 'react-markdown'
import Navigation from '../components/navigation'
import { GetStaticProps } from 'next'

function article ({ content }) {
  const title: string = `
Henry Ford for Makers: Quotes on Design
`
  return (
    <div className="wrapper-big">
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <article>
        <ReactMarkdown allowDangerousHtml={true}>
          { content }
        </ReactMarkdown>
      </article>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async _ => {
  const res = await fetch('http://localhost:3000/mdcontent/henry-ford-for-makers.md')
  const content = await res.text()
  return {
    props: {
      content
    }
  }
}

export default article
