import React from 'react'
import BenefitCard from '../components/BenefitCard'
import SubHeadline from '../components/SubHeadline'

const Benefits = () => {
  return (
    <section className="px-4 mt-8 pt-16 pb-20 bg-darkBlack">

        <div className="width">

        <h2 className='text-center py-16 text-4xl lg:text-5xl xl:py-16 text-[#ECECEC]'>Benefits</h2>

            <div className="grid grid-cols-6 gap-4 md:pl-8 2xl:pl-0">


                <BenefitCard 
                    className={"benefit-basic"}
                    headline={"Performance"}
                    text={"Optimized for speed and fast loading times. It has been designed to provide users with a smooth and enjoyable browsing experience, ensuring that they can easily find the information they need without any lag or delays."}
                />
                
                <BenefitCard 
                    className={"benefit-basic"}
                    headline={"Reliability"}
                    text={"Built to be reliable and always available to users. It is hosted on a reliable server, ensuring that users can access it at any time without experiencing any downtime or disruptions."}
                />
                <BenefitCard 
                    className={"benefit-basic"}
                    headline={"Compatibility"}
                    text={"Compatible with a wide range of devices and browsers, ensuring that users can access it from their desktop, laptop, tablet or mobile phone, using their preferred browser."}
                />
                <BenefitCard 
                    className={"benefit-basic"}
                    headline={"Optimization"}
                    text={"Optimized for search engines, ensuring that it ranks well in search results. It has been designed with SEO best practices in mind, making it easier for users to find it online."}
                />
                <BenefitCard 
                    className={"benefit-basic"}
                    headline={"Future-Proof"}
                    text={"Future-proof, meaning that it has been built with the latest technology and web standards, ensuring that it will continue to be relevant and functional for years to come."}
                />
                <BenefitCard 
                    className={"benefit-basic"}
                    headline={"Affordable Pricing"}
                    text={"Offers affordable pricing, making it accessible to businesses of all sizes. It provides a high-quality online presence without breaking the bank."}
                />



            </div>

        </div>

    </section>
  )
}

export default Benefits