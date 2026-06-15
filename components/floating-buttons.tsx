'use client'

import { useState, useEffect } from 'react'
import { Phone, CalendarDays, ArrowUp } from 'lucide-react'

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
      setShowBackToTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollToVisit = () => {
    const el = document.querySelector('#visit')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-[#EDE5D8] border border-[#DDD0BC] text-[#5A3825] rounded-full flex items-center justify-center shadow-md hover:bg-[#DDD0BC] transition-all duration-200 hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      {/* Reserve table */}
      <button
        onClick={scrollToVisit}
        className="flex items-center gap-2 bg-[#5A3825] hover:bg-[#4A2E1C] text-[#F7F0E6] px-4 py-3 rounded-full shadow-xl shadow-[#5A3825]/30 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
        aria-label="Reserve a table"
      >
        <CalendarDays size={15} />
        <span className="hidden sm:inline">Reserve Table</span>
      </button>

      {/* Call button */}
      <a
        href="tel:+917708474764"
        className="flex items-center gap-2 bg-[#C8A56B] hover:bg-[#E8C98A] text-[#2C1A0E] px-4 py-3 rounded-full shadow-xl shadow-[#C8A56B]/30 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
        aria-label="Call Four Cups"
      >
        <Phone size={15} />
        <span className="hidden sm:inline">Call Now</span>
      </a>
    </div>
  )
}
