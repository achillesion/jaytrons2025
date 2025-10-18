import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jaytrons - Software Development Company',
    short_name: 'Jaytrons',
    description: 'Top-rated software development company specializing in custom web applications, mobile apps, AI solutions, and SaaS development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090A0C',
    theme_color: '#13AA02',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'developer'],
  }
}
