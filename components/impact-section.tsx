export function ImpactSection() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: "📊" },
    { number: "8+", label: "Countries Served", icon: "🌍" },
    { number: "1000+", label: "Satisfied Customers", icon: "👥" },
    { number: "15+", label: "Years Experience", icon: "⭐" },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
