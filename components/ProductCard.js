import AOS from 'aos';
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import Link from 'next/link';
const ProductCard = ({ product, handleAddToCart }) => {
    const { cover, title, author, price, id } = product

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])

    // const handleBuyNow = () => {

    // }

    return (
        <div className="p-4 w-[400px] md:w-full  gap-5 card shadow-2xl m-5" >
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="Book" className="object-cover object-center w-full h-full block" src={cover} />
            </a>
            <div className="mt-4 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">{title}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{author}</h2>
                <p className="my-2">$ {price}</p>
                <div className={` ${isHovered ? 'opacity-100' : 'opacity-0'} mb-2`}>
                    <div className='flex flex-col  '>                       
                        <Link href={`/product/${id}`}><button data-aos="fade-right" product={product} className="lg:mt-2 xl:mt-0 text-white bg-indigo-500 w-3/5 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
//transition-opacity duration-300

//<Link href={""}><button onClick={()=>handleAddToCart(id, title, author, price, qty:1)} data-aos="fade-left" className="lg:mt-2 xl:mt-0  text-white bg-indigo-500 border-0 py-2 px-6 w-3/5 focus:outline-none hover:bg-indigo-600 rounded my-2">Buy Now</button></Link>