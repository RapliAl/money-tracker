"use client"

import {
    Sidebar,
    SidebarGroup,
    SidebarHeader,
    SidebarContent,
    SidebarMenuItem,
    SidebarMenu,
    SidebarMenuButton,
    useSidebar,
    SidebarGroupContent
} from "../ui/sidebar";

import { usePathname } from "next/navigation";
import { BadgeDollarSign } from "lucide-react";
import { SIDEBAR_LIST } from "@/constants/sidebar-constants";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "../ui/tooltip";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function AppSidebar() {
    const { isMobile } = useSidebar()
    const path = usePathname()

    return (
        <TooltipProvider>
            <Sidebar collapsible="icon">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild>
                                <div className="font-semibold text-xl">
                                    <Link
                                        href="/"
                                        className="flex p-2 items-center justify-center rounded-lg gap-3"
                                    >
                                        <div className="">
                                            <BadgeDollarSign className="size-6" />
                                        </div>
                                        Money Tracker
                                    </Link>
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <Separator />
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent className="flex flex-col">
                            <SidebarMenu className="gap-2">
                                {SIDEBAR_LIST?.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            tooltip={item.title}
                                        >
                                            <a href={item.href} className={cn("px-4 py-3 h-auto", {
                                                "text-white hover:bg-green-500 hover:text-green": path === item.href,
                                            })}>
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </TooltipProvider>
    )
}