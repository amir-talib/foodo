import Link from "next/link";
import { LuArrowRight, LuShoppingBag, LuTruck, LuMegaphone } from "react-icons/lu";

export function FeaturesSection() {
  const features = [
    {
      title: "Online Ordering System",
      description: "Custom-branded digital menu with pictures and prices. Receive orders via WhatsApp, SMS, and email notifications.",
      link: "/features/online-ordering",
      linkText: "Learn more",
      icon: <LuShoppingBag className="h-12 w-12 text-primary mb-4" />,
    },
    {
      title: "Delivery Coordination",
      description: "Seamless integration with local dispatch services in Abuja. Optional driver scheduling tool for your own delivery team.",
      link: "/features/delivery",
      linkText: "Explore how",
      icon: <LuTruck className="h-12 w-12 text-primary mb-4" />,
    },
    {
      title: "Marketing Automation",
      description: "Collect customer contact info and send automated WhatsApp or SMS messages to re-engage past customers with our loyalty program.",
      link: "/features/marketing",
      linkText: "Discover more",
      icon: <LuMegaphone className="h-12 w-12 text-primary mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to digitize your restaurant operations, no technical skills required.
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
