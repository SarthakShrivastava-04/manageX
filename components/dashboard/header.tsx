"use client"

import { Moon, Sun, Users } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 glass-effect sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
            <Users className="h-5 w-5 text-white dark:text-black" />
          </div>
          <span className="text-xl font-bold text-black dark:text-white">UserDash</span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="h-10 w-10 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
