import React from 'react'
import SkillCard from '../components/SkillCard'
import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import javascript from '../assets/tech/javascript.png'
import react from '../assets/tech/React.png'
import tailwindcss from '../assets/tech/tailwindcss.png'
import material from '../assets/tech/material.png'
import SubHeadline from '../components/SubHeadline'

const Expertise = () => {
  return (
    <section className='width py-4 sm:py-6 md:py-8 lg:py-14 xl:py-16 px-4'>
        <SubHeadline text={"My Expertise"} />
        <div className="grid grid-cols-12 md:px-8 lg:gap-4 xl:px-40 sm:mt-6 md:mt-8 lg:mt-14">
            <SkillCard 
                image={html}
                headline={"HTML"}
                paragraph={"HTML, or Hypertext Markup Language, is the standard markup language used for creating web pages. It's important because it provides the structure and content of a web page, allowing it to be displayed in a browser."}
            />
            
            <SkillCard 
                image={css}
                headline={"CSS"}
                paragraph={"CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a web page. It's important because it allows developers to customize the look and feel of a web page, making it more visually appealing and user-friendly."}
            />
            <SkillCard 
                image={javascript}
                headline={"JavaScript"}
                paragraph={"JavaScript is a programming language used to create dynamic and interactive web pages. It's important because it enables developers to add functionality to web pages, such as responding to user input, and making web applications more engaging."}
            />

            <SkillCard 
                image={react}
                headline={"React"}
                paragraph={"HTML, or Hypertext Markup Language, is the standard markup language used for creating web pages. It's important because it provides the structure and content of a web page, allowing it to be displayed in a browser."}
            />
            <SkillCard 
                image={tailwindcss}
                headline={"TailwindCSS"}
                paragraph={"Tailwind CSS is a utility-first CSS framework that allows developers to easily style their web pages by applying pre-defined classes. It's important because it speeds up the development process and promotes consistency in the design of web pages."}
            />
            <SkillCard 
                image={material}
                headline={"Material UI"}
                paragraph={"Material UI is a popular React component library that provides pre-built UI components based on Google's Material Design. It's important because it allows developers to create beautiful and consistent user interfaces with minimal effort, improving the overall user experience."}
            />

        </div>
        
    </section>
  )
}

export default Expertise