import Head from 'next/head'
import Navigation from '../components/navigation'
import GCalc from '../components/growthCalc'
import Footer from '../components/footer'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Growth Rate Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl">
        <Navigation />
        <main>
          <h1 className="my-12">Growth Rates Calculator</h1>
          <GCalc />
        </main>
        <Footer />
      </div>
    </div>
  )

}
