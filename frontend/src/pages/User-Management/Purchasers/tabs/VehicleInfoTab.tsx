import React from "react";
import {
    FileText,
    Eye,
    Download,
    Flag
} from "lucide-react";

interface VehicleInfoTabProps {
    id?: string;
}

const VehicleInfoTab: React.FC<VehicleInfoTabProps> = ({ id }) => {
    const documents = [
        { name: "License.pdf", size: "245 KB" },
        { name: "Insurance.pdf", size: "245 KB" },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Vehicle Info Section */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900">Vehicle Info</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Vehicle Type</p>
                        <p className="text-base font-bold text-slate-900">Van</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Plate Number</p>
                        <p className="text-base font-bold text-slate-900">DXB-M-12345</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Registration Expiry</p>
                        <p className="text-base font-bold text-slate-900">Oct 15, 2026</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Insurance Expiry</p>
                        <p className="text-base font-bold text-slate-900">Oct 20, 2026</p>
                    </div>
                </div>
            </div>

            <div className="h-px bg-slate-100 w-full" />

            {/* Attached Documents Section */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900">Attached Documents</h2>
                <div className="space-y-3">
                    {documents.map((doc, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 transition-all shadow-sm group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-slate-50 rounded-xl text-slate-400 group-hover:text-teal-600 group-hover:bg-teal-50 transition-colors">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">{doc.name}</p>
                                    <p className="text-xs font-medium text-slate-400">{doc.size}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                                    <Eye className="h-4 w-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                                    <Download className="h-4 w-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                                    <Flag className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VehicleInfoTab;
