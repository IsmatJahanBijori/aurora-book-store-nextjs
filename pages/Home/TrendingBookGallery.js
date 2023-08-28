import SectionHeading from '@/components/SectionHeading'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';

const TrendingBookGallery = () => {
    const [books, setBooks] = useState([])

    // const webBook=books.filter(book=>book.categories==="Web Development")
    useEffect(() => {
        fetch("booksData.json").then(res => res.json()).then(data => setBooks(data.filter(dt => dt.categories === "Web development")))
        
    }, [])
    

    return (
        <section className="text-gray-600 font-serif">
            <div className="container px-5 py-20 mx-auto ">
                <SectionHeading title={"Web Development Book On Trending "} subtitle={"Master the art of modern web development with this comprehensive guide, covering everything from front-end technologies like HTML, CSS, and JavaScript to server-side scripting and database integration."} />
                <Marquee direction='right' className='bg-gradient-to-r from-[#f4edfa] to-[#cfbdde]'>
                    {
                        books.map(book =>
                            <div className="hero ">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src={book.cover} className="w-[150px] md:w-[300px] rounded-lg shadow-2xl" />
                                    <div className='w-[300px] md:w-[400px] lg:w-[600px]'>
                                        <h1 className="text-3xl font-bold text-center md:text-start">{book.author}</h1>
                                        <p className="py-2 text-lg">{book.title}</p>
                                        <p className="py-2 text-lg">{book.price}</p>
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Marquee>

            </div>
        </section>
    )
}

export default TrendingBookGallery
{
    /**<div className=" p-4 w-full border-2 border-violet-500 h-[500px] m-2 rounded-lg" data-aos="zoom-in-up">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="Book" className="object-cover object-center w-full h-full  block" src={book.cover} />
                                </a>
                                <div className="mt-4 w-[200px]">
                                    <p className="text-xl font-semibold tracking-widest  mb-1">{book.title}</p>
                                    <p className="text-lg font-medium">{book.author}</p>
                                    <p className="mt-1">$ {book.price}</p>
                                </div>
                                <div className=''>
                                    <button className='inline-flex items-center bg-violet-400 border-0 font-bold py-1 px-3 focus:outline-none hover:bg-violet-600 hover:text-white rounded mt-4 md:mt-5'>Buy Now</button>
                                </div>
                            </div> */
}