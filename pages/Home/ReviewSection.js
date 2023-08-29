// import AOS from 'aos';
// import 'aos/dist/aos.css';
import SectionHeading from '@/components/SectionHeading';
import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import { Rating } from '@smastrom/react-rating'




const ReviewSection = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviewData.json").then(res => res.json()).then(data => setReviews(data))
    }, [])
    // const [ratings, setRating] = useState(0)
    return (

        <section className="text-gray-600 font-serif">
            <div className="container px-5 py-20 mx-auto ">
                <SectionHeading title={"Client Testimonials"} subtitle={"Hear What Our Valued Clients Are Saying"}></SectionHeading>
                <Marquee>
                    <div className="carousel w-full">
                        {
                            reviews.map((reviewW, index) =>
                                <div className='bg-[#e1d8eb] '>

                                    <img src={reviewW.reviewerImage} className="w-[70px] rounded-full p-2 h-[70px]" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-10 h-10 pl-2 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <div className="text-justify w-[400px] h-[400px] m-3 ">

                                        <div className='flex justify-between'><p className=" h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></p>
                                            <p className=" h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></p></div>
                                        <h2 className="text-gray-900 text-lg title-font font-extrabold mb-3">{reviewW.reviewerName}</h2>
                                        <p className="leading-relaxed font-bold mb-2">{reviewW.bookName}</p>
                                        <p className="leading-relaxed mb-2"><span className='font-semibold'>Review: </span>{reviewW.review}</p>
                                        <p className="leading-relaxed mb-2"><span className='font-semibold'>Ratings: <Rating style={{ maxWidth: 120 }} value={reviewW.ratings} readOnly></Rating></span></p>
                                        <p className="leading-relaxed mb-2"><span className='font-semibold'>Date: </span>{reviewW.date}</p>
                                    </div>

                                </div>)}
                    </div>
                </Marquee>
            </div>
        </section>
    )
}

export default ReviewSection
{/**<section className="text-gray-600  font-serif">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">What Our Clients Saying</h1>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-5'>
                {reviews.map(reviewW =>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img src={reviewW.reviewerImage} alt="" />
                            </div>
                            <div className="text-justify w-52 m-3">
                                <h2 className="text-gray-900 text-lg title-font font-extrabold mb-3">{reviewW.reviewerName}</h2>
                                <p className="leading-relaxed font-bold mb-2">{reviewW.bookName}</p>
                                <p className="leading-relaxed mb-2"><span className='font-semibold'>Review: </span>{reviewW.reviewW}</p>
                                <p className="leading-relaxed mb-2"><span className='font-semibold'>Ratings: </span>{reviewW.ratings}</p>
                                <p className="leading-relaxed mb-2"><span className='font-semibold'>Date: </span>{reviewW.date}</p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </section> */}