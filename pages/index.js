import Head from 'next/head'
import Navigation from '../components/navigation.tsx'
import Footer from '../components/footer.tsx'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={ styles.container }>
      <Head>
        <title>UI Design and Developement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation isHomepage={ true }/>

      <main className={ styles.main }>

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
