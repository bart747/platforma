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

      <div className="container mx-auto max-w-5xl">
        <Navigation />
        <header>
          <h1 className="text-5xl mt-20 mb-20">Making Visually Rich, <br></br> yet Fast Web UIs</h1>
        </header>
        <main className="max-w-2xl">
          <ArticleList />
          <Heuristics />
        </main>
        <span id="email" className=""></span>
        <Footer />
      </div>
    </div>
  )
}
