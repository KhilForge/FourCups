'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, Download } from 'lucide-react'

export default function MenuSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <section id="menu" ref={sectionRef} className="py-24 md:py-32 bg-[#2C1A0E]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C8A56B]/50" />
            <span className="text-[#C8A56B] text-xs tracking-[0.3em] uppercase font-medium">
              Our Menu
            </span>
            <div className="h-px w-12 bg-[#C8A56B]/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F7F0E6] font-bold mb-4 text-balance">
            Explore Our <span className="italic text-[#C8A56B]">Menu</span>
          </h2>
          <p className="text-[#F7F0E6]/60 text-base max-w-xl mx-auto leading-relaxed">
            Crafted with care, served with love. Every dish tells the story of
            authentic vegetarian tradition reimagined.
          </p>
        </div>

        {/* Menu card */}
        <div className="reveal">
          {/* Thali title */}
          <div className="text-center mb-8">
            <div className="inline-block border border-[#C8A56B]/40 rounded-2xl px-8 py-4 bg-[#C8A56B]/5">
              <p className="text-[#C8A56B] text-xs tracking-[0.25em] uppercase mb-1 font-medium">
                Signature Thali
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-[#F7F0E6] font-bold">
                The Mighty Raja Bhojanam
              </h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="h-px w-8 bg-[#C8A56B]/50" />
                <span className="font-serif text-2xl text-[#C8A56B] font-bold">₹300</span>
                <div className="h-px w-8 bg-[#C8A56B]/50" />
              </div>
            </div>
          </div>

          {/* Menu image — elegant frame */}
          <div
            className="group relative cursor-zoom-in mx-auto max-w-md"
            onClick={() => setIsOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
            aria-label="Click to enlarge menu"
          >
            {/* Frame decorations */}
            <div className="absolute -inset-3 border border-[#C8A56B]/20 rounded-2xl pointer-events-none" />
            <div className="absolute -inset-6 border border-[#C8A56B]/10 rounded-3xl pointer-events-none" />

            <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-black/50 border border-[#C8A56B]/30">
              <Image
                src="/images/menu-bhojanam.png"
                alt="The Mighty Raja Bhojanam Menu – ₹300"
                width={450}
                height={600}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#2C1A0E]/0 group-hover:bg-[#2C1A0E]/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2 text-[#F7F0E6]">
                  <ZoomIn size={32} className="drop-shadow-lg" />
                  <span className="text-sm font-medium tracking-wider">Click to enlarge</span>
                </div>
              </div>
            </div>

            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C8A56B] rounded-tl-sm" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C8A56B] rounded-tr-sm" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C8A56B] rounded-bl-sm" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C8A56B] rounded-br-sm" />
          </div>

          {/* Download button */}
          <div className="text-center mt-8">
            <a
              href="/images/menu-bhojanam.png"
              download="FourCups-Menu.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#C8A56B]/50 hover:border-[#C8A56B] text-[#C8A56B] hover:bg-[#C8A56B]/10 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
            >
              <Download size={14} />
              Download Menu
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Menu enlarged view"
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu view"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-lg w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/menu-bhojanam.png"
              alt="The Mighty Raja Bhojanam Menu – ₹300"
              width={600}
              height={800}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
