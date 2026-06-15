'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#2C1A0E]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/images/logo.png"
              alt="Four Cups – Fusion Veg Dining"
              width={52}
              height={52}
              className="object-contain rounded-sm transition-transform duration-300 group-hover:scale-105"
              style={{ width: 52, height: 52 }}
            />
            <div className="hidden sm:block">
              <p className="font-serif text-[#F7F0E6] text-lg font-bold leading-none tracking-wide">
                FOUR CUPS
              </p>
              <p className="text-[#C8A56B] text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">
                Fusion Veg Dining
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#F7F0E6]/90 hover:text-[#C8A56B] text-sm tracking-wider uppercase font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8A56B] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917708474764"
              className="flex items-center gap-2 text-[#C8A56B] border border-[#C8A56B]/40 hover:border-[#C8A56B] hover:bg-[#C8A56B]/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            >
              <Phone size={14} />
              Call Now
            </a>
            <button
              onClick={() => handleNavClick('#visit')}
              className="bg-[#C8A56B] hover:bg-[#E8C98A] text-[#2C1A0E] px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#F7F0E6] p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-[#2C1A0E]/98 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-[#C8A56B]/20">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#F7F0E6]/90 hover:text-[#C8A56B] text-base py-3 text-left tracking-wider uppercase font-medium transition-colors duration-200 border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="tel:+917708474764"
                className="flex items-center justify-center gap-2 text-[#C8A56B] border border-[#C8A56B]/50 px-4 py-3 rounded-full text-sm font-medium"
              >
                <Phone size={14} />
                +91 77084 74764
              </a>
              <button
                onClick={() => handleNavClick('#visit')}
                className="bg-[#C8A56B] text-[#2C1A0E] px-5 py-3 rounded-full text-sm font-semibold"
              >
                Reserve a Table
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
