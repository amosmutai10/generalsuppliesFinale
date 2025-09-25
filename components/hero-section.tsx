import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/industrial-warehouse-with-supplies-and-equipment-b.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Premium General & Construction Solutions</h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
          Your trusted global partner for quality supplies, building materials, fencing products, and water tanks and
          systems. Building stronger communities worldwide.
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Explore Products
        </Button>
      </div>
    </section>
  )
}
