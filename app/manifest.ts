import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MC Products Homemade',
    short_name: 'MC Products',
    description: 'Sri Lankan homemade food products',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f4ed',
    theme_color: '#194632',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
