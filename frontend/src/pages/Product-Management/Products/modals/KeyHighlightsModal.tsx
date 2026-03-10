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

interface KeyHighlightsModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

const KeyHighlightsModal: React.FC<KeyHighlightsModalProps> = ({ isOpen, onClose, data }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[480px] rounded-3xl border-slate-100 p-8 shadow-2xl bg-white">
                <DialogHeader className="mb-6">
                    <DialogTitle className="text-2xl font-bold text-slate-900">Edit Key Highlights</DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Product Type</Label>
                        <Input defaultValue={data.productType} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Avg Weight</Label>
                        <Input defaultValue={data.avgWeight} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Pack Size</Label>
                        <Input defaultValue={data.packSize} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Quality Grade</Label>
                        <Input defaultValue={data.qualityGrade} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Shelf Life</Label>
                        <Input defaultValue={data.shelfLife} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Packaging type</Label>
                        <Input defaultValue={data.packagingType} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                    </div>
                    <div className="col-span-2 space-y-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Storage</Label>
                        <Input defaultValue={data.storage} className="h-11 rounded-xl border-slate-200 bg-white focus-visible:ring-[#056d71] shadow-sm" />
                    </div>
                </div>

                <DialogFooter className="mt-8 gap-3">
                    <Button variant="outline" onClick={onClose} className="rounded-xl px-6 h-11 font-bold border-slate-200">
                        Cancel
                    </Button>
                    <Button onClick={onClose} className="bg-[#056d71] hover:bg-[#045a5d] text-white rounded-xl px-8 h-11 font-bold shadow-lg active:scale-95 transition-all">
                        Update Highlights
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default KeyHighlightsModal;
