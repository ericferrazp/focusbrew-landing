"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      <SidebarTrigger className="text-white bg-zinc-800 hover:bg-zinc-700" />
    </nav>
  )
}