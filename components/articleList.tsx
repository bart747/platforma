import Link from 'next/link'

const articles = [
  { slug: 'crowd', title: 'Old Programming Wisdom Beats Crowdsourced Advice' },
  { slug: 'future', title: 'Kinda Predictig the Future: the Internet and the Lindy Effect' },
  { slug: 'resilient-ui', title: '5 Notes on How to Design a Resilient UI' },
  { slug: 'complexity', title: "We're so Bad at Judging Complexity, yet We Like to Predict (Getting Perspective on Complexity)" },
  { slug: 'henry-ford-for-makers', title: 'Henry Ford for Makers: Quotes on Design' }
]

const listItems = articles.map((article) =>
  <li key={article.slug} className="mb-4">
    <Link href={article.slug}>
      <a className="no-underline">
        {article.title}
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
