import "./globals.css";
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

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
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