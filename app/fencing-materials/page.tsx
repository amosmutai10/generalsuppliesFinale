import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product-gallery"

const fencingMaterialsProducts = [
  {
    id: "chain-link-6ft",
    name: "Chain Link Fencing 6ft",
    price: "KSh 850",
    image: "/chain-link-fence-galvanized-steel.jpg",
    category: "Chain Link",
  },
  {
    id: "chain-link-8ft",
    name: "Chain Link Fencing 8ft",
    price: "KSh 1200",
    image: "/tall-chain-link-fence-galvanized-steel.jpg",
    category: "Chain Link",
  },
  {
    id: "welded-mesh-panel",
    name: "Welded Mesh Panel 2x3m",
    price: "KSh 2500",
    image: "/welded-wire-mesh-fence-panel.jpg",
    category: "Mesh",
  },
  {
    id: "barbed-wire-roll",
    name: "Barbed Wire Roll 100m",
    price: "KSh 3200",
    image: "/barbed-wire-coil-galvanized.jpg",
    category: "Wire",
  },
  {
    id: "fence-posts-concrete",
    name: "Concrete Fence Posts 2.4m",
    price: "KSh 450",
    image: "/concrete-fence-post-precast.jpg",
    category: "Posts",
  },
  {
    id: "fence-posts-steel",
    name: "Steel Fence Posts 2.4m",
    price: "KSh 680",
    image: "/galvanized-steel-fence-post.jpg",
    category: "Posts",
  },
  {
    id: "gate-single",
    name: "Single Gate 1.2m Wide",
    price: "KSh 4500",
    image: "/metal-fence-gate-single-swing.jpg",
    category: "Gates",
  },
  {
    id: "gate-double",
    name: "Double Gate 3m Wide",
    price: "KSh 8500",
    image: "/metal-fence-gate-double-swing.jpg",
    category: "Gates",
  },
  {
    id: "razor-wire",
    name: "Razor Wire Coil 10m",
    price: "KSh 1800",
    image: "/placeholder.svg?height=300&width=300",
    category: "Security",
  },
  {
    id: "electric-fence-wire",
    name: "Electric Fence Wire 500m",
    price: "KSh 2200",
    image: "/placeholder.svg?height=300&width=300",
    category: "Electric",
  },
  {
    id: "fence-brackets",
    name: "Fence Brackets Set of 10",
    price: "KSh 750",
    image: "/placeholder.svg?height=300&width=300",
    category: "Hardware",
  },
  {
    id: "gate-hinges",
    name: "Heavy Duty Gate Hinges",
    price: "KSh 1200",
    image: "/placeholder.svg?height=300&width=300",
    category: "Hardware",
  },
]

const categories = ["Chain Link", "Mesh", "Wire", "Posts", "Gates", "Security", "Electric", "Hardware"]

export default function FencingMaterialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductGallery
        title="Premium Fencing Materials"
        subtitle="Complete fencing solutions including posts, panels, gates, and accessories for residential and commercial applications"
        products={fencingMaterialsProducts}
        categories={categories}
      />
      <Footer />
    </main>
  )
}
