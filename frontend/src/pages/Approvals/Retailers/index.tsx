import { Search, Filter, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { StyledTable } from "@/ui/StyledTable";
import { approvalColumns } from "@/assets/json/TableColumn";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { RetailerDetailModal } from "./RetailerDetailModal";
import { useNavigate } from "react-router-dom";

const mockApprovalData = [
    {
        userId: "USER-5678",
        businessType: "Grocery Store",
        businessName: "City Market Dubai",
        ownerName: "Zaid Khan",
        tradeLicense: "TL-112233",
        createdTime: "Feb 11, 2026 09:00 AM",
        status: "Pending",
    },
    {
        userId: "USER-5679",
        businessType: "Bakery",
        businessName: "Golden Crust Bakery",
        ownerName: "Sarah Ahmed",
        tradeLicense: "TL-445566",
        createdTime: "Feb 11, 2026 10:45 AM",
        status: "Pending",
    },
];

export default function RetailerApprovalsPage() {
    const [selectedApproval, setSelectedApproval] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleViewDetail = (row: any) => {
        setSelectedApproval(row);
        setIsModalOpen(true);
    };

    const handleAccept = (id: string) => {
        console.log("Accepted:", id);
        setIsModalOpen(false);
    };

    const handleReject = (id: string) => {
        console.log("Rejected:", id);
        setIsModalOpen(false);
    };

    return (
        <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
            <div className="flex flex-col gap-1 mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Retailer Approvals</h1>
                <p className="text-slate-500 font-medium">Review and manage new registration requests.</p>
            </div>

            <div className="flex items-center gap-2 mb-8 bg-slate-100/50 p-1 rounded-2xl w-fit">
                <button
                    onClick={() => navigate("/approvals/wholesalers")}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-700 transition-all"
                >
                    Wholesalers
                </button>
                <button
                    onClick={() => navigate("/approvals/retailers")}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-900 shadow-sm transition-all"
                >
                    Retailer
                </button>
                <button
                    onClick={() => navigate("/approvals/purchasers")}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-700 transition-all"
                >
                    Purchasers
                </button>
            </div>

            <div className="flex items-center justify-between mb-6 gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Business Name / Email / License No / User ID"
                        className="pl-12 h-12 border-slate-200 rounded-2xl focus-visible:ring-teal-500 bg-white"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-2xl bg-white text-sm font-bold text-slate-600 hover:border-slate-300 transition-all cursor-pointer shadow-sm">
                        <span>01 Jan, 2024 - 30 Jan, 2024</span>
                        <Filter className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-2xl bg-white text-sm font-bold text-slate-600 hover:border-slate-300 transition-all cursor-pointer shadow-sm">
                        <span>All Status</span>
                        <Filter className="h-4 w-4 text-slate-400" />
                    </div>
                </div>
            </div>

            <StyledTable
                columns={approvalColumns}
                data={mockApprovalData}
                onRowClick={handleViewDetail}
            />

            <div className="mt-8 flex items-center justify-between text-xs text-slate-500 font-medium pb-10">
                <span>0 of 10 row(s) selected.</span>

                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-3">
                        <span>Rows per page</span>
                        <div className="flex items-center gap-4 px-4 py-2 border border-slate-200 rounded-xl bg-white min-w-[80px] justify-between cursor-pointer hover:border-slate-300 transition-colors">
                            <span className="font-bold text-slate-900">10</span>
                            <Filter className="h-3 w-3 text-slate-400" />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="font-bold text-slate-900">Page 1 of 2</span>
                        <div className="flex items-center gap-2">
                            <button className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all disabled:opacity-30 shadow-sm bg-white">
                                <ChevronsLeft className="h-4 w-4 text-slate-600" />
                            </button>
                            <button className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all disabled:opacity-30 shadow-sm bg-white">
                                <ChevronLeft className="h-4 w-4 text-slate-600" />
                            </button>
                            <button className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm bg-white">
                                <ChevronRight className="h-4 w-4 text-slate-600" />
                            </button>
                            <button className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm bg-white">
                                <ChevronsRight className="h-4 w-4 text-slate-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <RetailerDetailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={selectedApproval}
                onAccept={handleAccept}
                onReject={handleReject}
            />
        </div>
    );
}
