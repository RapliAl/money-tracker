import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import {Toaster} from "sonner";

type RootLayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Money Tracker",
    description: "Made By Raplial",
};

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
            <head title="Darkmode"/>
            <body>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <Toaster/>
            </ThemeProvider>
            </body>
            </html>
        </>
    )
}
