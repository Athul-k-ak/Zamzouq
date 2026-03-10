import { Calendar, Share2 } from "lucide-react"
import { StatsCard } from "./components/StatsCard"
import {
    MonthlySalesChart,
    WeeklyOrderVolumeChart,
    OrderFulfillmentRateChart,
    TopSellingCategoriesChart
} from "./components/BillingCharts"
import { PaymentRecordsTable } from "./components/PaymentRecordsTable"

export default function WholesalerPaymentsPage() {
    return (
        <div className="space-y-8 pb-12 pt-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Wholesaler Payment Report</h1>
                    <p className="text-slate-500">Track wholesaler earnings and settlements</p>
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

            {/* Metrics Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <StatsCard
                    title="Total Gross Sales"
                    value="AED 1,245,680"
                    trendValue="+8.4%"
                    trend="+8.4% vs last month"
                    isPositive={true}
                    chartColor="teal"
                />
                <StatsCard
                    title="Total Refund Amount"
                    value="AED 45,680"
                    trendValue="4 min"
                    trend="+8.4% vs last month"
                    isPositive={false}
                    chartColor="rose"
                />
                <StatsCard
                    title="Total Orders"
                    value="1256 Orders"
                    trendValue="+3.1%"
                    trend="Earnings per completed order"
                    isPositive={true}
                    chartColor="teal"
                />
            </div>

            {/* Small Charts Grid */}
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                <MonthlySalesChart />
                <WeeklyOrderVolumeChart />
                <OrderFulfillmentRateChart />
            </div>

            {/* Main Analysis Chart */}
            <TopSellingCategoriesChart />

            {/* Payment Records Table */}
            <PaymentRecordsTable />
        </div>
    )
}
