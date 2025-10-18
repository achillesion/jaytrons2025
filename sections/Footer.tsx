import Link from 'next/link'
import React from 'react'

const links = [
  {
    links: "Home",
    id: "hero"
  },
  {
    links: "Portfolio",
    id: "portfolio"
  },
  {
    links: "Services",
    id: "services"
  },
  {
    links: "Contact",
    id: "contact"
  },

]

const legal = [
  {
    link: "Terms of Service",
    href: "/terms"
  },
  {
    link: "Privacy Policy",
    href: "/privacyPolicy"
  }
]

const Footer = () => {
  return (
    <div className='w-full border-t border-gray-800'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-full lg:w-[1000px] m-auto p-4 flex-wrap'>
        <div className='flex-shrink-0'>
          <h1 className="transition-all duration-300 hover:scale-105 cursor-pointer text-white text-xl md:text-2xl">JAYTRONS</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className="transition-all duration-300 hover:scale-105 cursor-pointer font-medium text-lg md:text-2xl text-[#13AA02]">Links</h1>
          <ul className='flex flex-col gap-4'>
          {links.map((link) => (
            <Link key={link.id} href={`#${link.id}`} className='text-sm hover:text-[#13AA02] transition-colors duration-300'>{link.links}</Link>
          ))}
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className="transition-all duration-300 hover:scale-105 cursor-pointer font-medium text-lg md:text-2xl text-[#13AA02]">Legal</h1>
          <ul className='flex flex-col gap-4'>
          {legal.map((link) => (
            <Link key={link.href} href={link.href} className='text-sm hover:text-[#13AA02] transition-colors duration-300'>{link.link}</Link>
          ))}
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className=' mt-8 pt-6 h-20'>
        <div className='w-full lg:w-[1000px] m-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} Jaytrons. All rights reserved.
            </p>
            <p className='text-gray-400 text-sm'>
              Software Development Company | Custom Web & App Development
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer