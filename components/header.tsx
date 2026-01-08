"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "À propos", href: "#about" },
  { name: "Expérience", href: "#experience" },
  { name: "Projets", href: "#projects" },
  { name: "Compétences", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
          {"<LM />"}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                <span className="text-primary font-mono text-xs mr-1">0{index + 1}.</span>
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/cv-lucas-mary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col items-center justify-center gap-8 pt-20">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary font-mono text-sm mr-2">0{index + 1}.</span>
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/cv-lucas-mary.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
