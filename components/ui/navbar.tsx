"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      
      {/* logo */}
      <span className="text-emerald-500 font-bold text-xl">FocusBrew</span>

      {/* botão hamburguer */}
      <Button
        variant="ghost"
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white"
      >
        {menuOpen ? <X /> : <Menu />}
      </Button>

      {/* menu dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-zinc-900 border border-zinc-700 rounded-xl p-4 flex flex-col gap-3">
          <a href="#" className="text-white hover:text-emerald-500">Home</a>
          <a href="#" className="text-white hover:text-emerald-500">Features</a>
          <a href="#" className="text-white hover:text-emerald-500">Pricing</a>
          <a href="#" className="text-white hover:text-emerald-500">Contact</a>
        </div>
      )}

    </nav>
  )
}