
"use client"
import React, { useState } from 'react'
import PortfolioCard from '@/components/PortfolioCard'
import portfolioData from '@/data/portfolio.json'

const Portfolio = () => {
    const { projects, categories } = portfolioData.portfolio;
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className='container mx-auto px-4 max-w-[1120px] md:px-6 lg:px-8 py-8 md:py-12 min-h-screen' id='portfolio'>
            <div className='flex flex-col items-center justify-center'>
            <h1 className="text-center w-full  text-lg md:text-xl lg:text-[64px] font-medium text-[#10AB01]">
                Portfolio
            </h1>
            <div className='w-full mt-6'>
                <div className='flex flex-col md:flex-row gap-4 items-start md:items-center overflow-x-auto scrollbar-hide pb-2 px-4 md:px-0 md:justify-center'>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`text-sm px-4 py-2 rounded-md transition-colors cursor-pointer duration-200 whitespace-nowrap flex-shrink-0 ${
                                selectedCategory === category
                                    ? 'bg-[#10AB01] text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            </div>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6'>
                {filteredProjects.map((project) => (
                    <PortfolioCard key={project.id} project={project} />
                ))}
            </div>
            
        </div>
    )
}

export default Portfolio