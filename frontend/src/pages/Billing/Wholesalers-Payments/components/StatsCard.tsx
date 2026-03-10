import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
    title: string
    value: string
    trend: string
    trendValue: string
    isPositive?: boolean
    chartColor?: string
}

export function StatsCard({ title, value, trend, trendValue, isPositive = true, chartColor = "teal" }: StatsCardProps) {
    return (
        <Card className="shadow-sm border-slate-200 overflow-hidden">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-slate-500">{title}</p>
                        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
                    </div>
                    <div className={cn(
                        "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold",
                        isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                    )}>
                        {isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                        {trendValue}
                    </div>
                </div>

                <div className="mt-4 flex items-end justify-between">
                    <div className="space-y-1">
                        <p className="text-xs text-slate-400">Trending up this month</p>
                        <p className="text-xs font-medium text-slate-500">{trend}</p>
                    </div>
                    <div className="h-8 w-16">
                        {/* Simple sparkline-like SVG */}
                        <svg viewBox="0 0 64 32" className={cn("w-full h-full", `text-${chartColor}-500 stroke-current`)} fill="none">
                            <path
                                d="M0 24 Q16 12 32 20 T64 8"
                                strokeWidth="2"
                                strokeLinecap="round"
                                className="opacity-50"
                            />
                        </svg>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
