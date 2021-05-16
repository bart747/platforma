import ArticlePage from '../components/article'
import { GetStaticProps } from 'next'

function article ({ content }) {
  return (
    <ArticlePage
      title={'Learning UI Design from Coins (on Contrast)'}
      content={content}
    />
  )
}

export const getStaticProps: GetStaticProps = async _ => {
  const res = await fetch('http://localhost:3000/mdcontent/ui-coins.md')
  const content = await res.text()
  return {
    props: {
      content
    }
  }
}

export default article
