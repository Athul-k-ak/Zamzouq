import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Download, Flag, FileText } from "lucide-react";

interface PurchaserDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
    onAccept: (id: string) => void;
    onReject: (id: string) => void;
}

export function PurchaserDetailModal({ isOpen, onClose, data, onAccept, onReject }: PurchaserDetailModalProps) {
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

                <div className="space-y-4 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
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

                    {/* Attached Documents - Basic */}
                    <section>
                        <h3 className="text-xs font-bold text-slate-900 mb-3 border-t pt-4 border-slate-100 uppercase tracking-tight">Attached Documents</h3>
                        <div className="space-y-2">
                            {[
                                { name: "Vehicle Registration.pdf", size: "245 KB" },
                                { name: "Driving Licence.pdf", size: "245 KB" }
                            ].map((doc, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white transition-colors">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">{doc.name}</p>
                                            <p className="text-[10px] text-slate-400 font-bold">{doc.size}</p>
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

                    {/* Vehicle Details */}
                    <section>
                        <h3 className="text-xs font-bold text-slate-900 mb-3 border-t pt-4 border-slate-100 uppercase tracking-tight">Vehicle details</h3>
                        <div className="grid grid-cols-4 gap-6">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Type</p>
                                <p className="text-xs text-slate-900 font-bold">{data.vehicleType || "Toyota"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Vehicle Plate Number</p>
                                <p className="text-xs text-slate-900 font-bold">{data.plateNumber || "KL 13 P 6473"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Driving License Number</p>
                                <p className="text-xs text-slate-900 font-bold">{data.drivingLicense || "SU1463153V"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">License Expiry Date</p>
                                <p className="text-xs text-slate-900 font-bold">{data.licenseExpiry || "02/28"}</p>
                            </div>
                        </div>
                    </section>

                    {/* Attached Documents - Vehicle */}
                    <section>
                        <h3 className="text-xs font-bold text-slate-900 mb-3 border-t pt-4 border-slate-100 uppercase tracking-tight">Attached Documents</h3>
                        <div className="space-y-2">
                            {[
                                { name: "Vehicle registration.pdf", size: "245 KB" },
                                { name: "Driving Licence.pdf", size: "245 KB" }
                            ].map((doc, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white transition-colors">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">{doc.name}</p>
                                            <p className="text-[10px] text-slate-400 font-bold">{doc.size}</p>
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

                    {/* Customer Group Purchaser */}
                    <section>
                        <h3 className="text-xs font-bold text-slate-900 mb-3 border-t pt-4 border-slate-100 uppercase tracking-tight">Customer Group Purchaser</h3>
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Customer Group Name</p>
                                <p className="text-xs text-slate-900 font-bold">{data.customerGroupName || "Al Barsha Mini Market"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Reference Contact Name</p>
                                <p className="text-xs text-slate-900 font-bold">{data.referenceContact || "Badusha"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Operating Area</p>
                                <p className="text-xs text-slate-900 font-bold">{data.operatingArea || "Dubai"}</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex items-center justify-end gap-3 mt-4 border-t pt-4 border-slate-100">
                    <Button
                        variant="outline"
                        onClick={() => onReject(data.userId || data.id)}
                        className="h-10 px-6 border-slate-200 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all text-sm"
                    >
                        Reject
                    </Button>
                    <Button
                        onClick={() => onAccept(data.userId || data.id)}
                        className="h-10 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold transition-all shadow-md active:scale-95 text-sm"
                    >
                        Accept
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
