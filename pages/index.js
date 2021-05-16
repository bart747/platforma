import Head from 'next/head'
import Navigation from '../components/navigation.tsx'
import Footer from '../components/footer.tsx'
import Intro from '../components/intro.tsx'
import Link from 'next/link'

export default function Home () {
  return (
    <div className="wrapper-big">
      <Head>
        <title>UI Design and Developement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation isHomepage={ true }/>
      <header>
      </header>
      <main className="main">
        
        <Intro />

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
      </main>

      <Footer />
    </div>
  )
}
