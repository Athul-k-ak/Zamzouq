import React, { useState } from "react";
import {
    TrendingUp,
    ArrowUpRight,
    Search,
    Download,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    TrendingDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { StyledTable } from "@/ui/StyledTable";
import { paymentRecordsColumns } from "@/assets/json/TableColumn";
import { OrderDetailsDialog } from "@/components/usermanagement/retailers/OrderDetailsDialog";

const PerformanceTab: React.FC = () => {
    const [activeRecordTab, setActiveRecordTab] = useState("Orders");
    const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

    const stats = [
        { label: "Orders Fulfilled", value: "1234", subValue: "+12% this month", trend: "up" },
        { label: "Total Sales", value: "AED 234,890", subValue: "Last 30 days" },
        { label: "Average Rating", value: "4.7", subValue: "Out of 5.0" },
        { label: "Return Rate", value: "2.3%", subValue: "Below average", trend: "down" },
    ];

    const paymentRecords = [
        { id: "INV-2026-001", orderId: "ZMZ-1234", retailer: "Dubai Fresh Foods", amount: "AED 45,890", type: "Online", date: "Feb 10, 2026" },
        { id: "INV-2026-002", orderId: "ZMZ-1235", retailer: "Gulf Snacks Distribution", amount: "AED 45,890", type: "COD", date: "Feb 10, 2026" },
        { id: "INV-2026-003", orderId: "ZMZ-1236", retailer: "Jumeirah Grocery Store", amount: "AED 45,890", type: "Online", date: "Feb 10, 2026" },
        { id: "INV-2026-004", orderId: "ZMZ-1237", retailer: "Jumeirah Grocery Store", amount: "AED 45,890", type: "COD", date: "Feb 10, 2026" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-35">
                        <div>
                            <p className="text-sm font-medium text-slate-400 mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <p className={cn(
                                "text-xs font-semibold",
                                stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-blue-600" : "text-slate-500"
                            )}>
                                {stat.subValue}
                            </p>
                            {stat.trend === "up" && <ArrowUpRight className="h-4 w-4 text-slate-400" />}
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                    { title: "Monthly Sales Revenue", subtitle: "Revenue performance across all retailer orders", info: "12% growth compared to last month", color: "text-teal-500" },
                    { title: "Weekly Order Volume", subtitle: "Orders received from retailers this week", info: "Peak Day: Saturday", info2: "Lowest Day: Sunday", color: "text-teal-500" },
                    { title: "Order Fulfillment Rate", subtitle: "Completed vs Returns orders trend", info: "Return Rate: 4.2%", color: "text-teal-500" }
                ].map((chart, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-1">{chart.title}</h4>
                        <p className="text-xs text-slate-400 font-medium mb-6">{chart.subtitle}</p>

                        {/* Placeholder Chart Graphic */}
                        <div className="h-40 w-full bg-slate-50/50 rounded-2xl mb-6 relative overflow-hidden flex items-end px-2">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path
                                    d="M0,80 Q25,60 50,70 T100,20 L100,100 L0,100 Z"
                                    fill="url(#gradient)"
                                    fillOpacity="0.1"
                                />
                                <path
                                    d="M0,80 Q25,60 50,70 T100,20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-teal-400"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(45, 212, 191)" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* Tooltip placeholder */}
                            {idx === 0 && (
                                <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded-lg p-2 border border-slate-100 text-[10px] z-10">
                                    <p className="font-bold text-slate-400">Sep</p>
                                    <p className="font-bold text-slate-900">Revenue: AED 23,450</p>
                                </div>
                            )}
                            {idx === 1 && (
                                <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded-lg p-2 border border-slate-100 text-[10px] z-10">
                                    <p className="font-bold text-slate-400">Thu</p>
                                    <p className="font-bold text-slate-900">Orders: 200</p>
                                </div>
                            )}
                            {idx === 2 && (
                                <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded-lg p-2 border border-slate-100 text-[10px] z-10">
                                    <p className="font-bold text-slate-400">Sep</p>
                                    <p className="font-bold text-slate-900">Returns: 18</p>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-4 text-[10px] font-bold text-teal-500">
                            <div className="flex items-center gap-1">
                                <TrendingUp className="h-3 w-3" />
                                <span>{chart.info}</span>
                            </div>
                            {chart.info2 && (
                                <div className="flex items-center gap-1">
                                    <TrendingDown className="h-3 w-3 text-red-400" />
                                    <span className="text-red-400">{chart.info2}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Payment Records Section */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-1">Payment Records</h2>
                    <p className="text-slate-400 font-medium">Track earnings and settlements</p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 bg-slate-100/50 p-1 rounded-xl w-fit">
                        {["Orders", "Returns"].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveRecordTab(tab)}
                                className={cn(
                                    "px-6 py-1.5 rounded-lg text-sm font-bold transition-all",
                                    activeRecordTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative group min-w-70">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-teal-500" />
                            <input
                                type="text"
                                placeholder="Search by business or ID"
                                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                            <span>All Status</span>
                            <ChevronRight className="h-4 w-4 rotate-90" />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                            <Download className="h-4 w-4" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <StyledTable
                        columns={paymentRecordsColumns}
                        data={paymentRecords}
                        onRowClick={(row) => setSelectedOrder(row)}
                    />

                    {/* Pagination */}
                    <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm font-bold text-slate-400">0 of 10 row(s) selected.</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-slate-400">Rows per page</span>
                                <select className="bg-white border border-slate-200 rounded-lg text-sm font-bold px-2 py-1 outline-none">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                </select>
                            </div>

                            <p className="text-sm font-bold text-slate-900">Page 1 of 2</p>

                            <div className="flex items-center gap-1">
                                <button className="p-1 text-slate-400 hover:text-slate-900 disabled:opacity-30" disabled>
                                    <ChevronsLeft className="h-4 w-4" />
                                </button>
                                <button className="p-1 text-slate-400 hover:text-slate-900 disabled:opacity-30" disabled>
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button className="p-1 text-slate-400 hover:text-slate-900">
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                                <button className="p-1 text-slate-400 hover:text-slate-900">
                                    <ChevronsRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Details Dialog */}
            <OrderDetailsDialog
                isOpen={!!selectedOrder}
                onClose={() => setSelectedOrder(null)}
                record={selectedOrder}
            />
        </div>
    );
};

export default PerformanceTab;
