import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import {DarkModeToggle} from "@/src/components/common/darkmode-toggle";

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
            <DarkModeToggle/>
            <html lang="en" suppressHydrationWarning>
            <head title="Darkmode">
                <title>
                    Money Tracker
                </title>
            </head>
            <body>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            </body>
            </html>
        </>
    )
}
