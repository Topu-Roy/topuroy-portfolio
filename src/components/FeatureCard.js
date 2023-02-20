import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className='relative m-4'>
        <div className="h-[25rem] w-[20rem] rounded-2xl shadow-2xl bg-black translate-x-1 translate-y-1"></div>
        
        <div className={props.className}>
            <img className='mx-auto w-48 py-4' src={props.image} alt="" />
            <article className='text-center'>
                <h2 className='text-2xl pb-4'>{props.headline}</h2>
                <p className="px-4 text-sm">{props.paragraph}</p>
            </article>
        </div>
    </div>
  )
}

export default FeatureCard