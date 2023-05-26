import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import React, { useState } from "react";
import "./Navbar.css"

function Navbar(){
    const [open, setOpen] = useState(false)

    const navLinks = [
        {id: 1,name: "Home", route: "/"},
        {id: 2,name: "Strategies", route: "/strategies"},
        {id: 3,name: "Build Strategies", route: "/buildstrategies"},
        {id: 4,name: "Backtesting", route: "/backtesting"},
    ]

    return (
        <>
            <nav className="md:px-24 px-6 py-6  md:mb-4 top-0 left-0 static z-[100] bg-purple-500 text-white shadow-xl"> 
                <div className="md:flex justify-between items-center md:text-3xl text-2xl">
                    <div className="flex justify-between items-center">
                        <Link to='/' className="logo flex items-center justify-center font-bold ">
                            <img src="logo.png" className="md:w-32 w-16" alt="logo"/>
                            <p className="md:ml-2 ml-1 md:text-5xl text-3xl">inTradr</p>
                        </Link>
                        <button onClick={() => setOpen((prev) => !prev)} className=' sm:hidden text-2xl text-gray-900'>
                            <FaBars />
                        </button>
                    </div>

                    <div className='md:flex hidden text-white'>
                        <ul className="md:flex items-center md:text-xl font-medium">
                            {navLinks.map((nav) => (
                                <li key={nav.id} className="navlink md:mx-4 mx-2 md:my-0 my-2 hover:text-[#FE741A]">
                                    <Link to={nav.route}>
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                {/* mobile-version */}
                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-full h-screen duration-300 ease-in-out bg-purple-500`}>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen((prev) => !prev)} className="sm:hidden text-2xl text-gray-900 text-right">
                            <FaTimes />
                        </button> 
                    </div>
                    <ul className="flex flex-col items-center text-base font-medium space-y-8">
                        {navLinks.map((nav) => (
                            <li key={nav.id} onClick={() => setOpen((prev) => !prev)} className="navlink md:mx-4 mx-2 md:my-0 my-2 hover:text-[#FE741A]">
                                <Link to={nav.route}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar;