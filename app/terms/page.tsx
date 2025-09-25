import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-screen-xl px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using General Supplies services, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily use our services for personal, non-commercial transitory viewing
                only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to provide accurate product information, but we do not warrant that product descriptions or
                other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about the Terms of Service should be sent to us at info@generalsupplies.co.ke or call +254 700
                123 456.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
