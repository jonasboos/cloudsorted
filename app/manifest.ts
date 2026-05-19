import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CloudSorted',
    short_name: 'CloudSorted',
    description: 'Bringe Ordnung in deinen Cloud-Speicher mit künstlicher Intelligenz.',
    start_url: '/',
    display: 'standalone',
    background_color: '#03040b',
    theme_color: '#03040b',
    icons: [
      {
        src: '/assets/logo_mark.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
