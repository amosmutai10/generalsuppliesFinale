import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandCarousel } from "@/components/brand-carousel"
import { ImpactSection } from "@/components/impact-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BrandCarousel />
      <ImpactSection />
      <WhyChooseUs />
      <ProductsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
