import ProductCard from '@/components/ProductCard'
// import { add } from '../redux/CartSlice'
import mongoose from "mongoose";
import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import Product from "../model/Product";


const ProductInfo = ({ productData }) => {
  // const [productData, setProductData] = useState([])
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   fetch("booksData.json").then(res => res.json()).then(data => setProductData(data))
  // }, [])

  const [visibleProducts, setVisibleProducts] = useState(6);

  const loadMore = () => {
    setVisibleProducts(visibleProducts + 6);
  };

  // const handleBuyNow = (product) => {
  //   dispatch(add(product))
  // }
  // handleBuyNow={handleBuyNow}
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 ">
          {
            productData.slice(0, visibleProducts).map((product, index) =>
              <ProductCard product={product} key={index} />
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


export async function getServerSideProps(context) {
  // Fetch data from external API

  // res.status(200).json({ products })
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let productData = await Product.find()
  // Pass data to the page via props
  return { props: { productData: JSON.parse(JSON.stringify(productData)) } }
}


export default ProductInfo


// let productData = await Product.find({category:"Web development"})