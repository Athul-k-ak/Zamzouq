import { Search, Plus, Filter, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { StyledTable } from "@/ui/StyledTable";
import { wholesalersColumns } from "@/assets/json/TableColumn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AddWholesalerForm } from "@/components/usermanagement/wholesalers/AddWholesalerForm";
import { useNavigate } from "react-router-dom";

const mockData = [
    {
        id: "W-001",
        businessName: "Dubai Fresh Foods",
        category: "Fresh Produce",
        inventorySize: "450 items",
        ordersFulfilled: "1234",
        status: "Premium",
    },
    {
        id: "W-002",
        businessName: "Emirates Beverages Co",
        category: "Beverages",
        inventorySize: "450 items",
        ordersFulfilled: "1234",
        status: "Standard",
    },
    {
        id: "W-003",
        businessName: "Dubai Fresh Foods",
        category: "Snacks & Confectionery",
        inventorySize: "450 items",
        ordersFulfilled: "1234",
        status: "Premium",
    },
    {
        id: "W-004",
        businessName: "Emirates Beverages Co",
        category: "Dairy",
        inventorySize: "450 items",
        ordersFulfilled: "1234",
        status: "Standard",
    },
];

export default function WholesalersPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleActionClick = (row: any) => {
        navigate(`/user-management/wholesalers/${row.id}`);
    };

    return (
        <div className="p-8 max-w-300 mx-auto animate-in fade-in duration-500">
            <div className="flex flex-col gap-1 mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Wholesalers</h1>
                <p className="text-slate-500">Manage wholesaler accounts and inventory</p>
            </div>

            <div className="flex items-center justify-between mb-6 gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search by business or ID"
                        className="pl-10 h-11 border-slate-200 rounded-xl focus-visible:ring-teal-500"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-600 hover:border-slate-300 transition-colors cursor-pointer">
                        <span>All Status</span>
                        <Filter className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-600 hover:border-slate-300 transition-colors cursor-pointer">
                        <span>All Categories</span>
                        <Filter className="h-4 w-4" />
                    </div>
                    <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-teal-700 hover:bg-teal-800 text-white rounded-xl h-11 px-6 flex items-center gap-2 font-medium transition-all shadow-sm">
                                <Plus className="h-5 w-5" />
                                Add Wholesaler
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-100 bg-white rounded-3xl p-6 shadow-xl border-none overflow-hidden" showCloseButton={true}>
                            <DialogHeader className="mb-0">
                                <DialogTitle className="text-xl font-bold text-slate-900">Add New Wholesaler</DialogTitle>
                            </DialogHeader>
                            <AddWholesalerForm onClose={() => setIsAddModalOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <StyledTable
                columns={wholesalersColumns}
                data={mockData}
                onActionClick={handleActionClick}
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
