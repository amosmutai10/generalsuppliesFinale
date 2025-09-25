import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container max-w-screen-xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
        <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Join thousands of satisfied customers worldwide. Contact us today for a personalized quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Get Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
