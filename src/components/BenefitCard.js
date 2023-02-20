import React from 'react'

const BenefitCard = (props) => {
  return (
    <div className={props.className}>
        <h2 className="text-2xl text-[#AEAEAE] pb-2 md:pb-4">{props.headline}</h2>
        <p className="text-sm leading-5 text-[#999999] px-8 md:px-0 md:pr-16">{props.text}</p>
    </div>
  )
}

export default BenefitCard