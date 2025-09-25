import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product-gallery"

const waterSystemsProducts = [
  {
    id: "tank-500l",
    name: "Water Tank 500L",
    price: "KSh 8500",
    image: "/water-tank-500-liters-plastic.jpg",
    category: "Tanks",
  },
  {
    id: "tank-1000l",
    name: "Water Tank 1000L",
    price: "KSh 15000",
    image: "/water-tank-1000-liters-plastic.jpg",
    category: "Tanks",
  },
  {
    id: "tank-2000l",
    name: "Water Tank 2000L",
    price: "KSh 28000",
    image: "/water-tank-2000-liters-plastic.jpg",
    category: "Tanks",
  },
  {
    id: "tank-5000l",
    name: "Water Tank 5000L",
    price: "KSh 65000",
    image: "/water-tank-5000-liters-plastic.jpg",
    category: "Tanks",
  },
  {
    id: "submersible-pump",
    name: "Submersible Water Pump 1HP",
    price: "KSh 12500",
    image: "/submersible-water-pump-1hp.jpg",
    category: "Pumps",
  },
  {
    id: "surface-pump",
    name: "Surface Water Pump 2HP",
    price: "KSh 18500",
    image: "/surface-water-pump-2hp.jpg",
    category: "Pumps",
  },
  {
    id: "pressure-tank",
    name: "Pressure Tank 100L",
    price: "KSh 8500",
    image: "/pressure-tank-100-liters-water-system.jpg",
    category: "Pressure Systems",
  },
  {
    id: "pipe-pvc-4inch",
    name: "PVC Pipe 4 inch (6m)",
    price: "KSh 1200",
    image: "/pvc-pipe-4-inch-white-plumbing.jpg",
    category: "Pipes",
  },
  {
    id: "pipe-hdpe-2inch",
    name: "HDPE Pipe 2 inch (100m)",
    price: "KSh 8500",
    image: "/hdpe-pipe-black-coiled-water-supply.jpg",
    category: "Pipes",
  },
  {
    id: "water-filter",
    name: "Water Filter System 3-Stage",
    price: "KSh 4500",
    image: "/water-filter-system-3-stage-household.jpg",
    category: "Filtration",
  },
  {
    id: "tank-float-valve",
    name: "Tank Float Valve",
    price: "KSh 850",
    image: "/water-tank-float-valve-brass.jpg",
    category: "Accessories",
  },
  {
    id: "tank-stand",
    name: "Water Tank Stand 1000L",
    price: "KSh 5500",
    image: "/water-tank-stand-metal-galvanized.jpg",
    category: "Accessories",
  },
]

const categories = ["Tanks", "Pumps", "Pressure Systems", "Pipes", "Filtration", "Accessories"]

export default function WaterSystemsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductGallery
        title="Superior Water Tanks and Systems"
        subtitle="High-capacity water storage solutions for domestic, agricultural, and industrial use. Including tanks and accessories"
        products={waterSystemsProducts}
        categories={categories}
      />
      <Footer />
    </main>
  )
}
