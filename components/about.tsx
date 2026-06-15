'use client'

import { useEffect, useRef } from 'react'
import {
  Leaf,
  Users,
  Star,
  Heart,
  Coffee,
  IceCream,
  Sprout,
  DoorOpen,
  UtensilsCrossed,
} from 'lucide-react'

const highlights = [
  { icon: UtensilsCrossed, label: 'Fusion Veg Dining' },
  { icon: Users, label: 'Family Friendly' },
  { icon: Star, label: 'Premium Ambience' },
  { icon: Heart, label: 'Romantic Dining' },
  { icon: IceCream, label: 'Great Desserts' },
  { icon: Coffee, label: 'Great Coffee & Tea' },
  { icon: Sprout, label: 'Vegan Options' },
  { icon: DoorOpen, label: 'Private Dining' },
  { icon: Leaf, label: 'Table Service' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-[#F7F0E6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C8A56B]" />
            <span className="text-[#C8A56B] text-xs tracking-[0.3em] uppercase font-medium">
              Our Story
            </span>
            <div className="h-px w-12 bg-[#C8A56B]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E] font-bold mb-5 text-balance">
            Why <span className="italic text-[#5A3825]">Four Cups?</span>
          </h2>
          <p className="text-[#7A6352] text-lg max-w-2xl mx-auto leading-relaxed">
            A cozy and elevated vegetarian dining experience blending comfort,
            quality ingredients, and memorable hospitality.
          </p>
        </div>

        {/* Two-column layout: text + decorative */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="reveal">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 border-2 border-[#C8A56B]/30 rounded-sm" />
              <div className="bg-[#5A3825] rounded-2xl p-10 shadow-2xl shadow-[#5A3825]/20 relative">
                <p className="font-serif text-2xl italic text-[#C8A56B] leading-relaxed mb-6">
                  &ldquo;Where every meal tells a story of flavour, love, and tradition.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-px bg-[#C8A56B]/60" />
                  <p className="text-[#F7F0E6]/70 text-sm tracking-widest uppercase">
                    Four Cups Philosophy
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: '100%', label: 'Vegetarian' },
                    { value: '₹300', label: 'Thali Price' },
                    { value: '2x', label: 'Daily Service' },
                    { value: '★ 4.8', label: 'Guest Rating' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="font-serif text-2xl text-[#C8A56B] font-bold">{stat.value}</p>
                      <p className="text-[#F7F0E6]/60 text-xs tracking-wider mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 border-2 border-[#C8A56B]/30 rounded-sm" />
            </div>
          </div>

          <div className="reveal">
            <p className="text-[#5A3825] text-lg leading-relaxed mb-6">
              Nestled on the 1st floor of Fortune Suites in R.S. Puram, Four Cups is
              Coimbatore&apos;s destination for refined vegetarian dining. We bring together
              authentic South Indian flavours with a modern sensibility to create
              something truly special.
            </p>
            <p className="text-[#7A6352] text-base leading-relaxed mb-8">
              Whether you&apos;re here for a quick lunch thali or a romantic dinner, every
              visit is crafted with care — from the warm lighting to the final dessert
              on your plate.
            </p>
            <div className="flex flex-col gap-3">
              {['Wholesome, freshly prepared ingredients', 'Curated vegetarian & vegan menu', 'Warm, attentive table service'].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4A6542] flex items-center justify-center flex-shrink-0">
                    <Leaf size={10} className="text-white" />
                  </div>
                  <span className="text-[#5A3825] text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="reveal">
          <h3 className="text-center font-serif text-2xl text-[#2C1A0E] font-semibold mb-8">
            What We Offer
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-3 p-4 bg-white rounded-2xl shadow-sm shadow-[#5A3825]/5 border border-[#DDD0BC] hover:border-[#C8A56B] hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div                 className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: 'rgba(90,56,37,0.08)' }}>
                  <Icon size={18} className="text-[#5A3825] group-hover:text-[#C8A56B] transition-colors duration-200" />
                </div>
                <span className="text-[#5A3825] text-xs font-medium text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
