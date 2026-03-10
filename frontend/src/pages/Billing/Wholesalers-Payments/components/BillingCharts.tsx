import {
    LineChart,
    Line,
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

const monthlySalesData = [
    { name: 'Apr', revenue: 15000 },
    { name: 'May', revenue: 25000 },
    { name: 'Jun', revenue: 20000 },
    { name: 'Jul', revenue: 35000 },
    { name: 'Aug', revenue: 30000 },
    { name: 'Sep', revenue: 45000 },
    { name: 'Oct', revenue: 40000 },
    { name: 'Nov', revenue: 55000 },
    { name: 'Dec', revenue: 50000 },
];

const weeklyOrderData = [
    { name: 'Sun', orders: 150 },
    { name: 'Mon', orders: 200 },
    { name: 'Tue', orders: 180 },
    { name: 'Wed', orders: 250 },
    { name: 'Thu', orders: 220 },
    { name: 'Fri', orders: 300 },
    { name: 'Sat', orders: 280 },
];

const fulfillmentData = [
    { name: 'Apr', rate: 75 },
    { name: 'May', rate: 82 },
    { name: 'Jun', rate: 78 },
    { name: 'Jul', rate: 85 },
    { name: 'Aug', rate: 80 },
    { name: 'Sep', rate: 92 },
    { name: 'Oct', rate: 88 },
    { name: 'Nov', rate: 95 },
    { name: 'Dec', rate: 90 },
];

const topCategoriesData = [
    { name: 'Vegetables', value: 45200, percentage: 38, color: '#14b8a6' },
    { name: 'Fruits', value: 45200, percentage: 38, color: '#f97316' },
    { name: 'Grocery', value: 58200, percentage: 38, color: '#0000ff' },
    { name: 'Stationary', value: 45200, percentage: 38, color: '#eab308' },
];

export function MonthlySalesChart() {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardContent className="p-6">
                <div className="h-[200px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={monthlySalesData}>
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
                    <h4 className="text-sm font-bold text-slate-900">Monthly Sales Revenue</h4>
                    <p className="text-xs text-slate-500">Revenue performance across all retailer orders</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-teal-600 font-medium">
                        <span className="p-1 bg-teal-50 rounded">📈 12% growth compared to last month</span>
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
                    <p className="text-xs text-slate-500">Orders received from retailers this week</p>
                    <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-500">
                        <span className="flex items-center gap-1">📈 Peak Day: Saturday</span>
                        <span className="flex items-center gap-1">📉 Lowest Day: Sunday</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export function OrderFulfillmentRateChart() {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardContent className="p-6">
                <div className="h-[200px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={fulfillmentData}>
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
                                dataKey="rate"
                                stroke="#14b8a6"
                                strokeWidth={2}
                                dot={{ r: 4, fill: '#14b8a6' }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4">
                    <h4 className="text-sm font-bold text-slate-900">Order Fulfillment Rate</h4>
                    <p className="text-xs text-slate-500">Completed vs Returns orders trend</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-teal-600 font-medium">
                        <span className="p-1 bg-teal-50 rounded">🔄 Return Rate: 4.2%</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export function TopSellingCategoriesChart() {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <span className="p-1 bg-slate-100 rounded text-slate-500">📊</span>
                <CardTitle className="text-sm font-medium">Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">Top Selling Categories</h3>
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
                        <span>5.2% compared to last month</span>
                        <span className="text-emerald-500">📈</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">Best performing category: Grocery</p>
                </div>
            </CardContent>
        </Card>
    )
}
