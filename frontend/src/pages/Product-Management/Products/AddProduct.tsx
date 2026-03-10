import { useNavigate, useParams } from "react-router-dom";
import {
    ChevronRight,
    ArrowLeft,
    Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    return (
        <div className="p-4 lg:p-8 max-w-[1000px] mx-auto animate-in fade-in duration-500 pb-20">
            {/* Top Bar with Back Button and Breadcrumbs */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 group"
                >
                    <ArrowLeft className="h-5 w-5 text-slate-500 group-hover:text-slate-900" />
                </button>
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                    <span className="hover:text-slate-600 cursor-pointer" onClick={() => navigate("/product-management/products")}>Product Management</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="hover:text-slate-600 cursor-pointer" onClick={() => navigate("/product-management/products")}>Products</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-slate-900 font-bold">{isEdit ? "Edit Product" : "Add Product"}</span>
                </div>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-8">{isEdit ? "Edit Product" : "Add Product"}</h1>

            <div className="space-y-8">
                {/* General Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Product Name</Label>
                        <Input placeholder="Enter Product Name" className="h-12 rounded-xl border-slate-200 focus-visible:ring-[#056d71]" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Parent Category</Label>
                        <select className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056d71] disabled:cursor-not-allowed disabled:opacity-50 font-medium">
                            <option value="">Select Parent Category</option>
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Child Category</Label>
                        <select className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056d71] disabled:cursor-not-allowed disabled:opacity-50 font-medium">
                            <option value="">Select Child Category</option>
                            <option value="tropical">Tropical Fruits</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Brand</Label>
                        <select className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056d71] disabled:cursor-not-allowed disabled:opacity-50 font-medium">
                            <option value="">Select Brand</option>
                            <option value="organic">Organic</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Barcode</Label>
                        <Input placeholder="Enter Barcode" className="h-12 rounded-xl border-slate-200 focus-visible:ring-[#056d71]" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Pro-Name</Label>
                        <Input placeholder="Enter Pro-Name" className="h-12 rounded-xl border-slate-200 focus-visible:ring-[#056d71]" />
                    </div>
                </div>

                {/* Product Image Section */}
                <div className="space-y-2">
                    <Label className="text-sm font-bold text-slate-700">Product Image</Label>
                    <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center bg-slate-50/30 hover:bg-slate-50 transition-colors cursor-pointer group">
                        <div className="mx-auto w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                            <Upload className="h-6 w-6 text-slate-400" />
                        </div>
                        <p className="text-sm text-slate-500 font-medium tracking-tight">
                            <span className="text-[#056d71] font-bold">Click here</span> to upload or drop files here
                        </p>
                    </div>
                </div>

                {/* Variants & Units Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Variant</Label>
                        <select className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056d71] disabled:cursor-not-allowed disabled:opacity-50 font-medium">
                            <option value="">Select Variant</option>
                            <option value="size">Size</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Variant Value</Label>
                        <select className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056d71] disabled:cursor-not-allowed disabled:opacity-50 font-medium">
                            <option value="">Select Variant Value</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Unit</Label>
                        <select className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056d71] disabled:cursor-not-allowed disabled:opacity-50 font-medium">
                            <option value="">Select Unit</option>
                            <option value="kg">KG</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Unit Value</Label>
                        <Input placeholder="Enter Unit Value" className="h-12 rounded-xl border-slate-200 focus-visible:ring-[#056d71]" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Cartoon Size</Label>
                        <Input placeholder="Enter Cartoon Size" className="h-12 rounded-xl border-slate-200 focus-visible:ring-[#056d71]" />
                    </div>
                </div>

                {/* Description Section */}
                <div className="space-y-2 pt-4">
                    <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Product details</Label>
                    <div className="space-y-2">
                        <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Description</Label>
                        <textarea
                            placeholder="Enter description here..."
                            className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056d71] font-medium resize-none"
                        />
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Base Price</Label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">AED</div>
                            <Input placeholder="0.00" className="h-12 pl-12 rounded-xl border-slate-200 focus-visible:ring-[#056d71]" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Final Price</Label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">AED</div>
                            <Input placeholder="0.00" className="h-12 pl-12 rounded-xl border-slate-200 focus-visible:ring-[#056d71]" />
                        </div>
                    </div>
                </div>

                {/* Key Highlights Section */}
                <div className="space-y-4 pt-4 border-t border-slate-100 mt-8 group">
                    <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Key Highlights</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        <div className="space-y-1.5">
                            <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Product Type</Label>
                            <Input placeholder="Enter Product Type" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white focus-visible:ring-[#056d71]" />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Avg Weight</Label>
                            <Input placeholder="Enter Avg Weight" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white focus-visible:ring-[#056d71]" />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Shelf Life</Label>
                            <Input placeholder="e.g. 3-5 days (refrigerated)" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white focus-visible:ring-[#056d71]" />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Packaging type</Label>
                            <Input placeholder="e.g. Paper wrap / Tray / Bulk box" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white focus-visible:ring-[#056d71]" />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Storage</Label>
                            <Input placeholder="e.g. Cool, dry place" className="h-11 rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white focus-visible:ring-[#056d71]" />
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-end gap-3 pt-8 border-t border-slate-100 mt-12">
                    <Button
                        variant="outline"
                        onClick={() => navigate(-1)}
                        className="rounded-xl px-8 h-12 font-bold border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shadow-sm"
                    >
                        Cancel
                    </Button>
                    <Button className="bg-[#056d71] hover:bg-[#045a5d] text-white rounded-xl px-12 h-12 font-bold flex items-center gap-2 transition-all shadow-lg active:scale-95">
                        {isEdit ? "Update Product" : "Add Product"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
