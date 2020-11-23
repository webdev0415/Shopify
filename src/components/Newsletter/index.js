import React from 'react'
import { Link } from 'gatsby'

const Newsletter = () => {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-screen-xl mx-auto px-4 py-6 sm:px-6 lg:py-6 lg:px-8">
                    <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                    <div className="xl:w-0 xl:flex-1">
                        <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                        Sign up for exclusive offers & more!
                        </h2>
                    </div>
                    <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                        <form className="sm:flex" aria-labelledby="newsletter-headline">
                        <input aria-label="Email address" type="email" required className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out" placeholder="Enter your email" />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                            Subscribe
                            </button>
                        </div>
                        </form>
                        <p className="mt-3 text-sm leading-5 text-indigo-200">
                        We care about the protection of your data. Read our
                        <Link to="/privacy" className="text-white font-medium underline">Privacy Policy</Link>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter