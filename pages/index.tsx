import Head from 'next/head'
import { useEffect } from 'react'
// import Navigation from '../components/navigation'
import HeaderImage from '../components/headerImage'
import Footer from '../components/footer'
import Heuristics from '../components/heuristics'
import ArticleList from '../components/articleList'
import ToolList from '../components/toolList'
import GetEmail from '../util/getEmail'
import onScroll from '../util/onScroll'

export default function Home() {
  useEffect(() => {
    GetEmail('email')
  })

  function logger(msg: string) { console.log(msg) }

  useEffect(() => {
    onScroll(300, () => logger('hi'))
  })

  return (
    <div>
      <Head>
        <title>UI Design and Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl">
        <HeaderImage />
        <main className="max-w-xl mx-auto">
          <ArticleList />
          <Heuristics />
          <ToolList />
          <span id="email" className="align-top"></span>
        </main>
        <Footer />
      </div>
    </div>
  )
}
