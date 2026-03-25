import type { Metadata } from 'next'
import { Cormorant, Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant-var',
  display: 'swap',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
})

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-var',
  display: 'swap',
  weight: ['400', '600'],
})

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-var',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Ital Gres – Premium Salon Keramike | Bihać | Talijanska Keramika',
  description:
    'Ital Gres Bihać – premium asortiman talijanske keramike. Atlas Concorde, Florim, Marazzi, Ceresit ugradnja, stručna montaža. Bihaćkih kapetana CB5, tel: 061 959 656.',
  keywords:
    'Ital Gres Bihać, talijanska keramika, salon keramike Bihać, Atlas Concorde, Florim, Marazzi, mermer pločice, SPC podovi, Ceresit, ugradnja keramike',
  openGraph: {
    title: 'Ital Gres – Premium Salon Keramike Bihać',
    description:
      'Dobro došli u svijet talijanske keramike. Premium asortiman, stručni savjet, profesionalna ugradnja.',
    locale: 'bs_BA',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeGoodsStore',
  name: 'Ital Gres – Salon Keramike',
  description:
    'Premium salon talijanske keramike u Bihaću. Atlas Concorde, Florim, Marazzi i vrhunska ugradnja.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bihaćkih kapetana CB5',
    addressLocality: 'Bihać',
    postalCode: '77000',
    addressCountry: 'BA',
  },
  telephone: '+38761959656',
  email: 'Italgresbih@gmail.com',
  sameAs: [
    'https://www.instagram.com/italgresbih',
    'https://www.facebook.com/profile.php?id=61582162750380',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="bs"
      className={`${cormorant.variable} ${barlow.variable} ${dm.variable} overflow-x-hidden`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-dm bg-ital-dark text-ital-light antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
