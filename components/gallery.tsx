'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/gallery-thali.png',
    alt: 'Premium South Indian vegetarian thali',
    caption: 'The Raja Bhojanam',
    span: 'row-span-2',
  },
  {
    src: '/images/gallery-dining.png',
    alt: 'Elegant dining table setup at Four Cups',
    caption: 'Fine Dining Ambience',
    span: '',
  },
  {
    src: '/images/gallery-dessert.png',
    alt: 'Luxurious Indian dessert presentation',
    caption: 'Sweet Endings',
    span: '',
  },
  {
    src: '/images/gallery-coffee.png',
    alt: 'South Indian filter coffee',
    caption: 'Filter Coffee',
    span: 'row-span-2',
  },
  {
    src: '/images/gallery-interior.png',
    alt: 'Cozy restaurant interior at Four Cups',
    caption: 'Our Space',
    span: '',
  },
  {
    src: '/images/gallery-family.png',
    alt: 'Family dining at Four Cups',
    caption: 'Family Moments',
    span: '',
  },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeImage, setActiveImage] = useState<(typeof galleryImages)[0] | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeImage])

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-[#2C1A0E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C8A56B]/50" />
            <span className="text-[#C8A56B] text-xs tracking-[0.3em] uppercase font-medium">
              Visual Story
            </span>
            <div className="h-px w-12 bg-[#C8A56B]/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F7F0E6] font-bold mb-4 text-balance">
            A Feast for the <span className="italic text-[#C8A56B]">Eyes</span>
          </h2>
          <p className="text-[#F7F0E6]/60 text-lg max-w-xl mx-auto leading-relaxed">
            Every corner of Four Cups is crafted to delight — from the plating
            to the ambience.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${img.span}`}
              onClick={() => setActiveImage(img)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveImage(img)}
              aria-label={`View ${img.caption}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D05]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-full p-2">
                <ZoomIn size={16} className="text-white" />
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-serif text-sm font-medium">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
            onClick={() => setActiveImage(null)}
            aria-label="Close image"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-3xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <p className="text-center text-[#C8A56B] font-serif text-lg mt-4">
              {activeImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
