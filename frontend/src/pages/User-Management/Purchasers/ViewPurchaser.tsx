import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    CheckCircle2,
    FileText,
    ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import BasicInfoTab from "./tabs/BasicInfoTab";
import VehicleInfoTab from "./tabs/VehicleInfoTab";
import PerformanceTab from "./tabs/PerformanceTab";

const ViewPurchaser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = React.useState("Basic Info");

    const tabs = ["Basic Info", "Vehicle Info", "Performance"];

    const renderTabContent = () => {
        switch (activeTab) {
            case "Basic Info":
                return <BasicInfoTab id={id} />;
            case "Vehicle Info":
                return <VehicleInfoTab id={id} />;
            case "Performance":
                return <PerformanceTab id={id} />;
            default:
                return null;
        }
    };

    return (
        <div className="p-4 lg:p-8 max-w-7xl mx-auto animate-in fade-in duration-500 pb-20">
            {/* Header with Back Button */}
            <div className="flex items-center gap-4 mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <ArrowLeft className="h-5 w-5 text-slate-600" />
                </button>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <span>User Management</span>
                    <span>/</span>
                    <span className="text-slate-900">Purchasers</span>
                </div>
            </div>

            {/* Main Profile Header Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative overflow-hidden">
                <div className="flex items-center gap-5">
                    <div className="h-20 w-20 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahammed"
                            alt="Profile"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-2xl font-bold text-slate-900">Ahammed Manzoor</h1>
                            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-green-100">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                Verified
                            </div>
                        </div>
                        <p className="text-slate-500 font-medium">{id || "P-001245"}</p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                            <FileText className="h-3.5 w-3.5" />
                            <span>Registered On: 2024-06-12</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <div className="text-teal-600 font-bold text-sm bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">
                        Zamsouq Purchaser
                    </div>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex items-center gap-2 mb-8 bg-slate-100/50 p-1.5 rounded-2xl w-fit">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                            activeTab === tab
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-500 hover:text-slate-700"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content Area */}
            {renderTabContent()}
        </div>
    );
};

export default ViewPurchaser;
