import React from "react";
import {
    Package,
    TrendingDown,
    AlertCircle,
    RefreshCw,
} from "lucide-react";

const InventoryTab: React.FC = () => {
    const stats = [
        {
            label: "Total Products",
            value: "450",
            icon: <Package className="h-10 w-10 text-orange-400" />,
            bgColor: "bg-orange-50/50"
        },
        {
            label: "Low Stock",
            value: "23",
            icon: <TrendingDown className="h-10 w-10 text-amber-500" />,
            bgColor: "bg-amber-50/50"
        },
        {
            label: "Out of Stock",
            value: "5",
            icon: <AlertCircle className="h-10 w-10 text-red-500" />,
            bgColor: "bg-red-50/50"
        },
        {
            label: "Last Update",
            value: "2 hours ago",
            icon: <RefreshCw className="h-10 w-10 text-blue-500" />,
            bgColor: "bg-blue-50/50"
        },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm flex items-center justify-between min-h-40"
                    >
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
                        </div>
                        <div className={`p-4 rounded-3xl ${stat.bgColor} flex items-center justify-center`}>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder for Product List or other inventory details */}
            {/* <div className="flex flex-col items-center justify-center py-20 text-slate-300 border-2 border-dashed border-slate-100 rounded-4xl">
                <Package className="h-16 w-16 mb-4 opacity-10" />
                <p className="font-bold text-lg">Detailed inventory list coming soon</p>
                <p className="text-sm">Manage your stock, prices, and product availability.</p>
            </div> */}
        </div>
    );
};

export default InventoryTab;
