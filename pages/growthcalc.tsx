import Head from 'next/head'
import Navigation from '../components/navigation'
import GrowthCalc from '../components/growthCalc'
import Footer from '../components/footer'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Change/Growth Rate Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl">
        <Navigation />
        <main>
          <h1 className="my-12">Change/Growth Rate Calculator</h1>
          <GrowthCalc />
        </main>
        <Footer />
      </div>
    </div>
  )

}
