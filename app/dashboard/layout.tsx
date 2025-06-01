import type React from "react"
import { Header } from "@/components/dashboard/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex justify-center">
        <main className="flex-1 p-6 max-w-7xl">{children}</main>
      </div>
    </div>
  )
}
