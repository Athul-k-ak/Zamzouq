import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuditLogDetailProps {
    isOpen: boolean;
    onClose: () => void;
    log: any;
}

export function AuditLogDetail({ isOpen, onClose, log }: AuditLogDetailProps) {
    if (!log) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-3xl border-none bg-white shadow-2xl">
                <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                    <div className="p-8 pb-6">
                        <DialogHeader className="mb-8">
                            <DialogTitle className="text-2xl font-bold text-slate-900 mb-1">
                                User Login Details
                            </DialogTitle>
                            <p className="text-slate-400 text-sm">Oct 28, 2025 4:50 PM</p>
                        </DialogHeader>

                        {/* Performed by Section */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Performed by</h3>
                                <div className="bg-slate-50/50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100/50">
                                    <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${log.name}`}
                                            alt={log.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-slate-900">{log.name}</span>
                                            <span className="bg-teal-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                {log.role}
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-sm font-medium">{log.phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Email</p>
                                    <p className="font-bold text-slate-900">example@gmail.com</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Phone Number</p>
                                    <p className="font-bold text-slate-900">{log.phone}</p>
                                </div>
                            </div>

                            {/* Session Information */}
                            <div className="pt-2">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Session Information</h3>
                                <div className="space-y-4">
                                    <InfoRow label="Login Time" value={log.loginTime} />
                                    <InfoRow label="IP Address:" value="192.168.1.100" />
                                    <InfoRow label="Actions" value={log.action} highlight />
                                    <InfoRow label="Module" value={log.module} highlight />
                                    <InfoRow label="Browser" value="Chrome 119.0" highlight />
                                    <InfoRow label="Device" value="Windows 11" highlight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 p-6 pt-2 bg-white">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="h-11 px-8 rounded-xl border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
                    >
                        Close
                    </Button>
                    <Button
                        className="h-11 px-8 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold flex items-center gap-2"
                    >
                        Download Record
                        <Download className="h-4 w-4" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

function InfoRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
    return (
        <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">{label}</span>
            <span className={cn("font-bold text-right", highlight ? "text-slate-700" : "text-slate-900")}>
                {value}
            </span>
        </div>
    );
}
