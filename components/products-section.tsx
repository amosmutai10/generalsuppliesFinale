import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Package, Hammer, Shield, Droplets } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      title: "Premium Supplies",
      description: "High-quality materials and supplies for professional applications across multiple industries.",
      image: "/premium-industrial-supplies-and-materials.jpg",
      buttonText: "View Supplies",
      href: "/building-materials",
      icon: Package,
    },
    {
      title: "Building Materials",
      description:
        "Comprehensive range of construction materials including structural components and finishing supplies.",
      image: "/construction-building-materials-and-tools.jpg",
      buttonText: "View Materials",
      href: "/building-materials",
      icon: Hammer,
    },
    {
      title: "Fencing Materials",
      description:
        "Complete fencing solutions including posts, panels, gates, and accessories for residential and commercial applications.",
      image: "/fencing-materials-and-supplies.jpg",
      buttonText: "View Fencing",
      href: "/fencing-materials",
      icon: Shield,
    },
    {
      title: "Water Tanks and Systems",
      description:
        "Superior high-capacity water storage solutions for domestic, agricultural, and industrial use. Including tanks and accessories.",
      image: "/water-storage-tanks-and-systems.jpg",
      buttonText: "View Systems",
      href: "/water-systems",
      icon: Droplets,
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of premium products designed to meet all your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <div key={index} className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <Link href={product.href}>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      {product.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
