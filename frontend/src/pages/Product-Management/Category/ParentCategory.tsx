import * as React from "react";
import { Search, Plus, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreVertical } from "lucide-react";
import { StyledTable } from "@/ui/StyledTable";
import { useNavigate } from "react-router-dom";
import { parentCategoriesColumns } from "@/assets/json/TableColumn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AddCategoryModal } from "./AddCategoryModal";

const mockCategories = [
    {
        id: "CAT-001",
        name: "Vegetables",
        wholesalers: 12,
        image: "https://images.unsplash.com/photo-1566385101042-1a000c1268c4?w=40&h=40&fit=crop",
        status: "Active",
        totalSubCategory: 13,
        lastUpdated: "12 Jan 2026",
    },
    {
        id: "CAT-001",
        name: "Fruits",
        wholesalers: 12,
        image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=40&h=40&fit=crop",
        status: "Active",
        totalSubCategory: 13,
        lastUpdated: "12 Jan 2026",
    },
    {
        id: "CAT-001",
        name: "Stationery",
        wholesalers: 12,
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=40&h=40&fit=crop",
        status: "Inactive",
        totalSubCategory: 13,
        lastUpdated: "12 Jan 2026",
    },
];

export default function ParentCategoryPage() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState<any | null>(null);

    const handleAddClick = () => {
        setSelectedCategory(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (category: any) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    const renderCell = (item: any, column: any) => {
        if (column.key === "image") {
            return (
                <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-100 shrink-0">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
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
                    <h1 className="text-3xl font-bold text-slate-900">Parent categories</h1>
                    <p className="text-slate-500 font-medium tracking-tight">Manage and organize product categories across the platform</p>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6 gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search Category"
                        className="pl-10 h-11 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 h-11 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors cursor-pointer min-w-32 justify-between">
                        <span>All Status</span>
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                    <Button
                        onClick={handleAddClick}
                        className="bg-[#056d71] hover:bg-[#045a5d] text-white rounded-xl h-11 px-6 flex items-center gap-2 font-bold transition-all shadow-sm"
                    >
                        <Plus className="h-5 w-5" />
                        Add Parent Category
                    </Button>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm">
                <StyledTable
                    columns={parentCategoriesColumns}
                    data={mockCategories}
                    renderCell={renderCell}
                    onRowClick={(row) => navigate(`/product-management/categories/${row.id}`)}
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

            <AddCategoryModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedCategory(null);
                }}
                type="parent"
                category={selectedCategory}
            />
        </div>
    );
}
