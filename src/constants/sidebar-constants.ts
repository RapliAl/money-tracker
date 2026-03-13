import { ChartNoAxesCombined, Wallet, ArrowRightLeft } from "lucide-react"

export const SIDEBAR_LIST = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: ChartNoAxesCombined,
    },
    {
        title: "Transaction",
        href: "/dashboard/transaction",
        icon: ArrowRightLeft,
        color: "red"
    },
    {
        title: "Wallet",
        href: "/dashboard/wallet",
        icon: Wallet,
        color: "green"
    },
]

export type SidebarList = typeof SIDEBAR_LIST[number]