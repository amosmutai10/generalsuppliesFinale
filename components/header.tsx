"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/building-materials", label: "Building Materials" },
    { href: "/fencing-materials", label: "Fencing Materials" },
    { href: "/water-systems", label: "Water Tanks and Systems" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/40 transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="hidden md:block bg-primary/5 border-b border-border/20">
        <div className="container flex h-10 max-w-screen-xl items-center justify-between px-4 text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@generalsupplies.com</span>
            </div>
          </div>
          <div className="text-muted-foreground">Mon-Fri: 8AM-6PM | Sat: 8AM-4PM</div>
        </div>
      </div>

      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">GS</span>
          </div>
          <span className="font-bold text-xl text-foreground">General Supplies</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors font-medium ${
                pathname === item.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => {
              const message = "Hi! I'd like to inquire about your products and services."
              const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, "_blank")
            }}
          >
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border/40 md:hidden shadow-lg">
            <nav className="container px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block transition-colors font-medium py-2 ${
                    pathname === item.href
                      ? "text-primary border-l-4 border-primary pl-4"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/40">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    const message = "Hi! I'd like to inquire about your products and services."
                    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, "_blank")
                    setIsMenuOpen(false)
                  }}
                >
                  WhatsApp Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
