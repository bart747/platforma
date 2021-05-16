import ArticlePage from '../components/article'
import { GetStaticProps } from 'next'

function article ({ content }) {
  return (
    <ArticlePage
      title={'5 Notes on How to Design a Resilient UI'}
      content={content}
    />
  )
}

export const getStaticProps: GetStaticProps = async _ => {
  const res = await fetch('http://localhost:3000/mdcontent/resilient-ui.md')
  const content = await res.text()
  return {
    props: {
      content
    }
  }
}

export default article
