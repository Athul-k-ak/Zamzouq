import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Edit3,
    ChevronRight,
    Calendar,
    Edit2,
    ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProductDetailsModal from "./modals/ProductDetailsModal";
import KeyHighlightsModal from "./modals/KeyHighlightsModal";

// Mock data for the product
const productData = {
    id: "PRD-0145",
    name: "Fresh Avocado - Premium Export Quality",
    parentCategory: "Fruits",
    childCategory: "Tropical Fruits",
    status: "Active",
    description: "High-quality export-grade avocados suitable for retail sale.",
    basePrice: "AED 12.00",
    finalPrice: "AED 12.60",
    discount: "19%",
    discountedPrice: "AED 10.21",
    vat: "5%",
    commission: "8%",
    highlights: {
        productType: "Cavendish",
        avgWeight: "180-250 g per piece",
        packSize: "10-20 pcs per box (supplier dependent)",
        qualityGrade: "A Grade - Retail Standard",
        shelfLife: "3-5 days (Refrigerated)",
        packagingType: "Paper wrap / tray / bulk box",
        storage: "Cool, dry place"
    },
    inventory: {
        totalStock: "800 units",
        reserved: "120",
        available: "150",
        minAlertLevel: "20",
        stockStatus: "In Stock",
        lowStockAlert: true
    },
    sales: {
        totalOrders: "1253",
        totalEarnings: "AED 45,231.89"
    },
    images: [
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=2650&auto=format&fit=crop", // Main Avocado image
        "https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610832958506-aa5633840691?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=2670&auto=format&fit=crop"
    ]
};

const ViewProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = React.useState(0);
    const [isLowStockAlert, setIsLowStockAlert] = React.useState(productData.inventory.lowStockAlert);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = React.useState(false);
    const [isHighlightsModalOpen, setIsHighlightsModalOpen] = React.useState(false);

    return (
        <div className="p-4 lg:p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-20">
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
                    <span className="text-slate-900 font-bold">{productData.name}</span>
                </div>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{productData.name}</h1>
                    <p className="text-slate-500 font-medium">Product ID: {id || productData.id}</p>

                    <div className="flex items-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Parent Category:</span>
                            <span className="text-sm font-bold text-slate-700">{productData.parentCategory}</span>
                        </div>
                        <div className="h-4 w-[1px] bg-slate-200" />
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Child Category:</span>
                            <span className="text-sm font-bold text-slate-700">{productData.childCategory}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <select className="appearance-none bg-green-50 text-green-600 border border-green-200 px-4 py-2.5 pr-10 rounded-xl text-sm font-bold focus:outline-none cursor-pointer">
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rotate-90 text-green-600 pointer-events-none" />
                    </div>
                    <Button variant="outline" className="border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl px-6 h-11 font-bold">
                        Delete Product
                    </Button>
                    <Button className="bg-[#056d71] hover:bg-[#045a5d] text-white rounded-xl px-6 h-11 font-bold flex items-center gap-2"
                        onClick={() => navigate(`/product-management/products/edit/${id || productData.id}`)}
                    >
                        <Edit2 className="h-4 w-4" />
                        Edit Product
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - 5 spans */}
                <div className="lg:col-span-5 space-y-8">
                    {/* Image Section */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-white rounded-3xl border border-slate-100 overflow-hidden flex items-center justify-center p-8 shadow-sm">
                            <img
                                src={productData.images[activeImage]}
                                alt={productData.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {productData.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={cn(
                                        "aspect-square rounded-2xl border bg-white p-2 transition-all flex items-center justify-center overflow-hidden",
                                        activeImage === idx ? "border-[#056d71] ring-2 ring-[#056d71]/10" : "border-slate-100 opacity-60 hover:opacity-100"
                                    )}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Inventory Status Card */}
                    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Inventory Status</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 mb-1">Total Stock</p>
                                    <p className="text-lg font-bold text-slate-900">{productData.inventory.totalStock}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 mb-1">Reserved</p>
                                    <p className="text-lg font-bold text-slate-900">{productData.inventory.reserved}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 mb-1">Available</p>
                                    <p className="text-lg font-bold text-slate-900">{productData.inventory.available}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 mb-1">Minimum Alert Level</p>
                                    <p className="text-lg font-bold text-slate-900">{productData.inventory.minAlertLevel}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 mb-1">Stock Status</p>
                                    <p className="text-lg font-bold text-green-600">{productData.inventory.stockStatus}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <span className="text-sm font-medium text-slate-600">Low stock alert notification</span>
                                <button
                                    onClick={() => setIsLowStockAlert(!isLowStockAlert)}
                                    className={cn(
                                        "w-12 h-6 rounded-full transition-colors relative",
                                        isLowStockAlert ? "bg-[#056d71]" : "bg-slate-200"
                                    )}
                                >
                                    <div className={cn(
                                        "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform",
                                        isLowStockAlert ? "translate-x-6" : "translate-x-0"
                                    )} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - 7 spans */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Details Card */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative">
                            <button
                                onClick={() => setIsDetailsModalOpen(true)}
                                className="absolute top-6 right-6 p-2 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-xl transition-colors border border-slate-100"
                            >
                                <Edit3 className="h-4 w-4" />
                            </button>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Product Details</h3>

                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Description</p>
                                    <p className="text-slate-900 font-bold leading-relaxed">{productData.description}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wider">Base Price</p>
                                        <p className="text-base font-bold text-slate-900">{productData.basePrice}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wider">Final Price</p>
                                        <p className="text-base font-bold text-slate-900">{productData.finalPrice}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wider">Discount</p>
                                        <p className="text-base font-bold text-slate-900">{productData.discount}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wider">Discounted Price</p>
                                        <p className="text-base font-bold text-slate-900">{productData.discountedPrice}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wider">VAT</p>
                                        <p className="text-base font-bold text-slate-900">({productData.vat})</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wider">Commission</p>
                                        <p className="text-base font-bold text-slate-900">{productData.commission}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key Highlights Card */}
                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative">
                            <button
                                onClick={() => setIsHighlightsModalOpen(true)}
                                className="absolute top-6 right-6 p-2 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-xl transition-colors border border-slate-100"
                            >
                                <Edit3 className="h-4 w-4" />
                            </button>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Key Highlights</h3>

                            <div className="space-y-4">
                                {Object.entries(productData.highlights).map(([key, value]) => (
                                    <div key={key}>
                                        <p className="text-xs font-medium text-slate-400 mb-0.5 uppercase tracking-wider">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </p>
                                        <p className="text-[13px] font-bold text-slate-800 leading-tight">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sales Performance Card */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <h3 className="text-2xl font-bold text-slate-900">Sales Performance</h3>
                            <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors">
                                <Calendar className="h-4 w-4 text-slate-400" />
                                <span>01 Jan, 2024 - 30 Jan, 2024</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="p-6 rounded-3xl border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                                <p className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">Total Orders</p>
                                <p className="text-4xl font-black text-[#056d71] underline decoration-[#056d71]/20 underline-offset-8 decoration-4">{productData.sales.totalOrders}</p>
                            </div>
                            <div className="p-6 rounded-3xl border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] text-[#056d71]">
                                <p className="text-sm font-bold opacity-60 mb-2 uppercase tracking-wider">Total Earnings</p>
                                <p className="text-3xl font-black">{productData.sales.totalEarnings}</p>
                            </div>
                        </div>

                        {/* Chart Mockup */}
                        <div className="relative h-[250px] w-full mt-8 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
                            {/* SVG for a simple elegant curve */}
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <path
                                    d="M0 200 Q 150 180, 300 130 T 450 160 T 600 100 T 750 120 T 900 80 T 1600 100"
                                    fill="none"
                                    stroke="orange"
                                    strokeWidth="3"
                                    className="drop-shadow-lg"
                                />
                                <circle cx="700" cy="110" r="4" fill="white" stroke="orange" strokeWidth="2" />
                            </svg>

                            {/* X-Axis labels */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-between px-8 text-[10px] font-bold text-slate-400">
                                <span>Jan 1</span>
                                <span>Jan 2</span>
                                <span>Jan 3</span>
                                <span>Jan 4</span>
                                <span>Jan 5</span>
                                <span>Jan 6</span>
                                <span>Jan 7</span>
                                <span>Jan 8</span>
                            </div>

                            {/* Tooltip mockup */}
                            <div className="absolute top-[30%] left-[45%] bg-white rounded-xl shadow-xl border border-slate-100 p-3 z-10 scale-90 pointer-events-none">
                                <div className="text-[10px] text-slate-400 font-bold mb-1">Jan 3</div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-orange-400" />
                                    <span className="text-xs font-black text-slate-800">Avocado</span>
                                    <span className="text-xs font-black text-slate-500 ml-auto">70</span>
                                </div>
                            </div>

                            <div className="absolute left-4 top-0 bottom-8 flex flex-col justify-between text-[10px] font-bold text-slate-300">
                                <span>1500</span>
                                <span>1200</span>
                                <span>900</span>
                                <span>600</span>
                                <span>300</span>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProductDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                data={productData}
            />

            <KeyHighlightsModal
                isOpen={isHighlightsModalOpen}
                onClose={() => setIsHighlightsModalOpen(false)}
                data={productData.highlights}
            />
        </div>
    );
};

export default ViewProduct;
