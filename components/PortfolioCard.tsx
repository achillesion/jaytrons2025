import React from 'react'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import Link from 'next/link';

interface PortfolioProject {
    id: number;
    title: string;
    dateRange: string;
    description: string;
    image: string;
    technologies: string[];
    links: {
        website: string;
        github: string | null;
    };
    category: string;
    featured: boolean;
}

interface PortfolioCardProps {
    project: PortfolioProject;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
    return (
        <div className='border border-white/10 rounded-md cursor-pointer h-[520px] flex flex-col'>
            {/* Fixed height video/image container */}
            <div className='h-[200px] w-full overflow-hidden rounded-t-md'>
                <video
                    src={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full h-full object-cover'
                />
            </div>

            {/* Fixed height content container */}
            <div className='p-4 flex-1 flex flex-col'>
                {/* Header section */}
                <div className='mb-3'>
                    {/* Title */}
                    <h1 className='font-semibold text-xl mb-1 line-clamp-1'>{project.title}</h1>
                    {/* Date Range */}
                    <p className='text-[12px] text-gray-400'>{project.dateRange}</p>
                </div>

                {/* Description - flexible height */}
                <div className='mb-4 flex-1 min-h-[80px]'>
                    <p className='text-[13px] text-gray-300 line-clamp-4 leading-relaxed'>
                        {project.description}
                    </p>
                </div>

                {/* Technologies Badges - fixed height with proper spacing */}
                <div className='mb-4'>
                    <div className='flex flex-wrap gap-2'>
                        {project.technologies.slice(0, 5).map((tech, index) => (
                            <Badge key={index} className='bg-gray-700 text-xs'>{tech}</Badge>
                        ))}
                    </div>
                </div>

                {/* Links - fixed at bottom with proper spacing */}
                {/* Links - fixed at bottom with proper spacing */}
                <div className='mt-auto pt-2'>
                    <div className='flex gap-2'>
                        {project.links.website && (
                            <Link
                                href={project.links.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Badge className='bg-white text-black text-[12px] font-semibold flex items-center px-3 py-1 hover:bg-gray-200 transition'>
                                    <FaGlobe className='text-black mr-1' />
                                    Visit Website
                                </Badge>
                            </Link>
                        )}

                        {project.links.github && (
                            <Link
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Badge className='bg-white text-black text-[12px] font-semibold flex items-center px-3 py-1 hover:bg-gray-200 transition'>
                                    <FaGithub className='text-black mr-1' />
                                    Github
                                </Badge>
                            </Link>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioCard