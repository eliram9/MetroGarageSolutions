import "./globals.css";
import Script from 'next/script';
import { Montserrat, Comfortaa, Rubik } from 'next/font/google';

import { ThemeProvider } from '../util/ThemeProvider';

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
    title: "Metro Garage Solutions",
    description: "Professional garage door solutions and services",
    icons: {
        icon: "/images/garage.png",
    },
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
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
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}