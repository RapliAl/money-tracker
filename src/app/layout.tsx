import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Bebas_Neue } from "next/font/google";

type RootLayoutProps = {
    children: React.ReactNode
}

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue"
})

export const metadata: Metadata = {
    title: "Money Tracker",
    description: "Made By Raplial",
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html
                lang="en"
                suppressHydrationWarning
                className={bebasNeue.variable}
            >
                <head>
                    <title className="font-bebas-neue">Money Tracker</title>
                </head>
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
            <footer className="fixed bottom-0 left-7 right-0 mb-8 font-bebas-neue">
                <p className="text-center justify-center"><i>© 2026 Money Tracker</i>. Made With ❤️ By Raplial.</p>
            </footer>
        </>
    )
}