import ServiceCard from '@/components/ServiceCard'
import { Input } from '@/components/ui/input'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto min-h-screen p-4 max-w-[1070px]'>
       <div className='flex flex-col items-center h-full justify-center'>
       <h1 className='text-[#10AB01] text-[54px]  font-bold mt-20'>Professional Services</h1>
       <span className='text-gray-300 max-w-[500px] text-center'>From concept to deployment, I offer comprehensive digital solutions to help bring your ideas to life. Browse my services and find the perfect fit for your project.</span>
       </div>
       {/* portfolio */}
       <div className='w-full mt-20'>
          <Input placeholder='Search Service' className='border-[#121212] '/>
       </div>
       <div className='grid grid-cols-3 mt-20'>
        <ServiceCard />
       </div>
    </div>
  )
}

export default page