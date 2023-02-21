import React from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'

const NavBar = (props) => {

    return (
        <div className="w-full px-4 py-6 width">
            <nav className="flex justify-between items-center">
                <li className="hidden md:flex justify-between items-center gap-8">
                    <ul className=''>Home</ul>
                    <ul className=''>About</ul>
                    <ul className=''>Recent Works</ul>
                </li>
                <span className=''><img className='w-24' src={logo} alt="Topu Roy Logo" /></span>
                <div className="flex justify-end items-center gap-8">
                    <button className="font-roboto hidden sm:block text-textColor">Pricing</button>
                    <button className="font-roboto hidden sm:block px-4 py-2 rounded-md bg-gray-800 text-white">Contact</button>
                    <img className='md:hidden' src={menu} alt="" onClick={() => props.setState(true)}/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar