import * as React from "react";
import { Search, Plus, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreVertical } from "lucide-react";
import { StyledTable } from "@/ui/StyledTable";
import { brandsColumns } from "@/assets/json/TableColumn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AddBrandModal } from "./AddBrandModal";

const mockBrands = [
    {
        id: "BRD-0145",
        name: "Lux",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lux_logo.svg/1200px-Lux_logo.svg.png",
        products: "01",
        status: "Active",
        lastUpdated: "12 Jan 2026",
    },
    {
        id: "BRD-0147",
        name: "Cello",
        logo: "https://cello.com/wp-content/uploads/2021/08/Cello-Logo.png",
        products: "01",
        status: "Active",
        lastUpdated: "12 Jan 2026",
    },
    {
        id: "BRD-0148",
        name: "CLEAR",
        logo: "https://www.clearsil.us/cdn/shop/files/Clearsil_Logo.png",
        products: "24",
        status: "Inactive",
        lastUpdated: "12 Jan 2026",
    },
    {
        id: "BRD-0146",
        name: "SUNSILK",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Sunsilk_Logo.svg/1200px-Sunsilk_Logo.svg.png",
        products: "26",
        status: "Inactive",
        lastUpdated: "12 Jan 2026",
    },
];

export default function BrandManagementPage() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedBrand, setSelectedBrand] = React.useState<any | null>(null);

    const handleAddClick = () => {
        setSelectedBrand(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (brand: any) => {
        setSelectedBrand(brand);
        setIsModalOpen(true);
    };

    const renderCell = (item: any, column: any) => {
        if (column.key === "logo") {
            return (
                <div className="h-10 w-10 rounded-lg border border-slate-100 bg-white flex items-center justify-center p-1 overflow-hidden">
                    <img src={item.logo} alt={item.name} className="max-h-full max-w-full object-contain" />
                </div>
            );
        }
        if (column.key === "status") {
            return (
                <span className={cn(
                    "text-sm font-medium",
                    item.status === "Active" ? "text-green-500" : "text-red-400"
                )}>
                    {item.status}
                </span>
            );
        }
        if (column.key === "actions") {
            return (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(item);
                    }}
                    className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    <MoreVertical className="h-5 w-5 text-slate-400" />
                </button>
            );
        }
        return item[column.key];
    };

    return (
        <div className="pt-8 pb-8 px-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-start mb-8">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-slate-900">Brand Management</h1>
                    <p className="text-slate-500 font-medium tracking-tight">Manage all Brand listed by wholesalers across the platform.</p>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6 gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search by Brandt name, Brand ID"
                        className="pl-11 h-12 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 h-12 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors cursor-pointer min-w-32 justify-between">
                        <span>All Status</span>
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                    <Button
                        onClick={handleAddClick}
                        className="bg-[#056d71] hover:bg-[#045a5d] text-white rounded-xl h-12 px-6 flex items-center gap-2 font-bold transition-all shadow-sm"
                    >
                        <Plus className="h-5 w-5" />
                        Add Brand
                    </Button>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm">
                <StyledTable
                    columns={brandsColumns}
                    data={mockBrands}
                    renderCell={renderCell}
                />
            </div>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-500 font-medium">
                <span>0 of 10 row(s) selected.</span>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span>Rows per page</span>
                        <div className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-xl bg-white min-w-16 justify-between cursor-pointer">
                            <span>10</span>
                            <ChevronDown className="h-3 w-3 text-slate-400" />
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

            <AddBrandModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedBrand(null);
                }}
                brand={selectedBrand}
            />
        </div>
    );
}
