import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>COMMING SOON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Mekaniku!" />
        <p className="description">
          Something awesome for Car Owners, Mechanics & Spare Part Shop All over Malaysia, Stay Tuned.
        </p>
        <img src="./logo.png" />
      </main>

      <Footer />
    </div>
  )
}
