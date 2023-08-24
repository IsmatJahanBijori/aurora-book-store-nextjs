import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import {  Parallax } from 'react-parallax'

const Banner = () => {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        fetch("banner.json").then(res => res.json()).then(data => setBanners(data))
    }, [])
    return (
        <Marquee>
            {
                banners.map(banner =>

                    <Parallax blur={{ min: -20, max: 20 }} bgImage={banner.img} strength={100}>
                        <div className="hero h-[800px]">
                            <div className="hero-content text-center text-neutral-content">
                                <div className='hero-overlay bg-opacity-30 w-[1000px] h-[350px]'>
                                    <div className='mt-32'>
                                        <h1 className="mb-5 text-5xl font-bold">{banner.title}</h1>
                                        <p className="mb-5 text-2xl">{banner.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>)
            }
        </Marquee>

    )
}

export default Banner
