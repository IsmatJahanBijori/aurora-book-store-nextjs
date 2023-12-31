"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsCart3, BsMenuUp } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import { useSelector } from 'react-redux';



const Navbar = () => {
    // console.log(cart, handleAddToCart, handleRemoveFromCart, clearCart, total)
    const { data: session } = useSession()
    // console.log(session)

    function handleSignOut() {
        signOut()
    }
    const [navbar, setNavbar] = useState(false);

    // const count = useSelector((state) => state.cart.items)
    // console.log(count)

    return (
        <header className="text-gray-600 bg-slate-200">
            {/*button */}
            <div className="lg:hidden">
                <button
                    className="p-2 m-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                >
                    {navbar ? (
                        <GiCrossMark />
                    ) : (
                        <BsMenuUp />
                    )}
                </button>
            </div>
            <div className={`container mx-auto lg:flex flex-wrap p-5 flex-col lg:flex-row items-center ${navbar ? "block" : "hidden"
                }`}
            >
                <Link href="/" className="flex title-font items-center text-black font-bold mb-4 md:mb-0">
                    <img src='https://i.ibb.co/30vSHtY/logo.jpg' rel="icon" type="image/jfif" className='rounded-full w-10 h-10 border-2 border-purple-500' />
                    <span className="ml-3 text-xl font-bold">Aurora Book Store</span>
                </Link>
                <nav className="flex-col lg:flex-row lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4 lg:border-l lg:border-gray-400 flex flex-wrap lg:items-center text-base lg:justify-center md:my-2 lg:my-0">
                    <Link href="/" className="mr-5 hover:text-black font-bold">Home</Link>
                    <Link href="/product" className="mr-5 hover:text-black font-bold">Product</Link>
                    <Link href="/about" className="mr-5 hover:text-black font-bold">About Us</Link>
                    <Link href="/contact" className="mr-5 hover:text-black font-bold">Contact Us</Link>
                </nav>
                {
                    session ? <div>Signed in as {session.user.email} <br />
                        <button onClick={handleSignOut} className="inline-flex items-center bg-violet-400 font-bold md:mr-5 border-0 py-1 px-3 focus:outline-none hover:bg-violet-600 hover:text-white rounded  mt-4 md:mt-0">Sign Out
                            <svg fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                        :
                        <React.Fragment>
                            <Link href={"/login"}>
                                <button className="flex flex-col md:inline-flex  items-center bg-violet-400 font-bold md:mr-5 border-0 py-1 px-3 focus:outline-none hover:bg-violet-600 hover:text-white rounded  mt-4 md:mt-0">Login

                                </button>
                            </Link>
                            <Link href={"/signup"}>
                                <button className="flex flex-col md:inline-flex items-center bg-violet-400 border-0 font-bold py-1 px-3 focus:outline-none hover:bg-violet-600 hover:text-white rounded mt-4 md:mt-0">Signup

                                </button>
                            </Link>
                            <Link href={"/cart"}><BsCart3 className='mt-5 md:my-0 md:ml-5 text-xl md:text-2xl'/></Link>
                        </React.Fragment>
                }
            </div>


        </header>
    )
}

export default Navbar
{/*
<header className="text-gray-600 bg-slate-200">
            <div className="hidden container mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font items-center text-black font-bold mb-4 md:mb-0">
                    <img src='https://i.ibb.co/30vSHtY/logo.jpg' rel="icon" type="image/jfif" className='rounded-full w-10 h-10 border-2 border-purple-500' />
                    <span className="ml-3 text-xl font-bold">Aurora Book Store</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-black font-bold">Home</Link>
                    <Link href="/product" className="mr-5 hover:text-black font-bold">Product</Link>
                    <Link href="/about" className="mr-5 hover:text-black font-bold">About Us</Link>
                    <Link href="/contact" className="mr-5 hover:text-black font-bold">Contact Us</Link>
                </nav>
                {
                    session ? <div>Signed in as {session.user.email} <br />
                        <button onClick={handleSignOut} className="inline-flex items-center bg-violet-400 font-bold md:mr-5 border-0 py-1 px-3 focus:outline-none hover:bg-violet-600 hover:text-white rounded  mt-4 md:mt-0">Sign Out
                            <svg fill="none" stroke="currentColor"  strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                        :
                        <React.Fragment>
                            <Link href={"/login"}>
                                <button className="inline-flex items-center bg-violet-400 font-bold md:mr-5 border-0 py-1 px-3 focus:outline-none hover:bg-violet-600 hover:text-white rounded  mt-4 md:mt-0">Login
                                    <svg fill="none" stroke="currentColor"  strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </Link>
                            <Link href={"/signup"}>
                                <button className="inline-flex items-center bg-violet-400 border-0 font-bold py-1 px-3 focus:outline-none hover:bg-violet-600 hover:text-white rounded mt-4 md:mt-0">Signup
                                    <svg fill="none" stroke="currentColor"  strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </Link>
                        </React.Fragment>
                }


            </div>
        </header> */}