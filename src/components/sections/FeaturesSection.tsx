import Link from "next/link";
import { LuArrowRight, LuShoppingBag, LuTruck, LuMegaphone } from "react-icons/lu";

export function FeaturesSection() {
  const features = [
    {
      title: "Direct Ordering Channel",
      description: "Your own branded ordering page that captures every customer detail. No more losing buyers to aggregator apps that charge 25% per order.",
      link: "/features/online-ordering",
      linkText: "Learn more",
      icon: <LuShoppingBag className="h-12 w-12 text-primary mb-4" />,
    },
    {
      title: "Smart Delivery Network",
      description: "Seamless coordination with local dispatch riders and tools to manage your own fleet. Faster deliveries, happier customers, repeat orders.",
      link: "/features/delivery",
      linkText: "Explore how",
      icon: <LuTruck className="h-12 w-12 text-primary mb-4" />,
    },
    {
      title: "Retention Marketing",
      description: "Automated WhatsApp and SMS campaigns that re-engage past customers, promote specials, and fill empty tables during slow hours.",
      link: "/features/marketing",
      linkText: "Discover more",
      icon: <LuMegaphone className="h-12 w-12 text-primary mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Grow Your Sales</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete growth system that brings more customers through your door and keeps them coming back—without relying on third-party apps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link
                href={feature.link}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                {feature.linkText}
                <LuArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
