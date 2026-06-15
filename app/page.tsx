import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import MenuSection from '@/components/menu-section'
import Experience from '@/components/experience'
import Accessibility from '@/components/accessibility'
import Gallery from '@/components/gallery'
import Visit from '@/components/visit'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Experience />
      <Accessibility />
      <Gallery />
      <Visit />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
