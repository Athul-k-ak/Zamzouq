import React from "react";

interface BasicInfoTabProps {
    id?: string;
}

const BasicInfoTab: React.FC<BasicInfoTabProps> = ({ id }) => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Profile & Verification Section */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Profile & Verification</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Purchaser ID</p>
                        <p className="text-base font-bold text-slate-900">{id || "R-001245"}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Emirates ID</p>
                        <p className="text-base font-bold text-slate-900">78456321</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Retailers</p>
                        <p className="text-base font-bold text-slate-900">ABC Market, Good day market, ghf market</p>
                    </div>
                </div>
            </div>

            <div className="h-px bg-slate-100 w-full" />

            {/* Contact & Status Section */}
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Contact & Status</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Email</p>
                        <p className="text-base font-bold text-slate-900 break-all">contact@dubaifreshfoods.ae</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Phone</p>
                        <p className="text-base font-bold text-slate-900">+971 50 123 4567</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Address</p>
                        <p className="text-base font-bold text-slate-900">Al Barsha 1, Dubai, UAE</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Emirate</p>
                        <p className="text-base font-bold text-slate-900">Dubai</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">Account Status</p>
                        <p className="text-base font-bold text-slate-900">Active</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfoTab;
