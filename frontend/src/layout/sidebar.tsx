import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  RotateCcw,
  Box,
  CreditCard,
  Ticket,
  Headset,
  ScrollText,
  Settings,
  ChevronDown,
  ChevronsUpDown,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import logo from "../assets/logo.png"

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  {
    name: "User Management",
    icon: Users,
    path: "/user-management",
    hasSubmenu: true,
    subItems: [
      { name: "Wholesalers", path: "/user-management/wholesalers" },
      { name: "Retailers", path: "/user-management/retailers" },
      { name: "Purchasers", path: "/user-management/purchasers" },
    ]
  },
  {
    name: "Approvals",
    icon: Users,
    path: "/approvals",
    hasSubmenu: true,
    subItems: [
      { name: "Wholesalers", path: "/approvals/wholesalers" },
      { name: "Retailers", path: "/approvals/retailers" },
      { name: "Purchasers", path: "/approvals/purchasers" },
    ]
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    path: "/orders",
    hasSubmenu: true,
    subItems: [
      { name: "Wholesale orders", path: "/orders/wholesale-orders" },

    ]
  },
  {
    name: "Returns",
    icon: RotateCcw,
    path: "/returns",
    hasSubmenu: true,
    subItems: [
      { name: "Retailers returns", path: "/returns/retailers-returns" },
    ]

  },
  {
    name: "Product Management",
    icon: Box,
    path: "/product-management",
    hasSubmenu: true,
    subItems: [
      { name: "Categories", path: "/product-management/categories" },
      { name: "Units", path: "/product-management/units" },
      { name: "Brands", path: "/product-management/brands" },
      { name: "Products", path: "/product-management/products" },
      { name: "Variants", path: "/product-management/variants" },

    ]
  },
  {
    name: "Billing & Payments",
    icon: CreditCard,
    path: "/billing",
    hasSubmenu: true,
    subItems: [
      { name: "Wholesalers Payments", path: "/billing/wholesalers-payments" },
      { name: "Retailers Payments", path: "/billing/retailers-payments" },
      { name: "Purchasers Earnings", path: "/billing/purchasers-earnings" },
      { name: "Platform Commission", path: "/billing/platform-commission" },
    ]
  },
  { name: "Promotions", icon: Ticket, path: "/promotions" },
  { name: "Supports", icon: Headset, path: "/supports"},
  { name: "Audit Log", icon: ScrollText, path: "/audit-log" },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
    hasSubmenu: true,
    subItems: [
      { name: "Purchasers", path: "/settings/purchasers" },
      { name: "Wholesalers", path: "/settings/wholesalers" },
      { name: "Retailers", path: "/settings/retailers" },
    ]
  },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation()
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const toggleMenu = (name: string) => {
    setOpenMenus(prev =>
      prev.includes(name)
        ? prev.filter(m => m !== name)
        : [...prev, name]
    )
  }

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-0 z-50 h-screen w-64 bg-white flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Section - Fixed at top */}
        <div className="pl-10 pr-6 pt-10 pb-6 mb-2 border-b border-transparent shrink-0 flex items-center justify-between">
          <img src={logo} alt="Zamsouq Logo" className="h-11 w-auto" />

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-slate-500 hover:text-slate-900"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto mb-2">
          <nav className="flex flex-col gap-4 pl-6 pr-2 py-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const isExpanded = openMenus.includes(item.name) || (item.subItems && location.pathname.startsWith(item.path))

              const content = (
                <>
                  <div className="flex items-center gap-4">
                    <item.icon
                      className={cn(
                        "h-5 w-5",
                        isActive ? "text-teal-600" : "text-slate-500"
                      )}
                    />
                    <span className="font-semibold">{item.name}</span>
                  </div>

                  {item.hasSubmenu && (
                    <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", isExpanded && "rotate-180")} />
                  )}
                </>
              )

              const commonClasses = cn(
                "flex items-center justify-between px-4 py-3 text-xs font-medium rounded-2xl transition-all duration-200 w-full",
                isActive
                  ? "bg-teal-50 text-teal-600 shadow-sm"
                  : "text-slate-600 hover:bg-slate-100/60 hover:text-slate-900"
              )

              return (
                <div key={item.name}>
                  {item.subItems ? (
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={commonClasses}
                    >
                      {content}
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => {
                        if (window.innerWidth < 1024) onClose()
                      }}
                      className={commonClasses}
                    >
                      {content}
                    </NavLink>
                  )}

                  {/* Sub-items */}
                  {item.subItems && isExpanded && (
                    <div className="mt-2 ml-9 flex flex-col gap-2">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            if (window.innerWidth < 1024) onClose()
                          }}
                          className={({ isActive: isSubActive }) => cn(
                            "px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200",
                            isSubActive
                              ? "text-teal-600 bg-teal-50/50"
                              : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                          )}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </div>

        {/* Profile Section - Fixed at bottom */}
        <div className="pl-6 pr-2 pt-8 pb-3 shrink-0">
          <div className="flex items-center justify-between px-2 py-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-all duration-200">
            <div className="flex items-center gap-4">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                alt="User avatar"
                className="h-8 w-11 rounded-full border-2 border-white shadow-sm"
              />

              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900">
                  John Doe
                </span>
                <span className="text-xs text-slate-500">
                  Admin@Fast.com
                </span>
              </div>
            </div>

            <ChevronsUpDown className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </aside>
    </>
  )
}
