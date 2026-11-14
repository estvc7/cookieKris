import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    locale: siteDetails.locale,
    images: [
      {
        url: '/images/heroCookie.webp',
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/heroCookie.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteDetails.language}>
      <body className={`${manrope.variable} ${sourceSans.variable} antialiased`}>
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <a
          href="#contenido-principal"
          className="sr-only fixed left-4 top-4 z-[60] rounded bg-white px-4 py-2 text-foreground shadow focus:not-sr-only"
        >
          Saltar al contenido principal
        </a>
        <main id="contenido-principal" className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        {process.env.VERCEL === '1' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
