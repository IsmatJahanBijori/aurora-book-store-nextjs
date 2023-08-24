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
                            <div className='bg-[#e1d8eb]'>

                                <img src={reviewW.reviewerImage} className="w-[70px] rounded-full p-2 h-[70px]" />
                                <div class="text-justify w-[400px] h-[300px] m-3 ">
                                    <h2 class="text-gray-900 text-lg title-font font-extrabold mb-3">{reviewW.reviewerName}</h2>
                                    <p class="leading-relaxed font-bold mb-2">{reviewW.bookName}</p>
                                    <p class="leading-relaxed mb-2"><span className='font-semibold'>Review: </span>{reviewW.review}</p>
                                    <p class="leading-relaxed mb-2"><span className='font-semibold'>Ratings: <Rating style={{ maxWidth: 120 }} value={reviewW.ratings} readOnly></Rating></span></p>
                                    <p class="leading-relaxed mb-2"><span className='font-semibold'>Date: </span>{reviewW.date}</p>
                                </div>

                            </div>)}
                </div>
            </Marquee>
</div>
        </section>
    )
}

export default ReviewSection
{/**<section class="text-gray-600  font-serif">
            <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">What Our Clients Saying</h1>
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-5'>
                {reviews.map(reviewW =>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <img src={reviewW.reviewerImage} alt="" />
                            </div>
                            <div class="text-justify w-52 m-3">
                                <h2 class="text-gray-900 text-lg title-font font-extrabold mb-3">{reviewW.reviewerName}</h2>
                                <p class="leading-relaxed font-bold mb-2">{reviewW.bookName}</p>
                                <p class="leading-relaxed mb-2"><span className='font-semibold'>Review: </span>{reviewW.reviewW}</p>
                                <p class="leading-relaxed mb-2"><span className='font-semibold'>Ratings: </span>{reviewW.ratings}</p>
                                <p class="leading-relaxed mb-2"><span className='font-semibold'>Date: </span>{reviewW.date}</p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </section> */}