"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Users, UserPlus, LayoutDashboard } from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "All Users",
    href: "/dashboard",
    icon: Users,
  },
  {
    name: "Add User",
    href: "/dashboard/add",
    icon: UserPlus,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r border-gray-200 dark:border-gray-800 glass-effect min-h-screen">
      <nav className="p-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
