import React, { useState } from "react";
import {
    TrendingUp,
    Search,
    Download,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Filter
} from "lucide-react";
import { cn } from "@/lib/utils";
import { StyledTable } from "@/ui/StyledTable";
import { paymentRecordsColumns } from "@/assets/json/TableColumn";

interface PerformanceTabProps {
    id?: string;
}

const PerformanceTab: React.FC<PerformanceTabProps> = (_props) => {
    const [activeRecordTab, setActiveRecordTab] = useState("Orders");

    const stats = [
        { label: "Total Deliveries", value: "847", subValue: "+12% this month", trend: "up" },
        { label: "Today's Earnings", value: "AED 3,450", subValue: "5 deliveries completed" },
        { label: "This Month Earnings", value: "AED 45,890", subValue: "+15% from last month", trend: "up" },
        { label: "Average Delivery time", value: "45 min", subValue: "Average" },
    ];

    const paymentRecords = [
        { id: "INV-2026-001", orderId: "ZMZ-1234", retailer: "Dubai Fresh Foods", amount: "AED 45,890", type: "Online", date: "Feb 10, 2026" },
        { id: "INV-2026-001", orderId: "ZMZ-1234", retailer: "Gulf Snacks Distribution", amount: "AED 45,890", type: "COD", date: "Feb 10, 2026" },
        { id: "INV-2026-001", orderId: "ZMZ-1234", retailer: "Jumeirah Grocery Store", amount: "AED 45,890", type: "Online", date: "Feb 10, 2026" },
        { id: "INV-2026-001", orderId: "ZMZ-1234", retailer: "Jumeirah Grocery Store", amount: "AED 45,890", type: "COD", date: "Feb 10, 2026" },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-40">
                        <div>
                            <p className="text-sm font-medium text-slate-400 mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center gap-1.5">
                                {stat.trend === "up" && (
                                    <div className="p-1 bg-green-50 rounded-md">
                                        <TrendingUp className="h-3.5 w-3.5 text-green-600" />
                                    </div>
                                )}
                                <p className={cn(
                                    "text-xs font-bold",
                                    stat.trend === "up" ? "text-green-600" : "text-slate-500"
                                )}>
                                    {stat.subValue}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Payment Records Section */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-1">Payment Records</h2>
                    <p className="text-slate-400 font-medium text-sm">Track earnings and settlements</p>
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
                        <div className="relative group min-w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-teal-500" />
                            <input
                                type="text"
                                placeholder="Search by business or ID"
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                            <span>All Status</span>
                            <ChevronRight className="h-4 w-4 rotate-90" />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                            <Download className="h-4 w-4" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                    <StyledTable
                        columns={paymentRecordsColumns}
                        data={paymentRecords}
                        onActionClick={(row) => console.log("Action click", row)}
                    />

                    {/* Pagination */}
                    <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm font-bold text-slate-400">0 of 10 row(s) selected.</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-slate-400">Rows per page</span>
                                <div className="flex items-center gap-1 px-2 py-1.5 border border-slate-200 rounded-lg bg-white min-w-15 justify-between cursor-pointer shadow-sm">
                                    <span className="text-sm font-bold text-slate-900">10</span>
                                    <Filter className="h-3 w-3 text-slate-400" />
                                </div>
                            </div>

                            <p className="text-sm font-bold text-slate-900">Page 1 of 2</p>

                            <div className="flex items-center gap-2">
                                <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 disabled:opacity-30 transition-colors shadow-sm" disabled>
                                    <ChevronsLeft className="h-4 w-4" />
                                </button>
                                <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 disabled:opacity-30 transition-colors shadow-sm" disabled>
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                                <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                                    <ChevronsRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceTab;
