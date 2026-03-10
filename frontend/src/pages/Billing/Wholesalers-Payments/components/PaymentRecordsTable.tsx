import { useState } from "react"
import {
    Search,
    Download,
    Eye,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"
import { wholesalerPaymentRecordsColumns } from "@/assets/json/TableColumn"
import { StyledTable } from "@/ui/StyledTable"
import { PaymentDetailsModal } from "./PaymentDetailsModal"

const mockData = [
    { id: "INV-2024-001", orderId: "ZMZ-1234", retailer: "Dubai Fresh Foods", amount: "AED 45,890", type: "Online", status: "Approved", date: "Feb 10, 2024" },
    { id: "INV-2024-002", orderId: "ZMZ-1235", retailer: "Gulf Snacks Distribution", amount: "AED 45,890", type: "COD", status: "Pending", date: "Feb 10, 2024" },
    { id: "INV-2024-003", orderId: "ZMZ-1236", retailer: "Jumeirah Grocery Store", amount: "AED 45,890", type: "Online", status: "Rejected", date: "Feb 10, 2024" },
    { id: "INV-2024-004", orderId: "ZMZ-1237", retailer: "Jumeirah Grocery Store", amount: "AED 45,890", type: "COD", status: "Rejected", date: "Feb 10, 2024" },
    { id: "INV-2024-005", orderId: "ZMZ-1238", retailer: "Al Ain Wholesalers", amount: "AED 45,890", type: "Online", status: "Approved", date: "Feb 10, 2024" },
];

export function PaymentRecordsTable() {
    const [activeTab, setActiveTab] = useState<"orders" | "returns">("orders")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedPayment, setSelectedPayment] = useState<any | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleRowClick = (payment: any) => {
        setSelectedPayment(payment)
        setIsModalOpen(true)
    }

    const renderCustomCell = (row: any, column: any) => {
        if (column.key === "actions") {
            return (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRowClick(row);
                    }}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-600"
                >
                    <Eye className="h-4 w-4" />
                </button>
            )
        }
        if (column.key === "amount" || column.key === "orderId") {
            return <span className="font-bold text-slate-900">{row[column.key]}</span>
        }
        return undefined;
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-slate-900">Wholesaler Payment Records</h3>
                <p className="text-sm text-slate-500 -mt-2">Track wholesaler earnings and settlements</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button
                        onClick={() => setActiveTab("orders")}
                        className={cn(
                            "px-6 py-2 text-sm font-bold rounded-lg transition-all",
                            activeTab === "orders" ? "bg-white text-[#056d71] shadow-sm" : "text-slate-500 hover:text-slate-700"
                        )}
                    >
                        Orders
                    </button>
                    <button
                        onClick={() => setActiveTab("returns")}
                        className={cn(
                            "px-6 py-2 text-sm font-bold rounded-lg transition-all",
                            activeTab === "returns" ? "bg-white text-[#056d71] shadow-sm" : "text-slate-500 hover:text-slate-700"
                        )}
                    >
                        Returns
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by business or ID"
                            className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#056d71]/20 w-64 shadow-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm cursor-pointer">
                        <span>All Status</span>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-2 bg-[#056d71] hover:bg-[#045a5d] rounded-xl text-sm font-bold text-white shadow-sm transition-all active:scale-95">
                        <Download className="h-4 w-4" />
                        Export
                    </button>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                <StyledTable
                    columns={wholesalerPaymentRecordsColumns}
                    data={mockData}
                    renderCell={renderCustomCell}
                    onRowClick={handleRowClick}
                />
            </div>

            {/* Standard Pagination Controls matching Variant page */}
            <div className="mt-6 flex items-center justify-between text-sm text-slate-500 font-medium">
                <span>0 of 10 row(s) selected.</span>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span>Rows per page</span>
                        <div className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-xl bg-white min-w-16 justify-between cursor-pointer group hover:border-[#056d71]/50 transition-colors">
                            <span>10</span>
                            <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-[#056d71]" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span>Page 1 of 5</span>
                        <div className="flex items-center gap-1">
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 disabled:opacity-30 transition-colors" disabled>
                                <ChevronsLeft className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 disabled:opacity-30 transition-colors" disabled>
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 font-bold group transition-colors">
                                <ChevronRight className="h-4 w-4 text-slate-900 group-hover:text-[#056d71]" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 font-bold group transition-colors">
                                <ChevronsRight className="h-4 w-4 text-slate-900 group-hover:text-[#056d71]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <PaymentDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                payment={selectedPayment}
            />
        </div>
    )
}
