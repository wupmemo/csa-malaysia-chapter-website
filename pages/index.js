import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>COMMING SOON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Image
          src="/logo.png"
          width={400}
          height={400}
          alt="Picture of the Mekaniku"
        />
        <p className="description">
          Something awesome for Car Owners, Mechanics & Spare Part Shop All over Malaysia, Stay Tuned.
        </p>
      </main>

      <Footer />
    </div>
  )
}
