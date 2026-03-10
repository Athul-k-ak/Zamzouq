import { Card, CardContent } from "@/components/ui/card"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Welcome back, John!</h2>
            </div>

            {/* Placeholder for Dashboard Content */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-slate-500">Total Orders</p>
                            <h3 className="text-2xl font-bold">1,284</h3>
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-slate-500">Revenue</p>
                            <h3 className="text-2xl font-bold">$12,845</h3>
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-slate-500">Active Users</p>
                            <h3 className="text-2xl font-bold">452</h3>
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-6">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-slate-500">Pending Supports</p>
                            <h3 className="text-2xl font-bold">12</h3>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Empty State to match the screenshot better if needed, but let's add some visual interest */}
            <div className="min-h-[400px] rounded-xl border border-dashed border-slate-200 bg-white/50 flex items-center justify-center">
                <p className="text-slate-400 font-medium">Dashboard content will appear here</p>
            </div>
        </div>
    )
}
