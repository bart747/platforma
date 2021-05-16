import ArticlePage from '../components/article'
import { GetStaticProps } from 'next'

function article ({ content }) {
  return (
    <ArticlePage
      title={'Old Programming Wisdom Beats Crowdsourced Advice'}
      content={content}
    />
  )
}

export const getStaticProps: GetStaticProps = async _ => {
  const res = await fetch('http://localhost:3000/mdcontent/crowd.md')
  const content = await res.text()
  return {
    props: {
      content
    }
  }
}

export default article
