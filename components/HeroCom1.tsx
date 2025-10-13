// Import individual images
import { HeroJss, HeroStarImage, HeroProfileImg,HeroCTAArrow } from '@/assets/images';


// Use: HeroImages.HeroJss
import Image from "next/image"
import { Button } from './ui/button';
export default function HeroProfile() {

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start justify-between mt-6 gap-6 lg:gap-8">
                <div className='flex flex-col w-full lg:max-w-[50%]'>
                    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                        <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] leading-tight">Hire the</h1>
                        <div className="flex gap-2 items-center">
                            <Image src={HeroStarImage} alt="Top Rated" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-auto lg:h-auto" />
                            <Image src={HeroJss} alt="100% Jib Success Score" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-auto lg:h-auto" />
                        </div>
                    </div>
                    <h1 className='text-[28px] sm:text-[36px] lg:text-[48px] text-[#F66DBC] font-bold leading-tight'>Top Rated Plus</h1>
                    <h1 className='text-[28px] sm:text-[36px] lg:text-[48px] leading-tight'>From <span className='font-bold text-[#10AB01]'>Pakistan</span></h1>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-4 max-w-2xl">
                        Jaytrons is an exclusive network of the
                        top software developers, designers,
                        marketing experts, management consultants,
                        product managers, and project managers in
                        the world. Top  buisnesses and companies
                        hire Jaytrons talent for their most important projects.
                    </p>
               
                    <Button className='bg-[#10AB01] w-full sm:w-[195px] h-[50px] sm:h-[59px] text-[12px] sm:text-[17px] font-bold mt-6
                     sm:mt-[45px] cursor-pointer flex items-center justify-center gap-2 font-regular hover:bg-[#0fab01d5]'>
                        Hire on Upwork
                        <Image src={HeroCTAArrow} alt='Hire us on Upwork' className="w-2 h-2 sm:w-4 sm:h-4" />
                    </Button>

                </div>
                {/* Image section */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <Image
                    src={HeroProfileImg}
                    alt='Profile'
                    className='w-[280px] sm:w-[320px] lg:w-[390px] h-auto object-contain'
                    />
                </div>
            </div>
        </div>
    )

}