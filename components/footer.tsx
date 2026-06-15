'use client'

import Image from 'next/image'
import { MapPin, Phone, Clock } from 'lucide-react'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1A0D05] text-[#F7F0E6]/70">
      {/* Top CTA strip */}
      <div className="bg-[#C8A56B] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-xl text-[#2C1A0E] font-bold">
              Ready for an exceptional meal?
            </p>
            <p className="text-[#2C1A0E]/70 text-sm mt-0.5">
              Reserve your table or call us today.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+917708474764"
              className="bg-[#2C1A0E] text-[#C8A56B] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#5A3825] transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://www.google.com/maps?q=Four+Cups+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2C1A0E]/40 text-[#2C1A0E] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2C1A0E]/10 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="Four Cups Logo"
              width={48}
              height={48}
              className="object-contain"
              style={{ width: 48, height: 48 }}
            />
            <div>
              <p className="font-serif text-[#F7F0E6] text-base font-bold leading-none">
                FOUR CUPS
              </p>
              <p className="text-[#C8A56B] text-[10px] tracking-[0.2em] uppercase mt-0.5">
                Fusion Veg Dining
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[#F7F0E6]/50 mt-4">
            An elevated vegetarian dining experience in the heart of Coimbatore,
            blending authentic flavour with modern elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#F7F0E6] font-serif text-base font-semibold mb-5 tracking-wide">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-[#F7F0E6]/50 hover:text-[#C8A56B] transition-colors text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-[#F7F0E6] font-serif text-base font-semibold mb-5 tracking-wide">
            Opening Hours
          </h4>
          <div className="flex gap-3 mb-4">
            <Clock size={15} className="text-[#C8A56B] mt-0.5 flex-shrink-0" />
            <div className="flex flex-col gap-2 text-sm">
              <div>
                <p className="text-[#F7F0E6]/40 text-xs uppercase tracking-wider mb-1">Lunch</p>
                <p className="text-[#F7F0E6]/70">Mon – Sun</p>
                <p className="text-[#C8A56B] font-medium">12:01 PM – 3:30 PM</p>
              </div>
              <div>
                <p className="text-[#F7F0E6]/40 text-xs uppercase tracking-wider mb-1">Dinner</p>
                <p className="text-[#F7F0E6]/70">Mon – Sun</p>
                <p className="text-[#C8A56B] font-medium">7:00 PM – 10:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#F7F0E6] font-serif text-base font-semibold mb-5 tracking-wide">
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            <a href="tel:+917708474764" className="flex gap-3 group">
              <Phone size={15} className="text-[#C8A56B] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-[#F7F0E6]/70 group-hover:text-[#C8A56B] transition-colors">
                +91 77084 74764
              </span>
            </a>
            <a
              href="https://www.google.com/maps?q=Four+Cups+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 group"
            >
              <MapPin size={15} className="text-[#C8A56B] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-[#F7F0E6]/70 group-hover:text-[#C8A56B] transition-colors leading-relaxed">
                1st Floor, Fortune Suites<br />
                134, E Periasamy Rd<br />
                R.S. Puram, Coimbatore – 641002
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#F7F0E6]/30">
            &copy; {new Date().getFullYear()} Four Cups. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4A6542]" />
            <p className="text-xs text-[#F7F0E6]/30">100% Vegetarian</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
