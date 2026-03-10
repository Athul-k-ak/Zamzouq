import { useParams, useNavigate } from "react-router-dom";
import {
    Calendar,
    CreditCard,
    FileText,
    Star,
    User,
    MapPin,
    Phone,
    Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ViewReturn = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const returnItems = [
        { name: "Fresh Tomatoes", category: "Vegetables", unit: "KG", orderedQuantity: 50, returnedQuantity: 20, reason: "Damaged", refund: "AED 300" },
        { name: "Fresh Tomatoes", category: "Vegetables", unit: "KG", orderedQuantity: 50, returnedQuantity: 20, reason: "More stock", refund: "AED 300" },
        { name: "Fresh Tomatoes", category: "Vegetables", unit: "KG", orderedQuantity: 50, returnedQuantity: 20, reason: "Damaged", refund: "AED 300" },
        { name: "Fresh Tomatoes", category: "Vegetables", unit: "KG", orderedQuantity: 50, returnedQuantity: 20, reason: "Damaged", refund: "AED 300" },
    ];

    return (
        <div className="p-4 lg:p-8 max-w-7xl mx-auto animate-in fade-in duration-500 pb-20">
            {/* Main Header Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-8 overflow-hidden relative">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            {/* Adding a back button with navigate to fix linting in a useful way */}
                            <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-slate-500"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <h1 className="text-2xl font-bold text-slate-900">{id || "ZMZ-1234"}</h1>
                            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                                Approved
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-slate-400" />
                                <span>Submitted: 2024-06-12, 14:32pm</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-slate-400" />
                                <span>Total Value: AED 2,562</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-4 w-4 text-slate-400" />
                                <span>Payment Type: Online Payment</span>
                            </div>
                        </div>
                    </div>

                    <Button className="bg-teal-700 hover:bg-teal-800 text-white rounded-xl h-11 px-6 flex items-center gap-2 font-medium shadow-sm">
                        <Share2 className="h-4 w-4" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Info Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Retailer Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                        <FileText className="h-5 w-5" />
                        Retailer Information
                    </div>

                    <div className="flex items-center gap-4">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Retailer"
                            alt="Retailer"
                            className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100"
                        />
                        <div>
                            <h3 className="font-bold text-slate-900">Dubai Market</h3>
                            <p className="text-xs text-slate-400 font-medium tracking-wider">R-001245</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-600">
                            <Phone className="h-4 w-4 text-slate-400" />
                            <span className="text-sm font-medium">+247 57 856987</span>
                        </div>
                        <div className="flex items-start gap-3 text-slate-600">
                            <MapPin className="h-4 w-4 text-slate-400 mt-0.5" />
                            <span className="text-sm font-medium">Al Barsha 1, Dubai, UAE</span>
                        </div>
                    </div>
                </div>

                {/* Wholesaler Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-900 font-bold">
                            <FileText className="h-5 w-5" />
                            Wholesaler Information
                        </div>
                        <div className="flex items-center gap-1 bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded-full text-[10px] font-bold border border-yellow-100 uppercase tracking-tighter">
                            <Star className="h-3 w-3 fill-yellow-600" />
                            Premium
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Wholesaler"
                            alt="Wholesaler"
                            className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100"
                        />
                        <div>
                            <h3 className="font-bold text-slate-900">Dubai fresh vegetables</h3>
                            <p className="text-xs text-slate-400 font-medium tracking-wider">W-001245</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-600">
                            <Phone className="h-4 w-4 text-slate-400" />
                            <span className="text-sm font-medium">+247 57 856987</span>
                        </div>
                        <div className="flex items-start gap-3 text-slate-600">
                            <MapPin className="h-4 w-4 text-slate-400 mt-0.5" />
                            <span className="text-sm font-medium">Al Barsha 1, Dubai, UAE</span>
                        </div>
                    </div>
                </div>

                {/* Purchaser Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                        <FileText className="h-5 w-5" />
                        Purchaser
                    </div>

                    <div className="flex items-center gap-4">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Purchaser"
                            alt="Purchaser"
                            className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100"
                        />
                        <div>
                            <h3 className="font-bold text-slate-900">Ramzan</h3>
                            <p className="text-xs text-slate-400 font-medium tracking-wider">P-001245</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-600">
                            <Phone className="h-4 w-4 text-slate-400" />
                            <span className="text-sm font-medium">+247 57 856987</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <User className="h-4 w-4 text-slate-400" />
                            <span className="text-sm font-medium">Retailer Purchaser</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Return Items Table Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-8">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                    <h2 className="text-lg font-bold text-slate-900">Return Items</h2>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50/30 text-slate-400 font-medium uppercase tracking-wider text-[10px]">
                            <tr>
                                <th className="px-6 py-4">Product Name</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Unit</th>
                                <th className="px-6 py-4">Ordered Quantity</th>
                                <th className="px-6 py-4">Returned Quantity</th>
                                <th className="px-6 py-4">Reason for return</th>
                                <th className="px-6 py-4">Refund Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 border-t border-slate-100">
                            {returnItems.map((item, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">{item.category}</td>
                                    <td className="px-6 py-4 text-slate-600 font-bold tracking-wider">{item.unit}</td>
                                    <td className="px-6 py-4 text-slate-900 font-bold">{item.orderedQuantity}</td>
                                    <td className="px-6 py-4 text-slate-400 font-bold">{item.returnedQuantity}</td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">{item.reason}</td>
                                    <td className="px-6 py-4 text-slate-900 font-bold">{item.refund}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-8 flex justify-end">
                    <div className="w-full max-w-sm space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-900 font-bold">Subtotal <span className="text-slate-400 font-medium">(Refunded)</span></span>
                            <span className="text-slate-900 font-bold">AED 2,300</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-900 font-bold">VAT(5%)</span>
                            <span className="text-slate-900 font-bold">AED 115</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-900 font-bold">Delivery Charges</span>
                            <span className="text-slate-900 font-bold">AED 20</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-900 font-bold">Platform Commission <span className="text-slate-400 font-medium">(Adjustment)</span></span>
                            <span className="text-slate-900 font-bold">-AED 25</span>
                        </div>
                        <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/50 p-4 rounded-xl">
                            <span className="text-sm font-bold text-slate-900">Final Refunded Amount</span>
                            <span className="text-lg font-bold text-teal-600">AED 2,450</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewReturn;
