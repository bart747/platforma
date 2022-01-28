import ArticlePage from '../components/article'
import codeHighlight from '../util/codeHighlight'

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
  const text: string = await res.text()

  const content = text.replace(/\`\`\`([\s\S]*?)\`\`\`/g, codeHighlight)
  const title: string = text.split('\n')[0].replace('# ', '')

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
      { params: { mdslug: 'henry-ford-for-makers' } },
      { params: { mdslug: 'fonts-linux' } }
    ],
    fallback: false
  }
}

export default article
