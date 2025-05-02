import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foodo | Grow Your Restaurant. Commission-Free Ordering, Delivery & Marketing",
  description: "Foodo empowers Nigerian restaurants to grow sales, streamline delivery, and automate marketing—all with zero commission fees. Join the future of restaurant tech!",
  openGraph: {
    title: "Foodo | Grow Your Restaurant. Commission-Free Ordering, Delivery & Marketing",
    description: "Foodo empowers Nigerian restaurants to grow sales, streamline delivery, and automate marketing—all with zero commission fees. Join the future of restaurant tech!",
    url: "https://foodo.ng/",
    siteName: "Foodo",
    images: [
      {
        url: "/dashboard-preview.png",
        width: 800,
        height: 500,
        alt: "Foodo Restaurant Dashboard Preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@foodo_ng",
    title: "Foodo | Grow Your Restaurant. Commission-Free Ordering, Delivery & Marketing",
    description: "Foodo empowers Nigerian restaurants to grow sales, streamline delivery, and automate marketing—all with zero commission fees. Join the future of restaurant tech!",
    images: ["/dashboard-preview.png"],
  },
  metadataBase: new URL("https://foodo.ng"),
  alternates: {
    canonical: "https://foodo.ng/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1A4D2E" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="foodo" />
        {/* Open Graph fallback */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="foodo" />
        <meta property="og:image" content="/dashboard-preview.png" />
        {/* Twitter fallback */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@foodo_ng" />
        <meta name="twitter:image" content="/dashboard-preview.png" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "foodo",
            "url": "https://foodo.ng/",
            "logo": "/favicon.png",
            "sameAs": [
              "https://www.instagram.com/",
              "https://twitter.com/foodo_ng",
              "https://www.facebook.com/",
              "https://www.linkedin.com/"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+2349012345678",
              "contactType": "customer service",
              "areaServed": "NG",
              "availableLanguage": ["English"]
            }]
          })
        }} />
      </head>
      <body>
        <ClientBody>{children}</ClientBody>
        <Analytics />
      </body>
    </html>
  );
}
