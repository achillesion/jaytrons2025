import React from 'react'
import { techIcons } from '../components/techIcons'

const TechStack = () => {
    return (
        <div id="services" className='flex  w-full  md:max-w-[1120px] m-auto flex-col items-center justify-center mt-4 md:mt-6
         gap-4 py-8 md:py-12 px-4 md:px-6 lg:px-8 lg:h-screen '>
            <h1 className="text-center w-full text-lg md:text-xl lg:text-[64px] font-medium text-[#10AB01] animate-slide-in-left">
            Our Technology Stack & Development Tools
            </h1>
            <p className="text-center text-gray-400 text-sm md:text-base mt-4 max-w-3xl">
                We use cutting-edge technologies and modern development frameworks to build scalable, 
                high-performance software solutions. Our expertise spans across frontend, backend, 
                mobile, and AI development technologies.
            </p>
            <div className="relative w-full overflow-hidden mt-6 sm:mt-8 md:mt-10 space-y-4">
                {/* First row - scrolling left */}
                <div className="flex animate-scroll-left gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {techIcons.map((IconComponent, index) => (
                        <IconComponent key={`row1-${index}`} />
                    ))}
                    {techIcons.map((IconComponent, index) => (
                        <IconComponent key={`row1-duplicate-${index}`} />
                    ))}
                </div>
                
                {/* Second row - scrolling right */}
                <div className="flex animate-scroll-right gap-8 mt-20 mb-20 sm:gap-12 md:gap-16 lg:gap-20">
                    {techIcons.map((IconComponent, index) => (
                        <IconComponent key={`row2-${index}`} />
                    ))}
                    {techIcons.map((IconComponent, index) => (
                        <IconComponent key={`row2-duplicate-${index}`} />
                    ))}
                </div>
                
                {/* Third row - scrolling left */}
                <div className="flex animate-scroll-left gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {techIcons.map((IconComponent, index) => (
                        <IconComponent key={`row3-${index}`} />
                    ))}
                    {techIcons.map((IconComponent, index) => (
                        <IconComponent key={`row3-duplicate-${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack