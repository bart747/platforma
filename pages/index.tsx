import Head from 'next/head'
import { useEffect } from 'react'
import Navigation from '../components/navigation'
import HeaderHome from '../components/headerHome'
import Footer from '../components/footer'
import Heuristics from '../components/heuristics'
import ArticleList from '../components/articleList'
// import ToolList from '../components/toolList'
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

      <div className="container mx-auto max-w-5xl">
        <HeaderHome />
        <main className="max-w-xl mx-auto">
          <ArticleList />
          <Heuristics />

          <span id="email" className="align-top"></span>
        </main>
        <Footer />
      </div>
    </div>
  )
}
