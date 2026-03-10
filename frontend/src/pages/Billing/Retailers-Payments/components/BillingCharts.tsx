import {
    LineChart,
    Line,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const monthlyPurchaseData = [
    { name: 'Apr', revenue: 12000 },
    { name: 'May', revenue: 22000 },
    { name: 'Jun', revenue: 18000 },
    { name: 'Jul', revenue: 30000 },
    { name: 'Aug', revenue: 28000 },
    { name: 'Sep', revenue: 36450 },
    { name: 'Oct', revenue: 35000 },
    { name: 'Nov', revenue: 48000 },
    { name: 'Dec', revenue: 44000 },
];

const weeklyOrderData = [
    { name: 'Sun', orders: 100 },
    { name: 'Mon', orders: 160 },
    { name: 'Tue', orders: 140 },
    { name: 'Wed', orders: 200 },
    { name: 'Thu', orders: 200 },
    { name: 'Fri', orders: 240 },
    { name: 'Sat', orders: 220 },
];

const paymentFlowData = [
    { name: 'Jan', online: 52500, cod: 12450 },
    { name: 'Feb', online: 58000, cod: 14200 },
    { name: 'Mar', online: 61000, cod: 13800 },
    { name: 'Apr', online: 55000, cod: 15000 },
    { name: 'May', online: 67000, cod: 16200 },
    { name: 'Jun', online: 72000, cod: 17500 },
];

const topCategoriesData = [
    { name: 'Vegetables', value: 45200, percentage: 38, color: '#14b8a6' },
    { name: 'Fruits', value: 45200, percentage: 38, color: '#f97316' },
    { name: 'Grocery', value: 58200, percentage: 38, color: '#0000ff' },
    { name: 'Stationery', value: 45200, percentage: 38, color: '#eab308' },
];

export function MonthlyPurchaseVolumeChart() {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardContent className="p-6">
                <div className="h-[200px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={monthlyPurchaseData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fill: '#94a3b8' }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fill: '#94a3b8' }}
                                tickFormatter={(value) => `${value / 1000}k`}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="revenue"
                                stroke="#14b8a6"
                                strokeWidth={2}
                                dot={{ r: 4, fill: '#14b8a6' }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4">
                    <h4 className="text-sm font-bold text-slate-900">Monthly Purchase Volume</h4>
                    <p className="text-xs text-slate-500">Total value of orders placed by retailers</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-teal-600 font-medium">
                        <span className="p-1 bg-teal-50 rounded">📈 8% increase compared to last month</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export function WeeklyOrderVolumeChart() {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardContent className="p-6">
                <div className="h-[200px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={weeklyOrderData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fill: '#94a3b8' }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fill: '#94a3b8' }}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="orders"
                                stroke="#14b8a6"
                                strokeWidth={2}
                                dot={{ r: 4, fill: '#14b8a6' }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4">
                    <h4 className="text-sm font-bold text-slate-900">Weekly Order Volume</h4>
                    <p className="text-xs text-slate-500">Orders placed this week</p>
                    <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-500">
                        <span className="flex items-center gap-1">📈 Peak Day: Saturday</span>
                        <span className="flex items-center gap-1">📉 Lowest Day: Sunday</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export function PaymentFlowTrendChart() {
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white rounded-xl shadow-lg p-3 border border-slate-100 text-xs">
                    <p className="font-bold text-slate-700 mb-1">{label}</p>
                    {payload.map((entry: any) => (
                        <p key={entry.dataKey} style={{ color: entry.color }} className="font-semibold">
                            {entry.name}: AED {entry.value.toLocaleString()}
                        </p>
                    ))}
                </div>
            )
        }
        return null
    }

    return (
        <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <span className="p-1 bg-slate-100 rounded text-slate-500">📊</span>
                <CardTitle className="text-sm font-medium">Area Chart</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <div className="space-y-1 mb-4">
                    <h3 className="text-sm font-bold text-slate-900">Payment Flow Trend</h3>
                    <p className="text-xs text-slate-500">Distribution of online and COD payments</p>
                </div>
                <div className="h-[150px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={paymentFlowData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.5} />
                                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.1} />
                                </linearGradient>
                                <linearGradient id="colorCod" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#fca5a5" stopOpacity={0.7} />
                                    <stop offset="95%" stopColor="#fca5a5" stopOpacity={0.2} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fill: '#94a3b8' }}
                            />
                            <YAxis hide />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="cod"
                                name="COD"
                                stroke="#fca5a5"
                                strokeWidth={2}
                                fill="url(#colorCod)"
                                dot={false}
                                activeDot={{ r: 5, fill: '#fca5a5' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="online"
                                name="Online"
                                stroke="#14b8a6"
                                strokeWidth={2}
                                fill="url(#colorOnline)"
                                dot={false}
                                activeDot={{ r: 5, fill: '#14b8a6' }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-300 inline-block"></span>
                        Online Payments
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-400 inline-block"></span>
                        Online Payments
                    </span>
                </div>
                <p className="mt-3 text-xs font-bold text-slate-800">86% of payments collected digitally ↗</p>
                <p className="text-xs text-slate-400">January - June 2024</p>
            </CardContent>
        </Card>
    )
}

export function RetailerPurchaseByCategoryChart() {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <span className="p-1 bg-slate-100 rounded text-slate-500">📊</span>
                <CardTitle className="text-sm font-medium">Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">Retailer Purchase by Category</h3>
                    <p className="text-xs text-slate-500">Jan - Jun 2024</p>
                </div>
                <div className="h-[250px] w-full mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={topCategoriesData} barGap={0}>
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fill: '#94a3b8' }}
                            />
                            <YAxis hide />
                            <Tooltip
                                cursor={{ fill: '#f8fafc' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={80}>
                                {topCategoriesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <span>4.2% compared to last month</span>
                        <span className="text-emerald-500">📈</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">Highest Spend Category: Grocery</p>
                </div>
            </CardContent>
        </Card>
    )
}
