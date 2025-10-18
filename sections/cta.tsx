import { Button } from '@/components/ui/button'
import React from 'react'
import { FaRocket, FaArrowRight, FaStar, FaCode, FaLightbulb } from 'react-icons/fa'

const Cta = () => {
  return (
    <div className="relative overflow-hidden">
    
      {/* Main Content */}
      <div className="relative flex flex-col max-w-[1120px] m-auto items-center justify-center gap-8 md:gap-12 py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 min-h-[70vh] text-center">
        
       
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl'>
            Let's Build Something
            <span className="block bg-gradient-to-r from-[#13AA02] to-[#F66DBC] bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className='text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl font-light'>
          From <span className="text-[#13AA02] font-semibold">concept</span> to <span className="text-[#F66DBC] font-semibold">deployment</span> — 
          we transform your vision into scalable, high-performing software solutions that drive real business results.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {[
            { icon: <FaCode className="w-4 h-4" />, text: "Custom Development" },
            { icon: <FaLightbulb className="w-4 h-4" />, text: "Innovation First" },
            { icon: <FaRocket className="w-4 h-4" />, text: "Fast Delivery" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300">
              {feature.icon}
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center">
          <Button className='group bg-gradient-to-r from-[#13AA02] to-[#10AB01] hover:from-[#10AB01] hover:to-[#0E8A00] text-white px-8 py-4 md:px-12 md:py-5 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#13AA02]/25 border border-[#13AA02]/20'>
            <span className="flex items-center gap-3">
              Start Your Project
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
      
        </div>

       
      </div>
    </div>
  )
}

export default Cta