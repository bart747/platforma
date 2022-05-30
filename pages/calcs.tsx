import Head from 'next/head'
import Footer from '../components/footer'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Calculators</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl">
        <h1>Calculators</h1>
        <Footer />
      </div>
    </div>
  )
}
