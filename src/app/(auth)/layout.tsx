"use client"

import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import React from "react";
import Aurora from '@/components/ui/aurora';

type AuthLayoutProps = {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="relative min-h-svh">
            {/* Aurora sebagai background - absolute & full screen */}
            <div className="absolute inset-0 z-0">
                <Aurora
                    colorStops={["#0d4804", "#f2f2f2", "#5227FF"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={1}
                />
            </div>

            {/* Content di atas Aurora */}
            <div className="relative z-10 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="absolute top-4 right-4">
                    <DarkModeToggle />
                </div>
                <div className="flex w-full max-w-sm flex-col gap-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
