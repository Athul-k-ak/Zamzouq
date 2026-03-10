import * as React from "react";
import { X, Upload, FileText } from "lucide-react";
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
import { cn } from "@/lib/utils";

interface AddBrandModalProps {
    isOpen: boolean;
    onClose: () => void;
    brand?: any | null;
}

export function AddBrandModal({ isOpen, onClose, brand }: AddBrandModalProps) {
    const [brandName, setBrandName] = React.useState("");
    const [file, setFile] = React.useState<{ name: string; size: string } | null>(null);

    React.useEffect(() => {
        if (brand) {
            setBrandName(brand.name || "");
            // For mock purposes, if it's an edit, we might show a mock file
            if (brand.logo) {
                setFile({ name: "Brand_Logo.png", size: "1.2MB" });
            }
        } else {
            setBrandName("");
            setFile(null);
        }
    }, [brand, isOpen]);

    const isEdit = !!brand;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-[24px] bg-white flex flex-col max-h-[90vh]" showCloseButton={false}>
                <DialogHeader className="p-6 pb-4 flex flex-row items-center justify-between shrink-0 border-b border-slate-50">
                    <DialogTitle className="text-xl font-bold text-slate-900">
                        {isEdit ? "Edit" : "Add New"} Brand
                    </DialogTitle>
                    <button
                        onClick={onClose}
                        className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </DialogHeader>

                <div className="p-6 space-y-6 overflow-y-auto scrollbar-hide flex-1">
                    <div className="space-y-2">
                        <Label htmlFor="brand-name" className="text-sm font-bold text-slate-900">
                            Brand Name*
                        </Label>
                        <Input
                            id="brand-name"
                            placeholder="Enter brand name"
                            value={brandName}
                            onChange={(e) => setBrandName(e.target.value)}
                            className="h-12 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-900">
                            Brand Logo*
                        </Label>
                        <div className="relative group">
                            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 bg-slate-50/50 hover:bg-slate-50 hover:border-teal-500/50 transition-all cursor-pointer">
                                <div className="h-12 w-12 rounded-xl bg-teal-50 flex items-center justify-center">
                                    <Upload className="h-6 w-6 text-teal-600" />
                                </div>
                                <div className="text-center group">
                                    <p className="text-sm font-bold text-slate-900">
                                        <span className="text-teal-600">Click here</span> to upload or drop files here
                                    </p>
                                </div>
                            </div>
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={(e) => {
                                    const f = e.target.files?.[0];
                                    if (f) {
                                        setFile({ name: f.name, size: (f.size / (1024 * 1024)).toFixed(1) + "MB" });
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {file && (
                        <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                                    <FileText className="h-5 w-5 text-teal-600" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900 line-clamp-1">{file.name}</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-teal-600 w-[100%]" />
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-500">{file.size}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setFile(null)}
                                className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-400 transition-colors"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    )}
                </div>

                <DialogFooter className="p-6 pt-4 flex items-center justify-between sm:justify-between gap-4 border-t border-slate-50 shrink-0">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="flex-1 h-12 rounded-xl border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="flex-1 h-12 rounded-xl bg-[#056d71] hover:bg-[#045a5d] text-white font-bold shadow-sm"
                    >
                        Save Brand
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
