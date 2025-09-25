"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useMemo } from "react"

interface Product {
  id: string
  name: string
  price: string
  image: string
  category?: string
}

interface ProductGalleryProps {
  title: string
  subtitle: string
  products: Product[]
  categories?: string[]
}

export function ProductGallery({ title, subtitle, products, categories }: ProductGalleryProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [products, searchTerm, selectedCategory])

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container max-w-screen-xl px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            PREMIUM CONSTRUCTION MATERIALS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{title}</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">{subtitle}</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container max-w-screen-xl px-4 py-8">
        <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {categories && (
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6 text-center">
          <p className="text-muted-foreground">
            {filteredProducts.length === 0
              ? "No products found matching your criteria"
              : `Showing ${filteredProducts.length} of ${products.length} products`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2 text-balance">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  {product.category && (
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  )}
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    const message = `Hi! I'm interested in ${product.name} (${product.price}). Can you provide more details?`
                    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, "_blank")
                  }}
                >
                  📱 Order via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
