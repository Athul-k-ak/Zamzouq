import { Search, Plus, Filter, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Check, X, Download } from "lucide-react";
import { StyledTable } from "@/ui/StyledTable";
import { useNavigate } from "react-router-dom";
import { subscriptionPlanColumns } from "@/assets/json/TableColumn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Weekly Plan",
        price: "99",
        period: "/week",
        description: "Perfect for individuals getting started",
        features: [
            { text: "Unlimited Story Banner for 1 week", included: true },
            { text: "Access to Category Banner for 1 week", included: true },
            { text: "Homepage Banner Access", included: false },
            { text: "Featured Product Boost", included: false },
        ],
        activeSubscribers: 120,
        totalEarnings: "14,400",
        color: "teal"
    },
    {
        name: "Monthly Plan",
        price: "349",
        period: "/month",
        description: "For large organizations with advanced needs",
        features: [
            { text: "Unlimited Story Banner for 1 month", included: true },
            { text: "Access to Category Banner for 1 week", included: true },
            { text: "Featured Product Boost", included: true },
            { text: "Homepage Banner Access", included: false },
        ],
        activeSubscribers: 120,
        totalEarnings: "14,400",
        color: "teal"
    },
    {
        name: "Yearly plan",
        price: "3,499",
        period: "/year",
        description: "Best for growing teams and businesses",
        features: [
            { text: "Unlimited Story Banner for 1 year", included: true },
            { text: "Access to Unlimited Category Banner", included: true },
            { text: "Homepage Banner Access", included: true },
            { text: "Featured Product Boost", included: true },
        ],
        activeSubscribers: 120,
        totalEarnings: "14,400",
        mostPopular: true,
        color: "teal"
    }
];

const mockConfigurationData = [
    {
        id: "INV-2026-001",
        wholesaler: "Dubai Fresh Foods",
        planName: "Weekly Plan",
        startDate: "Feb 10, 2026",
        nextBillingDate: "Feb 10, 2026",
        amountPaid: "AED 45,890",
        status: "Active",
    },
    {
        id: "INV-2026-001",
        wholesaler: "Dubai Fresh Foods",
        planName: "Weekly Plan",
        startDate: "Feb 10, 2026",
        nextBillingDate: "Feb 10, 2026",
        amountPaid: "AED 45,890",
        status: "Active",
    },
    {
        id: "INV-2026-001",
        wholesaler: "Dubai Fresh Foods",
        planName: "Weekly Plan",
        startDate: "Feb 10, 2026",
        nextBillingDate: "Feb 10, 2026",
        amountPaid: "AED 45,890",
        status: "Inactive",
    },
    {
        id: "INV-2026-001",
        wholesaler: "Dubai Fresh Foods",
        planName: "Weekly Plan",
        startDate: "Feb 10, 2026",
        nextBillingDate: "Feb 10, 2026",
        amountPaid: "AED 45,890",
        status: "Inactive",
    }
];

export default function PromotionsPage() {
    const navigate = useNavigate();

    return (
        <div className="pt-12 pb-8 px-8 max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="flex justify-between items-start mb-8">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold text-slate-900">Subscription Plans</h1>
                    <p className="text-slate-500">Manage subscriptions, promotions, advertisements.</p>
                </div>
                <Button
                    className="bg-teal-700 hover:bg-teal-800 text-white rounded-xl h-11 px-6 flex items-center gap-2 font-medium transition-all shadow-sm"
                    onClick={() => navigate('/promotions/add')}
                >
                    <Plus className="h-5 w-5" />
                    Add New Plan
                </Button>
            </div>

            {/* Subscription Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative bg-white rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:shadow-lg",
                            plan.mostPopular ? "border-teal-500 ring-1 ring-teal-500" : "border-slate-100"
                        )}
                    >
                        {plan.mostPopular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}

                        <div className="text-center mb-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">{plan.name}</h3>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-2xl font-bold text-teal-600">AED</span>
                                <span className="text-4xl font-black text-teal-600">{plan.price}</span>
                                <span className="text-slate-400 font-medium">{plan.period}</span>
                            </div>
                            <p className="text-slate-500 text-sm mt-2">{plan.description}</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, fIndex) => (
                                <div key={fIndex} className="flex items-start gap-3">
                                    {feature.included ? (
                                        <Check className="h-4 w-4 text-teal-500 mt-0.5" />
                                    ) : (
                                        <X className="h-4 w-4 text-slate-300 mt-0.5" />
                                    )}
                                    <span className={cn(
                                        "text-sm",
                                        feature.included ? "text-slate-700" : "text-slate-400"
                                    )}>
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-slate-50 pt-6 mb-8">
                            <div className="flex justify-between items-center text-sm mb-3">
                                <span className="text-slate-500 font-medium">Active Subscribers:</span>
                                <span className="text-slate-900 font-bold">{plan.activeSubscribers}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500 font-medium">Total Earnings:</span>
                                <span className="text-slate-900 font-bold">AED {plan.totalEarnings}</span>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-auto">
                            <Button variant="outline" className="flex-1 rounded-xl h-10 bg-slate-50 border-none text-slate-600 font-bold hover:bg-slate-100">
                                Disable
                            </Button>
                            <Button
                                className="flex-1 rounded-xl h-10 bg-teal-700 hover:bg-teal-800 text-white font-bold"
                                onClick={() => navigate(`/promotions/edit/${index}`)}
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Plan Configuration Table Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Plan Configuration</h2>
                <p className="text-slate-500">Track active wholesaler subscriptions and recurring revenue.</p>
            </div>

            <div className="flex items-center justify-between mb-6 gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search by business or ID"
                        className="pl-10 h-11 border-slate-200 rounded-xl focus-visible:ring-teal-500"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-600 hover:border-slate-300 transition-colors cursor-pointer">
                        <span>All Status</span>
                        <Filter className="h-4 w-4 text-slate-400" />
                    </div>
                    <Button variant="outline" className="h-11 border-slate-200 rounded-xl px-4 flex items-center gap-2 font-medium text-slate-600 hover:bg-slate-50">
                        Export
                        <Download className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <StyledTable
                columns={subscriptionPlanColumns}
                data={mockConfigurationData}
            />

            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>0 of 10 row(s) selected.</span>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span>Rows per page</span>
                        <div className="flex items-center gap-1 px-2 py-1.5 border border-slate-200 rounded-lg bg-white min-w-15 justify-between cursor-pointer">
                            <span>10</span>
                            <Filter className="h-3 w-3 text-slate-400" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span>Page 1 of 2</span>
                        <div className="flex items-center gap-1">
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 disabled:opacity-30">
                                <ChevronsLeft className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50 disabled:opacity-30">
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 border border-slate-100 rounded-lg hover:bg-slate-50">
                                <ChevronsRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
