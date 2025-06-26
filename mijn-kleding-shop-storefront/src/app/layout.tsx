import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Kaftan Store - Elegante Marokkaanse Kaftans",
    template: "%s | Kaftan Store"
  },
  description: "Ontdek onze exclusieve collectie authentieke Marokkaanse kaftans, handgemaakt door ervaren ambachtslieden. Elegantie en traditie in elke draad. Gratis verzending in Nederland.",
  keywords: [
    "marokkaanse kaftans",
    "traditionele kleding",
    "handgemaakt",
    "elegante jurken",
    "authentieke mode",
    "dameskleding",
    "kaftan nederland",
    "luxury fashion"
  ],
  authors: [{ name: "Kaftan Store" }],
  creator: "Kaftan Store",
  publisher: "Kaftan Store",
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
    locale: 'nl_NL',
    url: getBaseURL(),
    siteName: 'Kaftan Store',
    title: 'Kaftan Store - Elegante Marokkaanse Kaftans',
    description: 'Ontdek onze exclusieve collectie authentieke Marokkaanse kaftans, handgemaakt door ervaren ambachtslieden.',
    images: [
      {
        url: '/og-image.jpg', // Zorg dat je deze afbeelding toevoegt
        width: 1200,
        height: 630,
        alt: 'Kaftan Store - Elegante Marokkaanse Kaftans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaftan Store - Elegante Marokkaanse Kaftans',
    description: 'Ontdek onze exclusieve collectie authentieke Marokkaanse kaftans.',
    images: ['/og-image.jpg'],
    creator: '@kaftanstore',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Vervang met echte code
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="nl" data-mode="light">
    <head>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ClothingStore",
            "name": "Kaftan Store",
            "description": "Authentieke Marokkaanse kaftans, handgemaakt door ervaren ambachtslieden",
            "url": getBaseURL(),
            "logo": `${getBaseURL()}/logo.png`,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NL"
            },
            "sameAs": [
              "https://www.instagram.com/kaftanstore",
              "https://www.facebook.com/kaftanstore"
            ]
          })
        }}
      />
    </head>
    <body className="font-sans antialiased">
    <main className="relative">{props.children}</main>
    </body>
    </html>
  )
}