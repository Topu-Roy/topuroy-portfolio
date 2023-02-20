import React from 'react'
import heroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <section className="width space-y-2 px-4">
      <article className='text-center'>
        <h1 className="headline">
          Elevating Brands Through Modern and Intuitive Web Design
        </h1>
        <p className='sub-headline'>
          Bringing creativity and strategy together to deliver a website that truly stands out. <br className='hidden md:block'/>
          From concept to launch, I'll work with you to create a website that exceeds your expectations
        </p>
      </article>
      <div className="w-full flex justify-center items-center">
        <button className='mx-auto my-4 px-4 py-2 sm:px-6 sm:py-3 bg-buttonColor text-white rounded-lg text-center sm:text-lg'>
          Let's Work Together
          <span> > </span>
        </button>
      </div>
      <img className='pb-8 sm:pt-2 md:pt-4 ' src={heroImage} alt="" />

      <hr className='w-full' />
    </section>
  )
}

export default Hero