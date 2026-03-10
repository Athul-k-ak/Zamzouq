import React from "react";
import {
    Search,
    Download,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import { StyledTable } from "@/ui/StyledTable";
import { promotionsColumns } from "@/assets/json/TableColumn";

const PromotionsTab: React.FC = () => {
    const activePromotions = [
        { id: "026-001", name: "Dubai Fresh Foods", status: "Active", startDate: "Feb 10, 2026", endDate: "Feb 10, 2026" },
        { id: "026-002", name: "Gulf Snacks Distribution", status: "Expired", startDate: "Feb 10, 2026", endDate: "Feb 10, 2026" },
        { id: "026-003", name: "Jumeirah Grocery Store", status: "Active", startDate: "Feb 10, 2026", endDate: "Feb 10, 2026" },
        { id: "026-004", name: "Jumeirah Grocery Store", status: "Expired", startDate: "Feb 10, 2026", endDate: "Feb 10, 2026" },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Plan Details Card */}
            <div className="bg-slate-50/50 p-6 rounded-4xl border border-slate-100 max-w-sm">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-lg">
                    Plan Details
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500">Plan</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold w-fit">Premium</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500">Status</span>
                        <span className="text-sm font-bold text-green-500">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500">Next Billing</span>
                        <span className="text-sm font-bold text-slate-900">Jan 15, 2025</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500">Amount</span>
                        <span className="text-sm font-bold text-slate-900">$29.00</span>
                    </div>
                </div>
            </div>

            {/* Active Promotions Section */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-1">Active Promotions</h2>
                    <p className="text-slate-400 font-medium">Track earnings and settlements</p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative group min-w-70">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-teal-500" />
                        <input
                            type="text"
                            placeholder="Search by business or ID"
                            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm"
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
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
                    <StyledTable columns={promotionsColumns} data={activePromotions} />

                    {/* Pagination */}
                    <div className="px-6 py-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm font-bold text-slate-400">0 of 10 row(s) selected.</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-slate-400">Rows per page</span>
                                <select className="bg-white border text-slate-900 border-slate-200 rounded-lg text-sm font-bold px-2 py-1 outline-none">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                </select>
                            </div>

                            <p className="text-sm font-bold text-slate-900">Page 1 of 2</p>

                            <div className="flex items-center gap-1">
                                <button className="p-1 text-slate-400 hover:text-slate-900 disabled:opacity-30 border border-slate-200 rounded-md bg-white hover:bg-slate-50 transition-colors" disabled>
                                    <ChevronsLeft className="h-4 w-4" />
                                </button>
                                <button className="p-1 text-slate-400 hover:text-slate-900 disabled:opacity-30 border border-slate-200 rounded-md bg-white hover:bg-slate-50 transition-colors" disabled>
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button className="p-1 text-slate-400 hover:text-slate-900 border border-slate-200 rounded-md bg-white hover:bg-slate-50 transition-colors">
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                                <button className="p-1 text-slate-400 hover:text-slate-900 border border-slate-200 rounded-md bg-white hover:bg-slate-50 transition-colors">
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

export default PromotionsTab;
