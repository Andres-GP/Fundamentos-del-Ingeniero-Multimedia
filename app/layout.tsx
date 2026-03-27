import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ReduxProvider } from '@/store/provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fundamentos del Ingeniero Multimedia | UNAD',
  description: 'Guia completa sobre los fundamentos de la Ingenieria Multimedia. Aprende sobre definiciones, caracteristicas, areas de formacion y el rol del ingeniero multimedia.',
  keywords: ['ingenieria multimedia', 'multimedia', 'UNAD', 'educacion', 'tecnologia', 'arte digital'],
  authors: [{ name: 'UNAD - Universidad Nacional Abierta y a Distancia' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Fundamentos del Ingeniero Multimedia',
    description: 'Descubre el fascinante mundo de la Ingenieria Multimedia',
    type: 'website',
    locale: 'es_CO',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#003366',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <Analytics />
      </body>
    </html>
  )
}
