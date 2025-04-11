import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import React from 'react';

// Configure Rubik font with Hebrew subset
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-rubik',
});

// Define metadata for the site
export const metadata: Metadata = {
  title: 'סטודיו לצילום אלפא | סטודיו צילום מקצועי בישראל',
  description: 'סטודיו לצילום מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
  keywords: 'סטודיו לצילום, שירות, איכות, מקצועיות, ישראל, צילום, סטודיו לצילום אלפא',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://alpha-photography.com',
    title: 'סטודיו לצילום אלפא | סטודיו צילום מקצועי בישראל',
    description: 'סטודיו לצילום מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
    siteName: 'סטודיו לצילום אלפא',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
        width: 1200,
        height: 630,
        alt: 'סטודיו לצילום אלפא',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'סטודיו לצילום אלפא | סטודיו צילום מקצועי בישראל',
    description: 'סטודיו לצילום מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
    images: ['https://images.unsplash.com/photo-1542038784456-1ea8e935640e'],
  },
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable}`}>
      <body className="bg-gray-50 text-right min-h-screen">
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}