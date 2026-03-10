import { Bell, PanelLeft } from "lucide-react"
import { useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

interface HeaderProps {
    onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
    const location = useLocation()

    // Breadcrumb logic
    const renderBreadcrumbs = () => {
        const segments = location.pathname.split("/").filter(Boolean)
        if (segments.length === 0) return <span>Dashboard</span>

        return segments.map((segment, index) => {
            const label = segment
                .split("-")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")

            const isLast = index === segments.length - 1

            return (
                <div key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2 text-slate-300 font-normal">/</span>}
                    <span className={cn(
                        "transition-colors",
                        isLast ? "text-slate-900 font-semibold" : "text-slate-400"
                    )}>
                        {label}
                    </span>
                </div>
            )
        })
    }

    return (
        <header className="fixed top-0 right-0 z-30 flex h-16 w-full lg:w-[calc(100%-16rem)] items-center justify-between bg-white px-4 lg:px-6 border-b border-slate-100">
            <div className="flex items-center gap-2 lg:gap-4">
                {/* Toggle Sidebar Icon - Visible only on mobile */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden text-slate-500 hover:text-slate-900 transition-colors p-1 rounded-md hover:bg-slate-100"
                >
                    <PanelLeft className="h-6 w-6" />
                </button>

                {/* Vertical Divider - Hidden on very small screens */}
                <div className="hidden sm:block h-8 w-px bg-slate-200" />

                {/* Page Title / Breadcrumb - Scrollable on mobile if too long */}
                <div className="flex items-center text-sm font-medium overflow-x-auto whitespace-nowrap no-scrollbar max-w-37.5 sm:max-w-none">
                    {renderBreadcrumbs()}
                </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
                {/* Notification Bell */}
                <button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
                </button>

                {/* User Avatar */}
                <div className="h-8 w-8 rounded-full overflow-hidden border border-slate-200">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                        alt="User avatar"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </header>
    )
}
