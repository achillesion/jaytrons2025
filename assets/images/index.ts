// ========================================
// IMAGE EXPORTS
// ========================================

// Hero Images - Using ?url suffix for Turbopack compatibility
import HeroJss from './Hero/HeroJss.svg?url';
import HeroStarImage from './Hero/HeroStarImage.svg?url';
import HeroProfileImg from './Hero/HeroProfileImg.svg?url';
import HeroCTAArrow from './Hero/HeroCtaArrow.svg?url';
// ========================================
// EXPORT ALL IMAGES
// ========================================

// Grouped exports
export const HeroImages = {
  HeroJss,
  HeroStarImage,
  HeroProfileImg,
  HeroCTAArrow
};

// Individual exports
export {
  HeroJss,
  HeroStarImage,
  HeroProfileImg,
  HeroCTAArrow
};

// ========================================
// USAGE EXAMPLES:
// ========================================
// 
// Import individual image:
// import { HeroJss, HeroStarImage } from '@/assets/images';
// 
// Import image group:
// import { HeroImages } from '@/assets/images';
// // Then use: HeroImages.HeroJss
// 
// Import all images:
// import * as Images from '@/assets/images';
// // Then use: Images.HeroJss or Images.HeroImages.HeroJss
// 
// For static imports (if dynamic doesn't work):
// import HeroJssStatic from '@/assets/images/Hero/HeroJss.svg?url';
