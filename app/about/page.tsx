import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container max-w-screen-xl px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            ABOUT GENERAL SUPPLIES
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Building Stronger Communities</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Your trusted global partner for quality supplies across industries. We deliver excellence in every product
            and service.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-background">
        <div className="container max-w-screen-xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                General Supplies has been at the forefront of providing premium construction materials, fencing
                solutions, and water tanks and systems for over two decades. We understand that every project, whether
                residential or commercial, deserves the highest quality materials and expert support.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our commitment to excellence has made us a trusted partner for contractors, builders, and homeowners
                across the region. We combine international standards with local expertise to deliver solutions that
                stand the test of time.
              </p>
              <Button className="bg-primary hover:bg-primary/90">Get in Touch</Button>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="General Supplies warehouse"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-screen-xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We source only the finest materials that meet international standards and exceed expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Our experienced team provides professional guidance and support throughout your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Reliable Delivery</h3>
              <p className="text-muted-foreground">
                Worldwide delivery with tracking and timely arrival to keep your projects on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
