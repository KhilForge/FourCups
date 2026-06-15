'use client'

import { useEffect, useRef } from 'react'
import {
  ParkingCircle,
  DoorOpen,
  Armchair,
  ShieldCheck,
  Truck,
  ShoppingBag,
  UtensilsCrossed,
  Package,
  CreditCard,
  Smartphone,
  Nfc,
  CircleParking,
} from 'lucide-react'

const groups = [
  {
    title: 'Accessibility',
    color: '#4A6542',
    items: [
      { icon: ParkingCircle, label: 'Wheelchair Accessible Parking' },
      { icon: DoorOpen, label: 'Accessible Entrance' },
      { icon: Armchair, label: 'Accessible Seating' },
      { icon: ShieldCheck, label: 'Accessible Restroom' },
    ],
  },
  {
    title: 'Services',
    color: '#5A3825',
    items: [
      { icon: Truck, label: 'Delivery' },
      { icon: ShoppingBag, label: 'Takeaway' },
      { icon: UtensilsCrossed, label: 'Dine-in' },
      { icon: Package, label: 'No-contact Delivery' },
    ],
  },
  {
    title: 'Payments',
    color: '#C8A56B',
    items: [
      { icon: CreditCard, label: 'Credit Card' },
      { icon: CreditCard, label: 'Debit Card' },
      { icon: Smartphone, label: 'Google Pay' },
      { icon: Nfc, label: 'NFC Payments' },
    ],
  },
  {
    title: 'Parking',
    color: '#2C1A0E',
    items: [
      { icon: CircleParking, label: 'Paid Parking Lot' },
      { icon: CircleParking, label: 'Paid Street Parking' },
    ],
  },
]

export default function Accessibility() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#EDE5D8]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C8A56B]" />
            <span className="text-[#C8A56B] text-xs tracking-[0.3em] uppercase font-medium">
              For Your Comfort
            </span>
            <div className="h-px w-12 bg-[#C8A56B]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E] font-bold mb-4 text-balance">
            Accessibility &amp;{' '}
            <span className="italic text-[#5A3825]">Services</span>
          </h2>
          <p className="text-[#7A6352] text-lg max-w-xl mx-auto leading-relaxed">
            We&apos;ve thought of everything to make your visit as comfortable and
            convenient as possible.
          </p>
        </div>

        {/* Groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="reveal bg-white rounded-2xl shadow-sm border border-[#DDD0BC] overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Group header */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ backgroundColor: group.color }}
              >
                <h3 className="text-white font-serif text-lg font-semibold tracking-wide">
                  {group.title}
                </h3>
              </div>
              {/* Items */}
              <ul className="px-6 py-5 flex flex-col gap-3">
                {group.items.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: group.color + '15' }}
                    >
                      <Icon size={15} style={{ color: group.color }} />
                    </div>
                    <span className="text-[#5A3825] text-sm font-medium">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
