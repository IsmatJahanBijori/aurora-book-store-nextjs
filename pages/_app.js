import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import '@smastrom/react-rating/style.css'
// import { store } from '../redux/store'
// import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [total, setTotal] = useState(0)

  const saveCart = (myCart) => {
    localStorage.setItem("cart", myCart)
    let subT = 0
    let keys = Object.keys(cart)
    for (let i = 0; i<keys.length; i++) {
      subT += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setTotal(subT)
  }
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }

    } catch (error) {
      console.log(error);
      localStorage.clear()
    }
  }, [])

  const handleAddToCart = (id, title, author, categories, price, qty) => {
    let newCart = cart;
    if (id in cart) {
      newCart[id].qty = cart[id].qty + qty
    }
    else {
      newCart[id] = { qty: 1, title, author, categories, price }
    }
    setCart(newCart)
    console.log(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const handleRemoveFromCart = (id, title, author,cover, categories, price, qty) => {
    let newCart = cart;
    if (id in cart) {
      newCart[id].qty = cart[id].qty - qty
    }
    if (newCart[id]["qty"] <= 0) {
      delete newCart[id]
    }
    setCart(newCart)
    saveCart(newCart)
  }



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
          <Navbar cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} clearCart={clearCart} total={total} />
          <Component {...pageProps} className='font-serif' />
          <Footer />
        </div>
      </SessionProvider>

    </React.Fragment>
  )
}

// store={store}
{/**
      <SessionProvider session={session}>
        <div className='font-serif'>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </SessionProvider> */}
