import { Button } from '@/components/ui/button'
import React from 'react'

const Cta = () => {
  return (
    <div className="flex flex-col border-b border-white/30 items-center justify-center gap-6 md:gap-8 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 min-h-[50vh] text-center">
        <h1 className='text-white text-base md:text-lg lg:text-xl font-medium'>Get Started</h1>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[38px] font-semibold text-[#13AA02] leading-tight max-w-4xl'>
            Let's build something amazing together
        </h1>
        <p className='text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl'>
            From idea to deployment — we turn your vision into scalable, high-performing software
        </p>
        <Button className='bg-[#13AA02] hover:bg-[#10AB01] cursor-pointer text-white px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'>
            Let's Start
        </Button>
    </div>
  )
}

export default Cta