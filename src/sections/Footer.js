import React from 'react'
import footer from '../assets/footer.png'
import facebook from '../assets/social/facebook.png'
import linkedIn from '../assets/social/linkedin.png'
import github from '../assets/social/github.png'
import whatsapp from '../assets/social/whatsapp.png'
import messenger from '../assets/social/messenger.png'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <section className='bg-[#D7D7D7] py-4 sm:py-6 md:py-8 lg:py-14 xl:py-16 px-4'>
        <div className="width p-4 bg-[#181818] rounded-xl">
            <div className="flex p-10 flex-col-reverse md:flex-row">
                <div className="flex-1 flex flex-col items-start justify-center space-y-4 text-center md:text-start">

                    <h2 className='w-full text-2xl lg:text-4xl text-slate-300'>Time To Make Someone Happy</h2>
                    <p className="pb-8 xl:pr-32">I have the skills and experience to create a website that will meet your needs and exceed your expectations. My work is driven by passion and creativity, and I am committed to delivering high-quality results on time and on budget.</p>
                    <button className='my-4 mx-auto md:mx-0 px-4 py-2 sm:px-6 sm:py-3 bg-buttonColor text-white rounded-lg text-center sm:text-lg'>Let's Work Together</button>

                </div>
                <div className="flex-1 flex justify-end items-center">
                    <img className='w-[30rem] pb-8 md:pb-0' src={footer} alt="" />
                </div>
            </div>
        </div>

        <div className="width p-4 flex items-center justify-between">
            <img className='w-28' src={logo} alt="" />
            <div className="flex items-center justify-center gap-4 md:justify-start">
                            <img src={facebook} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                            <img src={linkedIn} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                            <img src={github} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                            <img src={whatsapp} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                            <img src={messenger} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                        </div>
        </div>

    </section>
  )
}

export default Footer