import React from "react";
import { Star, FileText, Eye, Download, Flag } from "lucide-react";

interface BusinessInfoTabProps {
    id: string | undefined;
    documents: { name: string; size: string }[];
}

const BusinessInfoTab: React.FC<BusinessInfoTabProps> = ({ id, documents }) => {
    return (
        <div className="space-y-10">
            {/* Profile & Verification */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    Profile & Verification
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Wholesaler ID</p>
                        <p className="text-sm font-bold text-slate-900">{id || "W-001245"}</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Emirates ID</p>
                        <p className="text-sm font-bold text-slate-900">78456321</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Trade License No.</p>
                        <p className="text-sm font-bold text-slate-900">78456321</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">License Expiry</p>
                        <p className="text-sm font-bold text-slate-900">12 Dec 2026</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">VAT Registration (TRN)</p>
                        <p className="text-sm font-bold text-slate-900">100234567800003</p>
                    </div>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Contact & Status */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    Contact & Status
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-4">
                    <div className="lg:col-span-1">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Owner Name</p>
                        <p className="text-sm font-bold text-slate-900 truncate">Ahammed Zaik</p>
                    </div>
                    <div className="lg:col-span-1">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Email</p>
                        <p className="text-sm font-bold text-slate-900 truncate">contact@dubai.ae</p>
                    </div>
                    <div className="lg:col-span-2">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Addresses</p>
                        <p className="text-sm font-bold text-slate-900 truncate">Al Barsha 1, Dubai, UAE</p>
                    </div>
                    <div className="lg:col-span-1">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Phone</p>
                        <p className="text-sm font-bold text-slate-900">+971 50 123 4567</p>
                    </div>
                    <div className="lg:col-span-1">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Emirates</p>
                        <p className="text-sm font-bold text-slate-900">Dubai</p>
                    </div>
                    <div className="lg:col-span-1">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Account Tier</p>
                        <div className="flex items-center gap-1 text-sm font-bold text-slate-900">
                            Premium <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Account Status</p>
                        <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            <p className="text-sm font-bold text-slate-900">Active</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Attached Documents */}
            <section>
                <h2 className="text-lg font-bold text-slate-900 mb-6">Attached Documents</h2>
                <div className="space-y-3">
                    {documents.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-teal-100 hover:bg-teal-50/10 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-500 transition-colors">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">{doc.name}</p>
                                    <p className="text-xs text-slate-400 font-medium">{doc.size}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all">
                                    <Eye className="h-4 w-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all">
                                    <Download className="h-4 w-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                                    <Flag className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BusinessInfoTab;
