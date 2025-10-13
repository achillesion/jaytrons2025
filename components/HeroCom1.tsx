// Import individual images
import { HeroJss, HeroStarImage, HeroProfileImg,HeroCTAArrow } from '@/assets/images';


// Use: HeroImages.HeroJss
import Image from "next/image"
import { Button } from './ui/button';
export default function HeroProfile() {

    return (
        <div className="container mx-auto">
            <div className="flex items-start justify-between mt-6">
                <div className='flex flex-col max-w-[50%] '>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-[48px]">Hire the</h1>
                        <Image src={HeroStarImage} alt="Top Rated" />
                        <Image src={HeroJss} alt="100% Jib Success Score" />
                    </div>
                        <h1 className='text-[48px] text-[#F66DBC] font-bold'>Top Rated Plus</h1>
                        <h1 className='text-[48px]'>From <span className='font-bold text-[#10AB01]'>Pakistan</span></h1>
                        <p>Jaytrons is an exclusive network of the
                            top software developers, designers,
                            marketing experts, management consultants,
                            product managers, and project managers in
                            the world. Top  buisnesses and companies
                            hire Jaytrons talent for their most important projects.
                        </p>
                   
                    <Button className='bg-[#10AB01] w-[195px] h-[59px] text-[21px] font-semibold mt-[45px] cursor-pointer'>
                        Hire on Upwork
                        <Image src={HeroCTAArrow} alt='Hire us on Upwork' />
                    </Button>

                </div>
                {/* Image section */}
                <Image
                src={HeroProfileImg}
                alt='Profile'
                className='w-[390px]'
                />
            </div>
        </div>
    )

}