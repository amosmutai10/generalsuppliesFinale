export function WhyChooseUs() {
  const features = [
    {
      icon: "🚚",
      title: "Worldwide Delivery",
      description: "We deliver quality products globally with reliable shipping and professional handling.",
    },
    {
      icon: "🔒",
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing to ensure you receive only the highest quality materials.",
    },
    {
      icon: "🎯",
      title: "Expert Support",
      description: "Our experienced team provides dedicated support throughout your project lifecycle.",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick turnaround times and efficient logistics to keep your projects on schedule.",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering excellence in every aspect of our service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
