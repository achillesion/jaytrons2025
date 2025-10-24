"use client"
import React, { useState } from 'react'
import ServiceCard from '@/components/ServiceCard'
import { Input } from '@/components/ui/input'

const servicesData = [
  "All",
  "Website Development",
  "Mobile Development",
  "UI/UX Design",
  "Maintenance Support",
  "AI Application Development"
]

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [search, setSearch] = useState("")

  // Filtered services based on search
  const filteredServices = servicesData.filter(service =>
    service.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='container mx-auto min-h-screen p-4 max-w-[1070px]'>
      <div className='flex flex-col items-center h-full justify-center'>
        <h1 className='text-[#10AB01] text-3xl mb-5 lg:text-[54px] font-bold mt-20'>Professional Services</h1>
        <span className='text-gray-300 max-w-[500px] text-center'>
          From concept to deployment, I offer comprehensive digital solutions to help bring your ideas to life.
          Browse my services and find the perfect fit for your project.
        </span>
      </div>

      {/* Search */}
      <div className='w-full mt-20'>
        <Input
          placeholder='Search Service'
          className='border-[#121212]'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className='w-full mt-6'>
        <div className='flex flex-col md:flex-row gap-4 items-start md:items-center overflow-x-auto scrollbar-hide pb-2 px-4 md:px-0 md:justify-center'>
          {servicesData.map((category, index) => (
            <button
              key={index}
              
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

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20'>
        {filteredServices.map((service, index) => (
          <ServiceCard key={index}  />
        ))}
      </div>
    </div>
  )
}

export default Page
