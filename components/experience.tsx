'use client'

import { useEffect, useRef } from 'react'
import { Utensils, Moon, Coffee, IceCream2, Leaf, Heart, Users, Bike } from 'lucide-react'

const experiences = [
  {
    icon: Utensils,
    title: 'Lunch',
    subtitle: '12:01 PM – 3:30 PM',
    description:
      'Begin your afternoon with our signature Raja Bhojanam thali — a wholesome spread of authentic vegetarian flavours.',
    accent: '#C8A56B',
  },
  {
    icon: Moon,
    title: 'Dinner',
    subtitle: '7:00 PM – 10:30 PM',
    description:
      'Unwind with an elegant dinner experience. The ambience transforms at dusk into a warm, intimate space perfect for any occasion.',
    accent: '#4A6542',
  },
  {
    icon: Coffee,
    title: 'Great Coffee',
    subtitle: 'Expertly Crafted',
    description:
      'From rich filter coffee to aromatic teas, our beverage menu is designed to complement every meal.',
    accent: '#5A3825',
  },
  {
    icon: IceCream2,
    title: 'Great Desserts',
    subtitle: 'Sweet Endings',
    description:
      'Finish every meal on a high note. Our dessert selection blends Indian classics with modern indulgence.',
    accent: '#C8A56B',
  },
  {
    icon: Leaf,
    title: 'Vegetarian Only',
    subtitle: '100% Plant-Based',
    description:
      'A completely vegetarian kitchen committed to freshness, purity, and seasonal ingredients in every dish.',
    accent: '#4A6542',
  },
  {
    icon: Heart,
    title: 'Romantic Atmosphere',
    subtitle: 'Perfect for Dates',
    description:
      'Soft lighting, warm textures, and attentive service create the perfect setting for a memorable evening.',
    accent: '#C8A56B',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    subtitle: 'All Ages Welcome',
    description:
      'Generous portions, patient service, and a warm environment that makes every family visit feel special.',
    accent: '#5A3825',
  },
  {
    icon: Bike,
    title: 'Delivery & Takeaway',
    subtitle: 'On Your Terms',
    description:
      "Can't dine in? Enjoy the same Four Cups quality delivered to your door or ready for pickup.",
    accent: '#4A6542',
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 bg-[#F7F0E6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C8A56B]" />
            <span className="text-[#C8A56B] text-xs tracking-[0.3em] uppercase font-medium">
              The Experience
            </span>
            <div className="h-px w-12 bg-[#C8A56B]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E] font-bold mb-4 text-balance">
            Every Visit, <span className="italic text-[#5A3825]">Unforgettable</span>
          </h2>
          <p className="text-[#7A6352] text-lg max-w-xl mx-auto leading-relaxed">
            From the first bite to the last sip, Four Cups is designed to delight
            every sense.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="reveal group bg-white border border-[#DDD0BC] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.accent + '15' }}
                >
                  <Icon size={22} style={{ color: item.accent }} />
                </div>
                <h3 className="font-serif text-xl text-[#2C1A0E] font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#C8A56B] font-medium tracking-wider mb-3 uppercase">
                  {item.subtitle}
                </p>
                <p className="text-[#7A6352] text-sm leading-relaxed">
                  {item.description}
                </p>
                <div
                  className="h-0.5 w-0 group-hover:w-full mt-5 transition-all duration-500 rounded-full"
                  style={{ backgroundColor: item.accent }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
