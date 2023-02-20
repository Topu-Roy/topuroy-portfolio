import React from 'react'
import FeatureCard from '../components/FeatureCard'
import SubHeadline from '../components/SubHeadline'
import fastImage from '../assets/features/fast.png'
import premiumImage from '../assets/features/premium.png'
import satisfactionImage from '../assets/features/satisfaction.png'

const Feature = () => {
  return (
    <section className='py-4 px-4'>
        <SubHeadline text={"Let's Build Something Great Together"} />
        <div className="flex flex-wrap items-center justify-center gap-8">
            <FeatureCard 
                className="card-basic absolute top-0 left-0 bg-fastCard"
                headline={"Faster Loading Time"} 
                paragraph={"Resources have been optimized for faster loading.It goes without saying how crucial it is for the website to load before the user leaves.Moreover, it is less irritating."} 
                image={fastImage} 
            />
            <FeatureCard 
                className="card-basic absolute top-0 left-0 bg-premiumCard"
                headline={"Premium Design"} 
                paragraph={"People prefer to view the newest things in today's world where design trends change frequently. To avoid falling behind, it is therefore better to create more visually appealing websites."} 
                image={premiumImage} 
            />
            <FeatureCard 
                className="card-basic absolute top-0 left-0 bg-satisfactionCard"
                headline={"User Satisfaction"}  
                paragraph={"It ultimately boils down to one thing in the end: consumer satisfaction. It may be primarily determined by the quality of the service, but a fantastic presentation always adds value. "} 
                image={satisfactionImage} 
            />
        </div>
        
    </section>
  )
}

export default Feature