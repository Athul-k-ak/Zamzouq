import { Calendar, Share2 } from "lucide-react"
import { StatsCard } from "./components/StatsCard"
import {
    MonthlyPurchaseVolumeChart,
    WeeklyOrderVolumeChart,
    PaymentFlowTrendChart,
    RetailerPurchaseByCategoryChart
} from "./components/BillingCharts"
import { PaymentRecordsTable } from "./components/PaymentRecordsTable"

export default function RetailerPaymentsPage() {
    return (
        <div className="space-y-8 pb-12 pt-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Retailer Payment Report</h1>
                    <p className="text-slate-500">Track retailer order payments, billing activity, and settlements</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-sm font-medium text-slate-700">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>01 Jan, 2024 - 30 Jan, 2024</span>
                        <Calendar className="ml-2 h-4 w-4 text-slate-400" />
                    </div>

                    <button className="flex items-center gap-2 px-6 py-2 bg-[#056d71] hover:bg-[#045a5d] transition-colors rounded-xl text-white text-sm font-bold shadow-md">
                        <Share2 className="h-4 w-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* Small Charts Grid */}
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                <MonthlyPurchaseVolumeChart />
                <WeeklyOrderVolumeChart />
                <PaymentFlowTrendChart />
            </div>

            {/* Main Analysis Chart */}
            <RetailerPurchaseByCategoryChart />

            {/* Payment Records Table */}
            <PaymentRecordsTable />
        </div>
    )
}
