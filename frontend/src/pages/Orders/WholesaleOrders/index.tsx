import { Search, Filter, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Calendar } from "lucide-react";
import { StyledTable } from "@/ui/StyledTable";
import { wholesaleOrdersColumns } from "@/assets/json/TableColumn";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const mockOrders = [
    {
        id: "ZMZ-1234",
        retailer: "Al Barsha Mini Market",
        wholesaler: "Dubai Fresh Foods",
        purchaser: "Ahmed Hassan",
        value: "AED 2,450",
        createdTime: "Feb 10, 2026 10:30 AM",
        status: "Delivered",
    },
    {
        id: "ZMZ-1234",
        retailer: "Jumeirah Grocery Store",
        wholesaler: "Emirates Beverages Co",
        purchaser: "Mohammed Ali",
        value: "AED 2,450",
        createdTime: "Feb 10, 2026 11:15 AM",
        status: "Packed",
    },
    {
        id: "ZMZ-1234",
        retailer: "Marina Bay Provisions",
        wholesaler: "Al Ain Dairy Products",
        purchaser: "Mohammed Ali",
        value: "AED 2,450",
        createdTime: "Feb 10, 2026 11:15 AM",
        status: "Accepted",
    },
    {
        id: "ZMZ-1234",
        retailer: "Marina Bay Provisions",
        wholesaler: "Al Ain Dairy Products",
        purchaser: "Mohammed Ali",
        value: "AED 2,450",
        createdTime: "Feb 10, 2026 11:15 AM",
        status: "Pending",
    },
];

export default function WholesaleOrdersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleRowClick = (row: any) => {
        navigate(`/orders/wholesale-orders/${row.id}`);
    };

    return (
        <div className="p-8 max-w-300 mx-auto animate-in fade-in duration-500">
            <div className="flex flex-col gap-1 mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Wholesale Orders</h1>
                <p className="text-slate-500">Manage and track all wholesale orders</p>
            </div>

            <div className="flex items-center justify-between mb-6 gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search by business or ID"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-11 border-slate-200 rounded-xl focus-visible:ring-teal-500"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-600 hover:border-slate-300 transition-colors cursor-pointer h-11">
                        <span>01 Jan, 2024 - 30 Jan, 2024</span>
                        <Calendar className="h-4 w-4" />
                    </div>

                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px] h-11 border-slate-200 rounded-xl text-slate-600 font-medium focus:ring-teal-500">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent className="bg-white rounded-xl border-slate-200">
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="packed">Packed</SelectItem>
                            <SelectItem value="accepted">Accepted</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <StyledTable
                columns={wholesaleOrdersColumns}
                data={mockOrders}
                onRowClick={handleRowClick}
                onActionClick={(row) => navigate(`/orders/wholesale-orders/${row.id}`)}
            />

            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>0 of 10 row(s) selected.</span>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span>Rows per page</span>
                        <div className="flex items-center gap-1 px-2 py-1.5 border border-slate-200 rounded-lg bg-white min-w-15 justify-between cursor-pointer">
                            <span>10</span>
                            <Filter className="h-3 w-3" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span>Page 1 of 2</span>
                        <div className="flex items-center gap-1">
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 disabled:opacity-30">
                                <ChevronsLeft className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 disabled:opacity-30">
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50">
                                <ChevronsRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
