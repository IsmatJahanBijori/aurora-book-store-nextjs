import React, { useEffect, useState } from 'react'

const Product = () => {
  const [productData, setProductData] = useState([])
  useEffect(() => {
    fetch("booksData.json").then(res => res.json()).then(data => setProductData(data))
  }, [])
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            productData.map(product =>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full gap-5 card shadow-2xl m-5">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="Book" className="object-cover object-center w-full h-full block" src={product.cover} />
                </a>
                <div className="mt-4 h-[200px]">
                  <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">{product.title}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.author}</h2>
                  <p className="mt-1">$ {product.price}</p>
                </div>
              </div>)

          }
        </div>
      </div>
    </section>
  )
}

export default Product
