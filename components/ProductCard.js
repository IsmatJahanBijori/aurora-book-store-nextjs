import React from 'react'

const ProductCard = ({ product }) => {
    const { cover, title, author, price } = product
    return (
        <div className="p-4 w-[400px] md:w-full  gap-5 card shadow-2xl m-5">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="Book" className="object-cover object-center w-full h-full block" src={cover} />
            </a>
            <div className="mt-4 h-[200px]">
                <h3 className="text-gray-500 text-lg tracking-widest title-font mb-1">{title}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{author}</h2>
                <p className="mt-1">$ {price}</p>
            </div>
        </div>
    )
}

export default ProductCard
