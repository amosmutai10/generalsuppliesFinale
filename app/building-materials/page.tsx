import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product-gallery"
import { Breadcrumbs } from "@/components/breadcrumbs"

const buildingMaterialsProducts = [
  {
    id: "box-profile-3m",
    name: "Box Profile 3m (per metre)",
    price: "KSh 400",
    image: "/red-corrugated-roofing-sheets.jpg",
    category: "Roofing",
  },
  {
    id: "box-profile-2m",
    name: "Box Profile 2M",
    price: "KSh 800",
    image: "/red-corrugated-roofing-sheets.jpg",
    category: "Roofing",
  },
  {
    id: "box-profile-2.5m",
    name: "Box Profile 2.5M",
    price: "KSh 1000",
    image: "/red-corrugated-roofing-sheets.jpg",
    category: "Roofing",
  },
  {
    id: "box-profile-3m-full",
    name: "Box Profile 3M",
    price: "KSh 1200",
    image: "/red-corrugated-roofing-sheets.jpg",
    category: "Roofing",
  },
  {
    id: "duralume-2m",
    name: "Duralume (per metre)",
    price: "KSh 300",
    image: "/silver-aluminum-roofing-sheets.jpg",
    category: "Roofing",
  },
  {
    id: "duralume-2.5m",
    name: "Duralume 2M",
    price: "KSh 600",
    image: "/silver-aluminum-roofing-sheets.jpg",
    category: "Roofing",
  },
  {
    id: "duralume-2.5m-full",
    name: "Duralume 2.5M",
    price: "KSh 750",
    image: "/silver-aluminum-roofing-sheets.jpg",
    category: "Roofing",
  },
  {
    id: "duralume-3m",
    name: "Duralume 3M",
    price: "KSh 900",
    image: "/silver-aluminum-roofing-sheets.jpg",
    category: "Roofing",
  },
  {
    id: "simba-cement",
    name: "Simba Cement",
    price: "KSh 650",
    image: "/cement-bag-with-lion-logo.jpg",
    category: "Cement",
  },
  {
    id: "nyumba-cement",
    name: "Nyumba Cement",
    price: "KSh 700",
    image: "/cement-bag-with-house-logo.jpg",
    category: "Cement",
  },
  {
    id: "bamburi-cement",
    name: "Bamburi Nguvu Cement",
    price: "KSh 750",
    image: "/green-cement-bag-bamburi-brand.jpg",
    category: "Cement",
  },
  {
    id: "y8-steel",
    name: "Y8 Steel",
    price: "KSh 450",
    image: "/steel-reinforcement-bars-rebar.jpg",
    category: "Steel",
  },
  {
    id: "y10-steel",
    name: "Y10 Steel",
    price: "KSh 750",
    image: "/steel-reinforcement-bars-rebar.jpg",
    category: "Steel",
  },
  {
    id: "y12-steel",
    name: "Y12 Steel",
    price: "KSh 1020",
    image: "/steel-reinforcement-bars-rebar.jpg",
    category: "Steel",
  },
  {
    id: "y16-steel",
    name: "Y16 Steel",
    price: "KSh 2050",
    image: "/thick-steel-reinforcement-bars-rebar.jpg",
    category: "Steel",
  },
]

const categories = ["Roofing", "Cement", "Steel"]

export default function BuildingMaterialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Breadcrumbs />
      <ProductGallery
        title="Quality Building Materials"
        subtitle="International standard construction supplies with worldwide delivery and expert support"
        products={buildingMaterialsProducts}
        categories={categories}
      />
      <Footer />
    </main>
  )
}
