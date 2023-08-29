"use client"
import Product from '../../model/Product'
import mongoose from 'mongoose'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
//TODO: static design hoiche


const productID = ({ product }) => {
  // // const { cover, title, author, price } = product
  // // console.log(params)
  // const router = useRouter()
  // const { id } = router.query
  // // console.log(router)
  // // {title}
  // //{author}
  // //{price}
  // //{cover}
  // useEffect(() => {
  //   if (id) {
  //     fetch(`booksData.json/product/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // Use the fetched data to render your product detail page
  //         console.log(data); // Replace this with your rendering logic
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching product data:', error);
  //       });
  //   }
  // }, [id]);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-col-reverse md:flex-row">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

            <h1 className="text-gray-900 text-3xl  font-medium mb-4">{product.title}</h1>
            <h2 className="text-lg my-2 text-gray-500 tracking-widest">{product.author} | {product.categories}</h2>
            {/*<div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
  </div>*/}
            <p className="leading-relaxed mb-4">{product.description}</p>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">$ {product.price}</span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img alt="book" className="lg:w-1/2 w-full h-[400px] object-cover object-center rounded" src={product.cover} />
        </div>
      </div>
    </section>
  )
}



export async function getServerSideProps(context) {
  // Fetch data from external API

  // res.status(200).json({ products })
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Product.findOne({ id: context.query.id })
  // Pass data to the page via props
  return { props: { product: JSON.parse(JSON.stringify(product)) } }
}

export default productID
