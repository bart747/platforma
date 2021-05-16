import ArticlePage from '../components/article'
import { GetStaticProps } from 'next'

function article ({ content }) {
  return (
    <ArticlePage
      title={'Henry Ford for Makers: Quotes on Design'}
      content={content}
    />
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
