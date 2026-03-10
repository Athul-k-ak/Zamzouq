import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

interface AddPurchasersFormProps {
    onClose?: () => void;
    setTitle: Dispatch<SetStateAction<string>>;
}

type PurchaserType = 'zamsouq' | 'wholesaler' | 'retailer';

export function AddPurchasersForm({ onClose, setTitle }: AddPurchasersFormProps) {
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState<PurchaserType>('zamsouq');

    useEffect(() => {
        if (step === 1) {
            setTitle("Add New Purchaser");
        } else {
            const typeLabels: Record<PurchaserType, string> = {
                zamsouq: "Zamsouq",
                wholesaler: "Wholesaler",
                retailer: "Certain Retailer"
            };
            setTitle(`Add New Purchaser for ${typeLabels[selectedType]}`);
        }
    }, [step, selectedType, setTitle]);

    const handleNext = () => {
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    if (step === 1) {
        return (
            <div className="space-y-6 py-2">
                <div className="p-4 border-2 border-dashed border-slate-100 rounded-3xl space-y-3">
                    <TypeOption
                        title="Purchaser for Zamsouq"
                        description="Assigned and managed by Zamzook"
                        selected={selectedType === 'zamsouq'}
                        onClick={() => setSelectedType('zamsouq')}
                    />
                    <TypeOption
                        title="Purchaser for Wholesaler"
                        description="Works exclusively under a specific wholesaler."
                        selected={selectedType === 'wholesaler'}
                        onClick={() => setSelectedType('wholesaler')}
                    />
                    <TypeOption
                        title="Purchaser for Certain Retailer"
                        description="Handles all orders placed by the assigned retailer group."
                        selected={selectedType === 'retailer'}
                        onClick={() => setSelectedType('retailer')}
                    />
                </div>

                <div className="flex justify-between items-center bg-white pt-2">
                    <Button
                        variant="outline"
                        className="rounded-xl px-8 h-12 border-slate-200 text-slate-600 font-medium"
                        onClick={onClose}
                        type="button"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="bg-teal-700 hover:bg-teal-800 text-white rounded-xl px-10 h-12 font-medium"
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form className="space-y-4 py-1 max-h-[70vh] overflow-y-auto px-1 custom-scrollbar">
            <div className="space-y-1.5">
                <Label htmlFor="fullName" className="text-sm font-semibold text-slate-800">Full Name (as per Emirates ID)</Label>
                <Input id="fullName" placeholder="Enter full name" className="rounded-xl h-11 border-slate-200 focus-visible:ring-teal-500 bg-white shadow-sm" />
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="mobileNumber" className="text-sm font-semibold text-slate-800">Mobile Number</Label>
                <Input id="mobileNumber" placeholder="+917 365254631" className="rounded-xl h-11 border-slate-200 focus-visible:ring-teal-500 bg-white shadow-sm" />
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="emirate" className="text-sm font-semibold text-slate-800">Emirate</Label>
                <Select>
                    <SelectTrigger id="emirate" className="w-full bg-white rounded-xl h-11 border-slate-200 focus-visible:ring-teal-500 shadow-sm">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-100 shadow-lg">
                        <SelectItem value="dubai">Dubai</SelectItem>
                        <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                        <SelectItem value="sharjah">Sharjah</SelectItem>
                        <SelectItem value="ajman">Ajman</SelectItem>
                        <SelectItem value="umm-al-quwain">Umm Al Quwain</SelectItem>
                        <SelectItem value="ras-al-khaimah">Ras Al Khaimah</SelectItem>
                        <SelectItem value="fujairah">Fujairah</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="vehicleType" className="text-sm font-semibold text-slate-800">Vehicle Type</Label>
                <Select>
                    <SelectTrigger id="vehicleType" className="w-full bg-white rounded-xl h-11 border-slate-200 focus-visible:ring-teal-500 shadow-sm">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-100 shadow-lg">
                        <SelectItem value="bike">Bike</SelectItem>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="van">Van</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="vehicleNumber" className="text-sm font-semibold text-slate-800">Vehicle Number</Label>
                <Input id="vehicleNumber" placeholder="Enter vehicle Number" className="rounded-xl h-11 border-slate-200 focus-visible:ring-teal-500 bg-white shadow-sm" />
            </div>

            {selectedType === 'retailer' && (
                <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-300">
                    <Label htmlFor="retailers" className="text-sm font-semibold text-slate-800">Retailers</Label>
                    <Select>
                        <SelectTrigger id="retailers" className="w-full bg-white rounded-xl h-11 border-slate-200 focus-visible:ring-teal-500 shadow-sm">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100 shadow-lg">
                            <SelectItem value="r1">Retailer 1</SelectItem>
                            <SelectItem value="r2">Retailer 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            )}

            {selectedType === 'wholesaler' && (
                <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-300">
                    <Label htmlFor="wholesaler" className="text-sm font-semibold text-slate-800">Wholesaler</Label>
                    <Select>
                        <SelectTrigger id="wholesaler" className="w-full bg-white rounded-xl h-11 border-slate-200 focus-visible:ring-teal-500 shadow-sm">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100 shadow-lg">
                            <SelectItem value="w1">Wholesaler 1</SelectItem>
                            <SelectItem value="w2">Wholesaler 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            )}

            <div className="flex justify-between items-center pt-6 bg-white sticky bottom-0">
                <Button
                    variant="outline"
                    className="rounded-xl px-8 h-12 border-slate-200 text-slate-600 font-medium"
                    onClick={handleBack}
                    type="button"
                >
                    Cancel
                </Button>
                <Button className="bg-teal-700 hover:bg-teal-800 text-white rounded-xl px-12 h-12 font-medium shadow-md shadow-teal-100 transition-all">
                    Save
                </Button>
            </div>
        </form>
    );
}

function TypeOption({
    title,
    description,
    selected,
    onClick
}: {
    title: string;
    description: string;
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "group relative p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4",
                selected
                    ? "border-slate-900 bg-slate-50"
                    : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50/50"
            )}
        >
            <div className={cn(
                "mt-1 h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all",
                selected ? "bg-slate-900 border-slate-900" : "bg-white border-slate-200 group-hover:border-slate-300"
            )}>
                {selected && <Check className="h-4 w-4 text-white" />}
            </div>
            <div className="flex-1">
                <h3 className={cn(
                    "font-bold text-base transition-colors",
                    selected ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                )}>
                    {title}
                </h3>
                <p className={cn(
                    "text-sm mt-0.5 transition-colors",
                    selected ? "text-slate-600" : "text-slate-400 group-hover:text-slate-500"
                )}>
                    {description}
                </p>
            </div>
        </div>
    );
}
