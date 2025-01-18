import React from 'react'
import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <img src={logo} alt="" className="h-9 cur" />
            </div>
            <div className="navbar-center">
            <button className=" p-2 bg-blue-200 hover:bg-red-600 hover:text-white rounded-lg">Sort by View</button>

            </div>
            <div className="navbar-end">
            <button className="btn btn-error hover:bg-teal-50 hover:text-red-600 text-white">Blog</button>

            </div>
        </div>
    )
}

export default Navbar