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
  const fileName: string = `${params.mdslug}.md`
  const res: any = await fetch(`https://raw.githubusercontent.com/bart747/notebook/main/articles/${fileName}`)
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
      { params: { mdslug: 'crowd' } },
      { params: { mdslug: 'resilient-ui' } },
      { params: { mdslug: 'future' } },
      { params: { mdslug: 'henry-ford-for-makers' } }
    ],
    fallback: false
  }
}

export default article
