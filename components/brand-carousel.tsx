export function BrandCarousel() {
  const brands = [
    "Simba Cement",
    "Bamburi",
    "Nyumba Cement",
    "Devki Steel",
    "Corrugated Sheets Co.",
    "Kenya Pipeline",
    "Aqua Systems",
    "Fence Masters",
    "BuildRight",
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Trusted by Leading Brands</h2>
          <p className="text-muted-foreground">We work with the best suppliers in the industry</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="h-12 w-32 bg-card rounded-lg flex items-center justify-center border hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-muted-foreground">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
