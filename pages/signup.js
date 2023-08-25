import React, { useState } from 'react'
import { signIn } from "next-auth/react"
import Link from 'next/link'
// import Image from 'next/image'
import { useFormik } from 'formik'
import { FaEye, FaEyeSlash, FaMailBulk, FaUserAlt } from 'react-icons/fa'
import signup_validate from '@/components/Validate'
import { useRouter } from 'next/router'


const Signup = () => {
    async function handleGoogle() {
        signIn('google', { callbackUrl: "http://localhost:3000" })
    }
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: signup_validate,
        onSubmit
    });

    const [showPassword, setShowPassword] = useState(false);

    async function onSubmit(values) {
        // console.log(values)
        const options = {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options).then(res => res.json()).then((data)=>{
            if(data){
                router.push('http://localhost:3000')
            }
        })
    }

    return (

        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">You have to signup.</h1>
                <img src="https://i.ibb.co/tb6Ycqt/signup.jpg" alt='Signup' className='w-full'></img>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                <form onSubmit={formik.handleSubmit} className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">

                        {/*Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <div className='input-group'>
                                <input name="text" type="name" placeholder="Name" {...formik.getFieldProps('name')} className="input input-bordered" />
                                <span><FaUserAlt /></span>
                            </div>
                            {formik.errors.name && formik.touched.name ? <span className='text-red-700 text-base mt-3'>{formik.errors.name}</span> : ""}
                        </div>

                        {/*Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <div className='input-group'>
                                <input name="email" type="email" placeholder="Email" {...formik.getFieldProps('email')} className="input input-bordered" />
                                <span><FaMailBulk /></span>
                            </div>
                            {formik.errors.email && formik.touched.email ? <span className='text-red-700 text-base mt-3'>{formik.errors.email}</span> : ""}
                        </div>

                        {/*Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='input-group '>
                                <input type={`${showPassword ? "text" : "password"}`} name="password" placeholder="Password" {...formik.getFieldProps('password')} className="input input-bordered" />
                                <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>
                            {formik.errors.password && formik.touched.password ? <span className='text-red-700 text-base mt-3'>{formik.errors.password}</span> : ""}
                        </div>

                        {/* Confirm Password*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <div className='input-group '>
                                <input type={`${showPassword ? "text" : "password"}`} name="confirmPassword" placeholder="Confirm Password" {...formik.getFieldProps('confirmPassword')} className="input input-bordered" />
                                <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>
                            {formik.errors.confirmPassword && formik.touched.confirmPassword ? <span className='text-red-700 text-base mt-3'>{formik.errors.confirmPassword}</span> : ""}
                        </div>

                        {/* Signup*/}
                        <div className="form-control mt-6 w-1/3">
                            <button type='button' className="btn btn-primary">Signup</button>
                        </div>

                        {/*Google */}
                        <div className="form-control mt-6 w-fit">
                            <button type='button' onClick={handleGoogle} className="btn btn-primary">Google Login</button>
                        </div>
                    </div>
                    <div className='m-5'>
                        <p className='text-base text-gray-500'>Already have an account? Please <Link href={"/login"}>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default Signup
//<a href="https://ibb.co/wKqpCSX"><img src="https://i.ibb.co/tb6Ycqt/signup.jpg" alt="signup" border="0"></a>