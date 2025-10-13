import React from 'react'

const Portfolio = () => {
    return (
        <div className='container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 min-h-screen'>
            <h1 className="text-center w-full text-lg md:text-xl lg:text-[36px] font-medium text-[#10AB01]">
                Portfolio
            </h1>
            <div className='flex gap-4 items-center justify-center mt-6 '>
                <h1 className='text-lg md:text-xl lg:text-[19px] font-medium text-white'>All</h1>
                <h1 className='text-lg md:text-xl lg:text-[19px] font-medium text-white'>Web Development</h1>
                <h1 className='text-lg md:text-xl lg:text-[19px] font-medium text-white'>UI/UX Design</h1>
                <h1 className='text-lg md:text-xl lg:text-[19px] font-medium text-white'>Mobile Development</h1>
                <h1 className='text-lg md:text-xl lg:text-[19px] font-medium text-white'>AI Development</h1>
            </div>
        </div>
    )
}

export default Portfolio