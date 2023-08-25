import ProductCard from '@/components/ProductCard'
import React, { useEffect, useState } from 'react'
// import styles from "../styles/Product.module.css"
const Product = () => {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch("booksData.json").then(res => res.json()).then(data => setProductData(data))
  }, [])

  const [visibleProducts, setVisibleProducts] = useState(6);

  const loadMore = () => {
    setVisibleProducts(visibleProducts + 6);
  };
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 ">
          {
            productData.slice(0, visibleProducts).map((product, index) =>
              <ProductCard product={product}/>
            )
          }
          {visibleProducts < productData.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >Load More</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Product


