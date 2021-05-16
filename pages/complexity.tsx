import ArticlePage from '../components/article'
import { GetStaticProps } from 'next'

function article ({ content }) {
  return (
    <ArticlePage
      title={
`
We're so Bad at Judging Complexity, yet We Like to Predict
(Getting Perspective on Complexity)
`
      }
      content={content}
    />
  )
}

export const getStaticProps: GetStaticProps = async _ => {
  const res = await fetch('http://localhost:3000/mdcontent/complexity.md')
  const content = await res.text()
  return {
    props: {
      content
    }
  }
}

export default article
