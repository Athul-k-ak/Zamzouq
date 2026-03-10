import * as React from "react";
import { X } from "lucide-react";
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

interface AddVariantValueModalProps {
    isOpen: boolean;
    onClose: () => void;
    variantValue?: any | null;
}

export function AddVariantValueModal({ isOpen, onClose, variantValue }: AddVariantValueModalProps) {
    const [value, setValue] = React.useState("");

    React.useEffect(() => {
        if (variantValue) {
            setValue(variantValue.value || "");
        } else {
            setValue("");
        }
    }, [variantValue, isOpen]);

    const isEdit = !!variantValue;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-[24px] bg-white" showCloseButton={false}>
                <DialogHeader className="p-6 pb-0 flex flex-row items-center justify-between">
                    <DialogTitle className="text-xl font-bold text-slate-900">
                        {isEdit ? "Edit" : "Add New"} Variant Value
                    </DialogTitle>
                    <button
                        onClick={onClose}
                        className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </DialogHeader>

                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="variant-value" className="text-[16px] font-bold text-slate-900">
                            Variant Value*
                        </Label>
                        <Input
                            id="variant-value"
                            placeholder="Enter Variant Value"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="h-12 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium"
                        />
                    </div>
                </div>

                <DialogFooter className="p-6 pt-2 flex items-center justify-between sm:justify-between gap-4">
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
                        {isEdit ? "Update" : "Save"} Variant Value
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
