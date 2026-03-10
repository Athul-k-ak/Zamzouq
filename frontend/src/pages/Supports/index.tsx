import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Save, Headset } from "lucide-react";
import { cn } from "@/lib/utils";

type SupportDetails = {
    email: string;
    phone: string;
    whatsapp: string;
    hours: string;
};

type TabType = "retail" | "wholesale" | "purchaser";

export default function SupportsPage() {
    const [activeTab, setActiveTab] = useState<TabType>("retail");

    // Manage data and states for all three tabs
    const [supportData, setSupportData] = useState<Record<TabType, SupportDetails | null>>({
        retail: null,
        wholesale: null,
        purchaser: null,
    });

    const [editMode, setEditMode] = useState<Record<TabType, boolean>>({
        retail: false,
        wholesale: false,
        purchaser: false,
    });

    // Temporary form state while editing
    const [formData, setFormData] = useState<SupportDetails>({
        email: "",
        phone: "",
        whatsapp: "",
        hours: "",
    });

    const handleAddDetails = () => {
        setFormData({ email: "", phone: "", whatsapp: "", hours: "" });
        setEditMode((prev) => ({ ...prev, [activeTab]: true }));
    };

    const handleEdit = () => {
        const data = supportData[activeTab];
        setFormData({
            email: data?.email || "",
            phone: data?.phone || "",
            whatsapp: data?.whatsapp || "",
            hours: data?.hours || "",
        });
        setEditMode((prev) => ({ ...prev, [activeTab]: true }));
    };

    const handleSave = () => {
        setSupportData((prev) => ({ ...prev, [activeTab]: formData }));
        setEditMode((prev) => ({ ...prev, [activeTab]: false }));
    };

    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab);
    };

    const tabs = [
        { id: "retail" as TabType, label: "Retail Support" },
        { id: "wholesale" as TabType, label: "Wholesale Support" },
        { id: "purchaser" as TabType, label: "Purchaser Support" },
    ];

    const currentData = supportData[activeTab];
    const isEditing = editMode[activeTab];
    const hasData = currentData !== null;
    const tabLabel = tabs.find(t => t.id === activeTab)?.label;

    return (
        <div className="p-8 max-w-300 mx-auto animate-in fade-in duration-500">
            <div className="flex flex-col gap-1 mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Support Management</h1>
                <p className="text-slate-500">
                    Manage support contact details and visibility for purchasers, wholesalers, and retailers.
                </p>
            </div>

            <div className="flex items-center gap-2 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={cn(
                            "px-4 py-2 text-sm font-semibold rounded-full transition-all",
                            activeTab === tab.id
                                ? "bg-white border border-slate-200 shadow-sm text-slate-900"
                                : "text-slate-500 hover:text-slate-900 bg-transparent hover:bg-slate-50"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 max-w-xl">
                {!isEditing && !hasData && (
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                            <Headset className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Add {tabLabel}</h3>
                        <Button
                            onClick={handleAddDetails}
                            className="bg-teal-700 hover:bg-teal-800 text-white rounded-xl h-11 px-6 flex items-center gap-2 font-medium transition-all shadow-sm mt-4"
                        >
                            <Plus className="h-5 w-5" />
                            Add Details
                        </Button>
                    </div>
                )}

                {isEditing && (
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl font-bold text-slate-900 mb-2">{tabLabel}</h2>

                        <div className="space-y-2">
                            <Label className="text-sm font-semibold text-slate-700">Support Email:</Label>
                            <Input
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="support@zamsouq.com"
                                className="h-11 border-slate-200 rounded-xl focus-visible:ring-teal-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-sm font-semibold text-slate-700">Support Phone Number:</Label>
                            <Input
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+971 50 123 4567"
                                className="h-11 border-slate-200 rounded-xl focus-visible:ring-teal-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-sm font-semibold text-slate-700">WhatsApp Support Number:</Label>
                            <Input
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                placeholder="+971 50 123 4567"
                                className="h-11 border-slate-200 rounded-xl focus-visible:ring-teal-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-sm font-semibold text-slate-700">Business Support Hours</Label>
                            <Input
                                value={formData.hours}
                                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                                placeholder="Mon - Sat | 9:00 AM - 6:00 PM"
                                className="h-11 border-slate-200 rounded-xl focus-visible:ring-teal-500"
                            />
                        </div>

                        <div className="flex justify-end mt-4">
                            <Button
                                onClick={handleSave}
                                className="bg-teal-700 hover:bg-teal-800 text-white rounded-xl h-11 px-6 flex items-center gap-2 font-medium transition-all shadow-sm"
                            >
                                <Save className="h-4 w-4" />
                                Save
                            </Button>
                        </div>
                    </div>
                )}

                {!isEditing && hasData && (
                    <div className="relative flex flex-col gap-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-bold text-slate-900">{tabLabel}</h2>
                            <button
                                onClick={handleEdit}
                                className="p-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-colors border border-slate-200"
                            >
                                <Edit className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold text-slate-700">Support Email:</p>
                            <p className="text-sm text-slate-600">{currentData.email}</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold text-slate-700">Support Phone Number:</p>
                            <p className="text-sm text-slate-600">{currentData.phone}</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold text-slate-700">WhatsApp Support Number</p>
                            <p className="text-sm text-slate-600">{currentData.whatsapp}</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold text-slate-700">Business Support Hours</p>
                            <p className="text-sm text-slate-600">{currentData.hours}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
