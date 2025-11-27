"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, LogOut, Home, Calendar, FileText, BarChart3, Users } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole: "PATIENT" | "SECRETARY" | "DOCTOR"
  userName: string
}

export function DashboardLayout({ children, userRole, userName }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/")
  }

  const getMenuItems = () => {
    const common = [{ icon: Home, label: "Tableau de bord", href: `/${userRole.toLowerCase()}/dashboard` }]

    if (userRole === "PATIENT") {
      return [
        ...common,
        { icon: Calendar, label: "Mes rendez-vous", href: "/patient/appointments" },
        { icon: FileText, label: "Mes consultations", href: "/patient/consultations" },
      ]
    }

    if (userRole === "SECRETARY") {
      return [
        ...common,
        { icon: Calendar, label: "Gestion RDV", href: "/secretary/appointments" },
        { icon: Users, label: "Patients", href: "/secretary/patients" },
        { icon: FileText, label: "Messages", href: "/secretary/messages" },
      ]
    }

    if (userRole === "DOCTOR") {
      return [
        ...common,
        { icon: Calendar, label: "Mes rendez-vous", href: "/doctor/appointments" },
        { icon: FileText, label: "Consultations", href: "/doctor/consultations" },
        { icon: BarChart3, label: "Statistiques", href: "/doctor/statistics" },
        { icon: Users, label: "Patients", href: "/doctor/patients" },
      ]
    }

    return common
  }

  const menuItems = getMenuItems()

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Mobile Header */}
      <header className="md:hidden bg-white border-b border-muted sticky top-0 z-40">
        <div className="flex items-center justify-between p-4">
          <h1 className="font-bold text-lg text-primary">DentaCare</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2" aria-label="Menu">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed md:static w-64 h-screen bg-white border-r border-muted transition-transform duration-300 transform md:transform-none z-30 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-6 border-b border-muted">
            <h1 className="hidden md:block font-bold text-lg text-primary">DentaCare</h1>
            <div className="mt-4">
              <p className="font-semibold text-foreground">{userName}</p>
              <p className="text-sm text-muted-foreground capitalize">{userRole.toLowerCase()}</p>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground hover:bg-primary-light hover:text-primary transition"
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
          >
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-0">
          <div className="p-4 md:p-8">{children}</div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 md:hidden z-20" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
