import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Four Cups | Fusion Vegetarian Dining – Coimbatore',
  description:
    'Four Cups – Premium fusion vegetarian dining in Coimbatore. Experience The Mighty Raja Bhojanam and elegant veg cuisine at R.S. Puram.',
  keywords: [
    'Four Cups',
    'vegetarian restaurant Coimbatore',
    'fusion veg dining',
    'Raja Bhojanam',
    'RS Puram restaurant',
    'premium vegetarian Coimbatore',
  ],
  authors: [{ name: 'Four Cups' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Four Cups | Fusion Vegetarian Dining – Coimbatore',
    description:
      'Premium fusion vegetarian dining experience in the heart of Coimbatore. Wholesome meals, elegant ambience, unforgettable hospitality.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Four Cups',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5A3825',
  width: 'device-width',
  initialScale: 1,
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Four Cups',
  description: 'Premium fusion vegetarian dining in Coimbatore',
  servesCuisine: ['Indian', 'Fusion', 'Vegetarian'],
  priceRange: '₹₹',
  telephone: '+917708474764',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1st Floor, Fortune Suites, 134, E Periasamy Rd, Above Poppet Jamal',
    addressLocality: 'R.S. Puram, Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641002',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:01',
      closes: '15:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '19:00',
      closes: '22:30',
    },
  ],
  menu: '#menu',
  hasMap:
    'https://www.google.com/maps?q=Four+Cups+134+E+Periasamy+Rd+RS+Puram+Coimbatore',
  paymentAccepted: 'Credit Card, Debit Card, Google Pay, Cash',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} bg-[#F7F0E6]`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
