import React from 'react'
import logo from '../assets/img/Zillow_logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaSquareXTwitter, FaTiktok, FaLinkedin } from 'react-icons/fa6'
import { SiZillow } from 'react-icons/si'

const footer = () => {
  return (
    <>
        <footer className="w-full py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Link to="/" className="flex justify-center h-8">
                        <img src={ logo } alt="Zillow Logo" />
                    </Link>
                    <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                        <li><Link to="/" className="text-gray-800 hover:text-gray-900">Home</Link></li>
                        <li><Link to="/propertylistings" className=" text-gray-800 hover:text-gray-900">Property Listings</Link></li>
                        {/* <li><a href="#" className=" text-gray-800 hover:text-gray-900">Resources</a></li>
                        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Blogs</a></li>
                        <li><a href="#" className=" text-gray-800 hover:text-gray-900">Support</a></li> */}
                    </ul>
                    <div className="flex space-x-10 justify-center items-center mb-14 text-3xl">
                        <a href="https://zillow.com" className="block  text-gray-900 transition-all duration-500 hover:text-blue-600 ">
                            <SiZillow />
                        </a>
                        <a href="https://facebook.com" className="block  text-gray-900 transition-all duration-500 hover:text-blue-600 ">
                            <FaFacebook />
                        </a>
                        <a href="https://x.com" className="block  text-gray-900 transition-all duration-500 hover:text-blue-600 ">
                            <FaSquareXTwitter />
                        </a>
                        <a href="https://linkedin.com" className="block  text-gray-900 transition-all duration-500 hover:text-blue-600 ">
                            <FaLinkedin />    
                        </a>
                        <a href="https://tiktok.com" className="block  text-gray-900 transition-all duration-500 hover:text-blue-600 ">
                            <FaTiktok />
                        </a>
                    </div>
                    <span className="text-lg text-gray-500 text-center block">©<Link to="/">ZillowDB.info</Link> 2024, All rights reserved.</span>
                </div>
            </div>
        </footer>
    </>
  )
}

export default footer