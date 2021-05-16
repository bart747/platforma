import Link from 'next/link'

function ArticleList () {
  return (
    <section>
      <h3>Articles:</h3>
      <ul>
        <li>
          <Link href='/resilient-ui'>
            <a>
              5 Notes on How to Design a Resilient UI
            </a>
          </Link>
        </li>
        <li>
          <Link href='/complexity'>
            <a>
              We&apos;re so Bad at Judging Complexity, yet We Like to Predict
              (Getting Perspective on Complexity)
            </a>
          </Link>
        </li>
        <li>
          <Link href='/henry-ford-for-makers'>
            <a>
              Henry Ford for Makers: Quotes on Design
            </a>
          </Link>
        </li>
        <li>
          <Link href='/ui-coins'>
            <a>
              Contrast in UI Design
            </a>
          </Link>
        </li>
        <li>
          <Link href='/crowd'>
            <a>
              Old Programming Wisdom Beats Crowdsourced Advice
            </a>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default ArticleList
