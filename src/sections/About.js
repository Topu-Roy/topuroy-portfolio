import React from 'react'
import aboutImg from '../assets/about.png'
import facebook from '../assets/social/facebook.png'
import linkedIn from '../assets/social/linkedin.png'
import github from '../assets/social/github.png'
import whatsapp from '../assets/social/whatsapp.png'
import messenger from '../assets/social/messenger.png'
import SubHeadline from '../components/SubHeadline'

const About = () => {
    return (
        <section className='bg-aboutColor'>
            <div className="width px-4 py-8">
                <SubHeadline text={"About Me"}/>

                <div className="md:grid grid-cols-4">
                    <div className="col-span-2 flex items-center justify-center h-full">
                        <img src={aboutImg} alt="" className="py-4 px-8 sm:px-28 md:px-4 lg:px-16 xl:px-24" />
                    </div>

                    <div className="col-span-2 md:pt-2 md:flex flex-col items-start justify-center gap-4">

                        <article className='space-y-2 text-center md:text-start'>
                            <h2 className="hidden text-2xl py-4">About Me</h2>
                            <p className='font-josefin-sans text-lg xl:text-3xl text-gray-600'>Hi, I'm Topu Roy from Bangladesh</p>
                            <p className='sm:px-4 md:pr-4 md:px-0 sub-headline'>I'm a front-end web developer working on freelance platforms right now. I have several years of experience in web design and am constantly working to improve my skill set in order to develop more intuitive and effective designs that lead to greater customer satisfaction.</p>
                        </article>

                        <div className="w-full flex justify-center items-center md:justify-start py-6  md:py-4 lg:py-8"><button className='py-2 sm:py-3 px-6 xl:py-4 xl:px-20 bg-buttonColor text-white rounded-lg shadow-md'>Let's Chat</button></div>

                        <div className="flex items-center justify-center gap-4 md:justify-start">
                            <img src={facebook} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                            <img src={linkedIn} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                            <img src={github} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                            <img src={whatsapp} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                            <img src={messenger} alt="" className="w-10 md:w-8 lg:w-10 px-1" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About