import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddWholesalerFormProps {
    onClose?: () => void;
}

export function AddWholesalerForm({ onClose }: AddWholesalerFormProps) {
    return (
        <form className="space-y-4 py-1">
            <div className="space-y-1.5">
                <Label htmlFor="fullName" className="text-sm font-medium text-slate-700">Full Name (as per Emirates ID)</Label>
                <Input id="fullName" placeholder="Enter full name" className="rounded-xl h-10 border-slate-200 focus-visible:ring-teal-500" />
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="mobileNumber" className="text-sm font-medium text-slate-700">Mobile Number</Label>
                <Input id="mobileNumber" placeholder="+917 365254631" className="rounded-xl h-10 border-slate-200 focus-visible:ring-teal-500" />
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="businessName" className="text-sm font-medium text-slate-700">Business Name</Label>
                <Input id="businessName" placeholder="Enter business name" className="rounded-xl h-10 border-slate-200 focus-visible:ring-teal-500" />
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="emirate" className="text-sm font-medium text-slate-700">Region/Emirate</Label>
                <Select>
                    <SelectTrigger id="emirate" className="w-full bg-white rounded-xl h-10 border-slate-200 focus-visible:ring-teal-500">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
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
                <Label htmlFor="category" className="text-sm font-medium text-slate-700">Category</Label>
                <Select>
                    <SelectTrigger id="category" className="w-full bg-white rounded-xl h-10 border-slate-200 focus-visible:ring-teal-500">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="fresh-produce">Fresh Produce</SelectItem>
                        <SelectItem value="beverages">Beverages</SelectItem>
                        <SelectItem value="dairy">Dairy</SelectItem>
                        <SelectItem value="snacks">Snacks & Confectionery</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex justify-between items-center pt-2">
                <Button variant="outline" className="rounded-xl px-6 h-10 border-slate-200 text-slate-600 font-medium" onClick={onClose} type="button">Cancel</Button>
                <Button className="bg-teal-700 hover:bg-teal-800 text-white rounded-xl px-8 h-10 font-medium">Save</Button>
            </div>
        </form>
    );
}
