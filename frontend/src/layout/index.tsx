import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "./sidebar"
import { Header } from "./header"

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* Sidebar - Fixed width 64rem (256px) */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area - Remaining width */}
      <div className="flex-1 lg:ml-64 min-h-screen transition-all">
        {/* Header - Fixed height 16rem (64px) */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content - Padded from Top and Side */}
        <main className="pt-16 p-4 lg:p-6 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  )
}