import React from "react";
import { useParams } from "react-router-dom";
import {
    CheckCircle2,
    Star,
    FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import  BusinessInfoTab  from "./tabs/BusinessInfoTab";
import  PerformanceTab  from "./tabs/PerformanceTab";
// import  PurchasersTab  from "./tabs/PurchasersTab";   

const ViewRetailers = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = React.useState("Business Info");

    const tabs = ["Business Info", "Performance", "Purchasers"];

    const documents = [
        { name: "License.pdf", size: "245 KB" },
        { name: "Trade License.pdf", size: "245 KB" },
        { name: "VAT.pdf", size: "245 KB" },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case "Business Info":
                return <BusinessInfoTab id={id} documents={documents} />;
            case "Performance":
                return <PerformanceTab />;
            // case "Purchasers":
            //     return <PurchasersTab />;
            default:
                return null;
        }
    };

    return (
        <div className="p-4 lg:p-8 max-w-7xl mx-auto animate-in fade-in duration-500 pb-20">
            {/* Main Profile Header Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative overflow-hidden">
                <div className="flex items-center gap-5">
                    <div className="h-20 w-20 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <div className="bg-orange-100 p-2 rounded-lg text-orange-600 font-bold text-center leading-tight text-xs">
                            DUBAI<br />FRESH
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-2xl font-bold text-slate-900">Dubai Fresh Foods LLC</h1>
                            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-green-100">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                Verified
                            </div>
                        </div>
                        <p className="text-slate-500 font-medium">{id || "W-001245"}</p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                            <FileText className="h-3.5 w-3.5" />
                            <span>Registered On: 2024-06-12</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 text-yellow-500 font-semibold bg-yellow-50/50 px-3 py-1 rounded-full text-xs border border-yellow-100">
                        <Star className="h-3.5 w-3.5 fill-yellow-500" />
                        Premium
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

export default ViewRetailers;

