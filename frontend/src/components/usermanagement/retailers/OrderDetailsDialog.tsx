import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, Building2 } from "lucide-react";

interface OrderDetailsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    record: any | null;
}

export const OrderDetailsDialog: React.FC<OrderDetailsDialogProps> = ({ isOpen, onClose, record }) => {
    if (!record) return null;

    const mockProducts = [
        {
            name: "Milma Classic PouchC",
            weight: "525 g",
            quantity: "34 Nos",
            price: "120 AED",
            image: "https://placehold.co/100x100/f8fafc/94a3b8?text=Img"
        },
        {
            name: "Emergency Brown Rolling Paper with...",
            weight: "10 x 4 pieces",
            quantity: "34 Nos",
            price: "120 AED",
            image: "https://placehold.co/100x100/f8fafc/94a3b8?text=Img"
        },
        {
            name: "Nila Eggs 6 pcs Fresh White Eggs",
            weight: "300 g",
            quantity: "34 Nos",
            price: "120 AED",
            image: "https://placehold.co/100x100/f8fafc/94a3b8?text=Img"
        },
        {
            name: "Ultimate Rolling Paper with Filter...",
            weight: "32 Leaves + 32 Filters",
            quantity: "34 Nos",
            price: "120 AED",
            image: "https://placehold.co/100x100/f8fafc/94a3b8?text=Img"
        }
    ];

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent
                showCloseButton={false}
                className="max-w-md bg-white p-0 rounded-[1.5rem] gap-0 overflow-hidden flex flex-col"
                style={{ maxHeight: "85vh" }}
            >
                {/* ── Fixed Header ── */}
                <div className="shrink-0 px-5 pt-5 pb-4 border-b border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-[16px] font-black text-slate-900">Order ID: {record.orderId}</h3>
                        <button
                            onClick={onClose}
                            className="h-7 w-7 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-colors shrink-0 outline-none"
                        >
                            <X className="h-3.5 w-3.5" />
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-bold text-slate-400">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>Settlement Date: 2024-06-12</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Building2 className="h-3.5 w-3.5" />
                            <span>Wholesaler: SFG Market</span>
                        </div>
                    </div>
                </div>

                {/* ── Scrollable Product List ── */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 no-scrollbar">
                    {mockProducts.map((prod, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-white rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-sm p-1">
                                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover object-center rounded-lg" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-xs font-bold text-slate-700 leading-tight line-clamp-2 max-w-[200px]">{prod.name}</span>
                                    <span className="text-[11px] font-bold text-slate-400">{prod.weight}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end shrink-0 gap-1">
                                <span className="text-[11px] font-bold text-slate-500">{prod.quantity}</span>
                                <span className="text-sm font-black text-slate-900">{prod.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Fixed Footer / Summary ── */}
                <div className="shrink-0 px-5 pb-5">
                    <div className="border-t border-dashed border-slate-200 mb-4"></div>
                    <div className="border border-slate-100 shadow-sm rounded-2xl p-4 bg-slate-50/60">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-[11px] font-bold text-slate-400 mb-1">Bill Number</p>
                                <p className="text-base font-black text-slate-900">202601210002</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[11px] font-bold text-slate-400 mb-1">Date & Time</p>
                                <p className="text-[11px] font-medium text-slate-500 leading-relaxed">
                                    21 Jan 2026<br />08:37 PM
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-400">Total Amount</span>
                                <span className="text-base font-black text-teal-500">1680 AED</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-400">Payment Mode</span>
                                <span className="text-sm font-bold text-slate-600">Cash</span>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
