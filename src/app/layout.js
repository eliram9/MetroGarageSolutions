import "./globals.css";
import Script from 'next/script';
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

export const metadata = {
    title: "Metro Garage Solutions | Professional Garage Door Services in Rockville MD",
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
    metadataBase: new URL('https://metrogaragesolutions.com'),
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
        nocache: true,
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
        icon: "/images/garage.png",
        shortcut: "/images/garage.png",
        apple: "/images/garage.png",
    },
    manifest: "/manifest.json",
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                
                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="preconnect" href="https://static.elfsight.com" />
                
                {/* DNS prefetch for additional performance */}
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                
                {/* Google Analytics - Only in production */}
                {GA_TRACKING_ID && process.env.NODE_ENV === 'production' && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}', {
                                    page_title: document.title,
                                    page_location: window.location.href,
                                });
                            `}
                        </Script>
                    </>
                )}
            </head>
            <body 
                suppressHydrationWarning 
                className={`${montserrat.variable} ${comfortaa.variable} ${rubik.variable}`}
            >
                <StructuredData />
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}