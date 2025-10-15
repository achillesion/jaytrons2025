import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import PortfolioCard from '@/components/PortfolioCard'
import portfolioData from '@/data/portfolio.json'

const Portfolio = () => {
    const { projects, categories } = portfolioData.portfolio;

    return (
        <div className='container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 min-h-screen'>
            <div className='flex flex-col items-center justify-center'>
            <h1 className="text-center w-full text-lg md:text-xl lg:text-[36px] font-medium text-[#10AB01]">
                Portfolio
            </h1>
            {/* <div className='flex gap-4 items-center justify-center mt-6 '>
                {categories.map((category, index) => (
                    <h5 key={index} className='text-sm'>
                        {category}
                    </h5>
                ))}
            </div> */}
            </div>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6'>
                {projects.map((project) => (
                    <PortfolioCard key={project.id} project={project} />
                ))}
            </div>
            
        </div>
    )
}

export default Portfolio