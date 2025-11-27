"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-muted bg-white sticky top-0 z-50">
      <nav className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg text-primary">
          DentaCare
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-foreground hover:text-primary transition">
            Accueil
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary transition">
            Services
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition">
            Contact
          </Link>

          <div className="flex gap-4 ml-4">
            <Link
              href="/login"
              className="px-6 py-2 text-primary border-2 border-primary rounded-lg hover:bg-blue-50 transition font-semibold"
            >
              Connexion
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              S'inscrire
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-muted md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <Link href="/" className="text-foreground hover:text-primary transition">
                Accueil
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition">
                Services
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition">
                Contact
              </Link>

              <div className="flex flex-col gap-2 pt-4 border-t border-muted">
                <Link
                  href="/login"
                  className="px-6 py-2 text-center text-primary border-2 border-primary rounded-lg hover:bg-blue-50 transition font-semibold"
                >
                  Connexion
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 text-center bg-primary text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
