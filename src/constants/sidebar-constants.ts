import {TrendingDown, TrendingUp, ChartNoAxesCombined} from "lucide-react"

export const SIDEBAR_LIST = [
    {
        label: "Dashboard",
        href: "/(main)",
        icon: ChartNoAxesCombined
    },
    {
        label: "Pengeluaran",
        href: "/pengeluaran",
        icon: TrendingDown
    },
    {
        label: "Pemasukan",
        href: "/pemasukan",
        icon: TrendingUp
    },
]