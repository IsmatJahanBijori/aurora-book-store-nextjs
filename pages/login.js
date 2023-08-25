import React, { useState } from 'react'
import { signIn } from "next-auth/react"
import Link from 'next/link'
import { FaEye, FaEyeSlash, FaMailBulk } from "react-icons/fa";
import { useFormik } from 'formik'
import login_validate from '@/components/Validate';
import { useRouter } from 'next/router';


const Login = () => {

    async function handleGoogle() {
        signIn('google', { callbackUrl: "http://localhost:3000" })
    }
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: login_validate,
        onSubmit
    });

    const [showPassword, setShowPassword] = useState(false);

    async function onSubmit(values) {
        // console.log(values)
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/"
        })
        // console.log(status)
        if (status.ok) {
            router.push(status.url)
        }
    }

    // console.log(formik.errors)
    return (

        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">You have to login.</h1>
                <img src="https://i.ibb.co/BTVCKQj/login.jpg" alt='Login'></img>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                <form onSubmit={formik.handleSubmit} className="card  w-full shadow-2xl bg-base-100">
                    <div className="card-body">

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


                        {/*Login */}
                        <div className="form-control mt-6 w-1/3">
                            <button type='button' className="btn btn-primary">Login</button>
                        </div>

                        {/*Google */}
                        <div className="form-control mt-6 w-1/3">
                            <button type='button' onClick={handleGoogle} className="btn btn-primary">Google Login</button>
                        </div>
                    </div>
                    <div className='m-5'>
                        <p className='text-base text-gray-500'>Do not have an account?Please <Link href={"/signup"}>Signup</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
