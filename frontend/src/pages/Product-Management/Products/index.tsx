import { Search, Plus, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StyledTable } from "@/ui/StyledTable";
import { productsColumns } from "@/assets/json/TableColumn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const mockProducts = [
    {
        id: "PRD-0145",
        name: "Fresh Avocado - Premium",
        image: "🥑",
        category: "Fruits",
        subcategory: "Tropical Fruits",
        unit: "KG",
        brand: "Organic",
        barcode: "123456789",
        proName: "Avocado",
        variant: "Large",
        variantValue: "500g",
        cartoonSize: "12",
        status: "Active",
        lastUpdated: "12 Jan 2026",
    },
    {
        id: "PRD-0146",
        name: "Fresh Avocado - Premium",
        image: "🥑",
        category: "Fruits",
        subcategory: "Tropical Fruits",
        unit: "KG",
        brand: "Organic",
        barcode: "123456789",
        proName: "Avocado",
        variant: "Large",
        variantValue: "500g",
        cartoonSize: "12",
        status: "Inactive",
        lastUpdated: "12 Jan 2026",
    },
    {
        id: "PRD-0147",
        name: "Fresh Avocado - Premium",
        image: "🥑",
        category: "Fruits",
        subcategory: "Tropical Fruits",
        unit: "KG",
        brand: "Organic",
        barcode: "123456789",
        proName: "Avocado",
        variant: "Large",
        variantValue: "500g",
        cartoonSize: "12",
        status: "Active",
        lastUpdated: "12 Jan 2026",
    },
    {
        id: "PRD-0148",
        name: "Fresh Avocado - Premium",
        image: "🥑",
        category: "Fruits",
        subcategory: "Tropical Fruits",
        unit: "KG",
        brand: "Organic",
        barcode: "123456789",
        proName: "Avocado",
        variant: "Large",
        variantValue: "500g",
        cartoonSize: "12",
        status: "Inactive",
        lastUpdated: "12 Jan 2026",
    },
];

export default function ProductManagementPage() {
    const navigate = useNavigate();
    const renderCell = (item: any, column: any) => {
        if (column.key === "image") {
            return (
                <div className="h-10 w-10 rounded-lg border border-slate-100 bg-white flex items-center justify-center p-1 overflow-hidden text-2xl">
                    {item.image}
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
                <button className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
                    <MoreVertical className="h-5 w-5 text-slate-400" />
                </button>
            );
        }

        // Background colors for specific columns as seen in screenshot
        const columnColors: Record<string, string> = {
            category: "bg-green-50",
            subcategory: "bg-purple-50",
            unit: "bg-yellow-50",
            brand: "bg-blue-50",
            barcode: "bg-red-50",
            proName: "bg-purple-50",
            variant: "bg-green-50",
            variantValue: "bg-yellow-50",
            cartoonSize: "bg-orange-50",
        };

        if (columnColors[column.key]) {
            return (
                <div className={cn("px-4 py-2 -mx-4 -my-2.5 h-full flex items-center min-h-12", columnColors[column.key])}>
                    {item[column.key]}
                </div>
            );
        }

        return item[column.key];
    };

    return (
        <div className="pt-8 pb-8 px-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-start mb-8">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-slate-900">Product Management</h1>
                    <p className="text-slate-500 font-medium tracking-tight">Manage all products listed by wholesalers across the platform.</p>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6 gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search by product name, SKU, wholesaler, category"
                        className="pl-11 h-12 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 h-11 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors cursor-pointer min-w-32 justify-between">
                        <span>All Category</span>
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="flex items-center gap-2 px-4 h-11 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors cursor-pointer min-w-28 justify-between">
                        <span>All Unit</span>
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="flex items-center gap-2 px-4 h-11 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors cursor-pointer min-w-28 justify-between">
                        <span>All Status</span>
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                    <Button
                        onClick={() => navigate("/product-management/products/add")}
                        className="bg-[#056d71] hover:bg-[#045a5d] text-white rounded-xl h-11 px-6 flex items-center gap-2 font-bold transition-all shadow-sm"
                    >
                        <Plus className="h-5 w-5" />
                        Add Product
                    </Button>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm">
                <StyledTable
                    columns={productsColumns}
                    data={mockProducts}
                    renderCell={renderCell}
                    onRowClick={(row) => navigate(`/product-management/products/${row.id}`)}
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
        </div>
    );
}
