import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/Zillow_logo.png'

const NavBar = () => {
    const linkclassName = ({ isActive }) => isActive ? 'bg-blue-600 text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2' : 'text-black hover:bg-blue-600 hover:text-white rounded-md px-3 py-2';

  return (
    <>
        <nav className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                    className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                    {/* <!-- Logo --> */}
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img
                            className="h-5"
                            src={ logo }
                            alt="Zillow Logo"
                            />
                            {/* <span className="md:block text-blue-600 text-3xl font-bold ml-2">
                                ZillowDB.info
                            </span> */}
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                            <NavLink
                                to="/"
                                className={ linkclassName }
                                >
                                    Home
                            </NavLink>
                            <NavLink
                                to="/propertylistingpage"
                                className={ linkclassName }
                                >
                                    Property Listings
                            </NavLink>
                            {/* <NavLink
                                to="/add-job"
                                className={ linkclassName }
                                >
                                    Add Job
                            </NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar