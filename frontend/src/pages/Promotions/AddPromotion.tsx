import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Circle, CheckCircle2, LayoutTemplate } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AddPromotion() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    const [form, setForm] = useState({
        name: isEdit ? "PRO Subscription" : "",
        currency: "AED",
        price: isEdit ? "30" : "",
        duration: isEdit ? "1" : "",
        features: [
            { id: 1, text: "Unlimited Story Banner for 1 week", selected: false },
            { id: 2, text: "Access to Category Banner for 1 week", selected: false },
            { id: 3, text: "Homepage Banner Access", selected: false },
            { id: 4, text: "Featured Product Boost", selected: false },
        ]
    });

    const toggleFeature = (id: number) => {
        setForm(prev => ({
            ...prev,
            features: prev.features.map(f => f.id === id ? { ...f, selected: !f.selected } : f)
        }));
    };

    return (
        <div className="animate-in fade-in duration-500">
            {/* Breadcrumb Header */}
            <div className="border-b border-slate-100 bg-white">
                <div className="flex items-center gap-3 px-6 py-4 max-w-7xl mx-auto">
                    <div className="flex items-center justify-center p-1.5 border border-slate-200 rounded-md">
                        <LayoutTemplate className="h-4 w-4 text-slate-600" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span
                            className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                            onClick={() => navigate('/promotions')}
                        >
                            Promotions
                        </span>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-900 font-medium">
                            {isEdit ? "Edit promotion" : "Add new promotions"}
                        </span>
                    </div>
                </div>
            </div>

            <div className="pt-8 pb-12 px-8 max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold text-slate-900 mb-8">
                    {isEdit ? "Edit Pricing Plan" : "Create Pricing Plan"}
                </h1>

                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                    <div className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Name<span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="e.g. PRO Subscription"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="h-11 rounded-xl"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Price Field */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Price<span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-2">
                                    <div className="w-25">
                                        <Select value={form.currency} onValueChange={(val) => setForm({ ...form, currency: val })}>
                                            <SelectTrigger className="h-11 rounded-xl">
                                                <SelectValue placeholder="Currency" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="AED">AED</SelectItem>
                                                <SelectItem value="USD">USD</SelectItem>
                                                <SelectItem value="EUR">EUR</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={form.price}
                                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                                        className="h-11 rounded-xl flex-1"
                                    />
                                </div>
                            </div>

                            {/* Enrollment Duration Field */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Enrollment Duration
                                </label>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        value={form.duration}
                                        onChange={(e) => setForm({ ...form, duration: e.target.value })}
                                        className="h-11 rounded-xl pr-16"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                                        months
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-2">
                                    Leave blank for unlimited access
                                </p>
                            </div>
                        </div>

                        {/* Plan Features */}
                        <div className="mt-8">
                            <div className="border border-slate-200 rounded-xl p-6">
                                <h3 className="text-sm font-bold text-slate-800 mb-4">Plan Features</h3>
                                <div className="space-y-3">
                                    {form.features.map((feature) => (
                                        <div
                                            key={feature.id}
                                            className="flex items-center gap-3 cursor-pointer group"
                                            onClick={() => toggleFeature(feature.id)}
                                        >
                                            {feature.selected ? (
                                                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                                            ) : (
                                                <Circle className="h-5 w-5 text-slate-300 group-hover:text-slate-400 transition-colors" />
                                            )}
                                            <span className={cn(
                                                "text-sm font-medium transition-colors",
                                                feature.selected ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                                            )}>
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Button
                            className="w-full h-12 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-medium mt-8 text-base"
                            onClick={() => {
                                // Add save logic here
                                navigate('/promotions');
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
