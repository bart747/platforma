import Link from 'next/link'

const articles = [
  { slug: 'crowd', title: 'Old Programming Wisdom Beats Crowdsourced Advice' },
  { slug: 'future', title: 'Kinda Predictig the Future: the Internet and the Lindy Effect' },
  { slug: 'resilient-ui', title: '5 Notes on How to Design a Resilient UI' },
  { slug: 'complexity', title: "We're so Bad at Judging Complexity, yet We Like to Predict (Getting Perspective on Complexity)" },
  { slug: 'henry-ford-for-makers', title: 'Henry Ford for Makers: Quotes on Design' }
]

const svgIcon: string = `
  <svg xmlns="http://www.w3.org/2000/svg" 
    width="19" height="19"
    viewBox="0 0 24 24"
    fill="none" stroke="#0033cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    className="feather feather-arrow-right inline">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
`

const listItems = articles.map( (article) =>
  <li key={article.slug} className="mb-4">
    <Link href={article.slug}>
      <a className="no-underline font-normal">
        {article.title}
        &ensp;
        <span className="inline-block align-middle" dangerouslySetInnerHTML={{__html: svgIcon }}></span>
      </a>
    </Link>
  </li>
)

function ArticleList () {
  return (
    <section className="article-list">
      <h2 className="text-base">Articles:</h2>
      <ul>{listItems}</ul>
    </section>
  )
}

export default ArticleList
