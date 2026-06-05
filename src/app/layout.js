import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Montserrat, Comfortaa, Rubik } from 'next/font/google';

import { ThemeProvider } from '../util/ThemeProvider';
import StructuredData from './components/StructuredData';

// Initialize the fonts
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
});

const comfortaa = Comfortaa({ 
  subsets: ['latin'],
  variable: '--font-comfortaa'
});

const rubik = Rubik({ 
    subsets: ['latin'],
    variable: '--font-rubik'
});

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata = {
    title: {
        template: '%s | Metro Garage Solutions',
        default: 'Metro Garage Solutions | Professional Garage Door Services in Rockville MD',
    },
    description: "Expert garage door installation, repair, and maintenance services in Rockville, MD and Washington DC metro area. Family-owned business with quality guaranteed. Free estimates available.",
    keywords: "garage door repair, garage door installation, garage door opener, Rockville MD, Washington DC, garage door service, garage door maintenance, family owned garage door company",
    authors: [{ name: "Metro Garage Solutions" }],
    creator: "Metro Garage Solutions",
    publisher: "Metro Garage Solutions",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://metrogaragesolutions.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Metro Garage Solutions | Professional Garage Door Services",
        description: "Expert garage door installation, repair, and maintenance services in Rockville, MD and Washington DC metro area. Family-owned business with quality guaranteed.",
        url: 'https://metrogaragesolutions.com',
        siteName: 'Metro Garage Solutions',
        images: [
            {
                url: '/images/ofer-ai.png',
                width: 1200,
                height: 630,
                alt: 'Metro Garage Solutions - Professional Garage Door Services',
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Metro Garage Solutions | Professional Garage Door Services",
        description: "Expert garage door installation, repair, and maintenance services in Rockville, MD and Washington DC metro area.",
        images: ['/images/ofer-ai.png'],
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
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        ],
        shortcut: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />

                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://static.elfsight.com" />

                {/* Properly sized favicons */}
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon-32x32.png" />
                
            </head>
            <body 
                suppressHydrationWarning 
                className={`${montserrat.variable} ${comfortaa.variable} ${rubik.variable}`}
            >
                <StructuredData />
                <ThemeProvider>
                    {children}
                </ThemeProvider>
                {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
                    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
                )}
            </body>
        </html>
    );
}