import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-screen-xl px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At General Supplies, we collect information you provide directly to us, such as when you create an
                account, make a purchase, or contact us for support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services, process transactions,
                and communicate with you about your orders and our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at info@generalsupplies.co.ke or
                call +254 700 123 456.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
