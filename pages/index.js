import Head from 'next/head'
import { useEffect } from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Heuristics from '../components/heuristics'
import ArticleList from '../components/articleList'
import GetEmail from '../util/getEmail.ts'

export default function Home () {

  useEffect(() => {
    return GetEmail("email")
  })

  return (
    <div>
      <Head>
        <title>UI Design and Developement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-wrapper">

        <Navigation isHomepage={ true }/>
        <header>
        </header>
        <main className="main content-wrapper">

          <Heuristics/>
          <ArticleList/>
        </main>
        <div id="email"></div>
        <Footer />
      </div>
    </div>
  )
}
