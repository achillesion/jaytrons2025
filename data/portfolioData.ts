export interface Portfolio {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
}

export const portfolioData = {
    portfolios: [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "Modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            link: "https://www.google.com",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"]
        },
        {
            id: 2,
            title: "Mobile Banking App",
            description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
            link: "https://www.google.com",
            technologies: ["React Native", "Firebase", "Biometric Auth"]
        },
        {
            id: 3,
            title: "SaaS Dashboard",
            description: "Comprehensive analytics dashboard for SaaS companies with real-time data visualization and reporting.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
            link: "https://www.google.com",
            technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"]
        },
        {
            id: 4,
            title: "Brand Identity Design",
            description: "Complete brand identity package including logo design, color palette, and brand guidelines for tech startup.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
            link: "https://www.google.com",
            technologies: ["Adobe Illustrator", "Photoshop", "Brand Strategy"]
        },
        {
            id: 5,
            title: "Product Photography",
            description: "Professional product photography and retouching for e-commerce clients, increasing conversion rates by 40%.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
            link: "https://www.google.com",
            technologies: ["Canon 5D", "Adobe Lightroom", "Studio Lighting"]
        },
        {
            id: 6,
            title: "Video Marketing Campaign",
            description: "Complete video marketing campaign including script writing, filming, and post-production for SaaS product launch.",
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
            link: "https://www.google.com",
            technologies: ["Adobe Premiere", "After Effects", "Motion Graphics"]
        }
    ]
} 