import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='relative m-4 col-span-12 sm:col-span-6 lg:col-span-4 mx-auto'>
        <div className="h-[22rem] w-[18rem] rounded-2xl shadow-2xl bg-black translate-x-1 translate-y-1"></div>

        <div className="absolute top-0 left-0 h-[22rem] w-[18rem] rounded-2xl shadow-2xl border bg-white border-black">
            <img className='mx-auto w-16 py-8' src={props.image} alt="HTML" />
            <article className='text-center'>
                <h2 className='text-2xl pb-4'>{props.headline}</h2>
                <p className="px-4 text-sm">{props.paragraph}</p>
            </article>
        </div>
    </div>
  )
}

export default SkillCard