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
import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface AddUnitModalProps {
    isOpen: boolean;
    onClose: () => void;
    unit?: any | null;
}

export function AddUnitModal({ isOpen, onClose, unit }: AddUnitModalProps) {
    const [unitName, setUnitName] = React.useState("");
    const [shortCode, setShortCode] = React.useState("");
    const [measurementType, setMeasurementType] = React.useState("");
    const [isBaseUnit, setIsBaseUnit] = React.useState(true);
    const [baseUnit, setBaseUnit] = React.useState("");
    const [conversionValue, setConversionValue] = React.useState("");

    React.useEffect(() => {
        if (unit) {
            setUnitName(unit.name || "");
            setShortCode(unit.shortCode || "");
            setMeasurementType(unit.measurementType || "");
            setIsBaseUnit(unit.isBaseUnit ?? true);
            setBaseUnit(unit.baseUnit || "");
            setConversionValue(unit.conversionValue || "");
        } else {
            setUnitName("");
            setShortCode("");
            setMeasurementType("");
            setIsBaseUnit(true);
            setBaseUnit("");
            setConversionValue("");
        }
    }, [unit, isOpen]);

    const isEdit = !!unit;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-[24px] bg-white flex flex-col max-h-[90vh]" showCloseButton={false}>
                <DialogHeader className="p-6 pb-4 flex flex-row items-center justify-between shrink-0 border-b border-slate-50">
                    <DialogTitle className="text-xl font-bold text-slate-900">
                        {isEdit ? "Edit" : "Add New"} Unit
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
                        <Label htmlFor="unit-name" className="text-sm font-bold text-slate-900">
                            Unit Name*
                        </Label>
                        <Input
                            id="unit-name"
                            placeholder="Enter unit name (e.g., Kilogram)"
                            value={unitName}
                            onChange={(e) => setUnitName(e.target.value)}
                            className="h-12 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="short-code" className="text-sm font-bold text-slate-900">
                            Short Code *
                        </Label>
                        <Input
                            id="short-code"
                            placeholder="KG / GM / PCS / BX"
                            value={shortCode}
                            onChange={(e) => setShortCode(e.target.value)}
                            className="h-12 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="measurement-type" className="text-sm font-bold text-slate-900">
                            Measurement Type *
                        </Label>
                        <Select value={measurementType} onValueChange={setMeasurementType}>
                            <SelectTrigger id="measurement-type" className="h-12 border-slate-200 rounded-xl focus:ring-teal-500 font-medium w-full text-slate-500">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-slate-200 rounded-xl font-medium">
                                <SelectItem value="Weight">Weight</SelectItem>
                                <SelectItem value="Quantity">Quantity</SelectItem>
                                <SelectItem value="Volume">Volume</SelectItem>
                                <SelectItem value="Length">Length</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-4">
                        <Label className="text-sm font-bold text-slate-900">Is This a Base Unit?</Label>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsBaseUnit(!isBaseUnit)}
                                className={cn(
                                    "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2",
                                    isBaseUnit ? "bg-teal-600" : "bg-slate-200"
                                )}
                            >
                                <span
                                    className={cn(
                                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                        isBaseUnit ? "translate-x-5" : "translate-x-0"
                                    )}
                                />
                            </button>
                            <span className="text-sm font-bold text-slate-700">{isBaseUnit ? "Set as Base Unit" : "Default"}</span>
                        </div>
                    </div>

                    {!isBaseUnit && (
                        <div className="space-y-6 pt-2 animate-in slide-in-from-top-2 duration-300">
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-slate-900">Conversion Setup</h3>
                                <div className="space-y-2">
                                    <Label htmlFor="base-unit" className="text-sm font-bold text-slate-500">
                                        Base Unit
                                    </Label>
                                    <Select value={baseUnit} onValueChange={setBaseUnit}>
                                        <SelectTrigger id="base-unit" className="h-12 border-slate-200 rounded-xl focus:ring-teal-500 font-medium w-full text-slate-500">
                                            <SelectValue placeholder="Select base unit (KG, PCS, etc.)" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border-slate-200 rounded-xl">
                                            <SelectItem value="KG">Kilogram (KG)</SelectItem>
                                            <SelectItem value="PCS">Piece (PCS)</SelectItem>
                                            <SelectItem value="BOX">Box (BOX)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="conversion-value" className="text-sm font-bold text-slate-500">
                                    Conversion Value
                                </Label>
                                <div className="flex gap-2">
                                    <div className="h-12 px-4 flex items-center bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-500 min-w-20">
                                        1 {shortCode || "Unit"}
                                    </div>
                                    <Input
                                        id="conversion-value"
                                        placeholder="Example: 20 KG"
                                        value={conversionValue}
                                        onChange={(e) => setConversionValue(e.target.value)}
                                        className="h-12 border-slate-200 rounded-xl focus-visible:ring-teal-500 font-medium flex-1"
                                    />
                                </div>
                            </div>
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
                        Save Unit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
