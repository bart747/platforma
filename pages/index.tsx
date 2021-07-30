import Head from 'next/head'
import { useEffect } from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Heuristics from '../components/heuristics'
import ArticleList from '../components/articleList'
import GetEmail from '../util/getEmail'

export default function Home () {
  useEffect(() => {
    return GetEmail('email')
  })

  return (
    <div>
      <Head>
        <title>UI Design and Developement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-wrapper">

        <Navigation />
        <header>
          <h1>Making Visually Rich, <br></br> yet Fast Web UIs</h1>
        </header>
        <main className="main content-wrapper">
          <ArticleList/>
          <Heuristics/>
        </main>
        <div id="email" className="email-link"></div>
        <Footer />
      </div>
    </div>
  )
}
