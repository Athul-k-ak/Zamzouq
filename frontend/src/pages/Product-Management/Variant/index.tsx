import * as React from "react";
import { Search, Plus, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreVertical } from "lucide-react";
import { StyledTable } from "@/ui/StyledTable";
import { variantColumns, variantValueColumns } from "@/assets/json/TableColumn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AddVariantModal } from "./AddVariantModal";
import { AddVariantValueModal } from "./AddVariantValueModal";

const mockVariants = [
    { id: "1", name: "Lux", status: "Active", lastUpdated: "12 Jan 2026" },
    { id: "2", name: "Cello", status: "Active", lastUpdated: "12 Jan 2026" },
    { id: "3", name: "CLEAR", status: "Inactive", lastUpdated: "12 Jan 2026" },
    { id: "4", name: "SUNSILK", status: "Inactive", lastUpdated: "12 Jan 2026" },
];

const mockVariantValues = [
    { id: "1", value: "Red", status: "Active", lastUpdated: "12 Jan 2026" },
    { id: "2", value: "Blue", status: "Active", lastUpdated: "12 Jan 2026" },
];

export default function VariantManagementPage() {
    const [activeTab, setActiveTab] = React.useState<"variant" | "variant-value">("variant");
    const [isVariantModalOpen, setIsVariantModalOpen] = React.useState(false);
    const [isVariantValueModalOpen, setIsVariantValueModalOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<any | null>(null);

    const handleAddClick = () => {
        setSelectedItem(null);
        if (activeTab === "variant") {
            setIsVariantModalOpen(true);
        } else {
            setIsVariantValueModalOpen(true);
        }
    };

    const handleEditClick = (item: any) => {
        setSelectedItem(item);
        if (activeTab === "variant") {
            setIsVariantModalOpen(true);
        } else {
            setIsVariantValueModalOpen(true);
        }
    };

    const renderCell = (item: any, column: any) => {
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
                    <h1 className="text-3xl font-bold text-slate-900">Variant Management</h1>
                    <p className="text-slate-500 font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">Manage all Variant listed by wholesalers across the platform.</p>
                </div>
            </div>

            <div className="flex items-center gap-1 p-1 bg-slate-100 w-fit rounded-xl mb-8">
                <button
                    onClick={() => setActiveTab("variant")}
                    className={cn(
                        "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                        activeTab === "variant" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    )}
                >
                    Variant
                </button>
                <button
                    onClick={() => setActiveTab("variant-value")}
                    className={cn(
                        "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                        activeTab === "variant-value" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    )}
                >
                    Variant Value
                </button>
            </div>

            <div className="flex items-center justify-between mb-6 gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder={`Search by ${activeTab === "variant" ? "Variant" : "Variant Value"} name`}
                        className="pl-10 h-11 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium placeholder:text-slate-400"
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
                        Add {activeTab === "variant" ? "Variant" : "Variant Value"}
                    </Button>
                </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm">
                <StyledTable
                    columns={activeTab === "variant" ? variantColumns : variantValueColumns}
                    data={activeTab === "variant" ? mockVariants : mockVariantValues}
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
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 font-bold">
                                <ChevronRight className="h-4 w-4 text-slate-900" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 font-bold">
                                <ChevronsRight className="h-4 w-4 text-slate-900" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <AddVariantModal
                isOpen={isVariantModalOpen}
                onClose={() => {
                    setIsVariantModalOpen(false);
                    setSelectedItem(null);
                }}
                variant={selectedItem}
            />

            <AddVariantValueModal
                isOpen={isVariantValueModalOpen}
                onClose={() => {
                    setIsVariantValueModalOpen(false);
                    setSelectedItem(null);
                }}
                variantValue={selectedItem}
            />
        </div>
    );
}
