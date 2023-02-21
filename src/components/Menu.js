import React from 'react'
import logo from '../assets/logo.png'
import menuClose from '../assets/menuclose.png'
import facebook from '../assets/social/facebook.png'
import linkedIn from '../assets/social/linkedin.png'
import github from '../assets/social/github.png'
import whatsapp from '../assets/social/whatsapp.png'
import messenger from '../assets/social/messenger.png'

const Menu = (props) => {
  return (
    <div className={props.state ? `menu-open` : `menu-close`}>
        <div className="flex items-center justify-between h-[10vh]">
            <img className='' src={logo} alt="" />
            <button onClick={() => props.setState(false)}><img className="" src={menuClose} alt="" /></button>
            
        </div>

        <div className="flex flex-col items-center justify-between flex-1 h-[90vh]">
            <li className="text-center space-y-10 pt-8 list-none">
                <ul className="">Home</ul>
                <ul className="">About</ul>
                <ul className="">Recent Works</ul>
                <ul className="">Expertise</ul>
                <ul className="">Pricing</ul>
                <ul className="">Contact</ul>
            </li>

            <div className="space-y-8">

                <div className="flex items-center justify-center gap-8 md:justify-start">
                    <img src={facebook} alt="" className="w-12 px-1" />
                    <img src={linkedIn} alt="" className="w-12 px-1" />
                    <img src={github} alt="" className="w-12 px-1" />
                    <img src={whatsapp} alt="" className="w-12 px-1" />
                    <img src={messenger} alt="" className="w-12 px-1" />
                </div>

                <div className="text-center pb-8">
                    <p className="">Made With ❤️ By Topu Roy</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Menu