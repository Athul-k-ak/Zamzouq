import { X, Calendar, ShoppingBag } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface PaymentDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    payment: any | null;
}

export function PaymentDetailsModal({ isOpen, onClose, payment }: PaymentDetailsModalProps) {
    if (!payment) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden rounded-[24px] bg-white border-none shadow-2xl" showCloseButton={false}>
                {/* Header Section */}
                <DialogHeader className="p-8 pb-0 flex flex-row items-center justify-between">
                    <div className="flex items-center gap-3">
                        <DialogTitle className="text-xl font-bold text-slate-900">
                            {payment.id}
                        </DialogTitle>
                        <span className={cn(
                            "px-3 py-1 rounded-lg text-xs font-bold",
                            payment.status === "Approved" ? "bg-green-500 text-white" :
                                payment.status === "Pending" ? "bg-yellow-500 text-white" :
                                    "bg-red-500 text-white"
                        )}>
                            {payment.status}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg active:scale-90"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </DialogHeader>

                <div className="px-8 py-4 flex items-center gap-6 text-slate-400 font-medium text-sm">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Settlement Date: {payment.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        <span>Wholesaler: {payment.retailer}</span>
                    </div>
                </div>

                {/* Details Card */}
                <div className="px-8 pb-10">
                    <div className="bg-[#fcfdfd] border border-slate-50 rounded-[32px] p-8 shadow-sm space-y-8">
                        <div className="flex justify-between items-start">
                            <div className="space-y-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Invoice ID</span>
                                <p className="text-2xl font-bold text-slate-900">{payment.id}</p>
                            </div>
                            <div className="space-y-4 text-right">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date & Time</span>
                                <p className="text-sm font-bold text-slate-900">{payment.date}</p>
                                <p className="text-xs font-bold text-slate-400">08:37 PM</p>
                            </div>
                        </div>

                        <div className="border-t-[2px] border-dashed border-slate-100 w-full" />

                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Net Payable</span>
                            <span className="text-2xl font-black text-[#056d71]">{payment.amount}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Payment Mode</span>
                            <span className="text-sm font-bold text-slate-900">Cash</span>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
