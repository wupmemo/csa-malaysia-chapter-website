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
          Empowering Car Owners in Malaysia via affordable quality spare parts.
        </p>
      </main>

      <Footer />
    </div>
  )
}
