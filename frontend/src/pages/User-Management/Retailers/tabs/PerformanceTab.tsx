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
import { StyledTable } from "@/ui/StyledTable";
import { retailerPaymentRecordsColumns } from "@/assets/json/TableColumn";
import { OrderDetailsDialog } from "@/components/usermanagement/retailers/OrderDetailsDialog";

const PerformanceTab: React.FC = () => {
    const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

    const stats = [
        { label: "Orders Fulfilled", value: "1234", subValue: "+12% this month", trend: "up" },
        { label: "Total Sales", value: "AED 234,890", subValue: "Last 30 days" },
    ];

    const paymentRecords = [
        { id: "INV-2026-001", orderId: "ZMZ-1234", customerMobile: "+917 36521562", amount: "AED 450", type: "Online", date: "Feb 10, 2026" },
        { id: "INV-2026-001", orderId: "ZMZ-1234", customerMobile: "+917 36521562", amount: "AED 450", type: "COD", date: "Feb 10, 2026" },
        { id: "INV-2026-001", orderId: "ZMZ-1234", customerMobile: "+917 36521562", amount: "AED 450", type: "Online", date: "Feb 10, 2026" },
        { id: "INV-2026-001", orderId: "ZMZ-1234", customerMobile: "+917 36521562", amount: "AED 450", type: "COD", date: "Feb 10, 2026" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Top Section - Stats & Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column - Stats */}
                <div className="flex flex-col gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm flex flex-col justify-between flex-1 min-h-[160px]">
                            <div>
                                <p className="text-sm font-medium text-slate-400 mb-1">{stat.label}</p>
                                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-sm font-bold text-slate-900">
                                    {stat.subValue}
                                </p>
                                {stat.trend === "up" && <ArrowUpRight className="h-5 w-5 text-slate-900" />}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Columns - Charts */}
                {[
                    {
                        title: "Monthly Sales Revenue",
                        subtitle: "Revenue performance across all orders",
                        info: "12% growth compared to last month",
                        color: "text-teal-500",
                        tooltipTitle: "Sep",
                        tooltipInfo: "Revenue: AED 28,450",
                        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        mockYLabels: ["60K", "50K", "40K", "30K", "20K", "10K"]
                    },
                    {
                        title: "Weekly Order Volume",
                        subtitle: "Orders received this week",
                        info: "Peak Day: Saturday",
                        info2: "Lowest Day: Sunday",
                        color: "text-teal-500",
                        tooltipTitle: "Thu",
                        tooltipInfo: "Orders: 200",
                        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        mockYLabels: ["400", "300", "200", "100", "50", "10"]
                    }
                ].map((chart, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm flex flex-col justify-between">

                        {/* Custom Chart Layout matching Image */}
                        <div className="flex-1 w-full flex flex-col mb-4">
                            <div className="flex-1 flex w-full relative h-[180px]">
                                {/* Y-Axis Labels */}
                                <div className="flex flex-col justify-between text-[10px] text-slate-400 font-medium py-2 pr-4 h-full border-r border-slate-100 border-dashed">
                                    {chart.mockYLabels.map(lbl => <span key={lbl}>{lbl}</span>)}
                                </div>
                                {/* Chart Area */}
                                <div className="flex-1 relative pb-2 ml-2">
                                    {/* Horizontal Grid lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                                        {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="w-full border-t border-slate-100 border-dashed line" />)}
                                    </div>
                                    <svg className="w-full h-full absolute inset-0 pt-2" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path
                                            d={idx === 0 ? "M0,80 Q20,60 40,70 T80,40 T100,10 L100,100 L0,100 Z" : "M0,60 Q20,30 40,80 T80,30 L100,10 L100,100 L0,100 Z"}
                                            fill="url(#gradient)"
                                            fillOpacity="0.1"
                                        />
                                        <path
                                            d={idx === 0 ? "M0,80 Q20,60 40,70 T80,40 T100,10" : "M0,60 Q20,30 40,80 T80,30 L100,10"}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="text-teal-500 drop-shadow-md"
                                        />
                                        {/* Point indicator */}
                                        <circle cx={idx === 0 ? "60" : "80"} cy={idx === 0 ? "40" : "30"} r="3" fill="currentColor" className="text-teal-500" stroke="white" strokeWidth="1.5" />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="rgb(20, 184, 166)" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    {/* Tooltip */}
                                    <div className={`absolute ${idx === 0 ? 'top-[35%] left-[60%]' : 'top-[25%] left-[80%]'} -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl shadow-slate-200/50 rounded-lg p-2 px-3 border border-slate-100 text-[10px] z-10 min-w-max`}>
                                        <p className="font-bold text-slate-400 mb-0.5">{chart.tooltipTitle}</p>
                                        <p className="font-bold text-slate-800">{chart.tooltipInfo}</p>
                                    </div>
                                </div>
                            </div>
                            {/* X-Axis Labels */}
                            <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium pl-10 pr-2 mt-2">
                                {chart.labels.map(lbl => <span key={lbl}>{lbl}</span>)}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">{chart.title}</h4>
                            <p className="text-sm text-slate-400 font-medium mb-6">{chart.subtitle}</p>

                            <div className="flex items-center gap-4 text-xs font-bold text-teal-500">
                                <div className="flex items-center gap-1.5">
                                    <TrendingUp className="h-4 w-4" />
                                    <span>{chart.info}</span>
                                </div>
                                {chart.info2 && (
                                    <div className="flex items-center gap-1.5 text-slate-500">
                                        <TrendingDown className="h-4 w-4 text-slate-400" />
                                        <span>{chart.info2}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Payment Records Section */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-1">Payment Records</h2>
                    <p className="text-slate-500 font-medium text-sm">Track earnings and settlements</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="relative group w-full sm:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-teal-500" />
                        <input
                            type="text"
                            placeholder="Search by business or ID"
                            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm"
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                            <span>All Status</span>
                            <ChevronRight className="h-4 w-4 rotate-90 text-slate-400" />
                        </button>
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                            <Download className="h-4 w-4" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <StyledTable
                        columns={retailerPaymentRecordsColumns}
                        data={paymentRecords}
                        onRowClick={(row) => setSelectedOrder(row)}
                    />

                    {/* Pagination */}
                    <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm font-bold text-slate-400">0 of 10 row(s) selected.</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-slate-400">Rows per page</span>
                                <select className="bg-white border border-slate-200 rounded-lg text-sm font-bold px-2 py-1 outline-none text-slate-700">
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
