import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Download, Flag, FileText } from "lucide-react";

interface WholesalerDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
    onAccept: (id: string) => void;
    onReject: (id: string) => void;
}

export function WholesalerDetailModal({ isOpen, onClose, data, onAccept, onReject }: WholesalerDetailModalProps) {
    if (!data) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[750px] bg-white rounded-3xl p-5 shadow-xl border-none overflow-hidden" showCloseButton={true}>
                <DialogHeader className="flex flex-row items-start justify-between border-b pb-3 mb-4 border-slate-100">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold text-slate-900">{data.ownerName || data.name || "Ahmed Musa"}</h2>
                            <span className="px-2.5 py-0.5 rounded-full bg-yellow-50 text-yellow-600 text-xs font-bold border border-yellow-100">
                                {data.status || "Pending"}
                            </span>
                        </div>
                        <p className="text-slate-500 font-medium">{data.userId || data.id || "USER-1234"}</p>
                        <div className="flex items-center gap-2 text-slate-400 mt-2">
                            <FileText className="h-4 w-4" />
                            <span className="text-sm">Submitted: {data.createdTime || data.submitted || "2024-06-12"}</span>
                        </div>
                    </div>
                </DialogHeader>

                <div className="space-y-4 overflow-y-auto max-h-[40vh] pr-2 custom-scrollbar">
                    {/* Basic Info */}
                    <section>
                        <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-tight">Basic info</h3>
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone number</p>
                                <p className="text-xs text-slate-900 font-bold">{data.phone || "+6285365666"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                                <p className="text-xs text-slate-900 font-bold">{data.email || "ahmedmusa@gmail.com"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">City</p>
                                <p className="text-xs text-slate-900 font-bold">{data.city || "Khartoum"}</p>
                            </div>
                        </div>
                    </section>

                    {/* Business Details */}
                    <section>
                        <h3 className="text-xs font-bold text-slate-900 mb-3 border-t pt-4 border-slate-100 uppercase tracking-tight">Business Details</h3>
                        <div className="grid grid-cols-5 gap-4">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Business Name</p>
                                <p className="text-slate-900 font-bold">{data.businessName || "Al Barsha Mini Market"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Business Type</p>
                                <p className="text-slate-900 font-bold">{data.businessType || "Grocery Store"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Trade License</p>
                                <p className="text-slate-900 font-bold">{data.tradeLicense || "SU1463153V"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">License Expiry Date</p>
                                <p className="text-slate-900 font-bold">{data.licenseExpiry || "02/26"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">VAT TRN</p>
                                <p className="text-slate-900 font-bold">{data.vatTrn || "gdbdxnhcfj"}</p>
                            </div>
                        </div>
                    </section>

                    {/* Attached Documents */}
                    <section>
                        <h3 className="text-xs font-bold text-slate-900 mb-3 border-t pt-4 border-slate-100 uppercase tracking-tight">Attached Documents</h3>
                        <div className="space-y-2">
                            {[
                                { name: "Trade Licence.pdf", size: "245 KB" },
                                { name: "VAT.pdf", size: "245 KB" }
                            ].map((doc, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white transition-colors">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">{doc.name}</p>
                                            <p className="text-xs text-slate-400">{doc.size}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-xl">
                                            <Eye className="h-5 w-5" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-xl">
                                            <Download className="h-5 w-5" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl">
                                            <Flag className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="flex items-center justify-end gap-3 mt-4 border-t pt-4 border-slate-100">
                    <Button
                        variant="outline"
                        onClick={() => onReject(data.userId || data.id)}
                        className="h-12 px-8 border-slate-200 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all"
                    >
                        Reject
                    </Button>
                    <Button
                        onClick={() => onAccept(data.userId || data.id)}
                        className="h-12 px-8 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold transition-all shadow-md active:scale-95"
                    >
                        Accept
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
