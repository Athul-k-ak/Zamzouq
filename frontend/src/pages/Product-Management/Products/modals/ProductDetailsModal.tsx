import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ isOpen, onClose, data }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[420px] max-h-[85vh] flex flex-col rounded-3xl border-slate-100 p-0 shadow-2xl bg-white overflow-hidden">
                <DialogHeader className="p-8 pb-4">
                    <DialogTitle className="text-2xl font-bold text-slate-900">Edit Product Details</DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto px-8 pb-4">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Description</Label>
                            <textarea
                                defaultValue={data.description}
                                className="min-h-[100px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#056d71] font-medium resize-none shadow-sm"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                            <div className="space-y-2">
                                <Label className="text-sm font-bold text-slate-700">Base Price</Label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">AED</div>
                                    <Input defaultValue={data.basePrice?.replace("AED ", "")} className="h-11 pl-10 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-bold text-slate-700">Final Price</Label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">AED</div>
                                    <Input defaultValue={data.finalPrice?.replace("AED ", "")} className="h-11 pl-10 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-bold text-slate-700">Discount</Label>
                                <Input defaultValue={data.discount} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-bold text-slate-700">VAT (%)</Label>
                                <Input defaultValue={data.vat?.replace(/[()%]/g, "")} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                            </div>
                        </div>

                        <div className="space-y-2 pb-2">
                            <Label className="text-sm font-bold text-slate-700">Commission</Label>
                            <Input defaultValue={data.commission} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                        </div>
                    </div>
                </div>

                <DialogFooter className="p-8 pt-4 gap-3 bg-white border-t border-slate-50">
                    <Button variant="outline" onClick={onClose} className="rounded-xl px-6 h-11 font-bold border-slate-200">
                        Cancel
                    </Button>
                    <Button onClick={onClose} className="bg-[#056d71] hover:bg-[#045a5d] text-white rounded-xl px-8 h-11 font-bold shadow-lg active:scale-95 transition-all">
                        Update Details
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetailsModal;
