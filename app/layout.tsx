import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ContactNav from "@/components/contactNav";
import HydrationFix from "./hydration-fix";
import { ThemeProvider } from "@/contexts/ThemeContext";
import DynamicBackground from "@/components/DynamicBackground";
import BookingWidget from "@/components/BookingWidget";
import BottomNav from "@/components/bottonNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});      

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaytrons - Top Rated Software Development Company | Custom Web & App Development",
  description: "Hire the top-rated software development company. Expert custom software development, web applications, mobile apps, AI solutions, and SaaS development. 100% job success rate with React, Next.js, and modern technologies.",
  keywords: [
    "software development company",
    "custom software development", 
    "web development services",
    "app development",
    "React development",
    "Next.js development",
    "full stack development",
    "AI development",
    "SaaS development",
    "UI/UX design",
    "mobile app development",
    "software engineering",
    "web application development",
    "custom software solutions",
    "software consulting"
  ],
  authors: [{ name: "Jaytrons Development Team" }],
  creator: "Jaytrons",
  publisher: "Jaytrons",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jaytrons.com',
    siteName: 'Jaytrons - Software Development Company',
    title: 'Jaytrons - Top Rated Software Development Company | Custom Web & App Development',
    description: 'Hire the top-rated software development company. Expert custom software development, web applications, mobile apps, AI solutions, and SaaS development. 100% job success rate.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jaytrons - Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaytrons - Top Rated Software Development Company',
    description: 'Expert custom software development, web applications, mobile apps, AI solutions, and SaaS development. 100% job success rate.',
    images: ['/og-image.jpg'],
    creator: '@jaytrons',
  },
  alternates: {
    canonical: 'https://jaytrons.com',
  },
  category: 'Technology',
  classification: 'Software Development Services',
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jaytrons",
    "description": "Top-rated software development company specializing in custom web applications, mobile apps, AI solutions, and SaaS development.",
    "url": "https://jaytrons.com",
    "logo": "https://jaytrons.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/jaytrons",
      "https://twitter.com/jaytrons",
      "https://github.com/jaytrons"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions for businesses"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development",
            "description": "Modern web applications using React, Next.js, and latest technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Mobile App Development",
            "description": "iOS and Android mobile applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Development",
            "description": "Artificial Intelligence and machine learning solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SaaS Development", 
            "description": "Software as a Service platform development"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
        suppressHydrationWarning
      >
       <HydrationFix />
       <ThemeProvider>
         <DynamicBackground />
         <div className="flex flex-col min-h-screen  mx-auto ">
          <ContactNav />
          <BookingWidget />
          <BottomNav />
         <Navbar />
         <div className="">
         {children}
         </div>
         </div>
       </ThemeProvider>
      </body>
    </html>
  );
}
