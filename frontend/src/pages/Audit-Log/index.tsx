import { useState } from "react";
import { Search, Download, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { StyledTable } from "@/ui/StyledTable";
import { auditLogColumns } from "@/assets/json/TableColumn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuditLogDetail } from "./AuditLogDetail";

const mockAuditLogData = [
    {
        id: "AL-001",
        name: "Jackson Lee",
        phone: "+916282359916",
        role: "Finance Admin",
        module: "Finance Module",
        action: "Approve settlement",
        ipAddress: "John Doe",
        loginTime: "Feb 10, 2026 - 11:02 AM",
    },
    {
        id: "AL-002",
        name: "Acme Inc.",
        phone: "+916282359916",
        role: "Finance Admin",
        module: "Finance Module",
        action: "Approve settlement",
        ipAddress: "John Doe",
        loginTime: "Feb 10, 2026 - 11:02 AM",
    },
    {
        id: "AL-003",
        name: "Acme Inc.",
        phone: "+916282359916",
        role: "Finance Admin",
        module: "Finance Module",
        action: "Approve settlement",
        ipAddress: "John Doe",
        loginTime: "Feb 10, 2026 - 11:02 AM",
    }
];

export default function AuditLogPage() {
    const [selectedLog, setSelectedLog] = useState<any>(null);

    return (
        <div className="pt-12 pb-8 px-8 max-w-7xl mx-auto animate-in fade-in duration-500">
            <div className="flex flex-col gap-1 mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Audit Log</h1>
                <p className="text-slate-500">Track all critical system activities across the platform.</p>
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
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                    <Button className="h-11 bg-teal-700 hover:bg-teal-800 text-white rounded-xl px-4 flex items-center gap-2 font-medium">
                        Export
                        <Download className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <StyledTable
                columns={auditLogColumns}
                data={mockAuditLogData}
                onRowClick={(row) => setSelectedLog(row)}
                onActionClick={(row) => setSelectedLog(row)}
            />

            <AuditLogDetail
                isOpen={!!selectedLog}
                onClose={() => setSelectedLog(null)}
                log={selectedLog}
            />

            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>0 of 10 row(s) selected.</span>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span>Rows per page</span>
                        <div className="flex items-center gap-1 px-2 py-1.5 border border-slate-200 rounded-lg bg-white min-w-[60px] justify-between cursor-pointer">
                            <span>10</span>
                            <ChevronDown className="h-3 w-3 text-slate-400" />
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

// small local hack component as ChevronDown is missing from lucid-react import above
function ChevronDown(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
