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
})

export const metadata: Metadata = {
    title: "Money Tracker",
    description: "Made By Raplial",
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning className={bebasNeue.className}>
                <head title="Darkmode" />
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
        </>
    )
}
