'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

export default function Visit() {
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
    <section id="visit" ref={sectionRef} className="py-24 md:py-32 bg-[#F7F0E6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C8A56B]" />
            <span className="text-[#C8A56B] text-xs tracking-[0.3em] uppercase font-medium">
              Find Us
            </span>
            <div className="h-px w-12 bg-[#C8A56B]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E] font-bold mb-4 text-balance">
            Visit <span className="italic text-[#5A3825]">Four Cups</span>
          </h2>
          <p className="text-[#7A6352] text-lg max-w-xl mx-auto leading-relaxed">
            We&apos;re conveniently located in the heart of R.S. Puram, Coimbatore.
            Come as you are, leave delighted.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Info card */}
          <div className="lg:col-span-2 reveal">
            <div className="bg-[#5A3825] rounded-2xl overflow-hidden shadow-2xl shadow-[#5A3825]/20">
              {/* Header strip */}
              <div className="bg-[#C8A56B] px-6 py-4">
                <h3 className="font-serif text-2xl text-[#2C1A0E] font-bold">FOUR CUPS</h3>
                <p className="text-[#2C1A0E]/70 text-xs tracking-widest uppercase mt-0.5">
                  Fusion Veg Dining
                </p>
              </div>

              <div className="p-6 flex flex-col gap-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A56B]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-[#C8A56B]" />
                  </div>
                  <div>
                    <p className="text-[#C8A56B] text-xs tracking-widest uppercase font-medium mb-1">
                      Address
                    </p>
                    <address className="not-italic text-[#F7F0E6]/80 text-sm leading-relaxed">
                      1st Floor, Fortune Suites<br />
                      134, E Periasamy Rd<br />
                      Above Poppet Jamal<br />
                      R.S. Puram, Coimbatore<br />
                      Tamil Nadu – 641002
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A56B]/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#C8A56B]" />
                  </div>
                  <div>
                    <p className="text-[#C8A56B] text-xs tracking-widest uppercase font-medium mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+917708474764"
                      className="text-[#F7F0E6] text-sm font-medium hover:text-[#C8A56B] transition-colors"
                    >
                      +91 77084 74764
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A56B]/15 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#C8A56B]" />
                  </div>
                  <div>
                    <p className="text-[#C8A56B] text-xs tracking-widest uppercase font-medium mb-2">
                      Opening Hours
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                        <span className="text-[#F7F0E6]/70 text-xs">Mon – Sun (Lunch)</span>
                        <span className="text-[#F7F0E6] text-xs font-medium">12:01 – 3:30 PM</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                        <span className="text-[#F7F0E6]/70 text-xs">Mon – Sun (Dinner)</span>
                        <span className="text-[#F7F0E6] text-xs font-medium">7:00 – 10:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href="tel:+917708474764"
                    className="flex items-center justify-center gap-2 bg-[#C8A56B] hover:bg-[#E8C98A] text-[#2C1A0E] py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md"
                  >
                    <Phone size={15} />
                    Call Now
                  </a>
                  <a
                    href="https://www.google.com/maps?q=Four+Cups+134+E+Periasamy+Rd+RS+Puram+Coimbatore+641002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-[#C8A56B]/50 hover:border-[#C8A56B] text-[#F7F0E6] hover:text-[#C8A56B] py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                  >
                    <ExternalLink size={15} />
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-3 reveal">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#DDD0BC] h-[420px] lg:h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3!2d76.9541!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b0f6c3d2f7%3A0x0!2sFortune+Suites%2C+134+E+Periasamy+Rd%2C+R.S.+Puram%2C+Coimbatore%2C+Tamil+Nadu+641002!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Four Cups Location Map"
              />
            </div>
            <p className="text-center text-[#7A6352] text-xs mt-3 tracking-wide">
              1st Floor, Fortune Suites, 134 E Periasamy Rd, R.S. Puram, Coimbatore – 641002
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
