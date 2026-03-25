import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import BrandsSection from '@/components/BrandsSection'
import AboutSection from '@/components/AboutSection'
import MaterialsSection from '@/components/MaterialsSection'
import UgradnjaSection from '@/components/UgradnjaSection'
import AlatiSection from '@/components/AlatiSection'
import InspirationSection from '@/components/InspirationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden w-full">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="brendovi">
          <BrandsSection />
        </section>
        <section id="o-nama">
          <AboutSection />
        </section>
        <section id="materijali">
          <MaterialsSection />
        </section>
        <section id="ugradnja">
          <UgradnjaSection />
        </section>
        <section id="alati">
          <AlatiSection />
        </section>
        <section id="inspiracija">
          <InspirationSection />
        </section>
        <section id="kontakt">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
