export function StatsSection() {
  const stats = [
    { id: "1", value: "35%", label: "Average increase in orders" },
    { id: "2", value: "0%", label: "Commission fees (vs. Jumia's 25%)" },
    { id: "3", value: "98%", label: "Order accuracy" },
    { id: "4", value: "15+", label: "Restaurants in Abuja using Foodo" },
  ];

  return (
    <section className="py-16 bg-[#f8f5fb]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">
          Join 15+ restaurants in Abuja already seeing real results with Foodo (Beta)
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
