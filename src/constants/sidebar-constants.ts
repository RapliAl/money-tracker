import { TrendingDown, TrendingUp, ChartNoAxesCombined } from "lucide-react"

export const SIDEBAR_LIST = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: ChartNoAxesCombined,
    },
    {
        title: "Pengeluaran",
        href: "/dashboard/pengeluaran",
        icon: TrendingDown,
        color: "red"
    },
    {
        title: "Pemasukan",
        href: "/dashboard/pemasukan",
        icon: TrendingUp,
        color: "green"
    },
]

export type SidebarList = typeof SIDEBAR_LIST[number]