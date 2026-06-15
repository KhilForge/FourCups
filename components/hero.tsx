'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MapPin, Clock } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        ref={heroRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: '-10%', height: '120%' }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Four Cups restaurant interior"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0D05]/70 via-[#1A0D05]/50 to-[#1A0D05]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="Four Cups Logo"
              width={130}
              height={130}
              className="object-contain drop-shadow-2xl animate-float"
              style={{ width: 130, height: 130 }}
              loading="eager"
              priority
            />
          </div>
        </div>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in animate-delay-100">
          <div className="h-px w-16 bg-[#C8A56B]/60" />
          <span className="text-[#C8A56B] text-xs tracking-[0.3em] uppercase font-medium">
            Fusion Veg Dining
          </span>
          <div className="h-px w-16 bg-[#C8A56B]/60" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight text-balance mb-5 animate-fade-in-up animate-delay-200">
          Fusion Vegetarian{' '}
          <span className="italic text-[#C8A56B]">Dining</span>{' '}
          Reimagined
        </h1>

        {/* Subheadline */}
        <p className="text-[#F7F0E6]/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up animate-delay-300">
          From wholesome meals to elegant dining experiences in the heart of
          Coimbatore.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up animate-delay-400">
          <button
            onClick={() => scrollTo('#menu')}
            className="bg-[#C8A56B] hover:bg-[#E8C98A] text-[#2C1A0E] px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-[#C8A56B]/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollTo('#visit')}
            className="border border-[#F7F0E6]/60 hover:border-[#C8A56B] text-[#F7F0E6] hover:text-[#C8A56B] px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
          >
            Reserve Table
          </button>
          <a
            href="https://www.google.com/maps?q=Four+Cups+134+E+Periasamy+Rd+RS+Puram+Coimbatore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#F7F0E6]/30 hover:border-[#C8A56B]/60 text-[#F7F0E6]/80 hover:text-[#C8A56B] px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
          >
            <MapPin size={14} />
            Get Directions
          </a>
        </div>

        {/* Hours badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 animate-fade-in-up animate-delay-500">
          <Clock size={14} className="text-[#C8A56B]" />
          <span className="text-[#F7F0E6] text-sm font-medium">
            Open Daily
          </span>
          <span className="text-[#C8A56B] text-sm">•</span>
          <span className="text-[#F7F0E6]/80 text-sm">
            12:01–3:30 PM &amp; 7:00–10:30 PM
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-60">
        <div className="w-px h-8 bg-[#C8A56B]/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C8A56B]" />
      </div>
    </section>
  )
}
