export function TestimonialsSection() {
  const testimonials = [
    {
      name: "James Rodriguez",
      role: "Project Manager",
      company: "BuildCorp",
      content:
        "General Supplies transformed our construction projects. Their Greenbrook team exceeded expectations with quality materials and exceptional service. Outstanding customer service!",
      rating: 5,
    },
    {
      name: "Mary Watson",
      role: "Operations Director",
      company: "IndustrialMax",
      content:
        "Best building materials supplier in the region. Their technical expertise and professional installations are unmatched. Highly recommend their team!",
      rating: 5,
    },
    {
      name: "Peter Chen",
      role: "Site Manager",
      company: "ProBuild",
      content:
        "Professional service, installations and quality materials. My team and I rely on their expertise for all our major projects. Excellent service and quality!",
      rating: 5,
    },
    {
      name: "Grace Mitchell",
      role: "Procurement Lead",
      company: "GlobalTech",
      content:
        "Received delivery and competitive prices. They delivered top construction materials on time and within budget. Outstanding customer service!",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Customer Reviews</h2>
          <p className="text-muted-foreground">Trusted by farmers, builders, and businesses across Kenya and beyond</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-card-foreground text-sm mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                <div className="text-muted-foreground text-xs">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
