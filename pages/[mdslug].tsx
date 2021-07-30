import ArticlePage from '../components/article'

function article ({ title, content }) {
  return (
    <ArticlePage
      title={ title }
      content={ content }
    />
  )
}

export async function getStaticProps ({ params }) {
  const res: any = await fetch(`http://localhost:3000/mdcontent/${params.mdslug}.md`)
  const content: string = await res.text()
  const title: string = content.split('\n')[0].replace('# ', '')

  return {
    props: {
      content,
      title
    }
  }
}

export async function getStaticPaths () {
  return {
    paths: [
      { params: { mdslug: 'complexity' } },
      { params: { mdslug: 'complexity2'} },
      { params: { mdslug: 'crowd' } },
      { params: { mdslug: 'resilient-ui' } },
      { params: { mdslug: 'ui-coins' } },
      { params: { mdslug: 'henry-ford-for-makers' } },
      { params: { mdslug: 'planck' } },
    ],
    fallback: false
  }
}

export default article
