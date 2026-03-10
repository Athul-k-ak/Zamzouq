import { ChevronDown, MoreVertical, Star, FileText, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface Column {
    header: string;
    key: string;
    sortable?: boolean;
    showArrows?: boolean;
}

interface StyledTableProps {
    columns: Column[];
    data: any[];
    onActionClick?: (row: any) => void;
    onRowClick?: (row: any) => void;
    renderCell?: (row: any, column: Column) => React.ReactNode;
}

export function StyledTable({ columns, data, onActionClick, onRowClick, renderCell: customRenderCell }: StyledTableProps) {
    const renderCell = (row: any, column: Column) => {
        if (customRenderCell) {
            const customValue = customRenderCell(row, column);
            if (customValue !== undefined) return customValue;
        }
        const value = row[column.key];

        if (column.key === "status") {
            if (value === "Active" || value === "Expired" || value === "Inactive") {
                return (
                    <span className={cn(
                        "text-sm font-bold",
                        value === "Active" ? "text-green-500" : value === "Inactive" ? "text-red-500" : "text-yellow-500"
                    )}>
                        {value}
                    </span>
                );
            }
            if (["Delivered", "Packed", "Accepted", "Pending", "Approved", "Rejected"].includes(value)) {
                return (
                    <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded-full",
                        (value === "Delivered" || value === "Approved") ? "text-green-500" :
                            value === "Packed" ? "text-orange-400" :
                                value === "Accepted" ? "text-blue-500" :
                                    value === "Rejected" ? "text-red-500" :
                                        "text-yellow-500"
                    )}>
                        {value}
                    </span>
                );
            }
            const isPremium = value === "Premium";
            return (
                <div className="flex items-center gap-2 font-medium">
                    {isPremium ? (
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ) : (
                        <span className="text-slate-400 text-lg leading-none">*</span>
                    )}
                    <span className={cn(isPremium ? "text-slate-900" : "text-slate-500")}>
                        {value}
                    </span>
                </div>
            );
        }

        if (column.key === "type") {
            return (
                <span className={cn(
                    "px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border",
                    value === "Online" ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-orange-50 text-orange-600 border-orange-100"
                )}>
                    {value}
                </span>
            );
        }

        if (column.key === "banner") {
            return (
                <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
                    <div className="text-[8px] font-bold text-slate-400 truncate w-full text-center">Image</div>
                </div>
            );
        }

        if (column.key === "name") {
            if (typeof value === "string" && value.includes(".pdf")) {
                return (
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                            <FileText className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">{value}</span>
                    </div>
                );
            }
            return <span className="font-bold text-slate-900">{value}</span>;
        }

        if (column.key === "actions") {
            return (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onActionClick?.(row);
                    }}
                    className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    <MoreVertical className="h-5 w-5 text-slate-400" />
                </button>
            );
        }

        if (column.key === "id") {
            return <span className="text-slate-500 font-medium">{value}</span>;
        }

        if (column.key === "businessName" || column.key === "retailer") {
            return <span className="font-bold text-slate-900">{value}</span>;
        }

        return <span className="text-slate-600">{value}</span>;
    };

    return (
        <div className="w-full overflow-x-auto rounded-xl border border-slate-100 bg-white shadow-sm no-scrollbar">
            <Table className="min-w-200 lg:min-w-full">
                <TableHeader className="bg-slate-50/50">
                    <TableRow className="hover:bg-transparent border-slate-100">
                        <TableHead className="w-12 px-4">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                            />
                        </TableHead>
                        {columns.map((column) => (
                            <TableHead
                                key={column.key}
                                className="py-4 text-xs font-semibold text-slate-900"
                            >
                                <div className="flex items-center gap-1">
                                    {column.header}
                                    {column.showArrows ? (
                                        <ArrowUpDown className="h-3.5 w-3.5 text-slate-300 ml-1" />
                                    ) : column.sortable && (
                                        <div className="flex flex-col leading-none opacity-40 ml-1">
                                            <ChevronDown className="h-3 w-3 rotate-180" />
                                            <ChevronDown className="h-3 w-3 -mt-1" />
                                        </div>
                                    )}
                                </div>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            className={cn(
                                "hover:bg-slate-50/50 border-slate-100 transition-colors",
                                onRowClick && "cursor-pointer"
                            )}
                            onClick={() => onRowClick?.(row)}
                        >
                            <TableCell className="px-4">
                                <input
                                    type="checkbox"
                                    onClick={(e) => e.stopPropagation()}
                                    className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                                />
                            </TableCell>
                            {columns.map((column) => (
                                <TableCell key={column.key} className="py-2.5 text-xs">
                                    {renderCell(row, column)}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
