import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import React from 'react'
import '@smastrom/react-rating/style.css'

export default function App({ Component, pageProps }) {

  return (
    <React.Fragment>
      <Head>
        <link href='https://i.ibb.co/30vSHtY/logo.jpg' rel="icon" type="image/jfif" sizes="16x16" className='rounded-full'></link>
        <title>
          Aurora Book Store
        </title>
      </Head>

      <SessionProvider session={pageProps.session}>
        <div className='font-serif bg-slate-200'>
          <Navbar />
          <Component {...pageProps} className='font-serif' />
          <Footer />
        </div>
      </SessionProvider>

    </React.Fragment>
  )
}
{/**
      <SessionProvider session={session}>
        <div className='font-serif'>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </SessionProvider> */}
